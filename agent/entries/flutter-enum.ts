import Java from "frida-java-bridge";

import { configure, getConfig, type Config } from "../core/config.js";
import { countOf, elapsed, emit, model } from "../core/emit.js";
import { log } from "../core/log.js";
import { safe } from "../core/safe.js";
import type { RunEndRecord, RunStartRecord } from "../core/types.js";
import { enumerateAndroid } from "../enumerate/flutter/android.js";
import { enumerateIOS } from "../enumerate/flutter/ios.js";
import { detectPlatform, reportEngine, reportIdentity, reportModules } from "../enumerate/target.js";
import { profileName } from "../score/index.js";

/**
 * Flutter attack-surface enumerator.
 *
 * Usage (spawn — preferred, catches startup registrations):
 *   frida -U -f com.target.app -l dist/flutter-enum.js
 *
 * Usage (attach — channel names are recovered from live traffic instead):
 *   frida -U -n TargetApp -l dist/flutter-enum.js
 */

function run(): void {
  const platform = detectPlatform();

  emit<RunStartRecord>("run.start", { agent: "flutter-enum", platform });

  log.section("frida-scripts · flutter-enum");
  log.detail("profile: " + profileName + " · platform: " + platform);

  reportIdentity(platform);

  const modules = reportModules();
  reportEngine(modules);

  if (platform === "android") {
    enumerateAndroid();
  } else if (platform === "ios") {
    enumerateIOS();
  } else {
    log.fail("Unsupported runtime — no Java or Objective-C bridge available.");
  }
}

/**
 * Start once the runtime is genuinely ready.
 *
 * The previous scripts used `setTimeout(..., 1000)`, which races app startup in
 * both directions: too early and the class loader has not published Flutter's
 * classes, too late and the channels registered during startup are already
 * missed. Java.perform fires as soon as the VM is usable, and on iOS the
 * Objective-C runtime is available immediately at attach.
 */
function start(): void {
  if (Java.available) {
    Java.perform(() => {
      safe("entry/run", run);
    });
    return;
  }
  safe("entry/run", run);
}

start();

rpc.exports = {
  /** Adjust behaviour from a host-side driver; returns the effective config. */
  configure(patch: Partial<Config>): Config {
    return configure(patch);
  },

  /** Everything discovered so far, for host-side ingest. */
  model() {
    return model();
  },

  /** Compact run summary, useful as a liveness check. */
  summary() {
    return {
      elapsedMs: elapsed(),
      channels: countOf("channel"),
      calls: countOf("call"),
      results: countOf("result"),
      plugins: countOf("plugin"),
      errors: countOf("error"),
      config: getConfig(),
    };
  },

  /** Signal the end of a run so the host can finalise its artifact. */
  finish(reason = "host-requested") {
    emit<RunEndRecord>("run.end", { reason });
    return model();
  },
};
