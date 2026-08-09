import Java from "frida-java-bridge";
import ObjC from "frida-objc-bridge";

import { emit } from "../core/emit.js";
import { log, pad } from "../core/log.js";
import { safe } from "../core/safe.js";
import type { EngineRecord, ModuleRecord, Platform, TargetRecord } from "../core/types.js";

export function detectPlatform(): Platform {
  if (Java.available) {
    return "android";
  }
  if (ObjC.available) {
    return "ios";
  }
  return "unknown";
}

function androidIdentity(): void {
  Java.perform(() => {
    safe("target/android-identity", () => {
      const ActivityThread = Java.use("android.app.ActivityThread");
      const app = ActivityThread.currentApplication();
      if (app === null) {
        log.warn("No application context yet — identity unavailable.");
        return;
      }

      const context = app.getApplicationContext();
      const id: string = context.getPackageName();
      const info = context.getPackageManager().getPackageInfo(id, 0);

      const versionName: string | null = info.versionName.value ?? null;

      // versionCode is deprecated from API 28; longVersionCode carries the real
      // value on modern targets and silently differs on apps that overflow the
      // 32-bit field. Prefer it and fall back only for genuinely old devices.
      let versionCode: string | null = null;
      try {
        versionCode = String(info.getLongVersionCode());
      } catch {
        versionCode = String(info.versionCode.value);
      }

      emit<TargetRecord>("target", {
        platform: "android",
        id,
        versionName,
        versionCode,
        pid: Process.id,
      });

      log.info(pad("Package", 14) + ": " + id);
      log.info(pad("Version", 14) + ": " + versionName + " (" + versionCode + ")");
    });
  });
}

function iosIdentity(): void {
  safe("target/ios-identity", () => {
    const NSBundle = ObjC.classes.NSBundle;
    if (NSBundle === undefined) {
      log.warn("NSBundle unavailable — identity cannot be read.");
      return;
    }
    const bundle = NSBundle.mainBundle();
    const id = String(bundle.bundleIdentifier());
    const info = bundle.infoDictionary();

    const read = (key: string): string | null => {
      const value = info.objectForKey_(key);
      return value ? String(value) : null;
    };

    const versionName = read("CFBundleShortVersionString");
    const versionCode = read("CFBundleVersion");

    emit<TargetRecord>("target", {
      platform: "ios",
      id,
      versionName,
      versionCode,
      pid: Process.id,
    });

    log.info(pad("Bundle ID", 14) + ": " + id);
    log.info(pad("Version", 14) + ": " + versionName + " (" + versionCode + ")");
  });
}

export function reportIdentity(platform: Platform): void {
  log.section("Application Identity");
  if (platform === "android") {
    androidIdentity();
  } else if (platform === "ios") {
    iosIdentity();
  } else {
    log.fail("Neither the Java nor the Objective-C runtime is available.");
  }
}

/** Modules worth recording by name; everything else is noise in the model. */
const NOTABLE = [
  "libflutter.so",
  "flutter",
  "libapp.so",
  "libil2cpp.so",
  "libunity.so",
  "unityframework",
  "libreactnativejni.so",
  "libhermes.so",
  "hermes",
  "libjsc",
  "libmonosgen",
  "libmono",
  "cordova",
  "libssl",
  "libcrypto",
  "boringssl",
  "libconscrypt",
];

function isNotable(name: string): boolean {
  const lower = name.toLowerCase();
  return NOTABLE.some((n) => lower.includes(n));
}

export function reportModules(): Module[] {
  const modules = Process.enumerateModules();

  for (const m of modules) {
    if (!isNotable(m.name)) {
      continue;
    }
    emit<ModuleRecord>("module", {
      name: m.name,
      base: m.base.toString(),
      size: m.size,
      path: m.path,
    });
  }

  return modules;
}

/** Locate the Flutter engine binary across both platforms' naming. */
export function findFlutterEngine(modules: Module[]): Module | null {
  return (
    modules.find((m) => {
      const lower = m.name.toLowerCase();
      return lower === "libflutter.so" || lower === "flutter";
    }) ?? null
  );
}

