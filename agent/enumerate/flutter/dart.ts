import { getConfig } from "../../core/config.js";
import { Seen } from "../../core/dedupe.js";
import { emit } from "../../core/emit.js";
import { log, pad } from "../../core/log.js";
import { safe } from "../../core/safe.js";
import type { DartLibraryRecord, DartRecord, SnapshotSection } from "../../core/types.js";
import { dartPayloadName, findDartPayload, findFlutterEngine } from "../modules.js";

/**
 * Dart runtime enumeration.
 *
 * Scope note, stated plainly: this module does NOT parse Dart AOT snapshots.
 * The snapshot format is version-specific and changes between SDK releases, and
 * a Frida agent is the wrong place to track that. What it does instead is
 * establish the facts a host-side parser needs — SDK version, build mode, and
 * the snapshot section bounds — and recover the strings that are readable
 * without understanding the format. A full class and function dump remains a
 * host-side step (blutter and friends), fed by what is recorded here.
 */

// ---------------------------------------------------------------------------
// Pure helpers (unit-tested off-device)
// ---------------------------------------------------------------------------

export interface DartVersion {
  sdk: string | null;
  channel: string | null;
  arch: string | null;
  raw: string;
}

/**
 * Parse the engine's embedded version literal.
 *
 * Observed shapes across releases:
 *   Dart SDK version: 3.5.0 (stable) (Tue Aug 6 ...) on "android_arm64"
 *   Dart VM version: 2.19.6 (stable) (Unknown timestamp) on "ios_arm64"
 */
export function parseDartVersion(raw: string): DartVersion {
  const line = raw.split("\n")[0]?.trim() ?? raw.trim();

  const match = /Dart (?:SDK|VM) version:\s*([0-9]+\.[0-9]+\.[0-9]+(?:[-+][\w.]+)?)\s*(?:\(([^)]*)\))?/.exec(
    line,
  );
  const arch = /\bon\s+"([^"]+)"/.exec(line);

  return {
    sdk: match?.[1] ?? null,
    channel: match?.[2] ?? null,
    arch: arch?.[1] ?? null,
    raw: line,
  };
}

/**
 * Is this string a Dart library URI?
 *
 * Snapshot data is dense binary; scanning it for a prefix yields plenty of
 * coincidental hits. Validating the shape is what makes the recovered list
 * usable rather than noise.
 */
export function isDartLibraryUri(value: string): boolean {
  if (value.length > 200) {
    return false;
  }
  // dart:core, dart:async, dart:_internal
  if (/^dart:[a-z_][a-z0-9_]*$/.test(value)) {
    return true;
  }
  // package:flutter/src/widgets/framework.dart, or a bare package root
  if (/^package:[a-z0-9_]+$/.test(value)) {
    return true;
  }
  return /^package:[a-z0-9_]+\/[A-Za-z0-9_./-]+\.dart$/.test(value);
}

/** The package name from a `package:` URI, or null for `dart:` and malformed input. */
export function packageOf(uri: string): string | null {
  const match = /^package:([a-z0-9_]+)(?:\/|$)/.exec(uri);
  return match?.[1] ?? null;
}

export type BuildMode = "release" | "profile" | "debug" | "unknown";

export interface BuildModeEvidence {
  /** An AOT snapshot is present — release or profile, never debug. */
  aotSnapshot: boolean;
  /** The engine binary carries VM-service strings, stripped from release engines. */
  vmServiceStrings: boolean;
  /** A JIT kernel payload is present — debug builds ship these. */
  kernelBlob: boolean;
}

export interface BuildModeVerdict {
  mode: BuildMode;
  evidence: string[];
}

/**
 * Infer the build mode from what is present in the process.
 *
 * This is inference, not a read of a flag, so the evidence travels with the
 * verdict. It matters because a profile or debug build shipped to production is
 * itself a finding: the VM service exposes a complete class and function
 * listing, and no snapshot parsing is needed at all.
 */
export function inferBuildMode(ev: BuildModeEvidence): BuildModeVerdict {
  const evidence: string[] = [];
  if (ev.aotSnapshot) evidence.push("AOT snapshot present");
  if (ev.vmServiceStrings) evidence.push("VM-service strings in engine");
  if (ev.kernelBlob) evidence.push("kernel blob present");

  if (ev.kernelBlob && !ev.aotSnapshot) {
    return { mode: "debug", evidence };
  }
  if (ev.aotSnapshot && ev.vmServiceStrings) {
    return { mode: "profile", evidence };
  }
  if (ev.aotSnapshot) {
    return { mode: "release", evidence };
  }
  if (ev.vmServiceStrings) {
    return { mode: "debug", evidence };
  }
  return { mode: "unknown", evidence };
}

