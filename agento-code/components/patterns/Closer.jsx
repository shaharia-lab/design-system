import React from 'react';

/* The one full-bleed dark moment on the site: solid ink ground, paper text,
   display-serif heading, and buttons whose borders and shadows flip to paper. */
export function Closer({ title, children, actions, style, ...rest }) {
  return (
    <section style={{
      margin: '76px 0 0', padding: '46px 34px',
      background: 'var(--ink)', color: 'var(--paper)',
      borderRadius: 'var(--radius)', boxShadow: 'var(--offset-sm)', ...style,
    }} {...rest}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 40, margin: '0 0 12px', lineHeight: 1.05 }}>{title}</h2>
      <div style={{ margin: '0 0 24px', color: 'var(--on-ink-soft)', maxWidth: '52ch' }}>{children}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>{actions}</div>
    </section>
  );
}
