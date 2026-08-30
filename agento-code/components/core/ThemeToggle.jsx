import React from 'react';
import { NavButton } from './NavButton.jsx';

/* The masthead theme switch. The label names the theme you will GET, not the
   one you are in — the site reads "Dark" while in light. Writes data-theme on
   <html> and remembers the choice; the upstream site uses the Starlight key so
   its docs and marketing halves share one memory. Pair with the pre-paint
   script in INSTALL.md, or the first render will flash. */
export function ThemeToggle({ storageKey = 'starlight-theme', defaultTheme, onChange, style, ...rest }) {
  const [theme, setTheme] = React.useState(defaultTheme || 'light');
  React.useEffect(() => {
    if (defaultTheme) return;
    let saved = null;
    try { saved = window.localStorage.getItem(storageKey); } catch (e) { /* private mode */ }
    if (saved === 'dark' || saved === 'light') { setTheme(saved); return; }
    const root = document.documentElement.getAttribute('data-theme');
    if (root === 'dark' || root === 'light') { setTheme(root); return; }
    setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }, [storageKey, defaultTheme]);
  const flip = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try { window.localStorage.setItem(storageKey, next); } catch (e) { /* private mode */ }
    if (onChange) onChange(next);
  };
  const target = theme === 'dark' ? 'Light' : 'Dark';
  return (
    <NavButton onClick={flip} aria-label={'Switch to ' + target.toLowerCase() + ' theme'}
      style={{ minWidth: 66, ...style }} {...rest}>{target}</NavButton>
  );
}
