import Java from "frida-java-bridge";

import { log } from "../core/log.js";
import { safe } from "../core/safe.js";
import { record } from "./finding.js";

/**
 * MSTG checks answerable from the app's own metadata at runtime.
 *
 * These are normally done by unzipping the APK and grepping the decoded
 * manifest. Every value below comes instead from PackageManager and
 * ApplicationInfo inside the running process, which needs no APK, no jadx, and
 * no separate tooling — and reports what the system actually resolved rather
 * than what the manifest source said.
 *
 * That distinction matters on merged manifests: a library can contribute
 * attributes the app's own AndroidManifest.xml never mentions.
 */

// ApplicationInfo flag bits (frozen platform constants).
const FLAG_DEBUGGABLE = 1 << 1;
const FLAG_ALLOW_BACKUP = 1 << 15;
const FLAG_USES_CLEARTEXT_TRAFFIC = 1 << 27;

// PackageManager query flags.
const GET_ACTIVITIES = 0x0001;
const GET_RECEIVERS = 0x0002;
const GET_SERVICES = 0x0004;
const GET_PROVIDERS = 0x0008;
const GET_PERMISSIONS = 0x1000;
const GET_SIGNING_CERTIFICATES = 0x08000000;

/**
 * Permissions worth calling out individually.
 *
 * Not "dangerous" in the Android protection-level sense — these are the ones
 * that most often turn out to be broader than the app's features justify, which
 * is what MSTG-PLATFORM-1 is actually asking about.
 */
const NOTABLE_PERMISSIONS: Record<string, string> = {
  "android.permission.REQUEST_INSTALL_PACKAGES": "can prompt to install APKs",
  "android.permission.QUERY_ALL_PACKAGES": "enumerates every installed app",
  "android.permission.MANAGE_EXTERNAL_STORAGE": "full shared-storage access",
  "android.permission.SYSTEM_ALERT_WINDOW": "draws over other apps (overlay attacks)",
  "android.permission.READ_SMS": "reads SMS, including OTPs",
  "android.permission.RECEIVE_SMS": "receives SMS, including OTPs",
  "android.permission.READ_CONTACTS": "reads the address book",
  "android.permission.WRITE_CONTACTS": "modifies the address book",
  "android.permission.ACCESS_FINE_LOCATION": "precise location",
  "android.permission.ACCESS_BACKGROUND_LOCATION": "location while backgrounded",
  "android.permission.RECORD_AUDIO": "microphone",
  "android.permission.CAMERA": "camera",
  "android.permission.READ_PHONE_STATE": "device and subscriber identifiers",
  "android.permission.READ_CALL_LOG": "call history",
  "android.permission.GET_ACCOUNTS": "device account list",
  "android.permission.WRITE_EXTERNAL_STORAGE": "writes to shared storage",
  "android.permission.READ_EXTERNAL_STORAGE": "reads shared storage",
};

interface Component {
  name: string;
  exported: boolean;
  permission: string | null;
}

function readComponents(array: any): Component[] {
  const out: Component[] = [];
  if (array === null || array === undefined) {
    return out;
  }

  for (let i = 0; i < array.length; i++) {
    const entry = array[i];
    if (entry === null || entry === undefined) {
      continue;
    }
    safe("audit/component", () => {
      out.push({
        name: String(entry.name.value),
        exported: Boolean(entry.exported.value),
        permission:
          entry.permission !== undefined && entry.permission.value !== null
            ? String(entry.permission.value)
            : null,
      });
    });
  }

  return out;
}

function checkDebuggable(appInfo: any): void {
  const flags: number = appInfo.flags.value;
  const debuggable = (flags & FLAG_DEBUGGABLE) !== 0;

  record({
    id: "MSTG-CODE-2",
    title: "Built in release mode (non-debuggable)",
    status: debuggable ? "fail" : "pass",
    severity: debuggable ? "high" : "info",
    evidence: [
      "ApplicationInfo.flags FLAG_DEBUGGABLE = " + debuggable,
      "targetSdkVersion = " + appInfo.targetSdkVersion.value,
    ],
    note: debuggable
      ? "a debuggable build lets any user attach a debugger and read process memory"
      : undefined,
  });
}

