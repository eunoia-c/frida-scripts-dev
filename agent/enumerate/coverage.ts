import { countOf, emit } from "../core/emit.js";
import { log, pad } from "../core/log.js";
import type { CoverageRecord } from "../core/types.js";

/**
 * Report what this run actually observed, and why it may be incomplete.
 *
 * Enumeration completeness is a function of how far the app ran, which makes a
 * bare count actively misleading. A run that produced one plugin and no
 * channels looks identical to a genuinely small app — but it is far more often
 * an app that exited during startup, and an analyst who reports "minimal native
 * attack surface" from that has drawn a conclusion the data does not support.
 *
 * So the tool says so itself rather than leaving it to whoever reads the log.
 */

/** Below this, a plugin count means startup almost certainly did not finish. */
const SPARSE_PLUGIN_COUNT = 3;

export interface CoverageInput {
  /** Whether a Flutter engine was detected, so warnings can be specific. */
  isFlutter: boolean;
}

export function reportCoverage({ isFlutter }: CoverageInput): void {
  const channels = countOf("channel");
  const calls = countOf("call");
  const results = countOf("result");
  const plugins = countOf("plugin");
  const errors = countOf("error");

  const warnings: string[] = [];

  if (isFlutter && channels === 0) {
    warnings.push(
      "no channels observed — the app probably exited before registering any " +
        "(a device-integrity block does exactly this), or its classes were unreachable",
    );
  }

  if (isFlutter && plugins > 0 && plugins < SPARSE_PLUGIN_COUNT) {
    warnings.push(
      "very few plugins — a Flutter app that finished starting registers many, " +
        "so startup was probably cut short",
    );
  }

  if (channels > 0 && calls === 0) {
    warnings.push(
      "channels registered but no traffic — hooks only report what crosses them, " +
        "so navigate the app (log in, open features) and watch again",
    );
  }

  if (calls > 0 && results === 0) {
    warnings.push("calls seen but no replies captured — return values may not be resolving");
  }

  if (errors > 0) {
    warnings.push(
      errors + " hook site(s) reported a failure — see the [-] lines for which ones",
    );
  }

  emit<CoverageRecord>("coverage", { channels, calls, results, plugins, errors, warnings });

  log.section("Coverage");
  log.info(pad("Channels", 14) + ": " + channels);
  log.info(pad("Calls", 14) + ": " + calls + " (" + results + " with replies)");
  log.info(pad("Plugins", 14) + ": " + plugins);

  for (const warning of warnings) {
    log.warn(warning);
  }

  // Stated unconditionally and last, because it is true of every run: what is
  // here is a lower bound on the app's surface, never a census of it.
  log.detail("this is a floor, not a census — absence here is not absence in the app");
}
