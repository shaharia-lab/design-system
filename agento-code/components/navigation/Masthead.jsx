import React from 'react';
import { Wordmark } from './Wordmark.jsx';
import { NavButton } from '../core/NavButton.jsx';

/* The site header: paper ground, a 2px ink rule beneath, wordmark left, mono
   uppercase nav right. It scrolls away — nothing on this site is sticky except
   the docs sidebar and TOC. */
export function Masthead({ label = 'Agento', links = [], current, star, theme = 'Dark', onTheme, style, ...rest }) {
  return (
    <header style={{ borderBottom: 'var(--bw-strong) solid var(--ink)', background: 'var(--paper)', ...style }} {...rest}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '16px var(--gutter)', maxWidth: 'var(--shell)', margin: '0 auto' }}>
        <Wordmark label={label} />
        <nav style={{ display: 'flex', gap: 20, marginLeft: 'auto', alignItems: 'center' }}>
          {links.map((l) => <NavLink key={l.label} {...l} active={l.label === current} />)}
          {star ? <NavButton href={star.href} hoverTint="blue"><span aria-hidden="true">★</span> Star{star.count ? <span style={{ fontVariantNumeric: 'tabular-nums' }}>{star.count}</span> : null}</NavButton> : null}
          {onTheme ? <NavButton onClick={onTheme} style={{ minWidth: 66 }}>{theme}</NavButton> : null}
        </nav>
      </div>
    </header>
  );
}

function NavLink({ label, href, active, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={href} {...rest} style={{
      fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 500,
      letterSpacing: 'var(--tracking-nav)', textTransform: 'uppercase',
      textDecoration: 'none', color: 'var(--ink)', paddingBottom: 2,
      borderBottom: '2px solid ' + (active ? 'var(--ink)' : hover ? 'var(--accent)' : 'transparent'),
    }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>{label}</a>
  );
}
