Every product screenshot on an Agento surface sits in this frame — never a bare image.

```jsx
<Shot name="Agento — Insights" src="/screenshots/light/insights.png"
      alt="Cost, autonomy and cache-hit cards over Claude Code sessions"
      caption="Every tool call attributed to a skill, MCP server or sub-agent." />
```

The window dots are decoration, not controls. Leave `src` off during layout and
the frame renders a labelled placeholder.
