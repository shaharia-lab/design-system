# Changelog

All notable changes to `@shaharia-lab/design-system` are documented here.
This project adheres to [Semantic Versioning](https://semver.org/).

## [0.7.0] — 2026-06-15

**The typography layer.** The system gained a real type foundation: a named
size scale, weight + tracking tokens, and — most importantly — a **canonical
set of semantic `.type-*` role classes** that every consuming service shares.
This replaces the duplicated `typography.tsx` shipped (byte-identical) by both
`website` and `blog`, and the ad-hoc `text-[…]` sizing in `frontend`. CSS roles
only — no React `Typography` component (that stays on the product-UI-kit side of
the package boundary; consumers compose the classes). Fully additive; light/dark
parity preserved; no existing token value changed.

### Added
- **`tokens/typography.css`** — the new source file:
  - **Size scale** — `--text-xs … --text-7xl`, each with a paired line-height
    (`--text-…-lh`). The Tailwind v4 / shadcn default ramp, now tokenised so all
    four services share one ramp. Floor is **12px (`--text-xs`)** by policy —
    no sub-12px steps.
  - **Fluid display sizes** — `--text-fluid-display/title/section/stat/lead`,
    rem-based `clamp()` so one class replaces hand-written
    `text-4xl md:text-5xl lg:text-6xl` chains and scales with the user's root
    font-size (accessibility win).
  - **Weights** — `--font-weight-normal/medium/semibold/bold` (400/500/600/700).
  - **Tracking** — `--tracking-tighter/tight/normal/wide/wider`.
  - **Semantic roles** (the public API, surface-agnostic — family inherits):
    `.type-display`, `.type-title`, `.type-section`, `.type-heading` (panel),
    `.type-card-title`, `.type-stat` (tabular-nums), `.type-lead`, `.type-body`,
    `.type-body-sm`, `.type-label`, `.type-caption`, `.type-overline`,
    `.type-code`. Reconciled to be a true **superset** of the variants
    website/blog were already using (display, h1→title, section, panel→heading,
    cardTitle→card-title, stat, lead, body, small→caption). `.type-lead` and
    `.type-caption` bake in the muted colour; the display tier + lead are fluid.
- **Avatar / identity palette** — `--avatar-1/2/3` (light + dark, lifted on the
  dark card surface). A small **categorical** palette in the spirit of
  `--chart-*` — the one place the monochrome brand tolerates hue, for telling
  people apart, not decoration. Exposed as `bg-avatar-1…3` via `theme.css`.
- **`tokens/theme.css`** — Tailwind v4 `@theme` keys for the scale
  (`--text-*` + `--text-*--line-height`), weights, tracking, and the avatar
  colours, so `text-2xl`, `font-semibold`, `tracking-tight`, `bg-avatar-2`
  resolve from these tokens.
- **`tokens.json`** — machine-readable mirror: `text`, `textFluid`,
  `fontWeight`, `tracking`, `type` (roles), and `color.*.avatar-*`.
- **`docs/specimens/type-scale.html`** — specimen for the ramp + all roles,
  light/dark.

### Migration (consumers, tracked separately)
- `website` + `blog`: delete `src/components/ui/typography.tsx`; map its
  variants to the `.type-*` roles (1:1 — see role list above).
- `frontend`: replace ad-hoc `text-[…]` with the scale/roles; consolidate the
  13px tier to `text-sm` and the 15px tier to `.type-card-title`; drop sub-12px
  sizes. (App-side cleanup, not a DS change.)

## [0.6.0] — 2026-06-09

**The package is no longer tokens-only.** It now also ships brand React
components behind a new `./react` entry, compiled from TypeScript source —
alongside a batch of additive foundation tokens (elevation, spacing, brand
aliases). The token layer stays buildless: consumers that only import the
CSS/JSON pull in no React and no build output.

### Added
- **`@shaharia-lab/design-system/react`** — brand React primitives:
  - `Logo`, `LogoMark`, `LogoGlyph`, `LogoLockup` — theme-aware SVG marks
    (`currentColor` tile knocks out to `--background`, so they flip in dark for
    free), with programmatic `size`/`radius` and the Inter wordmark lockup.
  - `Icon` (+ `ICON_NAMES`, `IconName`) — a curated inline Lucide-style set
    (33 glyphs), `currentColor`, 2px stroke, `aria-hidden` unless given a
    `title`. A zero-dependency subset for buildless/common use — **not** a
    Lucide replacement; use `lucide-react` for the full set in production.
  - `react >=18` is a **peer dependency**; `react-dom` and the test stack are
    dev-only.
- **Build + test tooling** — tsup (`src/react/` → `dist/react/`, ESM + types),
  TypeScript typecheck, and vitest + @testing-library/react component tests.
  CI now runs `typecheck` → `test` → `build` before the existing token checks;
  `release.yml` builds `dist/` at publish time via `prepublishOnly`.
- **Foundation tokens** (additive — no existing token value changed; consumers
  re-importing pick these up with no migration):
  - **Elevation** — `--shadow-sm` / `--shadow-md` / `--shadow-lg`, a restrained
    three-step ramp (the Tailwind defaults). Theme-independent. Fills a real
    gap: `a11y.css`'s `.skip-link` referenced `var(--shadow-md)`, which was
    never defined and silently fell back.
  - **Spacing scale** — `--space-1` … `--space-12` (4px base unit) as raw vars,
    for non-Tailwind consumers and direct `var()` reference. Tailwind's own
    spacing utilities are unaffected.
  - **Radius scale as raw vars** — `--radius-sm/md/lg/xl` are now also emitted
    in `:root` (`tokens/tokens.css`), not only as Tailwind theme keys in
    `tokens/theme.css`, so framework-agnostic consumers can reference them.
  - **Brand aliases** — `--brand` / `--brand-foreground` / `--brand-muted` /
    `--brand-ring`, semantic handles that reference the neutral roles
    (`--primary` / `--accent` / `--ring`) and flip in dark mode for free. No new
    hue — the brand stays monochrome. Exposed as Tailwind utilities
    (`bg-brand`, `text-brand-foreground`, …) via `tokens/theme.css`.
  - `tokens.json` mirror entries for elevation, spacing and brand.

### Changed
- **`package.json`** — new `./react` conditional export, `dist/` added to
  `files`, `peerDependencies.react`, dev deps, and `build`/`typecheck`/`test`
  scripts. `dist/` is gitignored (built in CI / on publish, never committed).
- **`CLAUDE.md`** — documents the new React layer, build/test commands, and the
  revised scope (brand primitives ship here; the product UI kit still doesn't).

### Docs
- New **"Brand · React"** gallery in `docs/` that embeds standalone specimen
  pages (`docs/specimens/logo.html`, `icon.html`) as `<iframe>`s rendering the
  **real built components** from `dist/react/` (via import map + esm.sh), each
  isolated in its own document and synced to the theme toggle. Requires
  `npm run build` and an HTTP server (ES modules don't load from `file://`).

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
