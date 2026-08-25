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
| MSTG checks | MASVS/MSTG items answerable at runtime, with evidence and an explicit list of what still needs a human |
| Coverage | what the run actually observed, and why it may be incomplete |

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
    _kDartIsolateSnapshotData @ 0x7f2c108000
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

## MSTG checks

A subset of the MASVS/MSTG checklist runs automatically after enumeration. Two
sources, both runtime:

**App metadata**, read through `PackageManager` and `ApplicationInfo` — no APK,
no jadx, no unzip. Because these come from the *resolved* package, they reflect
the merged manifest, including attributes a library contributed that the app's
own `AndroidManifest.xml` never mentions.

| check | what is read |
| --- | --- |
| `MSTG-CODE-2` | `FLAG_DEBUGGABLE` |
| `MSTG-STORAGE-8` | `FLAG_ALLOW_BACKUP`, plus `targetSdk` for the Android 12+ rules |
| `MSTG-NETWORK-1` | `FLAG_USES_CLEARTEXT_TRAFFIC` |
| `MSTG-PLATFORM-1` | requested permissions, with the notable ones called out |
| `MSTG-PLATFORM-4` | exported activities/services/receivers/providers and their guarding permission |
| `MSTG-CODE-1` | signer certificates, SHA-256 |

**Observed behaviour**, from hooks — where runtime beats grep outright:

| check | hooked |
| --- | --- |
| `MSTG-PLATFORM-5` | `WebSettings.setJavaScriptEnabled` |
| `MSTG-PLATFORM-6` | `setAllowFileAccess`, `setAllowFileAccessFromFileURLs`, `setAllowUniversalAccessFromFileURLs`, `setAllowContentAccess` |
| `MSTG-PLATFORM-7` | `WebView.addJavascriptInterface` |
| `MSTG-CODE-2` | `WebView.setWebContentsDebuggingEnabled` |
| `MSTG-STORAGE-3` | `android.util.Log.*`, with entries captured |

> **Why hook instead of grep.** `egrep setJavaScriptEnabled` over decompiled
> Flutter source matches the WebView plugin's bundled Java in *every* app that
> depends on it, whether or not the app reaches that code — and it cannot tell
> you what value was passed. The hook answers what the check is actually
> asking: was this applied to a WebView the app really created?

### Statuses

| status | meaning |
| --- | --- |
| `PASS` | evidence shows the control is in place |
| `FAIL` | evidence shows it is not |
| `REVIEW` | facts gathered; the verdict is a judgement (is this permission set minimal?) |
| `MANUAL` | cannot be answered at runtime at all |
| `UNKNWN` | tried and could not determine |

`MANUAL` items are printed rather than omitted — `MSTG-ARCH-9`, `STORAGE-9`,
`STORAGE-11`, `AUTH-1`, `NETWORK-3`, `NETWORK-4`, `PLATFORM-2` — each with the
manual procedure. **A checklist that silently drops what it could not test
looks identical to one where everything passed.**

One caveat carried in the output itself: for `MSTG-NETWORK-4`, Flutter pins in
BoringSSL inside `libflutter.so` and ignores the system trust store, so traffic
flowing through a proxy with your CA installed does *not* by itself prove there
is no pinning.

## Reading the output

### The score is a reading order, not a verdict

A score says *"this name looks like it touches something security-relevant"* —
nothing more. It is pattern matching on a string. It does not know whether the
channel is reachable, whether it is used, or whether it is broken.

So the honest reading of **score 2** is: *worth opening before the score-0
ones, and after the score-5 ones.* That is genuinely all. The score's job is to
turn 200 channels into a queue, so you spend your first hour on the six that
matter instead of reading alphabetically.

Two consequences a new analyst should internalise early:

- **A high score is not a finding.** `flutter_secure_storage` scoring 5 means
  "an app storing secrets locally", which is normal and expected. The finding
  would be *what* it stores and whether it is protected.
