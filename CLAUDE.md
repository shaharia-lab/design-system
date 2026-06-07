# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

`@shaharia-lab/design-system` — the single source of truth for design tokens across all shaharia-lab services (product app, website, blog, docs). A pure CSS/JSON package: no build step, no test suite, no bundler. It is the shadcn/ui default theme on a neutral (grayscale) base in OKLCH; the brand is deliberately monochrome with no accent hue. Dark mode is a value-flip on the `.dark` class.

## Commands

There is no build, lint, or test tooling. CI (`.github/workflows/ci.yml`) runs three checks — reproduce them locally before pushing:

```bash
# 1. tokens.json is valid JSON
node -e "JSON.parse(require('fs').readFileSync('tokens.json','utf8'))"

# 2. every package.json "exports" path exists (see ci.yml for the exact script)

# 3. packaging is sane
npm pack --dry-run
```

Preview the docs site by opening `docs/index.html` in a browser (no dev server needed — it loads React + Babel standalone from CDN and compiles the JSX in-browser).

## Architecture: the token chain

Tokens flow through three files that must stay in sync. When adding a new token, wire it in all three:

1. **`tokens/tokens.css`** — source of truth. `:root` (light) + `.dark` custom properties. Every colour change needs both light *and* dark values.
2. **`tokens/theme.css`** — Tailwind v4 `@theme inline` block mapping variables → utilities (`--color-*`). Only needed if the token should generate a utility class.
3. **`tokens.json`** — machine-readable mirror for Figma/codegen/non-CSS consumers. Must always match `tokens.css`.

`index.css` is the barrel that imports `tokens/` files in the right order; it is the package's main entry. `tokens/fonts.css` holds font stacks (system sans for the app, Inter for website/blog/docs, Poppins legacy-only) and `tokens/prose.css` holds long-form `.prose` styles.

`docs/` is the live reference site (buildless React via Babel standalone, JSX in `docs/ds/`). Update its specimens when a foundation changes.

## Conventions

- Reference roles, never literals — no hard-coded hex/oklch values in consumers; if a value doesn't exist, add a token here first.
- No accent hues or gradients. Status meaning lives in `destructive` + the tonal/chart scales; brand emphasis is `--primary` (black in light, white in dark).
- Everything radius-related derives from the single seed `--radius: 0.625rem`.
- Commit messages use conventional prefixes (`feat:` / `fix:` / `docs:` / `refactor:`).
- This package owns tokens only, not React components — services generate shadcn/ui components themselves (default style, neutral base).

## Release flow

Tag-driven, publishing to GitHub Packages (org-internal; repo is private and the package inherits that visibility):

1. Bump `version` in `package.json` (semver: patch = value tweak, minor = new token, major = rename/remove) **and** mirror it in `tokens.json`'s `version` field; add a dated `CHANGELOG.md` entry.
2. Commit to `main` and wait for CI to go green.
3. Tag `vX.Y.Z` (must exactly match `package.json` version — `release.yml` fails otherwise) and push the tag. That publishes the package and cuts a GitHub Release.

Do not push a tag unless explicitly asked — pushing a `v*` tag triggers a release. Branch protection requires PRs to `main` (direct pushes only work via bypass).
