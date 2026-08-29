import React from 'react';
import { Sheet } from '../core/Sheet.jsx';

/* Previous/next at the foot of a docs page. Two sheets; the right one is
   right-aligned, and titles are set in the display serif at 22px. */
export function Pager({ prev, next, style, ...rest }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 48, ...style }} {...rest}>
      {[prev, next].map((p, i) => p ? (
        <Sheet key={i} variant="flat" as="a" href={p.href} style={{ padding: '16px 18px', display: 'block', textDecoration: 'none', color: 'var(--ink)', textAlign: i ? 'right' : 'left', gridColumn: i && !prev ? 2 : 'auto' }}>
          <span className="label" style={{ display: 'block', marginBottom: 6 }}>{i ? 'Next' : 'Previous'}</span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 22 }}>{p.label}</span>
        </Sheet>
      ) : null)}
    </div>
  );
}
