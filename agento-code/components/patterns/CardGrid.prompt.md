The two layout wrappers the landing page repeats: the card grid and the two-column split.

```jsx
<CardGrid cols={3}>
  <Panel size="card" eyebrow="01 · Chats" title="Talk to your agents">…</Panel>
  <Panel size="card" eyebrow="02 · Agents" title="Build and version them">…</Panel>
  <Panel size="card" eyebrow="03 · Tasks" title="Put them on a clock">…</Panel>
</CardGrid>

<Split>
  <Panel eyebrow="Looks backward" title="Your history, made legible">…</Panel>
  <Panel variant="dashed" eyebrow="Looks forward" title="Agents that do the work">…</Panel>
</Split>
```

Both render a class from `base.css` — `.grid3` / `.grid2` / `.split` — which is
what makes them collapse to one column at 760px. Do **not** pass
`style={{ gridTemplateColumns: … }}`: an inline style outranks the stylesheet and
the media query cannot reach it, so the layout will stay wide on a phone. In a
`Split` the dashed sheet goes second; the solid one leads. Use `media` for the
lopsided screenshot-plus-note pairing. Neither wrapper adds padding — the sheets
inside carry it.
