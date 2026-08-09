# Roadmap: from print-scripts to an enumerate-then-attack toolkit

## The problem with the current repo

Five standalone scripts, all of which `console.log` and exit. They hardcode the
final step of a pipeline whose earlier steps do not exist.

A Corellium-style workflow does three things these scripts do not:

1. **Builds a model, not a log.** The full class / method / symbol / channel
   graph is enumerated into a queryable structure, so you can ask questions
   *after* the app has run.
2. **Derives instrumentation from enumeration.** Hooks are generated from what
   was found, rather than guessed ahead of time and hardcoded.
3. **Persists and reports.** Structured JSON out, correlated across runs.

The `SECURITY_KEYWORDS` flagger in the Flutter scripts is the right instinct —
it is v0 of an attack-surface scorer. It is currently copy-pasted into two files
and its output goes to a terminal that scrolls away.

## Decisions

| Decision | Choice |
| --- | --- |
| Build | TypeScript, compiled with `frida-compile` |
| Distribution | Single-file drop-ins committed to `dist/` — `frida -U -l dist/flutter-enum.js` keeps working |
| First capability | The enumerator (Phase 2), not the foundation sweep |
| First coverage | Flutter, Android + iOS |

Shipping `dist/` is deliberate: the "grab one file and run it" ergonomic is what
makes this repo useful on an engagement. Modular source must not cost that.

Flutter coverage still requires a thin Android/iOS runtime layer, because
channels register through `io.flutter.plugin.common.*` on Android and
`Flutter*Channel` on iOS. That layer is scoped to Flutter's needs — it is not
the full class-graph dump, which is deferred.

## Target layout

```
frida-scripts/
├─ agent/                    # TypeScript sources
│  ├─ core/                  # logger, emit(), safe(), dedupe, config, rpc exports
│  ├─ enumerate/
│  │   ├─ android/           # Flutter-scoped Java layer
│  │   ├─ ios/               # Flutter-scoped ObjC layer
│  │   └─ flutter/           # channels, plugins, engine fingerprint, Dart snapshot
│  ├─ score/                 # attack-surface heuristics → ranked hit list
│  ├─ trace/                 # hook generation driven by the model
│  └─ attack/                # bypass packs
├─ cli/                      # host side: ingest, query, report
├─ dist/                     # built drop-ins (committed)
├─ profiles/                 # keyword packs, ignore lists, per-target config
└─ docs/
```

## Milestones

### M1 — Skeleton and core

`package.json`, `tsconfig.json`, `frida-compile` build, ESLint, `@types/frida-gum`,
CI that builds and lints. Then `agent/core/`:

- `emit()` — structured records over `send()`, terminal rendering is one
  consumer among several, not the only output path.
- `safe(fn)` — a failed hook logs once and the run continues. Today a single
  missing class takes out the section.
- `dedupe()` — the current URL and channel hooks will repeat identical records
  indefinitely.
- Spawn-gate correctness: replace `setTimeout(..., 1000)` with `Java.perform`
  plus a `System.loadLibrary` hook. The current delay is a race that either
  misses early pinning/crypto init or fires before the classloader is ready.

Add LICENSE and an authorized-use notice.

### M2 — Flutter channel enumeration

Supersedes `flutter/{and,ios}-flr-class-enum.js`. Beyond what those do today:

- **Method-level capture, not just channel names.** Hook
  `setMethodCallHandler` and read `MethodCall.method` / `.arguments`, plus the
  result passed to `Result.success`. The useful record is
  `security/root_check → isRooted() → true`, not the bare channel name.
- **Late-attach recovery.** Hook the binary messenger
  (`handlePlatformMessage` / `BinaryMessenger.send`) and decode
  `StandardMethodCodec` payloads, so channels registered before the script
  attached are still recovered.
- **Plugin inventory.** `GeneratedPluginRegistrant` on Android,
  `registrarForPlugin:` on iOS — this is the app's third-party dependency list,
  and it is one of the highest-value enumeration outputs available.
- **Shared scoring.** The duplicated keyword array moves to `profiles/*.yaml`
  with weights and tags (crypto / auth / storage / root-detect / RASP-vendor /
  network), consumed by both platforms.

### M3 — Engine fingerprint and Dart snapshot

This is the "read the application's functions" layer.

- **Engine version.** `libflutter.so` / `Flutter.framework` carries a Dart SDK
  version and engine hash string. Recover it from memory. It keys everything
  downstream: snapshot format, BoringSSL offsets, known-CVE matching.
- **Build mode detection.** If the target is a debug or profile build, the Dart
  VM service is reachable and yields a complete class and function listing over
  the service protocol — free, exact enumeration. Detecting a non-release build
  shipped to production is itself a finding.
- **Snapshot location.** Locate `_kDartVmSnapshotInstructions`,
  `_kDartIsolateSnapshotInstructions`, and `_kDartIsolateSnapshotData` in
  `libapp.so`, and record their bounds in the model.
- **Release-build class recovery — stated honestly.** A Frida agent will not
  reliably parse arbitrary Dart AOT snapshots; the format is version-specific
  and shifts between SDK releases. The plan is: extract string tables and
  recoverable symbol names in-agent, and treat a full dump as a *host-side*
  step, bridging to an existing parser (blutter / reFlutter class) and merging
  its output into the same model. In-agent snapshot parsing is explicitly a
  non-goal.

### M4 — Host CLI: ingest, query, report

Agent emits JSON; the CLI ingests it into SQLite and makes it queryable —
filter channels by tag, by score, by observed return value; diff two runs of the
same app across versions. Renders a Markdown/HTML report. Run artifacts are
retained, so an engagement produces evidence rather than scrollback.

### M5 — Close the loop into attack

The point of enumerating is to aim.

- **Pinning keyed to the fingerprint.** Flutter ignores the system trust store
  and pins in BoringSSL inside `libflutter.so`. With the engine version from M3,
  target `ssl_crypto_x509_session_verify_cert_chain` by known offset for that
  build and fall back to pattern scanning, instead of scanning blind.
- **Channel-derived bypasses.** The scored channel list from M2 identifies the
  root/jailbreak and integrity channels *for this specific app*; generate
  response-tampering hooks from it rather than shipping a fixed guess list.
- **Auto-trace.** Feed the top-N scored entries back in as generated hooks
  logging arguments, returns, and backtraces.

## Known defects in the current scripts

Carried here so they are fixed during the rewrite rather than ported forward.

- `and-runtime-triage.js:70` — `Memory.readCString(this.getEncoded().buffer)`
  cannot work. `getEncoded()` is called inside `$init` before construction
  completes, and a Java `byte[]` has no `.buffer`. The empty `catch` hides it,
  so the ASCII key branch has never produced output.
- `ios-runtime-triage.js:47` — `indicators` is declared and printed but never
  populated. Dead output path.
- `ios-runtime-triage.js:100` — hooks `- initWithString:`. Most iOS code, and
  all Swift `URL`, goes through `+ URLWithString:` or `NSURLComponents`, so most
  URLs are missed.
- `and-runtime-triage.js:104` — only `putString`. Misses
  `putInt`/`putBoolean`/`putLong`/`putStringSet`, and misses
  EncryptedSharedPreferences and DataStore entirely.
- `pi.versionCode` is deprecated since API 28; `longVersionCode` carries the
  real value on current targets.
- `java.net.URL` interception catches little real traffic — OkHttp, Retrofit,
  and Cronet do not reliably route construction through it.
- Both triage scripts use `setTimeout(..., 1000)`, a race against app startup.
- No deduplication, no structured output, no error isolation between hooks.
