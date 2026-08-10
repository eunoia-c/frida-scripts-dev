import { log } from "../core/log.js";
import { safe } from "../core/safe.js";
import { findDartPayload, findFlutterEngine } from "./modules.js";

/**
 * Deferral until the Flutter engine is actually mapped.
 *
 * On a spawned process the agent runs long before the app loads its native
 * libraries: enumerating modules at that point reports "Native" for an app that
 * is plainly Flutter, and every Dart finding comes back empty. The first real
 * target this was pointed at did exactly that.
 *
 * Waiting on dlopen is the fix. The engine and the Dart payload are separate
 * libraries loaded moments apart, so detection is debounced rather than fired
 * on the first match.
 */

/** Grace period after seeing a Flutter library, to let its siblings land. */
const SETTLE_MS = 400;

type DlopenContext = InvocationContext & { loadedPath?: string | null };

function isFlutterLibrary(path: string): boolean {
  const lower = path.toLowerCase();
  return lower.includes("libflutter.so") || lower.includes("libapp.so");
}

/**
 * Run `onReady` once the Flutter engine is present.
 *
 * Fires immediately when the engine is already mapped (the late-attach case),
 * otherwise waits for the loader. If dlopen cannot be hooked at all, it runs
 * anyway rather than never — a degraded report beats silence.
 */
export function whenFlutterLoaded(onReady: () => void): void {
  const modules = Process.enumerateModules();
  if (findFlutterEngine(modules) !== null) {
    onReady();
    return;
  }

  const dlopen =
    Module.findGlobalExportByName("android_dlopen_ext") ??
    Module.findGlobalExportByName("dlopen");

  if (dlopen === null) {
    log.warn("Cannot hook dlopen — enumerating modules now, which may be early.");
    onReady();
    return;
  }

  log.detail("Flutter engine not mapped yet — waiting for it to load");

  let fired = false;
  let pending: TimeoutId | null = null;

  const listener = Interceptor.attach(dlopen, {
    onEnter(args) {
      const pathArg = args[0];
      (this as DlopenContext).loadedPath =
        pathArg === undefined
          ? null
          : (safe("loader/read-path", () => pathArg.readCString()) ?? null);
    },
    onLeave() {
      const path = (this as DlopenContext).loadedPath;
      if (fired || typeof path !== "string" || !isFlutterLibrary(path)) {
        return;
      }

      // Debounce: libflutter.so and libapp.so arrive separately, and firing on
      // the first would enumerate before the second is mapped.
      if (pending !== null) {
        clearTimeout(pending);
      }

      // Deliberately deferred off the loader's thread. Running memory scans
      // inside dlopen's epilogue means holding the loader lock while doing it.
      pending = setTimeout(() => {
        if (fired) {
          return;
        }
        fired = true;
        listener.detach();
        safe("loader/on-ready", onReady);
      }, SETTLE_MS);
    },
  });
}

/** Whether the Dart payload is mapped yet, for callers that want to report it. */
export function dartPayloadPresent(): boolean {
  return findDartPayload(Process.enumerateModules()) !== null;
}
