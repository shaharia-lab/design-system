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
| `tokens.json` | Machine-readable tokens (Figma, codegen, non-CSS). |
| `brand/` | `logo.svg` (icon mark) · `logo_wu.svg` (wordmark). |
| `docs/` | The live documentation site. |

---

## Install

Pick whichever fits the consuming service.

**npm (install straight from GitHub):**

```bash
npm install github:shaharia-lab/design-system
# or pin a tag once you cut releases:
# npm install github:shaharia-lab/design-system#v0.1.0
```

**git submodule** (for the monorepo / no package registry):

```bash
git submodule add https://github.com/shaharia-lab/design-system vendor/design-system
```

**Vendor** — copy `tokens/` into the service. Simplest, but you lose updates.

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

## Releasing

```bash
# bump version in package.json + CHANGELOG.md, then:
git tag v0.1.0
git push origin v0.1.0
```

Consumers pin with `npm install github:shaharia-lab/design-system#v0.1.0`.

## License

MIT © shaharia-lab