function checkBackup(appInfo: any): void {
  const flags: number = appInfo.flags.value;
  const allowBackup = (flags & FLAG_ALLOW_BACKUP) !== 0;
  const targetSdk: number = appInfo.targetSdkVersion.value;

  const evidence = [
    "ApplicationInfo.flags FLAG_ALLOW_BACKUP = " + allowBackup,
    "targetSdkVersion = " + targetSdk,
  ];

  if (allowBackup && targetSdk >= 31) {
    evidence.push(
      "targetSdk >= 31: dataExtractionRules governs what is actually included",
    );
  }

  record({
    id: "MSTG-STORAGE-8",
    title: "No sensitive data in OS-generated backups",
    status: allowBackup ? "review" : "pass",
    severity: allowBackup ? "medium" : "info",
    confidence: allowBackup ? "medium" : "high",
    evidence,
    note: allowBackup
      ? "backup is enabled (the platform default). Confirm what it includes with " +
        "`adb backup` or by reviewing android:dataExtractionRules / fullBackupContent"
      : undefined,
  });
}

function checkCleartext(appInfo: any): void {
  const flags: number = appInfo.flags.value;
  const cleartext = (flags & FLAG_USES_CLEARTEXT_TRAFFIC) !== 0;

  record({
    id: "MSTG-NETWORK-1",
    title: "Cleartext traffic is not permitted",
    status: cleartext ? "review" : "pass",
    severity: cleartext ? "medium" : "info",
    confidence: "medium",
    evidence: ["ApplicationInfo.flags FLAG_USES_CLEARTEXT_TRAFFIC = " + cleartext],
    note: cleartext
      ? "cleartext is allowed at the application level; a network security config " +
        "may still restrict it per-domain — check res/xml/network_security_config.xml"
      : undefined,
  });
}

function checkPermissions(packageInfo: any): void {
  const requested = packageInfo.requestedPermissions.value;

  if (requested === null || requested === undefined) {
    record({
      id: "MSTG-PLATFORM-1",
      title: "Requests only the minimum permissions necessary",
      status: "inconclusive",
      evidence: ["PackageManager returned no requestedPermissions array"],
    });
    return;
  }

  const all: string[] = [];
  for (let i = 0; i < requested.length; i++) {
    all.push(String(requested[i]));
  }

  const notable = all.filter((p) => NOTABLE_PERMISSIONS[p] !== undefined);

  const evidence = [all.length + " permission(s) requested"];
  for (const permission of notable) {
    evidence.push("  " + permission + " — " + NOTABLE_PERMISSIONS[permission]);
  }

  record({
    id: "MSTG-PLATFORM-1",
    title: "Requests only the minimum permissions necessary",
    // Minimality is a judgement against the app's features; the tool supplies
    // the list and the reasons, not the verdict.
    status: "review",
    severity: notable.length > 0 ? "low" : "info",
    evidence,
    note: "compare each against features the app actually offers",
  });
}

function checkExportedComponents(packageInfo: any): void {
  const groups: Array<{ label: string; items: Component[] }> = [
    { label: "activity", items: readComponents(packageInfo.activities.value) },
    { label: "service", items: readComponents(packageInfo.services.value) },
    { label: "receiver", items: readComponents(packageInfo.receivers.value) },
    { label: "provider", items: readComponents(packageInfo.providers.value) },
  ];

  const exposed: string[] = [];
  let total = 0;

  for (const group of groups) {
    for (const item of group.items) {
      total++;
      if (!item.exported) {
        continue;
      }
      // An exported component guarded by a permission is a normal pattern; an
      // unguarded one is the thing worth looking at.
      const guard = item.permission === null ? "no permission" : "permission=" + item.permission;
      exposed.push("  [" + group.label + "] " + item.name + " (" + guard + ")");
    }
  }

  const unguarded = exposed.filter((line) => line.includes("no permission")).length;

  record({
    id: "MSTG-PLATFORM-4",
    title: "No sensitive functionality exported via IPC",
    status: unguarded > 0 ? "review" : "pass",
    severity: unguarded > 0 ? "medium" : "info",
    evidence:
      exposed.length > 0
        ? [
            total + " component(s), " + exposed.length + " exported, " + unguarded + " unguarded",
            ...exposed,
          ]
        : [total + " component(s), none exported"],
    note:
      unguarded > 0
        ? "probe each unguarded component with `adb shell am start/startservice/broadcast`"
        : undefined,
  });
}

