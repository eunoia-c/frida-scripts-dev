/**
 * Module lookup helpers.
 *
 * Deliberately free of Java/ObjC bridge imports so that modules depending only
 * on these stay loadable off-device, which is what makes their logic testable.
 */

/**
 * Locate the Flutter engine binary.
 *
 * Android ships it as `libflutter.so`; iOS ships `Flutter.framework/Flutter`,
 * which loads under the module name `Flutter`.
 */
export function findFlutterEngine(modules: Module[]): Module | null {
  return (
    modules.find((m) => {
      const lower = m.name.toLowerCase();
      return lower === "libflutter.so" || lower === "flutter";
    }) ?? null
  );
}

/**
 * Locate the compiled Dart payload.
 *
 * Android ships `libapp.so`; iOS ships `App.framework/App`, whose module name
 * is simply `App`. Matching only the Android name — the obvious mistake — makes
 * every Dart finding silently empty on iOS.
 */
export function findDartPayload(modules: Module[]): Module | null {
  return (
    modules.find((m) => {
      const lower = m.name.toLowerCase();
      return lower === "libapp.so" || lower === "app";
    }) ?? null
  );
}

/** Human-readable name for the Dart payload, for messages that mention it. */
export function dartPayloadName(module: Module | null): string {
  return module?.name ?? "the Dart payload";
}
