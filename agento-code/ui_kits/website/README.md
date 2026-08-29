# UI kit — Agento marketing website

A click-through recreation of the myagento.app marketing surfaces, built from
`web/src/pages/index.astro`, `web/src/pages/blog/`, `web/src/pages/404.astro`
and the Astro components in `web/src/components/`.

| File | Screen |
| --- | --- |
| `index.html` | shell: masthead, view switching, footer, theme toggle |
| `Landing.jsx` | the landing page — hero, stats, screenshot frame, two-panel split, six-card grid, install disclosure, design split, FAQ, star band, closer |
| `Blog.jsx` | `BlogIndex` (featured post + ruled list), `BlogPost` (article with pull quote and byline), `NotFound` (404 with row list) |
| `StaticPage.jsx` | the static-page shell (single prose column, no sidebar or TOC) plus `SecurityPage` as a worked example |

Surface map for a Shaharia Lab project site:

| Surface | Where it lives | Shell |
| --- | --- | --- |
| Marketing landing | `Landing.jsx` | full-intensity: offset shadows, display serif, one blue call |
| Static pages (Security, Privacy, Licence, About) | `StaticPage.jsx` | prose column at `68ch`, no sidebar |
| Technical documentation | `../docs/` | three-column grid with sidebar, search and TOC |
| Blog index and posts | `Blog.jsx` | ruled list; posts are a centred `68ch` article |
| 404 | `Blog.jsx` → `NotFound` | short page with a row list of destinations |

Docs and blog step the landing page's vocabulary down — same tokens, fewer
shadows, no italic-blue emphasis.

What it does: navigate Blog from the masthead, open the featured post, switch
platforms in the install section, open FAQ entries, flip light/dark from the
masthead, and reach the 404 from the footer. Docs live in `../docs/`.

Every visual is composed from the design system's own components — nothing is
re-implemented here. Copy is verbatim from the source pages.

Not represented: real product screenshots (`web/public/screenshots/**` is
generated at build time and was not in the mount), so `Shot` renders its
labelled placeholder. Star counts are withheld, matching the source's
"only above 250" rule. The install section's platform detection is authored
open on macOS rather than sniffing the visitor's UA.
