# Changelog

All notable changes to `@shaharia-lab/agento-code`. Dates are release dates.
This package is pre-1.0: minor versions may change visual output.

## 0.3.0 — unreleased

### Fixed

- `--offset-accent` referenced `--blue`, a token deleted in 0.1.1. The
  declaration was invalid and dropped, so `Sheet variant="accent"` and
  `Disclosure recommended` rendered with **no shadow** — the recommended install
  card lost the one treatment marking it recommended. Now `var(--accent)`.
- Code strings used `--accent` on the inverted code ground: forest on near-black
  is 3.69:1, under the 4.5:1 floor. Added `--code-accent`, pinned bright in both
  themes, and pointed `.codeblock .s` and `CodeStr` at it.
- `CardGrid` and `Split` inlined `grid-template-columns`, which outranks a
  stylesheet and cannot be reached by a media query — a landing page built from
  them stayed multi-column at 320px. Both now render the `base.css` classes
  (`.grid3` / `.grid2` / `.split`) and collapse at 760px. `CardGrid`'s `min`
  prop is replaced by `cols`; `Split`'s `ratio` prop is replaced by `media`.
- `Hero` hard-coded `clamp(44px, 6.4vw, 76px)` against `--text-hero`'s
  `clamp(44px, 8vw, 92px)`. The token matches the source site and wins.
- `prefers-reduced-motion` was documented in the readme and `tokens/motion.css`
  but implemented nowhere. Now honoured in `base.css`.
- `Disclosure` was a `div` with `role="button"` that never set
  `aria-expanded`, so screen readers were told nothing about open state. It is
  native `<details>`/`<summary>` again: keyboard behaviour, find-in-page and
  open state come free, and the chevron rotates off `[open]` in CSS.

### Changed

- `NavButton`'s `hoverTint="blue"` is renamed `hoverTint="accent"`. **Breaking**
  for anyone passing the old value. The accent is swappable by design, so no API
  name, token name or doc heading should name a hue.
- Stale "electric blue" copy corrected in `Button.d.ts` (visible in IDE
  tooltips), `Button.prompt.md`, `Eyebrow.prompt.md` (whose example produced
  invalid CSS), and the accent specimen card.
- `Disclosure` and the layout wrappers accept and merge `className`.

## 0.2.0 — 30 August 2026

### Added

- Six components: `Hero`, `ThemeToggle`, `ArrowLink`, `KeyList`,
  `CardGrid`/`Split`, `MetaRule` — each with types and a usage prompt.
- `_adherence.oxlintrc.json` and a reproducible bundle generator.

## 0.1.1

### Changed

- **Visual breaking change on a 0.x package.** The accent moved off the upstream
  electric blue (`#1DC1FF`) to forest (`#1F7A4C` light, `#2E9A63` dark), and
  `--blue*` was renamed `--accent*`. Saffron and ink-only were added as per-site
  palettes selected with `data-accent` on `<html>`.

## 0.1.0

- Extracted from the Astro site for myagento.app: tokens, `base.css`, 34
  components, specimen cards, two UI kits and two templates.
