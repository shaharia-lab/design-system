The top of a project landing page — status pills, the display claim, the lede, the action row.

```jsx
<Hero
  pills={['v1.2.0', 'macOS · Windows · Linux', 'MIT licensed']}
  title={<>See what Claude Code <em>really</em> costs you.</>}
  lede="Agento reads the session files Claude Code already writes to your disk and turns them into cost analytics."
  actions={<><Button variant="primary" href="/download">Download 1.2.0 →</Button><Button href="/docs">Read the docs</Button></>}
  note="No API key. No account. No telemetry."
/>
```

The claim carries **exactly one** italic word, and it is a verb or an adverb —
the emphasis is on what the tool does, never on the product name. Keep it under
two lines at desktop width. The lede is capped at 46ch and the claim at 20ch on
purpose; longer copy is a copy problem, not a layout one. One primary button
only. The mono `note` is where a promise goes, in three short sentences.
