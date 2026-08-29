import React from 'react';
import { Sheet } from '../core/Sheet.jsx';
import { Eyebrow } from '../core/Eyebrow.jsx';

/* The padded, headed sheet — the workhorse of the landing page. `size="card"`
   is the 20px-padded, smaller-headed form used in 3-up grids. */
export function Panel({ variant = 'default', size = 'panel', eyebrow, eyebrowEnd, title, style, children, ...rest }) {
  const card = size === 'card';
  return (
    <Sheet variant={variant} style={{ padding: card ? 'var(--pad-card)' : 'var(--pad-panel)', ...style }} {...rest}>
      {eyebrow ? <Eyebrow end={eyebrowEnd}>{eyebrow}</Eyebrow> : null}
      {title ? (
        card
          ? <h4 style={{ fontFamily: 'var(--font-sub)', fontWeight: 600, fontSize: 19.5, margin: '12px 0 8px', lineHeight: 1.25, letterSpacing: 'var(--tracking-heading)' }}>{title}</h4>
          : <h3 style={{ fontFamily: 'var(--font-sub)', fontWeight: 600, fontSize: 25, margin: '0 0 10px', lineHeight: 1.2, letterSpacing: 'var(--tracking-heading)' }}>{title}</h3>
      ) : null}
      <div style={{ color: 'var(--ink-soft)', fontSize: card ? 14.5 : 15 }}>{children}</div>
    </Sheet>
  );
}
