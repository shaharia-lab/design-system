import React from 'react';

/* Author line under a post. The avatar is initials in mono on an accent-tint disc
   — there are no photographs anywhere in this brand. */
export function Byline({ initials, name, role, style, ...rest }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 34, paddingTop: 22, borderTop: 'var(--bw) solid var(--ink)', ...style }} {...rest}>
      <div style={{
        width: 40, height: 40, borderRadius: 'var(--radius-pill)',
        border: 'var(--bw) solid var(--ink)', background: 'var(--accent-tint)',
        display: 'grid', placeItems: 'center',
        fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14,
      }}>{initials}</div>
      <div>
        <div style={{ fontWeight: 700, fontSize: 15 }}>{name}</div>
        <div style={{ fontSize: 13.5, color: 'var(--ink-soft)' }}>{role}</div>
      </div>
    </div>
  );
}