// ---------------------------------------------------------------------------
// Runtime enumeration
// ---------------------------------------------------------------------------

const SNAPSHOT_SYMBOLS = [
  "_kDartVmSnapshotData",
  "_kDartVmSnapshotInstructions",
  "_kDartIsolateSnapshotData",
  "_kDartIsolateSnapshotInstructions",
];

/** Byte patterns for Memory.scanSync, as hex strings. */
const PATTERNS = {
  dartVersion: "44 61 72 74 20 53 44 4b 20 76 65 72 73 69 6f 6e 3a 20", // "Dart SDK version: "
  dartVmVersion: "44 61 72 74 20 56 4d 20 76 65 72 73 69 6f 6e 3a 20", // "Dart VM version: "
  vmService: "44 61 72 74 20 56 4d 20 73 65 72 76 69 63 65", // "Dart VM service"
  observatory: "4f 62 73 65 72 76 61 74 6f 72 79", // "Observatory"
  packageUri: "70 61 63 6b 61 67 65 3a", // "package:"
};

/** Cap on recovered library URIs, so a large snapshot cannot stall the agent. */
const MAX_LIBRARIES = 4000;

function scanFirstString(module: Module, pattern: string, maxLen: number): string | null {
  const matches = safe("dart/scan", () => Memory.scanSync(module.base, module.size, pattern));
  const first = matches?.[0];
  if (first === undefined) {
    return null;
  }
  return safe("dart/scan-read", () => first.address.readUtf8String(maxLen)) ?? null;
}

function hasPattern(module: Module, pattern: string): boolean {
  const matches = safe("dart/has-pattern", () =>
    Memory.scanSync(module.base, module.size, pattern),
  );
  return matches !== undefined && matches.length > 0;
}

/**
 * Read a printable ASCII run at an address.
 *
 * Dart snapshot strings are length-prefixed rather than NUL-terminated, so
 * readUtf8String would run past the end into adjacent data. Reading a bounded
 * window and cutting at the first non-printable byte keeps recovery honest.
 */
function readPrintable(address: NativePointer, maxLen: number): string | null {
  const bytes = safe("dart/read-printable", () => address.readByteArray(maxLen));
  if (bytes === null || bytes === undefined) {
    return null;
  }

  const view = new Uint8Array(bytes);
  let end = 0;
  while (end < view.length) {
    const byte = view[end]!;
    if (byte < 0x20 || byte > 0x7e) {
      break;
    }
    end++;
  }

  if (end === 0) {
    return null;
  }
  return String.fromCharCode(...view.subarray(0, end));
}

/** Locate the snapshot sections and their sizes, when the symbols survive. */
function findSnapshotSections(appModule: Module): SnapshotSection[] {
  const sections: SnapshotSection[] = [];

  const symbols = safe("dart/enumerate-symbols", () => appModule.enumerateSymbols());

  for (const name of SNAPSHOT_SYMBOLS) {
    const symbol = symbols?.find((s) => s.name === name || s.name === name.replace(/^_/, ""));

    if (symbol !== undefined) {
      sections.push({
        name,
        address: symbol.address.toString(),
        size: symbol.size ?? null,
      });
      continue;
    }

    // Stripped builds keep these as dynamic exports even when the symbol table
    // is gone; size is unavailable on that path.
    const exported = safe("dart/find-export", () => appModule.findExportByName(name));
    if (exported !== null && exported !== undefined) {
      sections.push({ name, address: exported.toString(), size: null });
    }
  }

  return sections;
}

/**
 * Recover Dart library URIs from the snapshot.
 *
 * These are plain strings in the snapshot data, so they survive without any
 * understanding of the format. The result is the app's Dart library and package
 * inventory — its dependency list, and the first place to look for
 * app-specific logic amongst framework code.
 */
function recoverLibraries(
  appModule: Module,
  sections: SnapshotSection[],
): { uris: string[]; packages: string[] } {
  const seen = new Seen();
  const uris: string[] = [];
  const packages = new Set<string>();

  // Prefer the isolate data section when its bounds are known: it is where the
  // strings live, and it is a fraction of the module's size. Instructions are
  // code, so scanning them for URIs is wasted work on a payload that routinely
  // runs to tens of megabytes.
  const dataSection = sections.find(
    (s) => s.name === "_kDartIsolateSnapshotData" && s.size !== null && s.size > 0,
  );

  const scanBase =
    dataSection !== undefined ? ptr(dataSection.address) : appModule.base;
  const scanSize = dataSection?.size ?? appModule.size;

  log.detail(
    "scanning " +
      (dataSection !== undefined ? "isolate snapshot data" : appModule.name) +
      " (" +
      Math.round(scanSize / 1024) +
      " KiB) for library URIs",
  );

  const matches = safe("dart/scan-packages", () =>
    Memory.scanSync(scanBase, scanSize, PATTERNS.packageUri),
  );

  if (matches === undefined) {
    return { uris: [], packages: [] };
  }

  for (const match of matches) {
    if (uris.length >= MAX_LIBRARIES) {
      log.detail("library recovery capped at " + MAX_LIBRARIES + " entries");
      break;
    }

    const candidate = readPrintable(match.address, 200);
    if (candidate === null || !isDartLibraryUri(candidate)) {
      continue;
    }
    if (!seen.first(candidate)) {
      continue;
    }

    uris.push(candidate);
    const pkg = packageOf(candidate);
    if (pkg !== null) {
      packages.add(pkg);
    }
  }

  return { uris, packages: Array.from(packages).sort() };
}

