import Java from "frida-java-bridge";
import ObjC from "frida-objc-bridge";

import { emit } from "../core/emit.js";
import { log, pad } from "../core/log.js";
import { safe } from "../core/safe.js";
import type { EngineRecord, ModuleRecord, Platform, TargetRecord } from "../core/types.js";
import { findDartPayload } from "./modules.js";

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

/**
 * Fingerprint the runtime engine.
 *
 * Detection is scored rather than assigned by the last matching module, which
 * is how the previous scripts got it wrong: they used an if/else chain per
 * module in a loop, so whichever engine module happened to enumerate last won.
 *
 * Dart specifics (version, build mode, snapshot bounds) belong to the Dart
 * enumerator; this reports only which engine is in play.
 */
export function reportEngine(modules: Module[]): string {
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

  // Resolved through the shared finder so iOS's `App.framework/App` counts too.
  const payload = findDartPayload(modules);

  emit<EngineRecord>("engine", { engine, hasDartPayload: payload !== null });

  log.info(pad("Engine", 14) + ": " + engine);
  if (payload !== null) {
    log.note(pad("Dart payload", 14) + ": " + payload.name);
  }

  if (engine !== "Flutter") {
    log.warn("No Flutter engine found — channel enumeration will likely find nothing.");
  }

  return engine;
}
