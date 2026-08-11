import Java from "frida-java-bridge";

import { getConfig } from "../../core/config.js";
import { clamp, Seen } from "../../core/dedupe.js";
import { emit } from "../../core/emit.js";
import { log } from "../../core/log.js";
import { observe, optionalClass, safe } from "../../core/safe.js";
import type {
  CallRecord,
  ChannelKind,
  ChannelRecord,
  PluginRecord,
  ResultRecord,
} from "../../core/types.js";
import { isInteresting, score } from "../../score/index.js";

const seenChannels = new Seen();
const seenPlugins = new Seen();
const seenHandlerClasses = new Seen();
const seenResultClasses = new Seen();

/** Handler class name -> channel it was registered against. */
const handlerToChannel = new Map<string, string>();

/** Result object identity -> the call it belongs to, so async results attribute correctly. */
const pendingResults = new Map<string, { channel: string; method: string }>();

/** Upper bound on in-flight calls awaiting a reply. */
const MAX_PENDING_RESULTS = 512;

function use(className: string): any {
  return Java.use(className);
}

/** Class loaders already searched, to keep the reporting quiet on repeats. */
const loaderSearched = new Seen();

/**
 * Resolve a class, searching every class loader if the default cannot see it.
 *
 * `Java.use` resolves against one class loader. Apps that split code across
 * loaders — app bundles, dynamic feature delivery, and most commercial
 * protectors — keep classes somewhere that loader cannot reach, so `Java.use`
 * throws ClassNotFoundException for a class that is demonstrably loaded and
 * visible to `Java.enumerateLoadedClasses`.
 *
 * That exact contradiction showed up on a real target: the embedder classes
 * were "not present" while the plugin sweep listed Flutter classes happily.
 */
function resolveClass(className: string): any | null {
  const direct = optionalClass(use, className);
  if (direct !== null) {
    return direct;
  }

  let found: any = null;

  safe("flutter/android/loader-search", () => {
    Java.enumerateClassLoaders({
      onMatch(loader: any) {
        if (found !== null) {
          return;
        }
        try {
          loader.loadClass(className);
          found = Java.ClassFactory.get(loader).use(className);
          if (loaderSearched.first("loader:" + className)) {
            log.detail("resolved " + className + " via " + loader.$className);
          }
        } catch {
          // Not visible to this loader; keep looking.
        }
      },
      onComplete() {},
    });
  });

  return found;
}

/**
 * Read a Java field by any of several candidate names, as a string.
 *
 * Frida renames a field when its name collides with a method or a JS builtin,
 * exposing it with a leading underscore. `MethodCall.arguments` hits exactly
 * that, so both spellings have to be tried. Returns null rather than the string
 * "undefined" when nothing resolves — the distinction matters, because a call
 * with no payload and a call whose payload we failed to read are different
 * facts.
 */
function readField(target: any, names: string[]): string | null {
  if (target === null || target === undefined) {
    return null;
  }
  for (const name of names) {
    try {
      const field = target[name];
      if (field === undefined || field === null) {
        continue;
      }
      const value = field.value;
      if (value !== undefined && value !== null) {
        return String(value);
      }
    } catch {
      // Not present under this spelling; try the next.
    }
  }
  return null;
}

/** Cached java.lang.System wrapper for identityHashCode. */
let SystemClass: any = null;

/**
 * Stable identity for a Java object.
 *
 * `result.hashCode()` is not callable on every wrapper shape — on the real
 * target it failed with "not a function", which silently disabled return-value
 * capture entirely. `System.identityHashCode` is a static that accepts any
 * Object, so it works regardless of what the wrapper exposes, and is stable for
 * the object's lifetime, which is what correlating an async reply needs.
 */
function identityOf(target: any): string | null {
  if (target === null || target === undefined) {
    return null;
  }
  try {
    SystemClass ??= Java.use("java.lang.System");
    return String(SystemClass.identityHashCode(target));
  } catch {
    return null;
  }
}

