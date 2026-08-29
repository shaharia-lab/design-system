import React from 'react';
import { Sheet } from '../core/Sheet.jsx';
import { Eyebrow } from '../core/Eyebrow.jsx';

/* The star ask: a wide sheet with the copy left and one primary button right.
   The count is only rendered above a threshold — below it, a number is weaker
   than no number. */
export function StarBand({ eyebrow = 'One click, and it helps more than you would think', title = 'Star the repo', count, action, style, children, ...rest }) {
  return (
    <Sheet style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', marginTop: 70, padding: '30px 32px', ...style }} {...rest}>
      <div style={{ flex: '1 1 380px' }}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h3 style={{ fontFamily: 'var(--font-sub)', fontWeight: 600, fontSize: 27, margin: '0 0 8px', letterSpacing: 'var(--tracking-heading)' }}>{title}</h3>
        <div style={{ color: 'var(--ink-soft)', fontSize: 15, maxWidth: '58ch' }}>{children}</div>
      </div>
      {action}
      {count ? <span style={{ fontVariantNumeric: 'tabular-nums', paddingLeft: 9, marginLeft: 3, borderLeft: '1.5px solid currentColor' }}>{count}</span> : null}
    </Sheet>
  );
}
