import React from 'react';

/* The signature device: a 16px em-rule, then an 11px mono uppercase label set
   into the top-left of the panel it names. An optional `end` slot sits
   right-aligned, usually a blue-underlined link. */
export function Eyebrow({ end, style, children, ...rest }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 9,
      fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
      letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase',
      color: 'var(--ink-soft)', marginBottom: 18, ...style,
    }} {...rest}>
      <span style={{ width: 16, height: 1.5, background: 'var(--ink-soft)', flex: 'none' }}></span>
      {children}
      {end ? <span style={{ marginLeft: 'auto', letterSpacing: '0.04em', textTransform: 'none' }}>{end}</span> : null}
    </div>
  );
}
