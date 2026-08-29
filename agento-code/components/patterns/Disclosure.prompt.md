Both collapsible shapes on the site: FAQ entries and the per-platform install cards.

```jsx
<Disclosure defaultOpen summary="Does Agento send my transcripts anywhere?">
  <p>No. Everything is stored locally in ~/.agento.</p>
</Disclosure>

<Disclosure variant="panel" summary="macOS" meta="4 files" recommended defaultOpen>…</Disclosure>
```

Open the first item by default. Content stays mounted in the source (a `<details>`
keeps its DOM), so never rely on collapsing to hide something that matters.
