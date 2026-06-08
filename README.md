# @shaharia-lab/design-system

The unified design system for all shaharia-lab services — the product app,
the public website, the blog and the docs.

It is the **shadcn/ui default theme** on a **neutral (grayscale) base** in the
**OKLCH** colour space. The brand is deliberately monochrome — there is **no
accent hue**. Dark mode is a value-flip on the `.dark` class. One source of
truth, consumed everywhere, so the surfaces never drift.

> 📖 **Live reference:** open `docs/index.html` (or host `docs/` on GitHub
> Pages). Tokens, type scale, components, patterns and usage guidelines, with
> a light/dark toggle.

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
| `brand/` | `logo.svg` (icon mark) · `logo_wu.svg` (wordmark). |
| `docs/` | The live documentation site. |

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
# pin an exact version in package.json — "@shaharia-lab/design-system": "0.3.0"
```

> **Make it consumable org-wide.** A package published from a private repo is,
> by default, only readable by people/Actions with access to *this* repo — it
> is **not** automatically available to every org repo's CI. To open it up:
> set the package's visibility to **Internal**, or grant each consuming repo
> access under **Manage Actions access** (GitHub → Org → Packages →
> `design-system` → Package settings). There is no Terraform toggle for this.

### Alternatives (no registry)

- **Straight from git** — pure CSS, no build, so it just works:
  `npm install github:shaharia-lab/design-system#v0.3.0`
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

### shadcn/ui components

This package owns the **tokens**, not the React components — keep generating
those with the shadcn CLI in each service (they already reference these token
names). Use the default style + neutral base so they line up:

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
