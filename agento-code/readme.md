# Agento Design System

The reusable design system extracted from the **Agento** marketing and documentation
site, intended as the shared visual foundation for every open-source project
published by **Shaharia Lab**, and to be published as an npm package.

## What Agento is

Agento is a free, MIT-licensed **desktop app** (Tauri 2 + Rust + React + SQLite)
that reads the session files Claude Code already writes to disk and turns them
into cost analytics, searchable history, and scheduled agents. Its whole claim is
locality: no account, no API key, no telemetry, one SQLite file in `~/.agento`.
That claim shapes the design — even the marketing site self-hosts its webfonts so
that no third-party request fires on a page view.

The product has six sections (Chats, Agents, Tasks, Sessions, Analytics,
Gateway) and six built-in integrations (GitHub, Slack, Jira, Confluence,
Telegram, Google).

## Sources this system was extracted from

Everything here was read from source, not from screenshots.

| Source | Path / URL |
| --- | --- |
| Attached codebase (read-only mount) | `web/` — the Astro site for myagento.app |
| Design tokens | `web/src/styles/tokens.css` |
| Component CSS (the ground truth) | `web/src/styles/site.css` (580 lines) |
| Docs theme (Starlight overrides) | `web/src/styles/starlight.css` |
| Font loading | `web/src/styles/fonts.css` (@fontsource packages) |
| Landing page markup + copy | `web/src/pages/index.astro` |
| Blog index / post / 404 | `web/src/pages/blog/`, `web/src/pages/404.astro` |
| Astro components | `web/src/components/{Masthead,Foot,Install,Faq,StarCta,ThemeToggle,JsonLd}.astro` |
| Brand mark | `web/public/favicon.svg` → `assets/agento-mark.svg` |
| Share card | `web/public/og.png` → `assets/og.png` |
| Site config (names, URLs) | `web/site.config.mjs` |
| Product repo | https://github.com/shaharia-lab/agento |
| Live site | https://myagento.app |
| Publisher | Shaharia Lab — https://shaharialab.com |

No Figma file, no slide deck, and no product-app source (the Tauri app itself)
were provided; the UI kits therefore cover the **website** surfaces only.

## Brand at a glance

Neo-brutalist editorial. Bone paper, hard ink borders, solid offset shadows, one
electric blue accent. Light is the native state; dark inverts the ground and the
ink and keeps everything else — the accent never flips.

---

## Content fundamentals

**Voice.** Plain, declarative, engineer-to-engineer. Sentences state a fact and
stop. The product is the subject far more often than the reader:
*"Agento reads the session files Claude Code already writes to your disk."*

