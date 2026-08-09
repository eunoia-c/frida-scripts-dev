import Java from "frida-java-bridge";

import { clamp, Seen } from "../../core/dedupe.js";
import { getConfig } from "../../core/config.js";
import { emit } from "../../core/emit.js";
import { log } from "../../core/log.js";
import { guard, safe } from "../../core/safe.js";
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
  safe("flutter/android/ctor/" + kind, () => {
    const Channel: any = Java.use(className);

    Channel.$init.overloads.forEach((overload: any) => {
      overload.implementation = guard("flutter/android/ctor-impl/" + kind, function (
        this: any,
        ...args: any[]
      ) {
        // The channel name is the first String argument; its position moves
        // between overloads, so find it by type rather than by index.
        const name = args.find((a) => typeof a === "string");
        if (typeof name === "string") {
          recordChannel(name, kind, "registration");
        }
        return overload.apply(this, args);
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
  safe("flutter/android/set-handler", () => {
    const MethodChannel: any = Java.use("io.flutter.plugin.common.MethodChannel");

    MethodChannel.setMethodCallHandler.implementation = guard(
      "flutter/android/set-handler-impl",
      function (this: any, handler: any) {
        if (handler !== null) {
          const channelName = safe("flutter/android/channel-name", () => String(this.name.value));
          if (channelName) {
            instrumentHandler(handler.$className, channelName);
          }
        }
        return this.setMethodCallHandler(handler);
      },
    );
  });
}

function instrumentHandler(handlerClass: string, channelName: string): void {
  handlerToChannel.set(handlerClass, channelName);

  if (!getConfig().captureCalls || !seenHandlerClasses.first(handlerClass)) {
    return;
  }

  safe("flutter/android/handler/" + handlerClass, () => {
    const Handler: any = Java.use(handlerClass);
    if (Handler.onMethodCall === undefined) {
      return;
    }

    Handler.onMethodCall.overloads.forEach((overload: any) => {
      overload.implementation = guard("flutter/android/on-method-call", function (
        this: any,
        call: any,
        result: any,
      ) {
        // A handler class can serve more than one channel; prefer the mapping
        // recorded for this concrete class, falling back to the registration.
        const channel = handlerToChannel.get(this.$className) ?? channelName;
        const method = call !== null ? String(call.method.value) : "<null>";

        const args = safe("flutter/android/call-args", () =>
          call !== null && call.arguments !== undefined && call.arguments.value !== null
            ? String(call.arguments.value)
            : null,
        );

        const s = score(channel + "/" + method);
        emit<CallRecord>("call", {
          channel,
          method,
          args: clamp(args ?? null),
          score: s.score,
          tags: s.tags,
        });

        const line = channel + " → " + method + "(" + (clamp(args ?? null) ?? "") + ")";
        if (isInteresting(s)) {
          log.hit(line);
        } else if (getConfig().verbose) {
          log.note(line);
        }

        if (result !== null) {
          trackResult(result, channel, method);
        }

        return overload.call(this, call, result);
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
  const key = safe("flutter/android/result-key", () => String(result.hashCode()));
  if (key === undefined) {
    return;
  }
  pendingResults.set(key, { channel, method });

  const resultClass: string = result.$className;
  if (!seenResultClasses.first(resultClass)) {
    return;
  }

  safe("flutter/android/result/" + resultClass, () => {
    const Result: any = Java.use(resultClass);

    const attach = (methodName: string, outcome: string): void => {
      if (Result[methodName] === undefined) {
        return;
      }
      Result[methodName].overloads.forEach((overload: any) => {
        overload.implementation = guard("flutter/android/result-impl", function (
          this: any,
          ...args: any[]
        ) {
          const id = String(this.hashCode());
          const origin = pendingResults.get(id);
          if (origin) {
            pendingResults.delete(id);
            const value = args.length > 0 && args[0] !== null ? String(args[0]) : null;

            emit<ResultRecord>("result", {
              channel: origin.channel,
              method: origin.method,
              outcome,
              value: clamp(value),
            });

            const s = score(origin.channel + "/" + origin.method);
            const line = "    ↳ " + outcome + ": " + (clamp(value) ?? "<void>");
            if (isInteresting(s)) {
              log.hit(line);
            } else if (getConfig().verbose) {
              log.detail(line.trim());
            }
          }
          return overload.apply(this, args);
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
  const candidates = [
    "io.flutter.embedding.engine.dart.DartMessenger",
    "io.flutter.view.FlutterNativeView",
  ];

  for (const className of candidates) {
    safe("flutter/android/messenger/" + className, () => {
      const Messenger: any = Java.use(className);

      for (const methodName of ["send", "handleMessageFromDart", "dispatchMessageToQueue"]) {
        if (Messenger[methodName] === undefined) {
          continue;
        }
        Messenger[methodName].overloads.forEach((overload: any) => {
          overload.implementation = guard("flutter/android/messenger-impl", function (
            this: any,
            ...args: any[]
          ) {
            const name = args.find((a) => typeof a === "string");
            if (typeof name === "string") {
              recordChannel(name, "method", "messenger");
            }
            return overload.apply(this, args);
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
 * Inventory the registered Flutter plugins.
 *
 * This is the app's third-party dependency list, recovered at runtime — one of
 * the highest-value things to know before choosing where to look.
 */
function enumeratePlugins(): void {
  log.section("Flutter Plugins");

  safe("flutter/android/plugin-registry", () => {
    const Registry: any = Java.use("io.flutter.embedding.engine.FlutterEngineConnectionRegistry");
    Registry.add.overloads.forEach((overload: any) => {
      // The single-plugin overload is the one that names a concrete class; the
      // Set overload just fans out into it.
      overload.implementation = guard("flutter/android/plugin-add", function (
        this: any,
        ...args: any[]
      ) {
        const plugin = args[0];
        if (plugin !== null && plugin !== undefined && plugin.$className !== undefined) {
          recordPlugin(plugin.$className, "registry");
        }
        return overload.apply(this, args);
      });
    });
  });

  // Passive sweep: plugins already registered before the hook landed still have
  // their classes loaded, and Flutter plugin packages follow a strong naming
  // convention.
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
}

export function enumerateAndroid(): void {
  Java.perform(() => {
    log.section("Flutter Platform Channels (Android)");

    hookChannelConstructors("io.flutter.plugin.common.MethodChannel", "method");
    hookChannelConstructors("io.flutter.plugin.common.EventChannel", "event");
    hookChannelConstructors("io.flutter.plugin.common.BasicMessageChannel", "message");

    hookMethodCallHandlers();
    hookMessenger();

    enumeratePlugins();

    log.detail("Hooks installed — exercise the app to populate the model.");
  });
}
