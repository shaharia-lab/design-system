Builds the blog index: one `feature` post, then a ruled list of the rest.

```jsx
<PostRow feature href="/blog/finding-the-claude-cli/" date="25 August 2026"
  title="Finding the Claude CLI where it actually is"
  description="A user ran claude --version, got 2.1.231, and Agento told them Claude Code was not installed."
  tags={['Engineering', 'Release 1.2.0']} />
<PostRow href="…" date="12 Aug 2026" title="…" description="…" tags={['Release 1.1.0']} />
```

Dates are en-GB. Tags are `plain` pills; two or three at most.
