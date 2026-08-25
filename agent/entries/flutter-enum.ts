import Java from "frida-java-bridge";

import { configure, getConfig, type Config } from "../core/config.js";
import { countOf, elapsed, emit, model } from "../core/emit.js";
import { log } from "../core/log.js";
import { safe } from "../core/safe.js";
import type { RunEndRecord, RunStartRecord } from "../core/types.js";
import { enumerateAndroid, sweepAndroidPlugins } from "../enumerate/flutter/android.js";
import { enumerateDart } from "../enumerate/flutter/dart.js";
import { enumerateIOS } from "../enumerate/flutter/ios.js";
import { auditAndroid } from "../audit/android.js";
import { auditPlatformHooks } from "../audit/webview.js";
import { reportCoverage } from "../enumerate/coverage.js";
import { whenFlutterLoaded } from "../enumerate/loader.js";
import { detectPlatform, reportEngine, reportIdentity, reportModules } from "../enumerate/target.js";
import { profileName } from "../score/index.js";

/** How long to let startup traffic settle before summarising coverage. */
const COVERAGE_DELAY_MS = 6000;

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

  // Channel hooks go in first and unconditionally. They are nearly free, and on
  // a spawned process anything registered while we are busy elsewhere is gone.
  if (platform === "android") {
    enumerateAndroid();
    // Observation-based MSTG checks: installed alongside the channel hooks so
    // that WebView settings applied during startup are actually seen.
    auditPlatformHooks();
  } else if (platform === "ios") {
    enumerateIOS();
  } else {
    log.fail("Unsupported runtime — no Java or Objective-C bridge available.");
  }

  // Module-based work waits for the engine to actually be mapped. Enumerating
  // at spawn reports "Native" for an app that is plainly Flutter, because the
  // native libraries load seconds later.
  whenFlutterLoaded(() => {
    const modules = reportModules();
    const engine = reportEngine(modules);

    // Metadata checks need only an Application context, which exists by now.
    // They are platform checks, not Flutter ones, so they run either way.
    if (platform === "android") {
      auditAndroid();
    }

    if (engine === "Flutter") {
      if (platform === "android") {
        // Last retry: if the app's classes were not loadable earlier, they
        // certainly are by the time the engine has mapped.
        enumerateAndroid();
        sweepAndroidPlugins();
      }
      enumerateDart(modules);
    }

    // Startup traffic is still arriving when the engine finishes mapping, so
    // the coverage note waits for it to settle. It is a summary of what was
    // seen, not a signal to stop watching — hooks stay installed.
    setTimeout(() => {
      safe("entry/coverage", () => reportCoverage({ isFlutter: engine === "Flutter" }));
    }, COVERAGE_DELAY_MS);
  });
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
