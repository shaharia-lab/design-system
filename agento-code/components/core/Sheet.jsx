import React from 'react';

/* A sheet is the design's card: raised ground, 1.5px ink border, 2px radius,
   and a solid 8px ink offset shadow. `dashed` is the provisional/secondary
   surface — transparent ground, dashed border, no shadow. */
export function Sheet({ variant = 'default', as: Tag = 'div', style, children, ...rest }) {
  const v = {
    default: { background: 'var(--raised)', boxShadow: 'var(--offset)', borderStyle: 'solid' },
    flat: { background: 'var(--raised)', boxShadow: 'none', borderStyle: 'solid' },
    dashed: { background: 'transparent', boxShadow: 'none', borderStyle: 'dashed' },
    accent: { background: 'var(--raised)', boxShadow: 'var(--offset-accent)', borderStyle: 'solid' },
  }[variant] || {};
  return (
    <Tag style={{
      border: 'var(--bw) solid var(--ink)', borderRadius: 'var(--radius)', ...v, ...style,
    }} {...rest}>{children}</Tag>
  );
}
