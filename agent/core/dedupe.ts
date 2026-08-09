import { getConfig } from "./config.js";

/**
 * Bounded first-seen tracker.
 *
 * Platform channels re-register and fire continuously; without this the old
 * scripts would print the same line for the lifetime of the process. The cap
 * matters because a chatty app can otherwise grow this set without limit inside
 * the target's address space.
 */
export class Seen {
  private readonly keys = new Set<string>();
  private saturated = false;

  /** True the first time a key is offered, false on every repeat. */
  first(key: string): boolean {
    if (this.keys.has(key)) {
      return false;
    }
    if (this.keys.size >= getConfig().maxDedupeKeys) {
      // Stop tracking rather than evicting: once saturated, treat everything as
      // seen so output stays quiet instead of flapping between seen and unseen.
      this.saturated = true;
      return false;
    }
    this.keys.add(key);
    return true;
  }

  get size(): number {
    return this.keys.size;
  }

  get isSaturated(): boolean {
    return this.saturated;
  }
}

/** Truncate a captured value to the configured limit, marking any elision. */
export function clamp(value: string | null | undefined): string | null {
  if (value === null || value === undefined) {
    return null;
  }
  const max = getConfig().maxValueLength;
  return value.length <= max ? value : value.slice(0, max) + "…(+" + (value.length - max) + ")";
}
