The header for every Agento surface. It scrolls away — do not make it sticky.

```jsx
<Masthead current="Docs"
  links={[{label:'Docs',href:'/docs/'},{label:'Blog',href:'/blog/'},{label:'Releases',href:'…/releases'}]}
  star={{ href: 'https://github.com/shaharia-lab/agento' }}
  theme="Dark" onTheme={toggle} />
```

Nav labels are single words, uppercased by the component. Hover grows a blue
underline; the current page's is ink.
