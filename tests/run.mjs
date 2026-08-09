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

console.log(failures === 0 ? "\nall checks passed\n" : "\n" + failures + " check(s) failed\n");
process.exit(failures === 0 ? 0 : 1);