- **A zero is not safety.** An in-house channel called `com.app/svc_a17` scores
  0 and could be the whole authentication surface. The scorer only knows the
  vocabulary in the profile. Skim the zeros; do not trust them.

### The three line types

```
[+] [method] com.app/analytics                  ← seen, scored below threshold
[!] [method] com.app/security_check             ← seen, scored above threshold
    score 6 · root-detect, security-generic     ← why it was flagged
[!] com.app/security_check → isRooted()         ← a call actually happened
    ↳ success: false                            ← and this is what it answered
```

The first two come from *registration* — the channel exists. The last two come
from *traffic* — the app really used it, and you can see the answer. **The
traffic lines are where the value is.** A registration list is an inventory; a
call with its return value is a lever you can pull.

If you only ever see registrations, you have not exercised the app. Log in,
open the camera, hit the biometric prompt. Hooks report what crosses them.

### From a flagged line to a tested finding

The score tells you where to look. This tells you what to do when you get there.

| tag | what to try | what would make it a finding |
| --- | --- | --- |
| `root-detect` | Exercise the app until the check fires and read the return value. Then replace it: force the opposite boolean and see whether the app proceeds. | App gates on a single client-side boolean you control, and flipping it grants access |
| `pinning` | Point the device at an intercepting proxy with your CA installed. Watch whether traffic flows or the channel errors. | Traffic is readable, or pinning is enforced only on some hosts |
| `auth` | Watch the call and return around login and biometric prompts. Note what the client decides locally. | Auth decision made client-side, or a token returned to Dart in a recoverable form |
| `crypto` | Capture the key material and algorithm at the call boundary. | Hardcoded key, ECB mode, key derivable on-device |
| `storage` | Read what goes in, then pull the file off the device and see whether it is readable at rest. | Secrets stored in plaintext, or "encrypted" with a key stored beside them |
| `network` | Look at the URLs and whether proxy settings are honoured. | Cleartext endpoints, or debug/staging hosts reachable in production |
| `pii` | Note what personal data crosses the bridge and where it goes next. | Data collected beyond what the feature needs, or sent to a third party |
| `rasp-vendor` | Identify the product and version first — the bypass is usually product-specific. | Protection can be disabled without the app noticing |

The pattern behind all of these is the same three steps:

1. **Observe.** Get the channel to fire and record the call and its return
   value. You now know the real signature, not a guess.
2. **Tamper.** Change what crosses the boundary — the return value, an
   argument — and see whether the app's behaviour changes.
3. **Decide.** If changing a client-side answer changes what the user can do,
   the security decision was on the client, and that is the finding. If the
   server re-checks, it is not.

Step 2 is not built into this tool yet — that is M5 in the
[roadmap](docs/ROADMAP.md). For now, write a small script against the exact
channel and method name the enumerator gave you.

### Worked example

From a real run against a wallet app:

```
[!] [plugin] com.w3conext.jailbreak_root_detection.JailbreakRootDetectionPlugin  (root-detect, native-bridge)
[!] [method] jailbreak_root_detection
    score 4 · root-detect
```

Read it like this. The plugin is an **off-the-shelf package**, not in-house —
so its source is public, the method names are knowable, and it is client-side
by construction. The channel scored 4 on `root-detect` alone, with no
`rasp-vendor` tag anywhere in the run, which says nobody bought commercial
hardening. That combination is a soft target.

The next step is not to write a bypass. It is to **run the app on a rooted
device and watch the channel**, because until you have seen the call and its
return value you are guessing at the signature.

Note what the same run did *not* contain: no `pinning` tag on any channel. That
is informative. Either there is no pinning, or it is in `libflutter.so`'s
BoringSSL where a channel-level enumerator cannot see it — Flutter ignores the
system trust store, so this is common. Absence of a tag is a question to answer,
not an answer.

### A thin result is not a small attack surface

**This is the mistake most likely to end up in a report.**

