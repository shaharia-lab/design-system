import React from 'react';

/* One bordered, shadowed strip divided by ink rules — never separate floating
   cards. Numbers are mono, tabular, 21px. */
export function StatGrid({ items = [], style, ...rest }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(' + items.length + ', 1fr)',
      border: 'var(--bw) solid var(--ink)', borderRadius: 'var(--radius)',
      background: 'var(--raised)', boxShadow: 'var(--offset)', overflow: 'hidden', ...style,
    }} {...rest}>
      {items.map((it, i) => (
        <div key={i} style={{ padding: '16px 18px', borderRight: i === items.length - 1 ? 0 : 'var(--bw) solid var(--ink)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 21, fontWeight: 700, fontVariantNumeric: 'tabular-nums', lineHeight: 1.2 }}>{it.n}</div>
          <div className="label" style={{ marginTop: 3 }}>{it.k}</div>
        </div>
      ))}
    </div>
  );
}