function checkSigning(packageInfo: any): void {
  const digests = safe("audit/signing", () => {
    const signingInfo = packageInfo.signingInfo.value;
    if (signingInfo === null || signingInfo === undefined) {
      return null;
    }

    const signers = signingInfo.getApkContentsSigners();
    const MessageDigest = Java.use("java.security.MessageDigest");
    const out: string[] = [];

    for (let i = 0; i < signers.length; i++) {
      const bytes = signers[i].toByteArray();
      const md = MessageDigest.getInstance("SHA-256");
      const digest = md.digest(bytes);

      let hex = "";
      for (let b = 0; b < digest.length; b++) {
        hex += ("0" + (digest[b] & 0xff).toString(16)).slice(-2);
      }
      out.push(hex.toUpperCase());
    }

    return { out, multiple: Boolean(signingInfo.hasMultipleSigners()) };
  });

  if (digests === undefined || digests === null) {
    record({
      id: "MSTG-CODE-1",
      title: "Signed with a valid certificate",
      status: "inconclusive",
      evidence: ["signing info unavailable through PackageManager"],
      note: "verify with `apksigner verify --verbose base.apk`",
    });
    return;
  }

  record({
    id: "MSTG-CODE-1",
    title: "Signed with a valid certificate",
    status: "review",
    confidence: "medium",
    evidence: [
      digests.out.length + " signer(s), multiple signers = " + digests.multiple,
      ...digests.out.map((d) => "  SHA-256 " + d),
    ],
    // The signature scheme version is not exposed here, and it is part of the
    // requirement, so this cannot be a pass on runtime data alone.
    note:
      "signature scheme versions (v1/v2/v3) are not exposed at runtime — " +
      "confirm with `apksigner verify --verbose base.apk`",
  });
}

/**
 * Checks that runtime cannot answer at all.
 *
 * Recorded explicitly so the checklist is complete and the gaps are visible,
 * rather than looking like everything passed.
 */
function recordManualChecks(): void {
  const manual: Array<{ id: string; title: string; note: string }> = [
    {
      id: "MSTG-ARCH-9",
      title: "A forced-update mechanism exists",
      note: "exercise the app against an older version, or look for a version-check call in the traffic",
    },
    {
      id: "MSTG-STORAGE-9",
      title: "Sensitive data removed from views when backgrounded",
      note: "background the app and inspect the task-switcher snapshot; FLAG_SECURE prevents it",
    },
    {
      id: "MSTG-STORAGE-11",
      title: "Enforces a minimum device-access-security policy",
      note: "check behaviour with no device passcode set",
    },
    {
      id: "MSTG-AUTH-1",
      title: "Authentication is performed at the remote endpoint",
      note: "intercept the login flow and confirm the decision is server-side",
    },
    {
      id: "MSTG-NETWORK-3",
      title: "Verifies the X.509 certificate of the remote endpoint",
      note: "set Burp to a self-signed certificate and confirm the connection fails",
    },
    {
      id: "MSTG-NETWORK-4",
      title: "Pins the endpoint certificate or public key",
      note:
        "Flutter pins in BoringSSL inside libflutter.so and ignores the system trust store, " +
        "so a working CA-installed proxy does not by itself prove there is no pinning",
    },
    {
      id: "MSTG-PLATFORM-2",
      title: "External and user input is validated",
      note: "requires exercising each input path",
    },
  ];

  for (const entry of manual) {
    record({ id: entry.id, title: entry.title, status: "manual", note: entry.note });
  }
}

/**
 * Run the metadata-derived MSTG checks.
 *
 * Requires an Application context, so call this once the app has started.
 */
export function auditAndroid(): void {
  Java.perform(() => {
    log.section("MSTG Checks (app metadata)");

    const ok = safe("audit/android", () => {
      const ActivityThread = Java.use("android.app.ActivityThread");
      const app = ActivityThread.currentApplication();
      if (app === null) {
        return false;
      }

      const context = app.getApplicationContext();
      const packageName: string = context.getPackageName();
      const pm = context.getPackageManager();

      const flags =
        GET_ACTIVITIES |
        GET_RECEIVERS |
        GET_SERVICES |
        GET_PROVIDERS |
        GET_PERMISSIONS |
        GET_SIGNING_CERTIFICATES;

      const packageInfo = pm.getPackageInfo(packageName, flags);
      const appInfo = context.getApplicationInfo();

      checkDebuggable(appInfo);
      checkBackup(appInfo);
      checkCleartext(appInfo);
      checkPermissions(packageInfo);
      checkExportedComponents(packageInfo);
      checkSigning(packageInfo);

      return true;
    });

    if (ok !== true) {
      log.warn("app context unavailable — metadata checks skipped");
      return;
    }

    recordManualChecks();
    log.detail("checks marked MANUAL cannot be answered at runtime — they are not passes");
  });
}
