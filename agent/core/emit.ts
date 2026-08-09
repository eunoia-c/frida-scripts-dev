import { getConfig } from "./config.js";
import { SCHEMA_VERSION, type AgentRecord, type RecordType } from "./types.js";

const started = Date.now();

/** Records accumulated this run, so the model survives a scrolled-away terminal. */
const collected: AgentRecord[] = [];

/**
 * Emit one structured record.
 *
 * Terminal rendering is a separate concern handled by callers via log.*; this
 * function is the only path into the structured model. Everything the agent
 * discovers must go through here, or the host-side CLI will not see it.
 */
export function emit<T extends AgentRecord>(
  type: T["type"],
  payload: Omit<T, "v" | "t" | "type">,
): void {
  const record = {
    v: SCHEMA_VERSION,
    t: Date.now() - started,
    type,
    ...payload,
  } as unknown as T;

  collected.push(record);

  if (getConfig().structured) {
    send(record);
  }
}

/** Every record emitted so far, for rpc.exports.model(). */
export function model(): AgentRecord[] {
  return collected;
}

/** Count of records of a given type, used by the run summary. */
export function countOf(type: RecordType): number {
  return collected.filter((r) => r.type === type).length;
}

export function elapsed(): number {
  return Date.now() - started;
}
