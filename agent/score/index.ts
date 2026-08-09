import profile from "../../profiles/default.json";
import { getConfig } from "../core/config.js";

export interface Score {
  score: number;
  tags: string[];
  /** True when the name matched an ignore entry — noise, not surface. */
  ignored: boolean;
}

interface TagRule {
  tag: string;
  weight: number;
  keywords: string[];
}

const rules: TagRule[] = profile.tags.map((t) => ({
  tag: t.tag,
  weight: t.weight,
  keywords: t.keywords.map((k) => k.toLowerCase()),
}));

const ignore: string[] = profile.ignore.map((i) => i.toLowerCase());

/**
 * Score a channel, method, or plugin name against the profile.
 *
 * Substring matching, deliberately: channel names are namespaced strings like
 * `com.vendor.app/security_check`, and the interesting token is almost never
 * the whole name. The cost is false positives on names that merely contain a
 * keyword, which is why `ignore` exists and why scores are ranked rather than
 * treated as verdicts.
 */
export function score(name: string): Score {
  const lower = name.toLowerCase();

  if (ignore.some((entry) => lower.includes(entry))) {
    return { score: 0, tags: [], ignored: true };
  }

  let total = 0;
  const tags: string[] = [];

  for (const rule of rules) {
    if (rule.keywords.some((keyword) => lower.includes(keyword))) {
      total += rule.weight;
      tags.push(rule.tag);
    }
  }

  return { score: total, tags, ignored: false };
}

/** True when a score clears the configured threshold. */
export function isInteresting(s: Score): boolean {
  return !s.ignored && s.score >= getConfig().scoreThreshold;
}

export const profileName: string = profile.name;
