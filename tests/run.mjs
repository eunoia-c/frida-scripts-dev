/**
 * Test runner for the platform-independent parts of the agent.
 *
 * The hooks themselves need a device and a real app; what is testable off-device
 * is the logic that decides what gets reported — scoring, dedupe bounds, and
 * value clamping. Those are also the parts most likely to regress silently,
 * because a scoring miss looks like "the app just doesn't have that channel".
 *
 * Modules are compiled to a temp dir with tsc rather than imported directly,
 * since Node cannot import .ts. The JSON import attribute is patched in
 * afterwards: Node requires `with { type: "json" }`, while the Frida bundler
 * inlines the JSON and rejects the attribute.
 */

import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync, mkdirSync, copyFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = mkdtempSync(join(tmpdir(), "frida-scripts-test-"));

execFileSync(
  "npx",
  [
    "tsc",
    "agent/score/index.ts",
    "agent/core/config.ts",
    "agent/core/dedupe.ts",
    "agent/enumerate/flutter/dart.ts",
    "agent/core/safe.ts",
    "--outDir", out,
    "--module", "ES2022",
    "--target", "ES2022",
    "--moduleResolution", "bundler",
    "--resolveJsonModule",
    "--esModuleInterop",
    "--skipLibCheck",
    "--types", "frida-gum",
  ],
  { cwd: root, stdio: "inherit" },
);

const scorePath = join(out, "agent/score/index.js");
writeFileSync(
  scorePath,
  readFileSync(scorePath, "utf8").replace(
    'from "../../profiles/default.json"',
    'from "../../profiles/default.json" with { type: "json" }',
  ),
);

mkdirSync(join(out, "profiles"), { recursive: true });
copyFileSync(join(root, "profiles/default.json"), join(out, "profiles/default.json"));

const { score, isInteresting } = await import(pathToFileURL(scorePath).href);
const { Seen, clamp } = await import(pathToFileURL(join(out, "agent/core/dedupe.js")).href);
const { configure } = await import(pathToFileURL(join(out, "agent/core/config.js")).href);
const { parseDartVersion, isDartLibraryUri, packageOf, inferBuildMode } = await import(
  pathToFileURL(join(out, "agent/enumerate/flutter/dart.js")).href
);

let failures = 0;
function check(name, condition, detail = "") {
  if (condition) {
    console.log("  ok   " + name + (detail ? "  — " + detail : ""));
  } else {
    console.log("  FAIL " + name + (detail ? "  — " + detail : ""));
    failures++;
  }
}

console.log("\nscoring — representative channel names");
for (const name of [
  "com.bank.app/security_check",
  "flutter_jailbreak_detection",
  "plugins.flutter.io/local_auth",
  "com.vendor/ssl_pinning",
  "freerasp_channel",
  "plugins.it_nomads.com/flutter_secure_storage",
  "flutter/textinput",
  "webview_flutter",
  "com.app/user_profile",
]) {
  const s = score(name);
  const state = s.ignored ? "IGNORED" : isInteresting(s) ? "HIT    " : "—      ";
  console.log(
    "  " + String(s.score).padStart(2) + " " + state + " " + name + "  [" + s.tags.join(",") + "]",
  );
}

console.log("\nscoring — assertions");
check("root-detect naming scores high", score("flutter_jailbreak_detection").score >= 4);
check("RASP vendor outranks generic", score("freerasp").score > score("app/secure").score);
check(
  "in-house security channel is caught",
  isInteresting(score("com.bank.app/security_check")),
  "regression guard: `security` must stay in the profile",
);
check("engine noise is ignored", score("flutter/textinput").ignored);
check("webview noise is ignored", score("webview_flutter").ignored);
check("benign name stays quiet", !isInteresting(score("com.app/user_profile")));
check("secure storage tagged", score("flutter_secure_storage").tags.includes("storage"));
check("local_auth tagged auth", score("plugins.flutter.io/local_auth").tags.includes("auth"));
check("tags are additive", score("crypto_pinning_auth").score > score("crypto").score);
check("ignore beats keywords", score("webview_flutter_ssl").ignored);

console.log("\ndedupe");
const seen = new Seen();
check("first() is true exactly once", seen.first("k") === true && seen.first("k") === false);

configure({ maxDedupeKeys: 2 });
const bounded = new Seen();
bounded.first("a");
bounded.first("b");
check("saturates at the cap", bounded.first("c") === false && bounded.isSaturated === true);
configure({ maxDedupeKeys: 8192 });

console.log("\nclamp");
configure({ maxValueLength: 10 });
check("truncates and marks elision", clamp("a".repeat(50)) === "a".repeat(10) + "…(+40)");
check("passes null through", clamp(null) === null);
check("leaves short values alone", clamp("short") === "short");
configure({ maxValueLength: 512 });