/**
 * Recover the Dart SDK version string embedded in the engine binary.
 *
 * The engine ships a literal like:
 *   "Dart SDK version: 3.5.0 (stable) (Tue Aug 6 ...) on android_arm64"
 * Scanning for the prefix is cheap and gives the SDK version and, on most
 * builds, the engine revision — which is what M3 will key snapshot parsing and
 * BoringSSL offsets from.
 */
function scanDartVersion(engine: Module): { dartSdk: string | null; engineHash: string | null } {
  const pattern = "44 61 72 74 20 53 44 4b 20 76 65 72 73 69 6f 6e 3a 20"; // "Dart SDK version: "

  const matches = safe("engine/dart-version-scan", () =>
    Memory.scanSync(engine.base, engine.size, pattern),
  );

  if (matches === undefined || matches.length === 0) {
    return { dartSdk: null, engineHash: null };
  }

  const raw = safe("engine/dart-version-read", () => {
    const first = matches[0];
    return first ? first.address.readUtf8String(256) : null;
  });

  if (!raw) {
    return { dartSdk: null, engineHash: null };
  }

  const line = raw.split("\n")[0]?.trim() ?? null;
  const hash = line ? (/\b([0-9a-f]{40})\b/.exec(line)?.[1] ?? null) : null;

  return { dartSdk: line, engineHash: hash };
}

/** Snapshot symbols the M3 Dart work will need; presence alone is useful now. */
const SNAPSHOT_SYMBOLS = [
  "_kDartVmSnapshotData",
  "_kDartVmSnapshotInstructions",
  "_kDartIsolateSnapshotData",
  "_kDartIsolateSnapshotInstructions",
];

function findSnapshotSymbols(modules: Module[]): string[] {
  const appModule = modules.find((m) => m.name.toLowerCase() === "libapp.so");
  if (!appModule) {
    return [];
  }

  const found = safe("engine/snapshot-symbols", () => {
    const names: string[] = [];
    for (const symbol of SNAPSHOT_SYMBOLS) {
      // Frida 17 removed the static Module.findExportByName(module, name) form;
      // resolution now goes through the module instance.
      if (appModule.findExportByName(symbol) !== null) {
        names.push(symbol);
      }
    }
    return names;
  });

  return found ?? [];
}

/**
 * Fingerprint the runtime engine.
 *
 * Detection is scored rather than assigned by the last matching module, which
 * is how the previous scripts got it wrong: they used an if/else chain per
 * module in a loop, so whichever engine module happened to enumerate last won.
 */
export function reportEngine(modules: Module[]): void {
  log.section("Engine Fingerprint");

  const names = modules.map((m) => m.name.toLowerCase());
  const has = (needle: string): boolean => names.some((n) => n.includes(needle));

  let engine = "Native";
  if (has("libflutter.so") || names.includes("flutter")) {
    engine = "Flutter";
  } else if (has("libil2cpp") || has("libunity") || has("unityframework")) {
    engine = "Unity (IL2CPP)";
  } else if (has("libhermes") || has("hermes")) {
    engine = "React Native (Hermes)";
  } else if (has("libreactnativejni") || has("libjsc")) {
    engine = "React Native (JSC)";
  } else if (has("libmonosgen") || has("libmono")) {
    engine = "Xamarin/Mono";
  } else if (has("cordova") || has("libxwalkcore")) {
    engine = "Cordova";
  }

  const engineModule = findFlutterEngine(modules);
  const version = engineModule ? scanDartVersion(engineModule) : { dartSdk: null, engineHash: null };
  const snapshotSymbols = findSnapshotSymbols(modules);

  emit<EngineRecord>("engine", {
    engine,
    dartSdk: version.dartSdk,
    engineHash: version.engineHash,
    // Reachability of the Dart VM service is an M3 concern; recording the field
    // as unknown keeps the schema stable rather than asserting something false.
    vmServiceReachable: null,
    snapshotSymbols,
  });

  log.info(pad("Engine", 14) + ": " + engine);

  if (version.dartSdk) {
    log.info(pad("Dart SDK", 14) + ": " + version.dartSdk);
  }
  if (has("libapp.so")) {
    log.note(pad("Dart payload", 14) + ": libapp.so");
  }
  if (snapshotSymbols.length > 0) {
    log.detail("snapshot symbols: " + snapshotSymbols.join(", "));
  }

  if (engine !== "Flutter") {
    log.warn("No Flutter engine found — channel enumeration will likely find nothing.");
  }
}
