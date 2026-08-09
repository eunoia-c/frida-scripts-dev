# frida-scripts

Frida tooling for mobile application pentesting and security research.

The approach is **enumerate, then attack**: build a model of what the app
actually exposes at runtime, score that surface, and aim instrumentation at what
scores highest — rather than guessing at hook points up front.

> Runtime instrumentation captures real secrets. Read
> [docs/AUTHORIZED_USE.md](docs/AUTHORIZED_USE.md) before running any of this.

## Quick start

No toolchain needed — the built scripts in `dist/` are drop-in.

```sh
# Spawn (preferred: catches channels registered during startup)
frida -U -f com.target.app -l dist/flutter-enum.js

# Attach (channel names are recovered from live traffic instead)
frida -U -n TargetApp -l dist/flutter-enum.js
```

Then **exercise the app**. The enumerator installs hooks and reports what
crosses them; an app you never navigate reports almost nothing.

## What `flutter-enum` gives you

| | |
| --- | --- |
| Identity | package/bundle ID, version name, version code |
| Engine | which runtime is in play, and whether a Dart payload is loaded |
| Dart | SDK version and channel, **build mode** with evidence, snapshot section bounds, recovered library and package inventory |
| Plugins | registered Flutter plugins — the app's third-party dependency list |
| Channels | every `MethodChannel` / `EventChannel` / `BasicMessageChannel`, scored |
| Calls | method names, arguments, and **return values** crossing those channels |

Sample output, trimmed:

```
[*] --- Application Identity ---
[+] Package       : com.pany.bankingapp
[+] Version       : 4.0.9 (400011)

[*] --- Engine Fingerprint ---
[+] Engine        : Flutter
[+] Dart payload  : libapp.so

[*] --- Dart Runtime ---
[+] Dart SDK      : 3.5.0
    channel: stable · android_arm64
[+] Build mode    : release
    evidence: AOT snapshot present
[+] Snapshot      : 4 section(s)
    _kDartIsolateSnapshotData @ 0x7f2c108000 (1441792 bytes)
[+] Dart packages : 31
    dio, firebase_core, flutter, flutter_secure_storage, local_auth, provider, …

[*] --- Flutter Plugins ---
[+] [plugin] io.flutter.plugins.sharedpreferences.SharedPreferencesPlugin
[!] [plugin] com.it_nomads.fluttersecurestorage.FlutterSecureStoragePlugin  (storage)

[*] --- Flutter Platform Channels (Android) ---
[!] [method] com.pany.bankingapp/security
    score 6 · root-detect, security-generic
[+] [method] com.pany.bankingapp/analytics
[!] com.pany.bankingapp/security → isDeviceRooted()
    ↳ success: false
```

The lines that matter are the red ones: a scored channel and the answer it gave.
`isDeviceRooted() → false` tells you exactly what to tamper with, and where.

## Scoring

Channel and method names are scored against [`profiles/default.json`](profiles/default.json).
Tags are additive, so a name matching several scores the sum:

| tag | weight | catches |
| --- | --- | --- |
| `rasp-vendor` | 5 | named hardening products (Promon, Talsec, Appdome, …) |
| `root-detect` | 4 | jailbreak/root/emulator/debugger/integrity checks |
| `pinning` | 4 | certificate validation and pinning |
| `crypto`, `auth`, `payment` | 3 | key material, session/biometric gates, card handling |
| `storage`, `network`, `pii`, `security-generic` | 2 | persistence, transport, personal data, in-house naming |
| `native-bridge` | 1 | custom bridges, worth reading regardless of naming |

An `ignore` list suppresses engine and common-plugin noise (`flutter/textinput`,
`webview_flutter`, …) before scoring, so the output stays readable.

Edit the profile to retune — nothing is hardcoded in the scripts.

## Development

**You do not need any of this to use the scripts.** If you only want to run
`flutter-enum` against an app, the Quick start above is the whole story — the
file in `dist/` is ready to go.

Read on only if you want to *change* how the scripts behave.

### The one thing to understand first

Frida cannot run TypeScript. It runs JavaScript.

So this repo has two kinds of files, and mixing them up is the mistake everyone
makes once:

| | |
| --- | --- |
| `agent/**/*.ts` | **The source.** Where you make changes. Frida never sees these. |
| `dist/flutter-enum.js` | **The build output.** One big JavaScript file. This is what Frida actually runs. |

Turning the first into the second is called *building*, and it does not happen
automatically.

> **If you edit a `.ts` file and go straight to `frida -l dist/flutter-enum.js`,
> your change will not be there.** The file on disk is still the old build. You
> have to run `npm run build` first. If a change you just made seems to do
> nothing, this is almost always why.

### One-time setup

