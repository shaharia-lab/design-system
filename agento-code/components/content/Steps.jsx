import React from 'react';

/* Three numbered cells in one bordered, shadowed strip. The numeral is a 26px
   ink-bordered blue-tint disc — the only round element besides pills. */
export function Steps({ items = [], style, ...rest }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(' + items.length + ', 1fr)',
      border: 'var(--bw) solid var(--ink)', borderRadius: 'var(--radius)',
      background: 'var(--raised)', boxShadow: 'var(--offset)', overflow: 'hidden', ...style,
    }} {...rest}>
      {items.map((it, i) => (
        <div key={i} style={{ padding: 24, borderRight: i === items.length - 1 ? 0 : 'var(--bw) solid var(--ink)' }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700,
            letterSpacing: 'var(--tracking-label)', color: 'var(--ink)',
            border: 'var(--bw) solid var(--ink)', borderRadius: 'var(--radius-pill)',
            width: 26, height: 26, display: 'grid', placeItems: 'center', background: 'var(--accent-tint)',
          }}>{i + 1}</div>
          <h4 style={{ fontFamily: 'var(--font-sub)', fontWeight: 600, fontSize: 20, margin: '14px 0 8px' }}>{it.title}</h4>
          <p style={{ margin: '0 0 12px', fontSize: 14.5, color: 'var(--ink-soft)' }}>{it.body}</p>
          {it.footer}
        </div>
      ))}
    </div>
  );
}
