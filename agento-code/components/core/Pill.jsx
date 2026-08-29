import React from 'react';

/* A fully-round mono capsule. Tinted by default (blue-tint ground, ink border);
   `plain` drops the fill and is what metadata rows use. */
export function Pill({ plain, style, children, ...rest }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '3px 10px',
      border: 'var(--bw) solid var(--ink)', borderRadius: 'var(--radius-pill)',
      background: plain ? 'transparent' : 'var(--accent-tint)',
      fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
      letterSpacing: 'var(--tracking-nav)', textTransform: 'uppercase',
      whiteSpace: 'nowrap', ...style,
    }} {...rest}>{children}</span>
  );
}
