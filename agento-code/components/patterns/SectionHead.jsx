import React from 'react';

/* A section head: display-serif sentence on the left, mono label pinned right.
   Every heading on this site is a complete sentence with a full stop. */
export function SectionHead({ title, label, style, ...rest }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 26, ...style }} {...rest}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 38, lineHeight: 1.05, letterSpacing: 'var(--tracking-heading)', margin: 0 }}>{title}</h2>
      {label ? <span className="label" style={{ marginLeft: 'auto' }}>{label}</span> : null}
    </div>
  );
}