function recordChannel(name: string, kind: ChannelKind, via: string): void {
  if (!name || !seenChannels.first(kind + ":" + name)) {
    return;
  }

  const s = score(name);
  emit<ChannelRecord>("channel", { name, kind, via, score: s.score, tags: s.tags });

  const label = "[" + kind + "] " + name;

  if (isInteresting(s)) {
    log.hit(label);
    log.detail("score " + s.score + " · " + s.tags.join(", "));
  } else if (getConfig().verbose && !s.ignored) {
    log.info(label);
  }
}

/**
 * Hook every constructor overload of a channel class.
 *
 * Flutter's channel constructors gained codec and task-queue parameters across
 * releases. Enumerating `overloads` rather than naming one signature means the
 * enumerator keeps working when a version adds another.
 */
function hookChannelConstructors(className: string, kind: ChannelKind): void {
  if (!installed.first("ctor:" + className)) {
    return;
  }
  const Channel = resolveClass(className);
  if (Channel === null) {
    log.detail(className + " not present on this engine version");
    return;
  }

  safe("flutter/android/ctor/" + kind, () => {
    Channel.$init.overloads.forEach((overload: any) => {
      observe("flutter/android/ctor/" + kind, overload, (_self, args) => {
        // The channel name is the first String argument; its position moves
        // between overloads, so find it by type rather than by index.
        const name = args.find((a) => typeof a === "string");
        if (typeof name === "string") {
          recordChannel(name, kind, "registration");
        }
      });
    });
  });
}

/**
 * Capture the method calls crossing a MethodChannel.
 *
 * This is the difference between knowing a channel called `app/security` exists
 * and knowing it answers `isDeviceRooted() -> true`. The handler is an
 * interface implementation whose concrete class is only known at runtime, so
 * the hook is installed when setMethodCallHandler hands us an instance.
 */
function hookMethodCallHandlers(): void {
  if (!installed.first("set-handler")) {
    return;
  }
  const MethodChannel = resolveClass("io.flutter.plugin.common.MethodChannel");
  if (MethodChannel === null) {
    return;
  }

  safe("flutter/android/set-handler", () => {
    MethodChannel.setMethodCallHandler.overloads.forEach((overload: any) => {
      observe("flutter/android/set-handler", overload, (self, args) => {
        const handler = args[0];
        if (handler === null || handler === undefined) {
          return;
        }
        const channelName = readChannelName(self);
        if (channelName !== null) {
          instrumentHandler(handler.$className, channelName);
        }
      });
    });
  });
}

/**
 * Read a MethodChannel's own name.
 *
 * The field is private and its name has not been stable across embedder
 * versions, so a missing field is expected rather than exceptional.
 */
function readChannelName(channel: any): string | null {
  if (channel === null || channel === undefined) {
    return null;
  }
  for (const field of ["name", "channel"]) {
    try {
      const value = channel[field];
      if (value !== undefined && value.value !== undefined && value.value !== null) {
        return String(value.value);
      }
    } catch {
      // Field absent on this version; try the next candidate.
    }
  }
  return null;
}

function instrumentHandler(handlerClass: string, channelName: string): void {
  handlerToChannel.set(handlerClass, channelName);

  if (!getConfig().captureCalls || !seenHandlerClasses.first(handlerClass)) {
    return;
  }

  const Handler = resolveClass(handlerClass);
  if (Handler === null || Handler.onMethodCall === undefined) {
    return;
  }

  safe("flutter/android/handler/" + handlerClass, () => {
    Handler.onMethodCall.overloads.forEach((overload: any) => {
      observe("flutter/android/on-method-call", overload, (self, args) => {
        const call = args[0];
        const result = args[1];

        // A handler class can serve more than one channel; prefer the mapping
        // recorded for this concrete class, falling back to the registration.
        const channel =
          (self !== null && self !== undefined
            ? handlerToChannel.get(self.$className)
            : undefined) ?? channelName;

        const method = readField(call, ["method"]) ?? "<unknown>";

        // `arguments` collides with the JS arguments object, so Frida exposes
        // the field as `_arguments` on some wrapper shapes. Reading `.value`
        // off the wrong one yields JS undefined, which String()ed to the
        // literal "undefined" and rendered as `method(undefined)` for every
        // call — the payload was never actually captured.
        const rawArgs = readField(call, ["_arguments", "arguments"]);

        const s = score(channel + "/" + method);
        emit<CallRecord>("call", {
          channel,
          method,
          args: clamp(rawArgs),
          score: s.score,
          tags: s.tags,
        });

        const line = channel + " → " + method + "(" + (clamp(rawArgs) ?? "") + ")";
        if (isInteresting(s)) {
          log.hit(line);
        } else if (getConfig().verbose) {
          log.note(line);
        }

        if (result !== null && result !== undefined) {
          trackResult(result, channel, method);
        }
      });
    });
  });
}

