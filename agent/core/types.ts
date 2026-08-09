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
  | "plugin"
  | "channel"
  | "call"
  | "result"
  | "error"
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
  /** "flutter", or a best-effort guess when Flutter is absent. */
  engine: string;
  /** Dart SDK version string recovered from the engine binary, when found. */
  dartSdk: string | null;
  /** Engine commit hash, when it can be parsed out of the version string. */
  engineHash: string | null;
  /** True when the Dart VM service is reachable — a debug or profile build. */
  vmServiceReachable: boolean | null;
  snapshotSymbols: string[];
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

export type AgentRecord =
  | RunStartRecord
  | TargetRecord
  | ModuleRecord
  | EngineRecord
  | PluginRecord
  | ChannelRecord
  | CallRecord
  | ResultRecord
  | ErrorRecord
  | RunEndRecord;
