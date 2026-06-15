# @shaharia-lab/design-system

The unified design system for all shaharia-lab services — the product app,
the public website, the blog and the docs.

It is the **shadcn/ui default theme** on a **neutral (grayscale) base** in the
**OKLCH** colour space. The brand is deliberately monochrome — there is **no
accent hue**. Dark mode is a value-flip on the `.dark` class. One source of
truth, consumed everywhere, so the surfaces never drift.

> 📖 **Live reference:** a multi-page docs site under `docs/` — a searchable
> catalog landing plus a deep-linkable page per foundation/component, with a
> light/dark toggle. Serve it over HTTP and open `/docs/index.html` (see
> [Running the docs locally](#running-the-docs-locally)).

---

## What's in here

| Path | What it is |
| --- | --- |
| `index.css` | Barrel — imports everything below in the right order. |
| `tokens/tokens.css` | **Source of truth** — `:root` + `.dark` custom properties. |
| `tokens/theme.css` | Tailwind v4 `@theme inline` mapping → utilities. |
| `tokens/fonts.css` | System / Inter / Poppins / mono font stacks. |
| `tokens/prose.css` | Long-form `.prose` styles for blog & docs. |
| `tokens/a11y.css` | Accessibility baseline — focus ring, reduced-motion, `.sr-only`, skip link. |
| `tokens.json` | Machine-readable tokens (Figma, codegen, non-CSS). |
| `brand/` | `logo.svg` (mark) · `logo_wu.svg` (lockup) · `logo-mono.svg` (glyph). |
| `src/react/` | React brand primitives (`Logo*`, `Icon`) — TS source, built to `dist/react/`, exported at `./react`. |
| `docs/` | The live documentation site (multi-page; `index.html` catalog + `pages/*.html`). |

---

## Install

This package is published to **GitHub Packages** (GitHub's private npm
registry) under the `@shaharia-lab` scope. The repo is private, so the package
is too — only the org can pull it.

### 1. Point the `@shaharia-lab` scope at GitHub Packages

In the consuming repo, add an `.npmrc` next to its `package.json`:

```ini
@shaharia-lab:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

This routes only the `@shaharia-lab` scope to GitHub Packages; everything else
still resolves from the public npm registry. The token is read from the
`NODE_AUTH_TOKEN` env var, so no secret is committed.

### 2. Authenticate

- **CI (GitHub Actions):** use the workflow's built-in `GITHUB_TOKEN` — no PAT
  needed. The job must request `packages: read`:

  ```yaml
  permissions:
    contents: read
    packages: read
  steps:
    - uses: actions/checkout@<sha>
    - uses: actions/setup-node@<sha>
      with:
        node-version: 22
        registry-url: https://npm.pkg.github.com
        scope: '@shaharia-lab'
    - run: npm ci
      env:
        NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  ```

- **Local dev:** export a classic [personal access token](https://github.com/settings/tokens)
  with the `read:packages` scope (authorized for org SSO if enforced):

  ```bash
  export NODE_AUTH_TOKEN=ghp_xxx   # in your shell profile, never the repo
  ```

### 3. Install

```bash
npm install @shaharia-lab/design-system
# pin an exact version in package.json — "@shaharia-lab/design-system": "0.4.0"
```

> **Make it consumable org-wide.** A package published from a private repo is,
> by default, only readable by people/Actions with access to *this* repo — it
> is **not** automatically available to every org repo's CI. To open it up:
> set the package's visibility to **Internal**, or grant each consuming repo
> access under **Manage Actions access** (GitHub → Org → Packages →
> `design-system` → Package settings). There is no Terraform toggle for this.

### Alternatives (no registry)

- **Straight from git** — pure CSS, no build, so it just works:
  `npm install github:shaharia-lab/design-system#v0.4.0`
- **git submodule:**
  `git submodule add https://github.com/shaharia-lab/design-system vendor/design-system`
- **Vendor** — copy `tokens/` into the service. Simplest, but you lose updates.

---

## Use it

### Tailwind v4 service (product app, website)

In your entry CSS (the file with `@import "tailwindcss";`):

```css
@import 'tailwindcss';
@import '@shaharia-lab/design-system';   /* tokens + theme + fonts + prose */
```

Now the token utilities resolve and flip in dark mode:

```html
<div class="bg-background text-foreground">
  <button class="bg-primary text-primary-foreground rounded-md px-4 py-2">
    Primary
  </button>
  <p class="text-muted-foreground">Secondary text</p>
</div>
```

Toggle dark mode by putting `class="dark"` on `<html>` (or any ancestor).

> **Tailwind v4 gotcha:** Tailwind only scans `@theme` blocks in your **entry**
> CSS file. If `bg-primary` & friends don't generate, copy the
> `@theme inline { … }` block from `tokens/theme.css` directly into your entry
> CSS. Importing `tokens/tokens.css` (the variables) is always safe.

### Just the tokens (any framework, no Tailwind)

```css
@import '@shaharia-lab/design-system/tokens.css';

.panel { background: var(--card); color: var(--card-foreground);
         border: 1px solid var(--border); border-radius: var(--radius); }
```

### Blog & docs (long-form)

```css
@import '@shaharia-lab/design-system/tokens.css';
@import '@shaharia-lab/design-system/fonts.css';
@import '@shaharia-lab/design-system/prose.css';
```

```html
<article class="prose"> … rendered markdown … </article>
```

### React brand components (`./react`)

The package ships brand primitives — the `Logo` family and the inline `Icon`
set — compiled and importable. `react >=18` is a peer dependency.

```jsx
import '@shaharia-lab/design-system';                 // tokens once at the app root
import { Logo, LogoMark, Icon } from '@shaharia-lab/design-system/react';

<LogoMark size={32} />                                 {/* flips with .dark for free */}
<Logo wordmark="vibexp.io" />                          {/* mark + Inter wordmark lockup */}
<button aria-label="Settings"><Icon name="settings" title="Settings" /></button>
```

`Icon` is a curated, zero-dependency subset (33 glyphs) — for the full icon set
in production, use `lucide-react` directly rather than extending the map here.

### shadcn/ui app components

The package does **not** own the product UI kit (Button, Card, forms, …) — keep
generating those with the shadcn CLI in each service (they already reference
these token names). Use the default style + neutral base so they line up:

```jsonc
// components.json
{ "style": "default", "tailwind": { "baseColor": "neutral", "cssVariables": true } }
```

---

## Typeface by surface

| Font | Surface | Token |
| --- | --- | --- |
| System sans | Product app UI (shadcn v2) | `--font-system` / `font-sans` |
| **Inter** | Website, blog, docs | `--font-inter` / `font-inter` |
| Poppins | Legacy v1 app pages only | `--font-poppins` / `font-poppins` |

---

## Accessibility

A11y is baked into the foundation, not bolted on — import the tokens and every
surface inherits it. What's guaranteed:

- **Colour contrast (verified).** Body text is 19.8:1 (light) / 19:1 (dark).
  All semantic status tones clear AA (4.8–5.7:1 light, 7–9.4:1 dark). The
  focus `--ring` clears the 3:1 non-text threshold (7.46:1 light / 5:1 dark).
  One thing to mind: `muted-foreground` on a `muted` surface is 4.35:1 — fine
  for large/secondary text, but don't set small body copy in that pairing.
- **Visible keyboard focus.** `tokens/a11y.css` puts a token-driven
  `:focus-visible` ring on every interactive element. Never `outline: none`
  without a replacement.
- **Reduced motion.** `@media (prefers-reduced-motion: reduce)` neutralises
  animation, transition and smooth-scroll automatically.
- **Hidden-but-announced text.** Use `.sr-only` for icon-only button labels
  and live-region text; `.skip-link` for skip-to-content.

Rules for consumers (the system can't enforce these for you):

- **Label every control.** A visible `<label htmlFor>` tied to the input `id` —
  never placeholder-as-label. Icon-only buttons get an `aria-label`.
- **Use native elements.** `<button>` for actions, `<a>` for navigation. If you
  must build a custom control, mirror the role + `aria-*` + keyboard handling.
- **Give images meaningful `alt`** (or `alt=""` if decorative).

The `docs/` site has a full **Accessibility** page with the verified contrast
table and keyboard map.

---

## Brand assets

Three marks in `brand/`, all monochrome (the brand has no accent hue):

| File | Role | Use it for |
| --- | --- | --- |
| `logo.svg` | Mark — tile + pulse | App icon, sidebar, favicon source |
| `logo_wu.svg` | Lockup — mark + wordmark | Splash, marketing, OG images, email |
| `logo-mono.svg` | Single-ink glyph, no tile | Watermarks, dense UI, CSS masks, 1-colour print |

**They're theme-aware.** The tile is `fill="currentColor"` and the glyph/text
knock out to `var(--background)`. So:

- **Inline the SVG** (import as a component, `?raw`, or paste the markup) inside
  an element whose `color` is the foreground, and the mark **flips for dark mode
  automatically** — near-black tile in light, near-white in dark.
- **Use `<img src>`** for simplicity and it renders the static black-on-white
  fallback (an `<img>` is opaque to page CSS, so `currentColor` can't reach it).

```jsx
// React — inline + themed (flips automatically)
import Logo from '@shaharia-lab/design-system/brand/logo.svg?react';
<span style={{ color: 'var(--foreground)' }}><Logo width={32} height={32} /></span>

// Plain — static fallback, no theming
<img src="@shaharia-lab/design-system/brand/logo.svg" width="32" alt="VibeXP" />
```

For a wordmark, prefer a **CSS lockup** (mark + live `--font-inter` text) over
the baked-text `logo_wu.svg`, which only carries a font *fallback*. Reserve the
SVG wordmark for non-CSS contexts (email, OG images, PDF).

**Distribution is package-only.** Reference these files from the installed
package — never copy an SVG into a service repo. To rebrand everywhere: edit the
mark here, bump the version, and each service picks it up on its next dependency
bump. (No CDN / runtime channel — propagation is versioned, by design.)

---

## Conventions

- **Reference roles, never literals.** Use `bg-primary`, not a hex/oklch value
  — that's what makes theming and dark mode free.
- **The brand is neutral.** No accent hues, no gradients. Status meaning lives
  in `destructive` + the documented tonal/chart scales; brand emphasis uses
  `--primary` (black in light, white in dark).
- **One radius seed.** Everything derives from `--radius: 0.625rem`.
- **Don't fork tokens per service.** Change them here, bump the version, update
  consumers. That's the whole point of this repo.

---

## Running the docs locally

The docs site is **buildless** — React + Babel standalone load from a CDN and
compile the JSX in the browser, so there's no docs build step. But the pages
**fetch** their JSX modules (and the Brand · React page loads the real built
components), so you must serve over HTTP — opening `file://…` won't work.

```bash
# 1. build the React layer once, so the Brand · React specimens have dist/react/
npm ci          # first time only (installs dev + peer deps)
npm run build

# 2. serve the repo root over HTTP, from the project root
python3 -m http.server 8000
#   (any static server works: `npx serve`, `php -S localhost:8000`, …)

# 3. open the catalog landing
#   http://localhost:8000/docs/index.html
```

From the landing, search or click into any page — each section is its own URL
(e.g. `http://localhost:8000/docs/pages/color.html`), so you can deep-link and
share them. The theme toggle (top-right) flips light/dark across the page and
the embedded specimen frames.

> If the **Brand · React** cards say "build the package first", you skipped
> `npm run build` — the specimens render `dist/react/`, which is gitignored.

## Changing the system

Tokens here are the single source of truth — edit a token, bump the version,
tag a release, and services opt in. The full loop (what to edit, semver rules,
how to request design-level changes) is in **[CONTRIBUTING.md](./CONTRIBUTING.md)**.

```bash
# bump version in package.json + CHANGELOG.md, then:
git tag v0.1.0
git push origin v0.1.0
```

Consumers pin with `npm install github:shaharia-lab/design-system#v0.1.0`.

## License

MIT © shaharia-lab
