# Installing agento-code

Three ways to get this system into a project. All three end at the same place:
one stylesheet linked, and `components/` available to import.

## 1. npm (the intended route, once published)

```sh
npm install @shaharia-lab/agento-code
```

```js
// one import, at the entry point
import '@shaharia-lab/agento-code/styles.css';
```

```jsx
import { Button, Panel, Masthead } from '@shaharia-lab/agento-code/components/core/Button.jsx';
```

The package ships source `.jsx` — no build output — so the consuming project's
bundler compiles it. That is deliberate: every component is a single file that
imports React and reads CSS custom properties, with no runtime dependency to
resolve.

Astro sites (the Agento site is one) need nothing more than the stylesheet
import in the layout:

```astro
---
import '@shaharia-lab/agento-code/styles.css';
---
```

## 2. Into an existing repo, as a subtree

Use this while the package is unpublished, or when a site wants to pin and patch
the system in place. It gives a real merge path back and forth.

```sh
# add it once, under whatever folder the repo prefers
git remote add design https://github.com/shaharia-lab/design-system.git
git subtree add --prefix web/src/design design main --squash

# pull updates later
git subtree pull --prefix web/src/design design main --squash
```

Then link the stylesheet by relative path:

```css
@import '../design/styles.css';
```

A submodule works too (`git submodule add …`), but a subtree keeps the files
present in a fresh clone with no extra command, which matters for CI and for
contributors.

Note that this repository holds several design systems, so a subtree brings all
of them in and `agento-code/` sits one level down (`../design/agento-code/…`).
If that is unwanted, use the npm package or the plain copy below.

## 3. Plain copy

Copy `styles.css`, `base.css`, `tokens/`, `assets/` and the parts of
`components/` the site actually uses. Fine for a one-off site; it forfeits
updates, so note the commit you copied from.

## Wiring it up

**Stylesheet.** Link `styles.css` and nothing else — it `@import`s every token
file and `base.css` in the right order. Do not link the token files
individually.

**Theme.** Light is the default; `prefers-color-scheme: dark` flips it. To let a
visitor choose, stamp `data-theme="light" | "dark"` on `<html>` before first
paint and persist it:

```html
<script>
  const t = localStorage.getItem('theme');
  if (t === 'dark' || t === 'light') document.documentElement.setAttribute('data-theme', t);
</script>
```

The upstream Agento site uses the key `starlight-theme` so its docs and
marketing halves share one memory. Match whatever the host site already uses.

**Accent.** Pick one per site on `<html>`:

```html
<html data-accent="forest">    <!-- default; may be omitted -->
<html data-accent="saffron">
<html data-accent="ink">       <!-- accent-free: near-black does every job -->
```

**Fonts.** `tokens/fonts.css` currently pulls the four families from Google
Fonts. A site that must not make third-party requests should replace that file's
single `@import` with local `@font-face` rules — the families are Instrument
Serif, Newsreader, Karla and JetBrains Mono, all available as `@fontsource`
packages.

**Assets.** `assets/agento-mark.svg` is the app mark and favicon. The wordmark
is type, not an image — use the `Wordmark` component.

## No-build usage

For a static page, a prototype, or a slide, skip the bundler: link `styles.css`
and write markup against the tokens directly. Every component's visual recipe is
documented in its `.prompt.md`, and `guidelines/` holds the specimen cards.
