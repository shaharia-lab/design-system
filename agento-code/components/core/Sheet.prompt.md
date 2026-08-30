The unpadded card surface — wrap anything that needs to read as a printed sheet. For the padded, headed case use `Panel`.

```jsx
<Sheet variant="dashed" style={{ padding: 'var(--pad-panel)' }}>…</Sheet>
<Sheet variant="accent">…</Sheet>   {/* accent offset: "recommended for you" */}
```

Sheets never nest inside sheets with their own shadow — the outer sheet carries
the shadow and inner rows stay flat.
