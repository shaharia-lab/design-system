import React from 'react';

/* A dashed-border aside inside prose. The keyword sits in its own mono column.
   The warn variant switches the border to solid amber. */
export function Note({ kind = 'note', label, style, children, ...rest }) {
  const warn = kind === 'warn';
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 12,
      padding: '14px 16px', margin: '0 0 20px',
      border: 'var(--bw) ' + (warn ? 'solid var(--warn)' : 'dashed var(--ink)'),
      borderRadius: 'var(--radius)', background: 'transparent', ...style,
    }} {...rest}>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 700,
        letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase',
        color: warn ? 'var(--warn)' : 'var(--ink)', whiteSpace: 'nowrap', paddingTop: 2,
      }}>{label || (warn ? 'Careful' : 'Note')}</div>
      <div style={{ fontSize: 14.5, color: 'var(--ink-soft)' }}>{children}</div>
    </div>
  );
}