/**
 * Record what a handler answered.
 *
 * Results are frequently delivered asynchronously, so the call and its reply
 * cannot be correlated by ordering. Keying on the Result object's identity
 * hash attributes each reply to the call that created it.
 */
function trackResult(result: any, channel: string, method: string): void {
  const key = identityOf(result);
  if (key === null) {
    return;
  }

  // A call whose reply never arrives would otherwise pin an entry forever.
  // Dropping the oldest keeps this bounded inside the target's address space.
  if (pendingResults.size >= MAX_PENDING_RESULTS) {
    const oldest = pendingResults.keys().next();
    if (!oldest.done) {
      pendingResults.delete(oldest.value);
    }
  }

  pendingResults.set(key, { channel, method });

  const resultClass: string = result.$className;
  if (!seenResultClasses.first(resultClass)) {
    return;
  }

  const Result = resolveClass(resultClass);
  if (Result === null) {
    return;
  }

  safe("flutter/android/result/" + resultClass, () => {
    const attach = (methodName: string, outcome: string): void => {
      if (Result[methodName] === undefined) {
        return;
      }
      Result[methodName].overloads.forEach((overload: any) => {
        observe("flutter/android/result/" + outcome, overload, (self, args) => {
          const id = identityOf(self);
          if (id === null) {
            return;
          }
          const origin = pendingResults.get(id);
          if (origin === undefined) {
            return;
          }
          pendingResults.delete(id);

          const returned = args.length > 0 ? args[0] : undefined;
          const value =
            returned === null || returned === undefined ? null : String(returned);

          emit<ResultRecord>("result", {
            channel: origin.channel,
            method: origin.method,
            outcome,
            value: clamp(value),
          });

          const s = score(origin.channel + "/" + origin.method);
          const line = "↳ " + outcome + ": " + (clamp(value) ?? "<void>");
          if (isInteresting(s)) {
            log.hit("    " + line);
          } else if (getConfig().verbose) {
            log.detail(line);
          }
        });
      });
    };

    attach("success", "success");
    attach("error", "error");
    attach("notImplemented", "notImplemented");
  });
}

/**
 * Recover channel names for channels registered before the agent attached.
 *
 * On a late attach (`frida -U -n app` rather than `-f`) every constructor hook
 * above is too late. The messenger still carries the channel name on every
 * message, so names can be recovered from live traffic instead.
 */
function hookMessenger(): void {
  if (!installed.first("messenger")) {
    return;
  }
  // FlutterNativeView is the pre-embedding-v2 messenger and is simply absent on
  // current Flutter; its absence is a version fact, not a failure.
  const candidates = [
    "io.flutter.embedding.engine.dart.DartMessenger",
    "io.flutter.view.FlutterNativeView",
  ];

  for (const className of candidates) {
    const Messenger = resolveClass(className);
    if (Messenger === null) {
      continue;
    }

    safe("flutter/android/messenger/" + className, () => {
      for (const methodName of ["send", "handleMessageFromDart", "dispatchMessageToQueue"]) {
        if (Messenger[methodName] === undefined) {
          continue;
        }
        Messenger[methodName].overloads.forEach((overload: any) => {
          observe("flutter/android/messenger", overload, (_self, args) => {
            const name = args.find((a) => typeof a === "string");
            if (typeof name === "string") {
              recordChannel(name, "method", "messenger");
            }
          });
        });
      }
    });
  }
}

function recordPlugin(name: string, source: string): void {
  if (!name || !seenPlugins.first(name)) {
    return;
  }
  const s = score(name);
  emit<PluginRecord>("plugin", { name, source });

  if (isInteresting(s)) {
    log.hit("[plugin] " + name + "  (" + s.tags.join(", ") + ")");
  } else {
    log.info("[plugin] " + name);
  }
}

