The quiet mono link out of a panel or section — "Requirements ↗", "All documentation ↗".

```jsx
<ArrowLink href="/docs/requirements">Requirements</ArrowLink>
<ArrowLink href="/privacy" tone="accent">Privacy</ArrowLink>
<ArrowLink href="/install" arrow="in" size={12}>Full installation guide</ArrowLink>
```

Mono, uppercase, no underline until hover, when the arrow nudges. `arrow="out"`
(↗) leaves the block or opens a document; `arrow="in"` (→) continues the same
flow. Use `tone="accent"` at most once per section. Never stack two of these —
if a block needs two ways out, one of them is a `Button`.
