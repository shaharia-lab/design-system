A stacked list of hairline rows — download files, links out of a 404, search hits.

```jsx
<RowList>
  <Row href="#" badge="dmg" mono="Agento_1.2.0_aarch64.dmg" right="arm64 · 12.4 MB" go="↓" recommended />
  <Row href="/docs/" badge="docs" title="Documentation" right="Installation, the user guide" />
</RowList>
```

Rows never carry a shadow — put them inside a `Panel`/`Sheet` which does.
Use `recommended` for exactly one row at a time.
