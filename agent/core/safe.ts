import { emit } from "./emit.js";
import { log } from "./log.js";
import type { ErrorRecord } from "./types.js";

/** Sites that have already reported a failure, so a hot hook cannot spam. */
const reported = new Set<string>();

function report(where: string, error: unknown): void {
  const message = error instanceof Error ? error.message : String(error);
  if (reported.has(where)) {
    return;
  }
  reported.add(where);
  emit<ErrorRecord>("error", { where, message });
  log.warn(where + ": " + message);
}

/**
 * Run `fn`, containing any failure to this call site.
 *
 * The old scripts wrapped whole sections in one try/catch, so a single missing
 * class silently removed every hook after it. Wrapping each site individually
 * means a Flutter version that renamed one class costs you that one hook.
 */
export function safe<T>(where: string, fn: () => T): T | undefined {
  try {
    return fn();
  } catch (error) {
    report(where, error);
    return undefined;
  }
}

/**
 * Wrap a callback so a failure inside it never propagates into the app.
 *
 * An exception thrown from an Interceptor callback or a replaced Java method
 * surfaces inside the target process. For an instrumentation tool that is a
 * correctness bug: observing an app must not change whether it crashes.
 */
export function guard<A extends unknown[], R>(
  where: string,
  fn: (...args: A) => R,
): (...args: A) => R | undefined {
  return (...args: A): R | undefined => {
    try {
      return fn(...args);
    } catch (error) {
      report(where, error);
      return undefined;
    }
  };
}
