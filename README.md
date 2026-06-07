# VibeXP Design System

The shared design foundation for **shaharia-lab / VibeXP** — product, website, blog and docs.
Built directly on [shadcn/ui](https://ui.shadcn.com) (default style · neutral base) with Tailwind v4
and OKLCH color tokens. This repo is the single source of truth for **tokens, typography and
component conventions**.

> **Brand is neutral black.** No accent hue, no gradients — every "brand moment" uses the global
> `--primary` token (near-black in light, near-white in dark). Status and data-viz color live in the
> tonal + chart scales.

---

## What's in here

| Path | What it is | Who consumes it |
| --- | --- | --- |
| `tokens.css` | Canonical CSS variables (`:root` + `.dark`) **+** the Tailwind v4 `@theme inline` bridge | Every app — import it once |
| `tokens.json` | Machine-readable tokens (light/dark values, type scale, font→surface map) | Tooling, Figma sync, native apps |
| `docs/` | The interactive reference site (browse tokens, type, components, patterns, guidelines) | Humans |
| `package.json` | Lets services install this repo as a dependency | Build tooling |

---

## Use it in a service

### Option A — import the stylesheet (recommended)

```bash
npm install github:shaharia-lab/design-system
```

```css
/* your app's main stylesheet, before your own rules */
@import "@shaharia-lab/design-system/tokens.css";
```

That gives you every token **and** the Tailwind utilities (`bg-background`, `text-muted-foreground`,
`rounded-lg`, `border-border`, …). Your existing shadcn components keep working unchanged — they
already reference these variables.

### Option B — vendor the file

Copy `tokens.css` into your repo and import it. Pin the version you copied from in a comment so
updates are traceable.

### Dark mode

Toggle the `.dark` class on `<html>` (or any ancestor). Every token flips; no component changes
needed.

```html
<html class="dark"> … </html>
```

---

## Typography — one typeface per surface

| Surface | Font | Token |
| --- | --- | --- |
| Frontend **app** (shadcn v2) | System sans (`ui-sans-serif, system-ui…`) | `--font-system` / `--font-sans` |
| **Website · blog · docs** | Inter (400–800) | `--font-inter` |
| Legacy **v1** app pages | Poppins (300–900) | `--font-poppins` |

Long-form (`.prose`) body is **14px / 1.75**; headings step **h1 24/700 → h6 14/600**. Full scale in
`tokens.json → typeScale`.

Load Inter / Poppins where used:

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

---

## Foundations at a glance

- **Radius** — one seed `--radius: 0.625rem` → `sm` (6px) · `md` (8px) · `lg` (10px) · `xl` (14px)
- **Spacing** — Tailwind 4px base grid
- **Elevation** — three steps: `shadow-sm` (cards) · `shadow-md` (popovers) · `shadow-lg` (modals)
- **Color** — semantic roles only; never hard-code hex/oklch in components
- **Icons** — [Lucide](https://lucide.dev), `size-4` (16px) inside buttons/inputs

See `docs/` for live examples and the full do / don't guidelines.

---

## View the docs locally

```bash
cd docs
python3 -m http.server 8000   # or: npx serve .
# open http://localhost:8000
```

The docs site is plain HTML + React via CDN — no build step.

---

## First push (from the project export)

```bash
# from the unzipped design-system/ folder
git init
git add .
git commit -m "VibeXP design system v1.0 — tokens, typography, docs"
git branch -M main
git remote add origin git@github.com:shaharia-lab/design-system.git
git push -u origin main
```

---

## Versioning

Bump `package.json` + the header in `tokens.css` together. Treat any token **value** change as a
minor release and any token **removal/rename** as a major — downstream services pin to a version.

_Generated as v1.0 from the live VibeXP codebase (`frontend/` + `website/`)._
