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
export function guard<A extends unknown[], R, T = unknown>(
  where: string,
  fn: (this: T, ...args: A) => R,
): (this: T, ...args: A) => R | undefined {
  // Deliberately a function expression, not an arrow. Frida invokes Interceptor
  // callbacks with `this` bound to the InvocationContext, and replaced Java
  // methods with `this` bound to the instance. An arrow function captures the
  // enclosing `this` instead of accepting the bound one, which silently hands
  // every callback `this === undefined`.
  return function (this: T, ...args: A): R | undefined {
    try {
      return fn.apply(this, args);
    } catch (error) {
      report(where, error);
      return undefined;
    }
  };
}

/**
 * Install an observer on a Java method overload without changing behaviour.
 *
 * `guard` is the wrong tool for a Java method replacement: when instrumentation
 * throws, guard returns undefined, and a constructor or setter that never ran
 * leaves the app holding a half-built object. That is not a hypothetical — it
 * terminated the first real target this agent was pointed at.
 *
 * Here the observer is contained and the original is invoked unconditionally,
 * so a failure in our code costs a log line and nothing else.
 */
export function observe(
  where: string,
  overload: { implementation: unknown; apply: (self: unknown, args: unknown[]) => unknown },
  observer: (self: any, args: any[]) => void,
): void {
  overload.implementation = function (this: unknown, ...args: unknown[]): unknown {
    try {
      observer(this, args);
    } catch (error) {
      report(where, error);
    }
    return overload.apply(this, args);
  };
}

/**
 * Resolve a Java class that may legitimately be absent.
 *
 * Flutter renames and removes embedder classes between versions, so "class not
 * found" is usually a fact about the target rather than a failure worth
 * reporting. Returns null instead of raising, and stays quiet.
 */
export function optionalClass<T = any>(use: (name: string) => T, className: string): T | null {
  try {
    return use(className);
  } catch {
    return null;
  }
}
