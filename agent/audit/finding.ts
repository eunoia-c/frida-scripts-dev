import { emit } from "../core/emit.js";
import { log, paint } from "../core/log.js";
import type {
  CheckStatus,
  Confidence,
  FindingRecord,
  Severity,
} from "../core/types.js";

/**
 * MASVS/MSTG check results.
 *
 * The design rule here: a check never reports `pass` or `fail` without concrete
 * evidence, and anything untestable at runtime is recorded as `manual` rather
 * than omitted. A checklist that quietly drops what it could not test looks
 * exactly like a clean result, and someone will read it that way.
 */

export interface Check {
  id: string;
  title: string;
  status: CheckStatus;
  severity?: Severity;
  confidence?: Confidence;
  evidence?: string[];
  note?: string;
}

const STATUS_LABEL: Record<CheckStatus, string> = {
  pass: "PASS  ",
  fail: "FAIL  ",
  review: "REVIEW",
  manual: "MANUAL",
  inconclusive: "UNKNWN",
};

export function record(check: Check): void {
  const severity = check.severity ?? "info";
  const confidence = check.confidence ?? "high";
  const evidence = check.evidence ?? [];

  emit<FindingRecord>("finding", {
    id: check.id,
    title: check.title,
    status: check.status,
    severity,
    confidence,
    evidence,
    note: check.note ?? null,
  });

  const head = STATUS_LABEL[check.status] + "  " + check.id + "  " + check.title;

  if (check.status === "fail") {
    log.hit(head);
  } else if (check.status === "pass") {
    log.info(paint("green", STATUS_LABEL.pass) + "  " + check.id + "  " + check.title);
  } else {
    log.note(head);
  }

  for (const line of evidence) {
    log.detail(line);
  }
  if (check.note !== undefined) {
    log.detail("→ " + check.note);
  }
}
