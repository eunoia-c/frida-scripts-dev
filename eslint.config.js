import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist/**", "node_modules/**"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["agent/**/*.ts"],
    languageOptions: {
      parserOptions: { project: "./tsconfig.json" },
    },
    rules: {
      // The Frida bridges (Java, ObjC) are dynamically typed by nature; the
      // enumerator constantly touches classes it cannot know at compile time.
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
      // Hooks intentionally swallow some failures; safe() logs them instead.
      "no-empty": ["error", { allowEmptyCatch: false }],
    },
  },
);
