import ObjC from "frida-objc-bridge";

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

/** Read an Objective-C object argument as a string without throwing on nil. */
function objcString(pointer: NativePointer | undefined): string | null {
  if (pointer === undefined || pointer.isNull()) {
    return null;
  }
  return safe("flutter/ios/objc-string", () => String(new ObjC.Object(pointer))) ?? null;
}

/**
 * Hook the channel factory methods.
 *
 * Flutter's iOS channels are created through class factories rather than
 * constructors, and each has a codec-carrying variant. For a class method the
 * first two arguments are self and _cmd, so the channel name lands in args[2].
 */
function hookChannelFactories(): void {
  const factories: Array<{ cls: string; selectors: string[]; kind: ChannelKind }> = [
    {
      cls: "FlutterMethodChannel",
      selectors: [
        "+ methodChannelWithName:binaryMessenger:",
        "+ methodChannelWithName:binaryMessenger:codec:",
        "+ methodChannelWithName:binaryMessenger:codec:taskQueue:",
      ],
      kind: "method",
    },
    {
      cls: "FlutterEventChannel",
      selectors: [
        "+ eventChannelWithName:binaryMessenger:",
        "+ eventChannelWithName:binaryMessenger:codec:",
        "+ eventChannelWithName:binaryMessenger:codec:taskQueue:",
      ],
      kind: "event",
    },
    {
      cls: "FlutterBasicMessageChannel",
      selectors: [
        "+ messageChannelWithName:binaryMessenger:",
        "+ messageChannelWithName:binaryMessenger:codec:",
      ],
      kind: "message",
    },
  ];

  for (const { cls, selectors, kind } of factories) {
    const klass = ObjC.classes[cls];
    if (klass === undefined) {
      log.warn(cls + " not present — skipping.");
      continue;
    }

    for (const selector of selectors) {
      const method = klass[selector];
      if (method === undefined) {
        // Selector absent on this engine version; the other overloads cover it.
        continue;
      }

      safe("flutter/ios/factory/" + cls + selector, () => {
        Interceptor.attach(method.implementation, {
          onEnter: guard("flutter/ios/factory-impl", (args) => {
            const name = objcString(args[2]);
            if (name !== null) {
              recordChannel(name, kind, "registration");
            }
          }),
        });
      });
    }
  }
}

/**
 * Capture method calls arriving on a FlutterMethodChannel.
 *
 * The handler is a block, not an object, so the interception point is
 * `setMethodCallHandler:` — replacing the block's implementation lets calls be
 * observed and passed through untouched.
 */
function hookMethodCallHandlers(): void {
  if (!getConfig().captureCalls) {
    return;
  }

  const klass = ObjC.classes.FlutterMethodChannel;
  if (klass === undefined) {
    return;
  }

  const setter = klass["- setMethodCallHandler:"];
  if (setter === undefined) {
    log.warn("FlutterMethodChannel does not expose setMethodCallHandler:.");
    return;
  }

  safe("flutter/ios/set-handler", () => {
    Interceptor.attach(setter.implementation, {
      onEnter: guard("flutter/ios/set-handler-impl", function (this: InvocationContext, args) {
        const blockPointer = args[2];
        const selfPointer = args[0];
        if (blockPointer === undefined || blockPointer.isNull() || selfPointer === undefined) {
          return;
        }

        // The channel this handler belongs to; FlutterMethodChannel keeps it in
        // a `name` property on the receiver.
        const channel =
          safe("flutter/ios/channel-name", () => {
            const self = new ObjC.Object(selfPointer);
            return self.name !== undefined ? String(self.name()) : null;
          }) ?? "<unknown>";

        safe("flutter/ios/wrap-block", () => {
          const block = new ObjC.Block(blockPointer);
          const inner = block.implementation;

          block.implementation = function (call: any, result: any) {
            safe("flutter/ios/on-method-call", () => {
              const wrapped = new ObjC.Object(call);
              const method = String(wrapped.method());
              const rawArgs =
                wrapped.arguments() && !wrapped.arguments().isNull?.()
                  ? String(wrapped.arguments())
                  : null;

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
            });

            // Wrap the reply block so the answer is recorded too. The result
            // callback is invoked once, possibly long after the call returns.
            const originalResult = result;
            const observed = function (value: any) {
              safe("flutter/ios/result", () => {
                const rendered =
                  value === null || value === undefined || (value.isNull?.() ?? false)
                    ? null
                    : String(new ObjC.Object(value));

                emit<ResultRecord>("result", {
                  channel,
                  method: "<reply>",
                  outcome: "success",
                  value: clamp(rendered),
                });

                if (getConfig().verbose) {
                  log.detail("↳ reply: " + (clamp(rendered) ?? "<void>"));
                }
              });
              return originalResult(value);
            };

            return inner(call, observed);
          };
        });
      }),
    });
  });
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
 * Inventory registered plugins.
 *
 * `registrarForPlugin:` is called once per plugin during startup with the
 * plugin's name, which makes it the cleanest inventory point. A passive sweep
 * of loaded classes catches plugins registered before attach.
 */
function enumeratePlugins(): void {
  log.section("Flutter Plugins");

  for (const cls of ["FlutterPluginAppLifeCycleDelegate", "FlutterEngine", "FlutterViewController"]) {
    const klass = ObjC.classes[cls];
    const method = klass?.["- registrarForPlugin:"];
    if (method === undefined) {
      continue;
    }

    safe("flutter/ios/registrar/" + cls, () => {
      Interceptor.attach(method.implementation, {
        onEnter: guard("flutter/ios/registrar-impl", (args) => {
          const name = objcString(args[2]);
          if (name !== null) {
            recordPlugin(name, "registrar");
          }
        }),
      });
    });
  }

  safe("flutter/ios/plugin-scan", () => {
    for (const name of Object.keys(ObjC.classes)) {
      if (name.startsWith("FLT") || (name.endsWith("Plugin") && !name.startsWith("Flutter"))) {
        recordPlugin(name, "objc-classes");
      }
    }
  });
}

export function enumerateIOS(): void {
  log.section("Flutter Platform Channels (iOS)");

  if (ObjC.classes.FlutterMethodChannel === undefined) {
    log.fail("No Flutter classes in the Objective-C runtime — is this a Flutter app?");
    return;
  }

  hookChannelFactories();
  hookMethodCallHandlers();
  enumeratePlugins();

  log.detail("Hooks installed — exercise the app to populate the model.");
}
