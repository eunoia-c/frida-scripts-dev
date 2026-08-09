# Authorized use

These scripts instrument applications at runtime: they read process memory,
intercept function calls, and record arguments and return values, including
credentials, tokens, and key material when an app handles them.

Use them only against applications you own, or where you have explicit written
authorization from the owner — a signed engagement scope, a bug bounty program
whose rules permit runtime instrumentation of the mobile client, or your own
research device running your own build.

Some practical notes that follow from what these scripts capture:

- **Output contains secrets.** Captured channel arguments and results routinely
  include session tokens, device identifiers, and key material. Treat run
  artifacts as sensitive: they belong with the engagement evidence, under the
  same handling rules, not in a shared drive or a screenshot in chat.
- **Redact before reporting.** Clamp lengths and strip values you do not need
  before a finding leaves your machine.
- **Instrumentation is not free.** Hooks change timing and can change behavior.
  Do not run these against production systems, shared environments, or anyone
  else's account data.
- **Third parties are out of scope by default.** An app's traffic and plugins
  touch services you were not authorized to test. Authorization to test an app
  is not authorization to test everything it talks to.

If you do not have authorization, do not run these.
