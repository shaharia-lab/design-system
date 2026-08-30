import React from 'react';

/* The mono line that closes a section under a hairline rule: an aside on the
   left, links on the right, all in 11px uppercase mono. It is the footnote of
   the page — never put anything essential here. */
export function MetaRule({ note, children, align = 'between', style, ...rest }) {
  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16,
      justifyContent: align === 'between' ? 'space-between' : align,
      borderTop: 'var(--bw-hair) solid var(--ink-faint)',
      padding: '12px 0 0', marginTop: 18, ...style,
    }} {...rest}>
      {note ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-nav)', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>{note}</span> : null}
      {children ? <span style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16 }}>{children}</span> : null}
    </div>
  );
}