console.log("\ndart — version parsing");
{
  const modern = parseDartVersion(
    'Dart SDK version: 3.5.0 (stable) (Tue Aug 6 12:00:00 2024 +0000) on "android_arm64"',
  );
  check("parses SDK version", modern.sdk === "3.5.0", modern.sdk);
  check("parses channel", modern.channel === "stable", modern.channel);
  check("parses arch", modern.arch === "android_arm64", modern.arch);

  const legacy = parseDartVersion(
    'Dart VM version: 2.19.6 (stable) (Unknown timestamp) on "ios_arm64"',
  );
  check("handles legacy 'Dart VM version' form", legacy.sdk === "2.19.6", legacy.sdk);
  check("parses ios arch", legacy.arch === "ios_arm64", legacy.arch);

  const prerelease = parseDartVersion('Dart SDK version: 3.6.0-165.0.dev (dev) on "android_arm64"');
  check("handles prerelease versions", prerelease.sdk === "3.6.0-165.0.dev", prerelease.sdk);

  const trailing = parseDartVersion(
    'Dart SDK version: 3.5.0 (stable) on "android_arm64"\nsome other embedded string',
  );
  check("stops at the first line", !trailing.raw.includes("some other"), trailing.raw);

  const junk = parseDartVersion("not a version string at all");
  check("returns null on junk rather than throwing", junk.sdk === null);
}

console.log("\ndart — library URI validation");
{
  const valid = [
    "package:flutter/src/widgets/framework.dart",
    "package:my_app/main.dart",
    "package:dio/dio.dart",
    "package:flutter",
    "dart:core",
    "dart:async",
    "dart:_internal",
  ];
  for (const uri of valid) {
    check("accepts " + uri, isDartLibraryUri(uri));
  }

  const invalid = [
    "package:",
    "package:Flutter/Bad.dart",
    "not a uri",
    "package:app/main.txt",
    "package:app/" + "x".repeat(300) + ".dart",
    "",
  ];
  for (const uri of invalid) {
    check("rejects " + JSON.stringify(uri.slice(0, 30)), !isDartLibraryUri(uri));
  }

  check("extracts package name", packageOf("package:dio/src/dio.dart") === "dio");
  check("extracts bare package name", packageOf("package:flutter") === "flutter");
  check("returns null for dart: URIs", packageOf("dart:core") === null);
}

console.log("\ndart — build mode inference");
{
  const release = inferBuildMode({ aotSnapshot: true, vmServiceStrings: false, kernelBlob: false });
  check("AOT without VM service is release", release.mode === "release");

  const profile = inferBuildMode({ aotSnapshot: true, vmServiceStrings: true, kernelBlob: false });
  check("AOT with VM service is profile", profile.mode === "profile");

  const debug = inferBuildMode({ aotSnapshot: false, vmServiceStrings: true, kernelBlob: true });
  check("kernel blob without AOT is debug", debug.mode === "debug");

  const unknown = inferBuildMode({
    aotSnapshot: false,
    vmServiceStrings: false,
    kernelBlob: false,
  });
  check("no signals is unknown, not a guess", unknown.mode === "unknown");
  check("unknown carries no evidence", unknown.evidence.length === 0);
  check("verdicts carry their evidence", profile.evidence.length === 2, profile.evidence.join("; "));
}

console.log("\nsafe — this-binding and call-through");
{
  const { guard, observe } = await import(pathToFileURL(join(out, "agent/core/safe.js")).href);

  // Regression: guard was an arrow function, which does not accept a bound
  // `this`. Every replaced Java method received `this === undefined`, so
  // `this.name`, `this.setMethodCallHandler` and `overload.apply(this, ...)`
  // all failed — and constructors that never ran terminated the target.
  const wrapped = guard("test/this", function () {
    return this === undefined ? "LOST" : this.marker;
  });
  const receiver = { marker: "kept" };
  check("guard forwards `this`", wrapped.call(receiver) === "kept", String(wrapped.call(receiver)));

  const passthroughArgs = guard("test/args", function (a, b) {
    return a + b;
  });
  check("guard forwards arguments", passthroughArgs.call(null, 2, 3) === 5);

  const thrower = guard("test/throws", () => {
    throw new Error("boom");
  });
  check("guard contains throws", thrower.call(null) === undefined);

  // observe() must invoke the original no matter what the observer does,
  // otherwise a failure in instrumentation changes app behaviour.
  const makeOverload = () => {
    const calls = [];
    return {
      calls,
      implementation: null,
      apply(self, args) {
        calls.push({ self, args });
        return "original-result";
      },
    };
  };

  const healthy = makeOverload();
  let observed = null;
  observe("test/observe", healthy, (self, args) => {
    observed = { self, args };
  });
  const healthyResult = healthy.implementation.call({ id: 7 }, "a", "b");
  check("observe returns the original's result", healthyResult === "original-result");
  check("observe forwards `this` to the original", healthy.calls[0].self.id === 7);
  check("observe forwards args to the original", healthy.calls[0].args.length === 2);
  check("observe passes `this` to the observer", observed.self.id === 7);

  const broken = makeOverload();
  observe("test/observe-throws", broken, () => {
    throw new Error("observer exploded");
  });
  const brokenResult = broken.implementation.call({ id: 9 }, "x");
  check(
    "a throwing observer still calls the original",
    brokenResult === "original-result" && broken.calls.length === 1,
    "this is what stops instrumentation from crashing the target",
  );
}

console.log(failures === 0 ? "\nall checks passed\n" : "\n" + failures + " check(s) failed\n");
process.exit(failures === 0 ? 0 : 1);
