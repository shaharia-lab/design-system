import React from 'react';

/* On-page contents, right column. The active item gets a 3px accent left edge;
   everything else a 2px faint one. */
export function Toc({ items = [], current, label = 'On this page', style, ...rest }) {
  return (
    <nav style={{ ...style }} {...rest}>
      <span className="label" style={{ display: 'block', paddingBottom: 8, borderBottom: 'var(--bw) solid var(--ink)', marginBottom: 10 }}>{label}</span>
      {items.map((it) => {
        const active = it.href === current;
        return (
          <a key={it.href} href={it.href} style={{
            display: 'block', fontSize: 13.5, padding: '4px 0 4px 10px', textDecoration: 'none',
            color: active ? 'var(--ink)' : 'var(--ink-soft)',
            borderLeft: (active ? '3px solid var(--accent)' : '2px solid var(--ink-faint)'),
            fontWeight: active ? 600 : 400,
          }}>{it.label}</a>
        );
      })}
    </nav>
  );
}
