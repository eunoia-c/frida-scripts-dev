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
| Engine | detected engine, Dart SDK version and engine hash, snapshot symbols |
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
[+] Dart SDK      : Dart SDK version: 3.5.0 (stable) on "android_arm64"
[+] Dart payload  : libapp.so
    snapshot symbols: _kDartIsolateSnapshotData, _kDartIsolateSnapshotInstructions

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

```sh
npm install
npm run check     # typecheck + lint + test + build
npm run build     # rebuild dist/
npm test          # scoring, dedupe, and clamping logic
```

`dist/` is committed on purpose, so the scripts stay usable without a toolchain.
CI fails if a source change lands without a matching rebuild.

Sources live in `agent/`:

```
agent/core/        emit(), safe(), dedupe, config, logging
agent/score/       profile-driven attack-surface scoring
agent/enumerate/   identity, engine fingerprint, Flutter channel enumeration
agent/entries/     build entry points -> dist/
```

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

## Status

Built: the core and the Flutter enumerator (M1 + M2 in
[docs/ROADMAP.md](docs/ROADMAP.md)).

Next: Dart snapshot and VM-service work (M3), a host-side query and report CLI
(M4), and attack modules driven by the enumeration — pinning bypass keyed to the
detected engine version, and root-detection bypasses generated from the scored
channel list (M5).

The legacy standalone scripts (`and-runtime-triage.js`, `ios-runtime-triage.js`,
`flutter/`) still work and are unchanged. They will be folded into the agent as
the milestones land; several known defects in them are catalogued in the
roadmap.
