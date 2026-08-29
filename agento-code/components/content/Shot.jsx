import React from 'react';

/* The only frame product screenshots ever appear in: 2px ink border, 8px solid
   offset, a sunken title bar with three ink-outlined dots and a mono app label,
   and an optional mono caption below a hairline rule. */
export function Shot({ name, src, alt, caption, style, ...rest }) {
  return (
    <figure style={{
      margin: 0, border: 'var(--bw-strong) solid var(--ink)', borderRadius: 'var(--radius)',
      boxShadow: 'var(--offset)', background: 'var(--raised)', overflow: 'hidden', ...style,
    }} {...rest}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderBottom: 'var(--bw) solid var(--ink)', background: 'var(--sunken)' }}>
        {[0, 1, 2].map((i) => (
          <span key={i} style={{ width: 9, height: 9, borderRadius: 'var(--radius-pill)', border: '1.2px solid var(--ink)', background: 'var(--paper)' }}></span>
        ))}
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--ink-soft)', marginLeft: 4 }}>{name}</span>
      </div>
      {src
        ? <img src={src} alt={alt || ''} />
        : <div style={{ height: 220, display: 'grid', placeItems: 'center', background: 'var(--paper)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>{alt || 'Screenshot'}</div>}
      {caption ? <figcaption style={{ padding: '10px 14px', borderTop: 'var(--bw) solid var(--ink)', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-soft)' }}>{caption}</figcaption> : null}
    </figure>
  );
}