/**
 * Enumerate the Dart runtime: version, build mode, snapshot bounds, libraries.
 */
export function enumerateDart(modules: Module[]): void {
  log.section("Dart Runtime");

  const engine = findFlutterEngine(modules);
  const appModule = findDartPayload(modules);

  if (engine === null && appModule === null) {
    log.warn("No Flutter engine or Dart payload in this process — nothing to enumerate.");
    return;
  }

  // --- version -------------------------------------------------------------
  let version: DartVersion | null = null;
  if (engine !== null) {
    const raw =
      scanFirstString(engine, PATTERNS.dartVersion, 256) ??
      scanFirstString(engine, PATTERNS.dartVmVersion, 256);
    if (raw !== null) {
      version = parseDartVersion(raw);
    }
  }

  // --- snapshot ------------------------------------------------------------
  const sections = appModule !== null ? findSnapshotSections(appModule) : [];
  const hasInstructions = sections.some((s) => s.name.endsWith("Instructions"));

  // --- build mode ----------------------------------------------------------
  const vmServiceStrings =
    engine !== null &&
    (hasPattern(engine, PATTERNS.vmService) || hasPattern(engine, PATTERNS.observatory));

  const verdict = inferBuildMode({
    aotSnapshot: hasInstructions || appModule !== null,
    vmServiceStrings,
    // Detecting a kernel blob means reading the APK/IPA asset bundle, which is
    // a host-side concern; left false rather than guessed at.
    kernelBlob: false,
  });

  // --- libraries -----------------------------------------------------------
  const recovered =
    appModule !== null && getConfig().dartLibraryScan
      ? recoverLibraries(appModule, sections)
      : { uris: [], packages: [] };

  emit<DartRecord>("dart", {
    sdk: version?.sdk ?? null,
    channel: version?.channel ?? null,
    arch: version?.arch ?? null,
    versionRaw: version?.raw ?? null,
    buildMode: verdict.mode,
    buildModeEvidence: verdict.evidence,
    snapshot: sections,
    libraryCount: recovered.uris.length,
    packages: recovered.packages,
  });

  for (const uri of recovered.uris) {
    emit<DartLibraryRecord>("dart.library", { uri, package: packageOf(uri) });
  }

  // --- report --------------------------------------------------------------
  if (version !== null) {
    log.info(pad("Dart SDK", 14) + ": " + (version.sdk ?? "unknown"));
    if (version.channel !== null) {
      log.detail("channel: " + version.channel + (version.arch ? " · " + version.arch : ""));
    }
  } else {
    log.warn("Dart version string not found in the engine binary.");
  }

  if (verdict.mode === "release") {
    log.info(pad("Build mode", 14) + ": release");
  } else if (verdict.mode === "unknown") {
    log.warn(pad("Build mode", 14) + ": unknown");
  } else {
    // A non-release build in the wild is a finding in its own right.
    log.hit(pad("Build mode", 14) + ": " + verdict.mode);
    log.detail("a non-release build exposes the VM service — full class and");
    log.detail("function enumeration is available without snapshot parsing");
  }
  if (verdict.evidence.length > 0) {
    log.detail("evidence: " + verdict.evidence.join("; "));
  }

  if (sections.length > 0) {
    log.info(pad("Snapshot", 14) + ": " + sections.length + " section(s)");
    for (const section of sections) {
      log.detail(
        section.name + " @ " + section.address + (section.size !== null ? " (" + section.size + " bytes)" : ""),
      );
    }
  } else if (appModule !== null) {
    log.warn(dartPayloadName(appModule) + " present but no snapshot symbols — stripped or packed.");
  }

  if (recovered.packages.length > 0) {
    log.info(pad("Dart packages", 14) + ": " + recovered.packages.length);
    log.detail(recovered.packages.join(", "));
    log.detail(recovered.uris.length + " library URIs recovered");
  } else if (appModule !== null) {
    log.warn("No Dart library URIs recovered — snapshot may be packed or obfuscated.");
  }
}
