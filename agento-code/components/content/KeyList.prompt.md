The bold-lead-in bullet list used inside landing panels — a term, an em dash, then the explanation.

```jsx
<KeyList items={[
  { term: 'Cost per session', children: 'priced at the rate in effect when each message ran.' },
  { term: 'Full-text search', children: 'across every transcript, ranked, with snippets.' },
]} />
```

Markers are 5px ink squares — this design has no round bullets. Keep items to
one or two lines; three or more and the panel wants a `DataTable` instead. The
term is a noun phrase with no full stop, the explanation is a sentence with one.
