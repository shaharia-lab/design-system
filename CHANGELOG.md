# Changelog

All notable changes to `@shaharia-lab/design-system` are documented here.
This project adheres to [Semantic Versioning](https://semver.org/).

## [0.4.0] — 2026-06-08

Brand / logo overhaul. The marks are now theme-aware and the wordmark uses the
brand typeface. No token changes; consumers re-importing `brand/*` pick this up.

### Added
- **`brand/logo-mono.svg`** — single-ink activity-pulse glyph, no tile. For
  watermarks, dense UI, CSS masks and one-colour print. Pure `currentColor`.

### Changed
- **`brand/logo.svg` and `brand/logo_wu.svg` are now theme-aware.** The tile is
  `fill="currentColor"` and the glyph/text knock out to `var(--background)`, so
  an **inlined** mark flips automatically in dark mode (near-black tile in
  light → near-white in dark). Loaded as an `<img>` it falls back to the static
  black-on-white mark — visually identical to before, so no consumer breaks.
- **Wordmark typeface fixed.** `logo_wu.svg` set the wordmark in `Arial`; it now
  uses the brand stack (`'Inter', system-ui, …`). Inlined it renders in Inter;
  as an `<img>` it falls back to system-ui — never Arial.

### Docs
- Reworked the **Logo** specimen: live theme-flip demo, variant table,
  inline-vs-`<img>` guidance, CSS-lockup pattern, do/don'ts, and the
  package-only distribution rule.
- De-duplicated the logo assets — the docs site now references the canonical
  `brand/*.svg` (inlined) instead of keeping its own copies under `docs/ds/`.

## [0.3.0] — 2026-06-08

Semantic status colour roles. The system previously shipped only
`--destructive` for "meaning"; consumers encoding success / warning / info
had no token to map to and were inventing their own. These are **functional**
status colours, not brand accent — the brand stays monochrome via `--primary`.

### Added
- **`--success` / `--warning` / `--info`** roles, each with a `-foreground`
  (text/icon on the solid fill) and a `-subtle` (soft tinted alert panel)
  variant, in both light and `.dark`. All foreground pairings are WCAG-checked:
  light solids 4.95 / 6.55 / 5.23:1, dark solids 7.13 / 8.81 / 6.28:1, and
  `-subtle` panels carry body text at ≈14–17:1. Hues are in-gamut OKLCH
  (green 150 · amber 75–80 · blue 245) at `--destructive`-level chroma.
- Tailwind utilities for all nine roles (`bg-success`, `text-warning-foreground`,
  `bg-info-subtle`, …) via `tokens/theme.css`.
- `tokens.json` mirror entries for every new role (light + dark).

### Usage
On a `-subtle` alert panel: background = `--x-subtle`, body text =
`--foreground`, icon / border / title accent = `--x` (the solid). Solid badges
and buttons use `--x` + `--x-foreground`.

## [0.2.0] — 2026-06-08

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

## [0.1.0] — 2026-06-07

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
