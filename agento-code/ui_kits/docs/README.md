# UI kit — Agento documentation

The documentation reading view, recreated from the Starlight theme overrides in
`web/src/styles/starlight.css` and the docs rules in `web/src/styles/site.css`.

| File | Screen |
| --- | --- |
| `index.html` | shell: masthead, footer, theme toggle |
| `DocsPage.jsx` | the three-column docs grid — sidebar + search, article, on-page TOC, pager |

Layout is the source's: `232px / 1fr / 190px`, 34px gaps, sticky sidebar and TOC,
`68ch` article measure. Headings use the display serif with an ink underline;
notes, tables, code blocks and download rows are the system's components.

Content is representative documentation written in Agento's voice, drawn from the
FAQ and install copy in the repository — the docs markdown itself is synced into
`web/` at build time and was not present in the mount, so pages are not verbatim.
