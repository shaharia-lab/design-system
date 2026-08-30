import React from 'react';

/* The two layout wrappers the landing page repeats: an even card grid (three up,
   wrapping to one) and the two-column split. Both are plain grids with a token
   gap — no nested padding, because the sheets inside carry their own. */
export function CardGrid({ min = 260, cols, gap = 'var(--gap-grid)', style, children, ...rest }) {
  return (
    <div style={{
      display: 'grid', gap,
      gridTemplateColumns: cols ? 'repeat(' + cols + ', minmax(0, 1fr))' : 'repeat(auto-fit, minmax(' + min + 'px, 1fr))',
      ...style,
    }} {...rest}>{children}</div>
  );
}

/* The 1:1 split ("Two halves, one window.") — set ratio for the lopsided one
   used by the design section, where the screenshot is wider than its note. */
export function Split({ ratio = '1fr 1fr', gap = 'var(--gap-split)', align = 'start', style, children, ...rest }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: ratio, gap, alignItems: align, ...style }} {...rest}>{children}</div>
  );
}