/**
 * Watch plugin registration.
 *
 * The plugin list is the app's third-party dependency inventory, recovered at
 * runtime — one of the highest-value things to know before choosing where to
 * look. This installs the hook only; the passive sweep is a separate step.
 */
function hookPluginRegistry(): void {
  if (!installed.first("plugin-registry")) {
    return;
  }
  const Registry = resolveClass("io.flutter.embedding.engine.FlutterEngineConnectionRegistry");
  if (Registry === null || Registry.add === undefined) {
    return;
  }

  safe("flutter/android/plugin-registry", () => {
    Registry.add.overloads.forEach((overload: any) => {
      observe("flutter/android/plugin-add", overload, (_self, args) => {
        const plugin = args[0];
        if (plugin !== null && plugin !== undefined && plugin.$className !== undefined) {
          recordPlugin(plugin.$className, "registry");
        }
      });
    });
  });
}

/**
 * Sweep loaded classes for plugins the registry hook did not see.
 *
 * Deliberately not run at spawn: no plugin classes are loaded that early, so it
 * would always come back empty. Called once the engine is up, where it catches
 * anything registered before the hook landed — the late-attach case.
 */
export function sweepAndroidPlugins(): void {
  Java.perform(() => {
    log.section("Flutter Plugins");

    safe("flutter/android/plugin-scan", () => {
      Java.enumerateLoadedClasses({
        onMatch(name: string) {
          if (name.startsWith("io.flutter.plugins.") && name.endsWith("Plugin")) {
            recordPlugin(name, "loaded-classes");
          }
        },
        onComplete() {},
      });
    });

    if (seenPlugins.size === 0) {
      log.detail("no plugins seen yet — they register as the app starts up");
    }
  });
}

/** Hook sites already installed, so repeated attempts are idempotent. */
const installed = new Seen();

/** True once the channel classes resolved, so retries can stop. */
let channelsHooked = false;

/**
 * Retry installation once the Application exists.
 *
 * At spawn the app's class loader may not be built yet, so Flutter's embedder
 * classes are genuinely unresolvable — and giving up there produced an empty
 * channel list for an app that plainly had channels. `callApplicationOnCreate`
 * is the earliest point at which the app's own classes are reliably loadable.
 */
function retryWhenAppReady(): void {
  if (!installed.first("retry-hook")) {
    return;
  }

  safe("flutter/android/retry-hook", () => {
    const Instrumentation = Java.use("android.app.Instrumentation");
    if (Instrumentation.callApplicationOnCreate === undefined) {
      return;
    }
    Instrumentation.callApplicationOnCreate.overloads.forEach((overload: any) => {
      observe("flutter/android/retry", overload, () => {
        if (!channelsHooked) {
          enumerateAndroid();
        }
      });
    });
  });
}

/**
 * Install the channel hooks. Safe to call repeatedly.
 *
 * Called at spawn, again when the Application is constructed, and again when
 * the Flutter engine maps — whichever succeeds first wins, and the later calls
 * are no-ops. An app whose classes load late still gets instrumented.
 */
export function enumerateAndroid(): void {
  Java.perform(() => {
    const first = installed.first("section-header");
    if (first) {
      log.section("Flutter Platform Channels (Android)");
    }

    const MethodChannel = resolveClass("io.flutter.plugin.common.MethodChannel");
    if (MethodChannel === null) {
      if (first) {
        log.detail("Flutter classes not loaded yet — will retry as the app starts");
      }
      retryWhenAppReady();
      return;
    }

    channelsHooked = true;
    installChannelHooks();

    if (!first) {
      log.detail("Flutter classes resolved on retry — channel hooks installed");
    }
  });
}

function installChannelHooks(): void {
  Java.perform(() => {
    hookChannelConstructors("io.flutter.plugin.common.MethodChannel", "method");
    hookChannelConstructors("io.flutter.plugin.common.EventChannel", "event");
    hookChannelConstructors("io.flutter.plugin.common.BasicMessageChannel", "message");

    hookMethodCallHandlers();
    hookMessenger();
    hookPluginRegistry();

    log.detail("Hooks installed — exercise the app to populate the model.");
  });
}