You need [Node.js](https://nodejs.org) version 22 or newer. Check what you have:

```sh
node --version      # want v22 or higher
```

Then, from the repo folder, install the build tools:

```sh
npm install
```

This reads `package.json`, downloads everything listed there into a
`node_modules/` folder, and takes a minute or two. You only do this once (and
again whenever someone changes `package.json`). `node_modules/` is git-ignored —
never commit it.

### The commands

Run these from the repo folder. `npm run <name>` just executes the matching
entry in `package.json`'s `scripts` block, so you can read exactly what each one
does there.

| Command | What it does | When you run it |
| --- | --- | --- |
| `npm run build` | Compiles `agent/**/*.ts` into `dist/flutter-enum.js` | After **every** source change you want on the device |
| `npm test` | Runs the checks in `tests/run.mjs` against the scoring, dedupe, and clamping logic | After changing scoring or the profile |
| `npm run typecheck` | Asks TypeScript to find type mistakes — misspelled properties, a string used where a number belongs — without producing output | When you want fast feedback while editing |
| `npm run lint` | Checks code style and catches suspicious patterns (unused variables, empty catch blocks) | Before committing |
| `npm run check` | All four above, in order, stopping at the first failure | **Before every commit** — this is the one to remember |

If you only remember two: **`npm run check` before committing**, and
**`npm run build` before testing on a device**.

### Making a change

The typical loop:

1. Edit a file under `agent/` (or `profiles/default.json`).
2. Run `npm run check`. Fix anything it complains about.
3. Test against a real app: `frida -U -f com.target.app -l dist/flutter-enum.js`
4. Commit **both** your source change **and** the rebuilt `dist/flutter-enum.js`.

That last point surprises people: `dist/` is committed to git on purpose, so
that anyone can clone the repo and run the scripts without installing Node at
all. The tradeoff is that the built file has to be kept in sync by hand.

CI enforces this — if you push a source change without the matching rebuild, the
build fails with *"dist/ is out of date"*. The fix is always the same: run
`npm run build`, commit the result, push again.

While iterating you can skip the manual rebuild:

```sh
npm run watch:flutter-enum
```

This stays running and rebuilds automatically every time you save. Stop it with
`Ctrl+C`. Run `npm run check` once before you commit regardless.

### Your first change: adding a keyword

Most changes here don't need TypeScript at all. If you find a channel on an
engagement that *should* have been flagged and wasn't, add it to the scorer:

1. Open [`profiles/default.json`](profiles/default.json).
2. Find the tag it belongs under (`root-detect`, `pinning`, `crypto`, …) and add
   your keyword to that tag's `keywords` list, in lowercase. Matching is
   substring-based, so `"jailbreak"` also catches `isJailbroken` and
   `flutter_jailbreak_detection`.
3. Add a check to `tests/run.mjs` so nobody deletes it later by accident.
4. `npm run check`, then `npm run build`, then commit both files.

No code changes required — the scripts read the profile, nothing is hardcoded.

### When something goes wrong

| What you see | What it means |
| --- | --- |
| `command not found: npm` | Node.js isn't installed, or isn't on your PATH. |
| `Cannot find module ...` | You skipped `npm install`, or someone added a dependency — run it again. |
| `error TS2304: Cannot find name 'Java'` | A file uses `Java` or `ObjC` without importing it. Frida 17 moved these into `frida-java-bridge` / `frida-objc-bridge`; add `import Java from "frida-java-bridge";` at the top. |
| `dist/ is out of date` in CI | You committed a source change without rebuilding. Run `npm run build`, commit, push. |
| Your change doesn't show up on the device | You didn't rebuild. See the warning at the top of this section. |
| The script runs but finds nothing | Usually not a build problem — you have to *use* the app. Hooks only report what crosses them. |

### Where things live

```
agent/core/        emit(), safe(), dedupe, config, logging — shared plumbing
agent/score/       profile-driven attack-surface scoring
agent/enumerate/   identity, engine fingerprint, Flutter channel enumeration
agent/entries/     build entry points; one file here becomes one file in dist/
profiles/          scoring keywords and weights (plain JSON, no code)
tests/             off-device checks for the scoring logic
dist/              build output — generated, but committed
```

A good rule while you're finding your feet: changes in `profiles/` are low-risk
and easy to verify with `npm test`. Changes in `agent/enumerate/` touch live
hooks and really want testing against a real app before you trust them.

### Structured output

Terminal output is one consumer; the model is the real product. A host-side
driver can take the records instead:

```js
script.exports.configure({ structured: true, pretty: false });
script.on("message", (m) => { /* one record per discovery */ });
const model = await script.exports.model();
```

Every record carries `{ v, t, type, … }` — see [`agent/core/types.ts`](agent/core/types.ts)
for the schema.

## Reading the Dart section

**Build mode is the first thing to look at.** A `release` build is the normal
case. Anything else — `profile` or `debug` — is a finding on its own: those
builds carry the Dart VM service, which hands out a complete class and function
listing with no snapshot parsing involved. The verdict always prints the
evidence behind it, because it is inferred from what is loaded rather than read
from a flag.

**Snapshot sections** are recorded with addresses and, where the symbol table
survived, sizes. This is the input a host-side snapshot parser needs.

**Packages and libraries** are recovered by scanning the snapshot data for
library URIs. This works without understanding the snapshot format, and gives
you the app's Dart dependency list plus the URIs of its own code — usually the
fastest way to separate app logic from framework noise.

> **What this deliberately does not do:** parse Dart AOT snapshots to enumerate
> classes and functions. That format is version-specific and shifts between SDK
> releases, and a Frida agent is the wrong place to track it. The agent records
> the SDK version, build mode, and section bounds a host-side parser needs
> ([blutter](https://github.com/worawit/blutter) and similar), and recovers what
> is readable as plain strings. A full dump is a host-side step — see M3/M4 in
> the [roadmap](docs/ROADMAP.md).

If the scan is slow on a very large payload, turn it off:
`script.exports.configure({ dartLibraryScan: false })`.

## Status

Built: the core, the Flutter channel enumerator, and the Dart runtime
enumerator (M1–M3 in [docs/ROADMAP.md](docs/ROADMAP.md)).

Next: a host-side query and report CLI (M4), and attack modules driven by the
enumeration — pinning bypass keyed to the detected engine version, and
root-detection bypasses generated from the scored channel list (M5).

The legacy standalone scripts (`and-runtime-triage.js`, `ios-runtime-triage.js`,
`flutter/`) still work and are unchanged. They will be folded into the agent as
the milestones land; several known defects in them are catalogued in the
roadmap.
