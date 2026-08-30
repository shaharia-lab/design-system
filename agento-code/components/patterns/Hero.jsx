import React from 'react';
import { Pill } from '../core/Pill.jsx';

/* The top of a project landing page: a row of status pills, the display-serif
   claim, the lede, and the action row. The claim carries exactly one italic
   accent word — pass it as markup: title={<>See what it <em>really</em> costs
   you.</>}. Italic <em> inside inherits the accent colour from the rule below. */
export function Hero({ pills = [], title, lede, actions, note, style, children, ...rest }) {
  return (
    <section style={{ padding: '44px 0 34px', ...style }} {...rest}>
      {pills.length ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
          {pills.map((p) => typeof p === 'string' ? <Pill key={p}>{p}</Pill> : <Pill key={p.label} {...p}>{p.label}</Pill>)}
        </div>
      ) : null}
      <h1 style={{
        fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-hero)',
        lineHeight: 1.02, letterSpacing: 'var(--tracking-display)', margin: '0 0 18px', maxWidth: '20ch',
      }}>{title}</h1>
      {lede ? <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-soft)', margin: '0 0 26px', maxWidth: '46ch' }}>{lede}</p> : null}
      {actions || note ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 14 }}>
          {actions}
          {note ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-nav)', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>{note}</span> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