**Person.** Second person for the reader ("your disk", "your sessions", "if
`claude` works in your terminal"). First-person plural only where the team is
genuinely the actor, and sparingly: *"there is no ad budget and nothing tracks
you here."* Never "we believe", never "we're excited".

**Headlines are sentences with full stops.** Every section head is a complete
sentence, punctuated:

- "See what Claude Code *really* costs you." (one italic word, in blue, per hero)
- "Two halves, one window."
- "Every section, one keystroke away."
- "Installed in about a minute."
- "Built for the desk, not the tab."
- "Your sessions are already on disk."
- "Notes from the build."
- "That page is not here."

**Claims are numeric and checkable.** The hero stat row reads `0` bytes sent
anywhere, `1` SQLite file, `6` integrations, `~60s` install to first session.
Where a number would be weak it is withheld — the GitHub star count only renders
above 250, because "below it, a number is weaker than no number".

**Honesty over polish.** The FAQ answers the uncomfortable question directly:
integration credentials are stored *"In plain text, in the local database."*
Limits and caveats are stated in the same register as features.

**Casing.** Sentence case for headings and body. UPPERCASE, mono, wide-tracked
for labels, eyebrows, pills, badges, buttons and nav — never for prose.

**Labels are terse and often numbered or keyed.** `01 · CHATS`, `WHAT YOU GET`,
`⌘K`, `ERROR 404`, `BEFORE ANYTHING`, `LOOKS BACKWARD` / `LOOKS FORWARD`,
`RUNS ENTIRELY ON YOUR MACHINE —` (the trailing em dash is deliberate).

**Spelling and dates.** British-leaning en-GB (`colour` in code comments,
`25 Aug 2026` date format). Numbers use tabular figures.

**Emoji: never.** Not in copy, not in UI. The only pictographic characters used
are typographic: `→ ↓ ↗ ▸ ★ · ⌘`.

**Comments in the codebase are part of the voice** — long, reasoned, explaining
why a decision was made and what broke before it. Documentation copy inherits
that: state the rule, then the consequence.

---

## Visual foundations

**Ground.** A bone paper, `--paper #F0EEE6`. Cards sit one step lighter
(`--raised #F7F5EE`), insets one step darker (`--sunken #E6E3D9`). There are no
images used as backgrounds, no gradients, no textures, no noise, no patterns.
Flat colour only. The single full-bleed dark moment is the closing panel, which
is solid `--ink`.

**Ink.** Near-black `#0B0C07` for text and every hard border; `--ink-soft` for
body-secondary and label copy; `--ink-faint` for hairlines and de-emphasised
glyphs.

**Accent.** Three named palettes ship, and a site picks one with a single
attribute on `<html>`:

| `data-accent` | Fill | Tint | Deep (links) | Text on accent |
| --- | --- | --- | --- | --- |
| `forest` (default) | `#1F7A4C` | `#CDE6D8` | `#125C39` | bone |
| `saffron` | `#F2B01E` | `#FAE7BB` | `#8A5D00` | ink |
| `ink` | `var(--ink)` | `var(--sunken)` | `var(--ink)` | bone |

Use the accent for: primary button fill, focus rings, the wordmark dot, one
italic word in the hero, the active TOC marker, tinted chip and active-nav
grounds, and `--accent-deep` for link text (the raw fill fails contrast as body
text). The `ink` mode is the accent-free option — near-black does every one of
those jobs and the tint becomes the sunken ground, so a tinted state reads as
pressed rather than coloured.

The palettes are declared as named tokens (`--accent-forest*`,
`--accent-saffron*`) in `tokens/colors.css` and re-tuned inside the dark blocks;
`tokens/accents.css` only re-points `--accent*` at one of them, so a pick stays
correct in light and dark without repeating a hex. `--warn #E8A33D` is the only
other semantic colour the source defines — under `saffron` it moves to a
letterpress red `#B3232B`, because amber beside amber reads as decoration. There
is no green/red success/danger pair, and none should be invented without the
owner's say.

**On the original blue.** The upstream Agento site used an electric cyan-blue
(`#1DC1FF` / `#C9E6F6` / `#0B7FA8`). It was replaced deliberately, to sit apart
from a competitor's cool palette. Everything else — grounds, ink, borders,
offsets, radii, type — is unchanged from source.

**Type.** Four families, each with one job. Instrument Serif for display (hero,
h1, h2 — set tight at `-0.02em`, line-height `0.97`). Newsreader 600 for
sub-headings, card titles and post titles. Karla for body and UI. JetBrains Mono
for every label, eyebrow, pill, badge, button, table header and code run. The
mix of *two* serifs plus a grotesque plus a mono is the signature; do not
collapse it to one serif.

**Borders are the design.** `--bw 1.5px` hairline-hard for sheets, rows and
tables; `--bw-strong 2px` for the masthead rule, buttons and feature panels;
`1px --ink-faint` for interior row borders and table cell rules. Dashed
`1.5px` borders mark a secondary or provisional surface (`.sheet--dashed`, the
`.note` block, the footer rule).

**Shadows are solid, never blurred.** `--offset: 8px 8px 0 var(--ink)` for
sheets and panels; `--offset-sm: 5px 5px 0` for controls; `8px 8px 0 var(--accent)`
marks the recommended install card; `4px 4px 0 var(--paper)` for buttons on the
inverted closer. Starlight's own blur shadows are explicitly set to `none` —
*"Nothing in this design is blurred."*

**Corner radius.** `--radius: 2px` on everything. Pills, avatars, the step
numerals and the window dots are the only round things (`999px`). Nothing else
is rounded; there are no 8px/12px "soft card" corners anywhere.

**Cards.** A card is a *sheet*: `--raised` ground, `1.5px` solid ink border,
`2px` radius, `8px 8px 0` ink offset shadow. Padding is `26px` for a panel,
`20px` for a small card. Variants: `--flat` (no shadow), `--dashed`
(transparent ground, dashed border, no shadow — used for the forward-looking
half of a two-panel split).

**The eyebrow is the signature device.** A 16px ink em-rule, 9px gap, then an
11px mono uppercase label at `0.14em` tracking, set into the top-left of the
panel it names, `18px` above the heading. An optional right-aligned end slot
carries a link underlined in blue.

**Grouped strips.** Stat rows, step grids and install lists are one bordered,
shadowed container with `1.5px` ink dividers between cells and `overflow:hidden`
— never separate floating cards with gaps. Stacked hairline rows (`.rows`) use
an `8px` gap, `1px --ink-faint` borders, and no shadow of their own; the panel
carries the shadow.

**Animation.** Almost none, and nothing decorative. No entrance animations, no
scroll effects, no fades, no bounces, no parallax. Controls translate `2px,2px`
toward their own shadow on hover (shadow shrinks to `2px 2px`), and `4px,4px`
on press (shadow to `0`) — the button physically lands on the paper.
Transition: `120ms ease` on transform and box-shadow. Disclosure chevrons rotate
90° in `140ms ease`. Everything is disabled under
`@media (prefers-reduced-motion: reduce)`.

**Hover states.** Rows and summaries darken to `--sunken` and promote a faint
border to full ink. Nav links grow a `2px` blue bottom border; the current page
gets an ink one. The star button hovers to `--accent-tint`. Row chevrons switch
from `--ink-faint` to `--accent-deep`. No opacity fades, no lightening.

**Press states.** Translate onto the shadow (above). No colour change, no scale.

**Focus.** `3px solid var(--accent)` outline, `3px` offset (`-3px` inset where the
control is flush inside a container, e.g. a `<summary>`).

**Transparency and blur: none.** No glass, no backdrop-filter, no protection
gradients, no scrims. Where text needs to sit on a dark ground it gets a solid
dark ground. Overlays and capsules use solid fills and ink borders.

**Layout.** A `1120px` shell with `24px` gutters. Prose measures `68ch`; ledes
`54ch`. Docs are a three-column grid `232px / 1fr / 190px` with sticky sidebar
and TOC at `top: 78px`. Nothing else is fixed or sticky — the masthead scrolls
away. Breakpoints at `1000px` (TOC drops, 3-up becomes 2-up) and `760px`
(everything stacks, nav hides).

**Imagery.** Product screenshots only, always inside the `.shot` frame: a `2px`
ink border, `8px 8px 0` shadow, a `--sunken` title bar with three `9px`
ink-outlined window dots and a mono uppercase app-name label, and an optional
mono caption below a hairline rule. Screenshots are of the app in light mode —
warm, bone-grounded, no filters or grain. There are no photographs, no stock
imagery and no illustrations of any kind.

**Dark mode.** Ground goes to `#14150F` / `#1C1D16` / `#0D0E09`, ink to
`#F1EEE5`. Borders, offsets, radii, type and spacing are all unchanged — the
shadow becomes a bone-coloured offset instead of an ink one because `--ink`
itself inverted. `--accent-tint` becomes a deep teal `#0E3A4C` and `--accent-deep`
lightens to `#7FDCFF` for link contrast. Theme is stamped as `data-theme` on
`<html>` and persisted in `localStorage` under the key `starlight-theme`, which
both halves of the site share.

---

## Iconography

**There is no icon set, and that is deliberate.** The Agento site ships no icon
font, no SVG sprite, no `.png` icons and no Lucide/Heroicons dependency. Its
entire glyph vocabulary is typographic characters set in JetBrains Mono:

| Glyph | Use |
| --- | --- |
| `→` | forward / internal navigation (row chevron, pager, blog post) |
| `↓` | download row |
| `↗` | external link, or a link that leaves the current context |
| `▸` | disclosure chevron; rotates 90° when open |
| `★` | the GitHub star ask — the one pictographic mark on the site |
| `·` | separator inside labels (`macOS · Windows · Linux`, `01 · Chats`) |
| `⌘K` | the command palette, referenced as a label |
| `—` | the em-rule that prefixes every eyebrow (drawn as a CSS pseudo-element, not a character) |

Two drawn marks exist, both copied into `assets/`:

- `assets/agento-mark.svg` — the app mark and favicon: a bone square with a
  `2.5px` ink border and a `1DC1FF` circle at its centre, ink-outlined. **This is
  the only logo the sources contain.** The site's wordmark is not an image: it is
  the word "Agento" in Instrument Serif at 26px, preceded by a 9px blue
  ink-bordered dot — i.e. the mark's circle, extracted. Render it as type.
- `assets/og.png` — the 1200×630 share card, generated from
  `web/design/og-image.html`.

**Do not add an icon library to this system.** If a future surface genuinely
needs pictographic icons, the substitution to propose is a 1.5px-stroke outline
set (Lucide is the closest match to the hairline weight), and it must be raised
with the owner first — introducing one silently would change the brand.

**Emoji are never used.**

---

## Index

Root manifest:

| File | What it is |
| --- | --- |
| `readme.md` | this document — brand context, content, visuals, iconography |
| `INSTALL.md` | how to consume it: npm, git subtree into an existing repo, or plain copy |
| `SKILL.md` | Agent Skill front matter, for use in Claude Code |
| `styles.css` | the global entry point consumers link (imports only) |
| `base.css` | element defaults + page-level layout/text primitives |
| `thumbnail.html` | the design system's homepage tile |
| `package.json` | npm publishing manifest (`agento-code`) |
| `tokens/` | `fonts.css`, `colors.css`, `accents.css`, `typography.css`, `space.css`, `borders.css`, `motion.css` |
| `assets/` | `agento-mark.svg`, `og.png` |
| `guidelines/` | foundation specimen cards (Type, Colors, Spacing, Brand) |
| `components/` | React primitives, grouped by concern |
| `ui_kits/` | full-screen recreations of the Agento site surfaces |
| `templates/` | starting folders a consuming project can copy |

Components:

- `components/core/` — Button, NavButton, Pill, Badge, Eyebrow, Sheet, CodeBlock
- `components/content/` — Row, StatGrid, Steps, Note, DataTable, PullQuote, Byline, Shot
- `components/navigation/` — Wordmark, Masthead, SidebarNav, Toc, Pager, Crumbs, SearchBox, Footer
- `components/patterns/` — SectionHead, Panel, Disclosure, Closer, StarBand, PostRow

UI kits:

- `ui_kits/website/` — marketing landing, static page shell (Security), blog index, blog post, 404
- `ui_kits/docs/` — the Starlight-themed documentation reading view

The four surfaces a Shaharia Lab project site has, and the shell each uses:
marketing landing (full intensity), static pages (prose column, no sidebar),
technical documentation (three-column grid with sidebar, search and TOC), and
the blog (ruled index, centred article). Docs and blog step the landing page's
vocabulary down — same tokens, fewer shadows.

Templates:

- `templates/project-landing/` — open-source project landing page
- `templates/docs-page/` — three-column documentation reading view

### Intentional additions

Nothing in the component list is invented; every family maps to a CSS block in
`web/src/styles/site.css` or `starlight.css`. Two clarifications:

- **`Sheet` / `Panel`** are one CSS family (`.sheet`, `.sheet--dashed`,
  `.panel`, `.card`) split into two components because the padded-with-heading
  case is used far more often than the bare surface.
- **`Disclosure`** unifies the two `<details>` shapes in the source (`.faq` and
  `.oscard`) behind one component with a `variant` prop; their styling differs
  only in border weight and summary type size.

### Known gaps

- **Fonts are loaded from Google Fonts**, not self-hosted. The repository
  declares them through `@fontsource` npm packages and ships no binaries, so no
  `.woff2` files could be copied. Same four typefaces, wrong delivery for a
  product whose pitch is that nothing leaves your machine — supply the files and
  `tokens/fonts.css` becomes local `@font-face` rules.
- **No product screenshots.** `web/public/screenshots/**` is generated at build
  time and was not present in the mount, so the `Shot` frame renders a labelled
  placeholder in the kits.
- **No app UI kit.** The Tauri app's own source was not provided; only the
  website design is represented here.
