import Java from "frida-java-bridge";

import { clamp, Seen } from "../core/dedupe.js";
import { log } from "../core/log.js";
import { observe, optionalClass, safe } from "../core/safe.js";
import { record } from "./finding.js";

/**
 * WebView and logging checks, observed rather than grepped.
 *
 * The usual method is to grep decompiled source for `setJavaScriptEnabled` and
 * friends. On a Flutter app that produces a false positive for every app using
 * a WebView plugin, because the plugin's bundled Java contains all of these
 * calls whether or not the app ever reaches them — and it cannot tell you what
 * value was passed.
 *
 * Hooking answers the question the check is actually asking: was this setting
 * applied to a WebView this app really created?
 */

const seen = new Seen();

function use(name: string): any {
  return Java.use(name);
}

/** Setting name -> the MSTG check it belongs to and how bad `true` is. */
interface SettingCheck {
  method: string;
  id: string;
  title: string;
  /** Whether `true` is the insecure direction. */
  trueIsBad: boolean;
  severity: "low" | "medium" | "high";
  note: string;
}

const SETTINGS: SettingCheck[] = [
  {
    method: "setJavaScriptEnabled",
    id: "MSTG-PLATFORM-5",
    title: "JavaScript disabled in WebViews unless required",
    trueIsBad: true,
    severity: "medium",
    note: "confirm the WebView only loads content the app controls",
  },
  {
    method: "setAllowFileAccess",
    id: "MSTG-PLATFORM-6",
    title: "WebView allows only the minimum protocol handlers",
    trueIsBad: true,
    severity: "medium",
    note: "file:// access lets loaded content reach the app's private storage",
  },
  {
    method: "setAllowFileAccessFromFileURLs",
    id: "MSTG-PLATFORM-6",
    title: "WebView allows only the minimum protocol handlers",
    trueIsBad: true,
    severity: "high",
    note: "file:// pages can read other local files",
  },
  {
    method: "setAllowUniversalAccessFromFileURLs",
    id: "MSTG-PLATFORM-6",
    title: "WebView allows only the minimum protocol handlers",
    trueIsBad: true,
    severity: "high",
    note: "file:// pages can issue cross-origin requests — a classic local-file exfiltration path",
  },
  {
    method: "setAllowContentAccess",
    id: "MSTG-PLATFORM-6",
    title: "WebView allows only the minimum protocol handlers",
    trueIsBad: true,
    severity: "low",
    note: "content:// provider access from web content",
  },
];

function hookWebSettings(): void {
  const WebSettings = optionalClass(use, "android.webkit.WebSettings");
  if (WebSettings === null) {
    return;
  }

  for (const setting of SETTINGS) {
    if (WebSettings[setting.method] === undefined) {
      continue;
    }

    safe("audit/webview/" + setting.method, () => {
      WebSettings[setting.method].overloads.forEach((overload: any) => {
        observe("audit/webview/" + setting.method, overload, (_self, args) => {
          const value = args[0] === true;
          const insecure = value === setting.trueIsBad;

          // Report the first occurrence of each outcome: a later secure call
          // does not undo an earlier insecure one, and vice versa.
          if (!seen.first(setting.method + ":" + String(value))) {
            return;
          }

          record({
            id: setting.id,
            title: setting.title,
            status: insecure ? "fail" : "pass",
            severity: insecure ? setting.severity : "info",
            evidence: ["WebSettings." + setting.method + "(" + value + ") called at runtime"],
            note: insecure ? setting.note : undefined,
          });
        });
      });
    });
  }
}

function hookJavascriptInterface(): void {
  const WebView = optionalClass(use, "android.webkit.WebView");
  if (WebView === null || WebView.addJavascriptInterface === undefined) {
    return;
  }

  safe("audit/webview/addJavascriptInterface", () => {
    WebView.addJavascriptInterface.overloads.forEach((overload: any) => {
      observe("audit/webview/addJavascriptInterface", overload, (_self, args) => {
        const object = args[0];
        const name = args.length > 1 ? String(args[1]) : "<unknown>";
        const className =
          object !== null && object !== undefined && object.$className !== undefined
            ? object.$className
            : "<unknown>";

        if (!seen.first("jsInterface:" + name)) {
          return;
        }

        record({
          id: "MSTG-PLATFORM-7",
          title: "Native methods exposed to a WebView are safe",
          status: "review",
          severity: "high",
          evidence: ['addJavascriptInterface(' + className + ', "' + name + '")'],
          note:
            "any @JavascriptInterface method on this object is reachable from page content — " +
            "confirm the WebView only ever loads content the app controls",
        });
      });
    });
  });
}

function hookWebContentsDebugging(): void {
  const WebView = optionalClass(use, "android.webkit.WebView");
  if (WebView === null || WebView.setWebContentsDebuggingEnabled === undefined) {
    return;
  }

  safe("audit/webview/debugging", () => {
    WebView.setWebContentsDebuggingEnabled.overloads.forEach((overload: any) => {
      observe("audit/webview/debugging", overload, (_self, args) => {
        const enabled = args[0] === true;
        if (!seen.first("webDebug:" + String(enabled))) {
          return;
        }

        record({
          id: "MSTG-CODE-2",
          title: "WebView contents are not remotely inspectable",
          status: enabled ? "fail" : "pass",
          severity: enabled ? "medium" : "info",
          evidence: ["WebView.setWebContentsDebuggingEnabled(" + enabled + ")"],
          note: enabled
            ? "the WebView's DOM and JS context are reachable over chrome://inspect"
            : undefined,
        });
      });
    });
  });
}

/** Log methods worth watching, with their android.util.Log names. */
const LOG_METHODS = ["v", "d", "i", "w", "e", "wtf"];

function hookLogging(): void {
  const Log = optionalClass(use, "android.util.Log");
  if (Log === null) {
    return;
  }

  let reported = false;

  for (const method of LOG_METHODS) {
    if (Log[method] === undefined) {
      continue;
    }

    safe("audit/log/" + method, () => {
      Log[method].overloads.forEach((overload: any) => {
        observe("audit/log/" + method, overload, (_self, args) => {
          const tag = args.length > 0 ? String(args[0]) : "";
          const message = args.length > 1 ? String(args[1]) : "";

          if (!seen.first("log:" + tag + ":" + message.slice(0, 80))) {
            return;
          }

          log.detail("[log." + method + "] " + tag + ": " + (clamp(message) ?? ""));

          // The check is about sensitive data specifically, which is a
          // judgement call on the content — so this records the surface once
          // and leaves the reading to the analyst.
          if (!reported) {
            reported = true;
            record({
              id: "MSTG-STORAGE-3",
              title: "No sensitive data written to application logs",
              status: "review",
              severity: "low",
              evidence: ["the app writes to android.util.Log — entries follow, prefixed [log.*]"],
              note:
                "read the captured entries for tokens, credentials, or PII; " +
                "note that Flutter's own print() goes to stdout, not android.util.Log",
            });
          }
        });
      });
    });
  }
}

/**
 * Install the observation-based platform checks.
 *
 * Hooks go in early so that settings applied during startup are seen; the
 * findings are recorded as the calls happen.
 */
export function auditPlatformHooks(): void {
  Java.perform(() => {
    safe("audit/platform-hooks", () => {
      hookWebSettings();
      hookJavascriptInterface();
      hookWebContentsDebugging();
      hookLogging();
    });
  });
}
