# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

`@shaharia-lab/design-system` — the single source of truth for design tokens **and brand React components** across all shaharia-lab services (product app, website, blog, docs). It is the shadcn/ui default theme on a neutral (grayscale) base in OKLCH; the brand is deliberately monochrome with no accent hue. Dark mode is a value-flip on the `.dark` class.

Two distribution surfaces:
- **Tokens** — pure CSS/JSON, no build, framework-agnostic. Imported via the CSS barrel (`index.css`) or `tokens.json`. This is still the core.
- **React components** (`./react`) — TypeScript brand primitives (`Logo*`, `Icon`) in `src/react/`, compiled by tsup to `dist/react/`. React is a **peer dependency**; consumers that only want tokens never pull it in. This layer was added in v0.6.0 — the package is no longer tokens-only.

## Commands

The token layer needs no build. The React layer does. CI (`.github/workflows/ci.yml`) runs the full sequence — reproduce it locally before pushing:

```bash
npm ci             # install dev + peer deps (needed for the React layer)
npm run typecheck  # tsc --noEmit over src/
npm test           # vitest run — component tests in src/react/*.test.tsx
npm run build      # tsup → dist/react/ (also runs on publish via prepublishOnly)

# token + packaging checks (unchanged):
node -e "JSON.parse(require('fs').readFileSync('tokens.json','utf8'))"  # tokens.json valid JSON
# every package.json "exports" path resolves — note ./react resolves to dist/, so build first
npm pack --dry-run
```

`dist/` is gitignored and built in CI / on publish — never commit it. Preview the docs site by opening `docs/index.html` in a browser (no dev server needed — it loads React + Babel standalone from CDN and compiles the JSX in-browser).

## Architecture: the token chain

Tokens flow through three files that must stay in sync. When adding a new token, wire it in all three:

1. **`tokens/tokens.css`** — source of truth. `:root` (light) + `.dark` custom properties. Every colour change needs both light *and* dark values.
2. **`tokens/theme.css`** — Tailwind v4 `@theme inline` block mapping variables → utilities (`--color-*`). Only needed if the token should generate a utility class.
3. **`tokens.json`** — machine-readable mirror for Figma/codegen/non-CSS consumers. Must always match `tokens.css`.

`index.css` is the barrel that imports `tokens/` files in the right order; it is the package's main entry. `tokens/fonts.css` holds font stacks (system sans for the app, Inter for website/blog/docs, Poppins legacy-only) and `tokens/prose.css` holds long-form `.prose` styles.

`docs/` is the live reference site (buildless React via Babel standalone, JSX in `docs/ds/`). Update its specimens when a foundation changes.

## Architecture: the React layer (`./react`)

Brand React primitives live in `src/react/` as TypeScript (`.tsx`), compiled by tsup (`tsup.config.ts`) to `dist/react/` (ESM + `.d.ts`), exported at `@shaharia-lab/design-system/react`. Currently: `Logo` / `LogoMark` / `LogoGlyph` / `LogoLockup` and the inline `Icon` set (+ `ICON_NAMES`, `IconName`).

- These consume tokens via CSS custom properties (`var(--foreground)`, `var(--font-inter)`), so they flip with `.dark` for free and add **no new hardcoded values** — the "reference roles, never literals" rule applies in `.tsx` too.
- `react` is a **peer dependency** (`>=18`); `react-dom` and the testing stack are dev-only. Don't add runtime dependencies lightly — a brand primitive should stay near-zero-dep.
- The `Icon` map is a **curated subset**, not a Lucide clone. For the full icon set in production, services use `lucide-react` directly — do not grow this map into a parallel icon library (it would drift from upstream Lucide). Add a glyph here only when it's needed buildless (docs/prototyping) or is a genuinely common product glyph.
- Every component has a colocated `*.test.tsx` (vitest + @testing-library/react, jsdom). Add tests with new components; they run in CI.

## Conventions

- Reference roles, never literals — no hard-coded hex/oklch values in consumers; if a value doesn't exist, add a token here first.
- No accent hues or gradients **in the brand** — brand emphasis is `--primary` (black in light, white in dark). Hue is allowed only for *functional* meaning: the status roles (`destructive`, `success`, `warning`, `info`, each with `-foreground` and `-subtle`) and the chart scale. Don't introduce a new hue for decoration; if you need one for state, it already exists here.
- Everything radius-related derives from the single seed `--radius: 0.625rem`.
- Commit messages use conventional prefixes (`feat:` / `fix:` / `docs:` / `refactor:`).
- This package owns tokens **and brand React primitives** (`Logo*`, `Icon`). It does **not** yet own the product UI kit — services still generate shadcn/ui components themselves (default style, neutral base). The boundary today: brand/identity primitives ship here; app-level primitives (Button, Card, forms, …) live in services. Promote a component into this package deliberately (it adds maintenance + a test), not by reflex.

## Release flow

Tag-driven, publishing to GitHub Packages (org-internal; repo is private and the package inherits that visibility):

1. Bump `version` in `package.json` (semver: patch = value tweak, minor = new token, major = rename/remove) **and** mirror it in `tokens.json`'s `version` field; add a dated `CHANGELOG.md` entry.
2. Commit to `main` and wait for CI to go green.
3. Tag `vX.Y.Z` (must exactly match `package.json` version — `release.yml` fails otherwise) and push the tag. That publishes the package and cuts a GitHub Release. `release.yml` runs `npm ci`, and `npm publish` triggers `prepublishOnly` → `npm run build`, so `dist/react/` is built fresh from source at publish time (it is never committed).

Do not push a tag unless explicitly asked — pushing a `v*` tag triggers a release. Branch protection requires PRs to `main` (direct pushes only work via bypass).
