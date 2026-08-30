The Agento call-to-action button — use for downloads, docs links and the star ask; one `primary` per view at most.

```jsx
<Button variant="primary" href="#install">Download 1.2.0 →</Button>
<Button variant="ink" href="/docs/installation/">Read the docs</Button>
```

Variants: `default` (bone sheet), `primary` (the accent fill, the single strongest
call on a page), `ink` (solid near-black, the secondary next to a primary),
`ghost` (transparent — only on the inverted closer panel, with `onInvert`).
Labels are short, mono-uppercased by the component, and often end in `→`.
Set `onInvert` on any dark ground so the border and shadow flip to paper.
