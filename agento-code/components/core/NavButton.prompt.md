A small flat control sized for the masthead — the star ask and the theme toggle, nothing else.

```jsx
<NavButton href="https://github.com/shaharia-lab/agento" hoverTint="blue">★ Star</NavButton>
<NavButton onClick={toggle} style={{ minWidth: 66 }}>Dark</NavButton>
```

The theme toggle's label names the mode it switches *to*, never the word "Theme".
