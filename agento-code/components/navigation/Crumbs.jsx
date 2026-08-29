import React from 'react';

/* Mono uppercase breadcrumb trail above a docs h1. Faint, separated by '/'. */
export function Crumbs({ items = [], style, ...rest }) {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 14, ...style }} {...rest}>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-faint)' }}>/</span> : null}
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-nav)', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>{it}</span>
        </React.Fragment>
      ))}
    </div>
  );
}