What the enumerator sees depends entirely on how far the app got. If the app
exits during startup, it never registers its channels, and the output looks
exactly like an app that has none:

```
[*] --- Flutter Plugins ---
[!] [plugin] io.flutter.plugins.firebase.core.FlutterFirebasePlugin

[*] --- Coverage ---
[+] Channels      : 0
[+] Calls         : 0 (0 with replies)
[+] Plugins       : 1
[-] no channels observed — the app probably exited before registering any
    (a device-integrity block does exactly this), or its classes were unreachable
[-] very few plugins — a Flutter app that finished starting registers many,
    so startup was probably cut short
    this is a floor, not a census — absence here is not absence in the app
```

One plugin and no channels is **not** a finding about the app's design. A
Flutter app that finishes starting registers many plugins. One means startup was
cut short.

The `Coverage` section at the end of every run exists for this reason: it states
what was observed and flags the reasons a run may be incomplete, so nobody has
to infer it from an empty list.

**Why a run comes back thin, in rough order of likelihood:**

| Cause | How you can tell |
| --- | --- |
| The app blocked and exited — root/emulator/debugger check | An error dialog on the device; very few plugins; identity may never print |
| You never exercised the app | Channels are listed but `Calls: 0`. Registration is not traffic |
| The app's classes were not reachable | `not resolvable yet` lines. Class lookups search every class loader, but a protector can still hide code |
| Attached late rather than spawning | Startup registrations already happened. Names recover from live traffic; the startup calls do not |
| The feature was never opened | A channel registers when its plugin loads, not when the app starts |
| The surface really is small | Only after the above are ruled out |

**The rule:** absence in the output is a question, never an answer. Before
writing "the app exposes no X", confirm the app actually reached the code that
would have exposed it.

The inverse holds too. Every run is a lower bound — a channel that exists but
was not exercised, a plugin loaded behind a feature flag, and logic living
entirely in Dart are all invisible here by construction.

### Known false positives

Substring matching is deliberate — channel names are namespaced strings like
`com.vendor.app/security_check`, and the interesting token is rarely the whole
name. The cost is names that merely contain a keyword:

```
[!] [plugin] me.carda.awesome_notifications.AwesomeNotificationsPlugin  (payment, …)
                  ^^^^ "card" matched inside "carda"
```

A notifications library is not payment surface. When you see a tag that makes no
sense for the component, it is a false positive — check the name for an
accidental substring before chasing it.

Every `native-bridge` tag is likewise near-meaningless on its own: it fires on
any name containing `plugin`, which is most of them. It exists to keep custom
bridges from scoring 0, not to flag them as interesting.

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

**Snapshot sections** are recorded with addresses — the input a host-side
snapshot parser needs.

Section *sizes* need the payload's ELF symbol table, which is read from disk and
is **off by default** (`dartSymbolTable`). Modern Android maps native libraries
straight out of the APK, giving `libapp.so` a path like
`…/base.apk!/lib/arm64-v8a/libapp.so` that cannot be opened as a file. Frida
does not check for that and segfaults the target — a native fault, so no
`try`/`catch` can save you. Enable it only for a payload extracted to a real
file on disk.

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

### Troubleshooting a crashed target

Instrumentation should never decide whether the app runs. If the target dies,
these are the failure modes seen so far and what they look like:

| Symptom | Cause | What to do |
| --- | --- | --- |
| `Process crashed: Bad access` with `fseeko` in the backtrace | Frida reading an ELF from a path inside an APK | Keep `dartSymbolTable` off (the default) |
| `Process crashed: Bad access` during the Dart section | A memory scan reaching an unmapped page | Update; scans are bounded to mapped ranges. Failing that, `dartLibraryScan: false` |
| Dies immediately at startup, before any section completes | A hook whose failure broke an app code path | Report it — replacements are meant to call through even when instrumentation fails |

A `[-]` line naming a hook site is *not* a crash; it means one hook failed and
was contained. The run continues, and the site name tells you exactly which one.

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
