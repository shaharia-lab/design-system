import React from 'react';

/* Site footer: a dashed hairline above, a mono copyright left, mono uppercase
   links, and a closing aside pinned right — the site's is
   "runs entirely on your machine —", trailing em dash included. */
export function Footer({ copyright, links = [], aside, style, ...rest }) {
  return (
    <footer style={{
      marginTop: 60, borderTop: '1.5px dashed var(--ink-faint)', padding: '22px 0 46px',
      display: 'flex', flexWrap: 'wrap', gap: 18, alignItems: 'center', ...style,
    }} {...rest}>
      <span className="label" style={{ marginRight: 'auto', letterSpacing: 'var(--tracking-nav)' }}>{copyright}</span>
      {links.map((l) => (
        <a key={l.label} href={l.href} onClick={l.onClick} style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-nav)',
          textTransform: 'uppercase', textDecoration: 'none', color: 'var(--ink)',
          borderBottom: 'var(--bw) solid var(--ink)',
        }}>{l.label}</a>
      ))}
      {aside ? <span className="label" style={{ marginLeft: 'auto', letterSpacing: 'var(--tracking-nav)' }}>{aside}</span> : null}
    </footer>
  );
}
