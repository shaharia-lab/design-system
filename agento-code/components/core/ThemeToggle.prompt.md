The masthead light/dark switch — use it anywhere a site lets the visitor choose a theme.

```jsx
<ThemeToggle storageKey="starlight-theme" onChange={(t) => console.log(t)} />
```

The label names the theme you will get, not the one you are in: it reads "Dark"
while the page is light. State comes from `localStorage`, then any `data-theme`
already on `<html>`, then `prefers-color-scheme`. It writes `data-theme` on
`<html>` — which is what every colour token responds to — so nothing else needs
wiring. Add the pre-paint script from `INSTALL.md` or the first frame flashes
the wrong theme. Pass `defaultTheme` to pin it in a card or a screenshot.
