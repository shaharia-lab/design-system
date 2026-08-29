import React from 'react';

/* The 26px-tall masthead control: star count, theme toggle. Smaller and
   flatter than Button — 1.5px border, no shadow. */
export function NavButton({ href, onClick, hoverTint = 'sunken', style, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
    height: 26, padding: '0 10px',
    border: 'var(--bw) solid var(--ink)', borderRadius: 'var(--radius)',
    background: hover ? (hoverTint === 'blue' ? 'var(--accent-tint)' : 'var(--sunken)') : 'var(--raised)',
    color: 'var(--ink)',
    fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
    letterSpacing: 'var(--tracking-nav)', textTransform: 'uppercase', lineHeight: 1,
    textDecoration: 'none', cursor: 'pointer', ...style,
  };
  const h = { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), onClick };
  if (href) return <a href={href} style={base} {...h} {...rest}>{children}</a>;
  return <button type="button" style={base} {...h} {...rest}>{children}</button>;
}
