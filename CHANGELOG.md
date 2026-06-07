# Changelog

All notable changes to `@shaharia-lab/design-system` are documented here.
This project adheres to [Semantic Versioning](https://semver.org/).

## [0.1.0] — Unreleased

Initial extraction of the shared foundation from the product codebase.

### Added
- **Design tokens** (`tokens/tokens.css`) — shadcn/ui default theme on a
  neutral base, OKLCH colour space, with full light + `.dark` parity.
- **Tailwind v4 theme mapping** (`tokens/theme.css`) — `@theme inline` block
  exposing every token as a utility plus the derived radius scale.
- **Typography** (`tokens/fonts.css`) — system / Inter / Poppins / mono stacks.
- **Prose** (`tokens/prose.css`) — long-form styles for blog & docs.
- **Machine-readable tokens** (`tokens.json`).
- **Brand** assets (`brand/logo.svg`, `brand/logo_wu.svg`).
- **Documentation site** (`docs/`) — live, browsable reference.
