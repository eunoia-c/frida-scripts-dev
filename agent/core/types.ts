/**
 * The record schema every agent module emits.
 *
 * This is the contract between the agent and any host-side consumer (the M4
 * CLI, a jq pipeline, or the terminal renderer). Adding fields is safe; changing
 * the meaning of an existing one is not — bump SCHEMA_VERSION if that happens.
 */

export const SCHEMA_VERSION = 1;

export type Platform = "android" | "ios" | "unknown";

/** Channel kinds Flutter exposes across the platform boundary. */
export type ChannelKind = "method" | "event" | "message";

export type RecordType =
  | "run.start"
  | "target"
  | "module"
  | "engine"
  | "dart"
  | "dart.library"
  | "plugin"
  | "channel"
  | "call"
  | "result"
  | "error"
  | "finding"
  | "coverage"
  | "run.end";

export interface BaseRecord {
  /** Schema version, so a host consumer can reject records it cannot read. */
  v: number;
  /** Milliseconds since the agent started, not wall clock — the device clock is untrusted. */
  t: number;
  type: RecordType;
}

export interface TargetRecord extends BaseRecord {
  type: "target";
  platform: Platform;
  /** Android package name or iOS bundle identifier. */
  id: string | null;
  versionName: string | null;
  versionCode: string | null;
  pid: number;
}

export interface ModuleRecord extends BaseRecord {
  type: "module";
  name: string;
  base: string;
  size: number;
  path: string;
}

export interface EngineRecord extends BaseRecord {
  type: "engine";
  /** Detected engine name, or "Native" when no managed runtime is present. */
  engine: string;
  /** Whether a Dart AOT payload (libapp.so) is loaded. */
  hasDartPayload: boolean;
}

/** One snapshot section located in the Dart payload. */
export interface SnapshotSection {
  name: string;
  address: string;
  /** Byte length, when the symbol table carries it; null on stripped builds. */
  size: number | null;
}

export interface DartRecord extends BaseRecord {
  type: "dart";
  sdk: string | null;
  channel: string | null;
  arch: string | null;
  versionRaw: string | null;
  /** Inferred, not read from a flag — see buildModeEvidence. */
  buildMode: string;
  buildModeEvidence: string[];
  snapshot: SnapshotSection[];
  libraryCount: number;
  /** Distinct Dart package names recovered from the snapshot. */
  packages: string[];
}

export interface DartLibraryRecord extends BaseRecord {
  type: "dart.library";
  uri: string;
  package: string | null;
}

export interface PluginRecord extends BaseRecord {
  type: "plugin";
  name: string;
  source: string;
}

export interface ChannelRecord extends BaseRecord {
  type: "channel";
  name: string;
  kind: ChannelKind;
  /** How the channel was found: "registration" or "messenger" (late-attach recovery). */
  via: string;
  score: number;
  tags: string[];
}

export interface CallRecord extends BaseRecord {
  type: "call";
  channel: string;
  method: string;
  args: string | null;
  score: number;
  tags: string[];
}

export interface ResultRecord extends BaseRecord {
  type: "result";
  channel: string;
  method: string;
  /** "success" | "error" | "notImplemented" */
  outcome: string;
  value: string | null;
}

export interface ErrorRecord extends BaseRecord {
  type: "error";
  where: string;
  message: string;
}

export interface RunStartRecord extends BaseRecord {
  type: "run.start";
  agent: string;
  platform: Platform;
}

export interface RunEndRecord extends BaseRecord {
  type: "run.end";
  reason: string;
}

/**
 * How a check came out.
 *
 * `manual` and `inconclusive` are first-class on purpose. A checklist that
 * silently drops what it could not test reads as a clean bill of health, which
 * is the same failure mode as a thin enumeration passing for a small attack
 * surface.
 */
export type CheckStatus =
  /** Evidence shows the control is in place. */
  | "pass"
  /** Evidence shows it is not. */
  | "fail"
  /** Facts gathered, but the verdict is a human judgement. */
  | "review"
  /** Cannot be answered at runtime; needs a person or another tool. */
  | "manual"
  /** Tried and could not determine. */
  | "inconclusive";

export type Severity = "info" | "low" | "medium" | "high";
export type Confidence = "high" | "medium" | "low";

export interface FindingRecord extends BaseRecord {
  type: "finding";
  /** MASVS/MSTG identifier, e.g. "MSTG-CODE-2". */
  id: string;
  title: string;
  status: CheckStatus;
  severity: Severity;
  confidence: Confidence;
  /** Concrete observations supporting the status — never empty for pass/fail. */
  evidence: string[];
  /** What to do next, especially for manual and review outcomes. */
  note: string | null;
}

/**
 * What this run actually managed to observe.
 *
 * Enumeration completeness is a function of how far the app ran, so counts
 * alone are misleading. The warnings say why a result may be a floor rather
 * than a census.
 */
export interface CoverageRecord extends BaseRecord {
  type: "coverage";
  channels: number;
  calls: number;
  results: number;
  plugins: number;
  errors: number;
  /** Human-readable reasons this run may be incomplete. */
  warnings: string[];
}

export type AgentRecord =
  | RunStartRecord
  | TargetRecord
  | ModuleRecord
  | EngineRecord
  | DartRecord
  | DartLibraryRecord
  | PluginRecord
  | ChannelRecord
  | CallRecord
  | ResultRecord
  | ErrorRecord
  | FindingRecord
  | CoverageRecord
  | RunEndRecord;
