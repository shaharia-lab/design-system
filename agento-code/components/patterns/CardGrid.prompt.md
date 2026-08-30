The two layout wrappers the landing page repeats: the wrapping card grid and the two-column split.

```jsx
<CardGrid min={260}>
  <Panel size="card" eyebrow="01 · Chats" title="Talk to your agents">…</Panel>
  <Panel size="card" eyebrow="02 · Agents" title="Build and version them">…</Panel>
</CardGrid>

<Split>
  <Panel eyebrow="Looks backward" title="Your history, made legible">…</Panel>
  <Panel variant="dashed" eyebrow="Looks forward" title="Agents that do the work">…</Panel>
</Split>
```

`CardGrid` wraps on its own via `auto-fit`; pass `cols` only when a fixed count
matters. In a `Split`, the dashed sheet goes second — the solid one leads. Use
`ratio="1.25fr 1fr"` for the lopsided screenshot-plus-note pairing. Neither
wrapper adds padding; the sheets inside carry it.
