/**
 * Agent configuration.
 *
 * Defaults are tuned for the drop-in case (`frida -U -f app -l dist/x.js`):
 * pretty terminal output on, structured send() off, so a plain run looks like
 * the old scripts did. A host-side driver flips `structured` on via
 * rpc.exports.configure() and consumes the records instead.
 */

export interface Config {
  /** Render human-readable coloured lines to the terminal. */
  pretty: boolean;
  /** Emit structured records over send(). */
  structured: boolean;
  /** ANSI colour in pretty output. */
  color: boolean;
  /** Log every channel found, not just ones the scorer flagged. */
  verbose: boolean;
  /** Capture arguments and return values of platform-channel calls. */
  captureCalls: boolean;
  /** Truncate any captured argument or return value to this many characters. */
  maxValueLength: number;
  /** Upper bound on remembered dedupe keys, so a chatty app cannot exhaust memory. */
  maxDedupeKeys: number;
  /** Minimum score for a channel to be treated as interesting. */
  scoreThreshold: number;
  /**
   * Scan the Dart payload for library URIs.
   *
   * Worth disabling on very large payloads, or when only channels matter: the
   * scan walks the snapshot data section and costs time proportional to it.
   */
  dartLibraryScan: boolean;
}

const config: Config = {
  pretty: true,
  structured: false,
  color: true,
  verbose: true,
  captureCalls: true,
  maxValueLength: 512,
  maxDedupeKeys: 8192,
  scoreThreshold: 1,
  dartLibraryScan: true,
};

export function getConfig(): Config {
  return config;
}

export function configure(patch: Partial<Config>): Config {
  Object.assign(config, patch);
  return config;
}
