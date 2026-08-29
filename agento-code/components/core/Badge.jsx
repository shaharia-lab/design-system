import React from 'react';

/* A squared 10px mono tag on a sunken ground with a faint border. Used inside
   hairline rows to name a file kind or a destination. */
export function Badge({ style, children, ...rest }) {
  return (
    <span style={{
      fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 700,
      letterSpacing: 'var(--tracking-button)', textTransform: 'uppercase',
      padding: '3px 7px', borderRadius: 'var(--radius)',
      background: 'var(--sunken)', border: 'var(--bw-hair) solid var(--ink-faint)',
      color: 'var(--ink-soft)', flex: 'none', ...style,
    }} {...rest}>{children}</span>
  );
}
