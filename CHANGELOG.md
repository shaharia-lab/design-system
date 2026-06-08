# Changelog

All notable changes to `@shaharia-lab/design-system` are documented here.
This project adheres to [Semantic Versioning](https://semver.org/).

## [0.2.0] — Unreleased

Accessibility pass on the foundation. No component API changes; consuming
services pick up the fixes by re-importing the tokens.

### Changed
- **Focus ring contrast (BREAKING-ish token value).** `--ring` was the shadcn
  default `oklch(0.708 0 0)`, which is only **2.58:1** on white and fails
  WCAG 2.2 SC 1.4.11 (3:1 for focus indicators). Light `--ring` /
  `--sidebar-ring` → `oklch(0.45 0 0)` (**7.46:1**); dark → `oklch(0.6 0 0)`
  (**5:1** on bg, 4.54:1 on raised cards). Visual change only on keyboard
  focus — darker, clearly visible ring.

### Added
- **Accessibility baseline** (`tokens/a11y.css`, exported as `./a11y.css` and
  included in the barrel) — token-driven `:focus-visible` ring on all
  interactive elements, `prefers-reduced-motion` handling (WCAG 2.3.3),
  `.sr-only` / `.not-sr-only` utilities, and a `.skip-link` affordance.
- **Accessibility** documentation page in `docs/` — verified contrast table,
  focus-ring spec, keyboard map, and label / alt-text rules.

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
