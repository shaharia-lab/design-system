A short numbered procedure, three cells wide, in one shadowed strip.

```jsx
<Steps items={[
  { title: 'Install the CLI', body: 'Agento spawns the Claude Code CLI you already have.' },
  { title: 'Open Agento', body: 'It reads ~/.claude on first launch.' },
  { title: 'Search anything', body: 'Ranked full-text search over every transcript.' },
]} />
```

Numerals are generated from order — do not pass them. `footer` takes a `CodeBlock`.
