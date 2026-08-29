import React from 'react';
import { Pill } from '../core/Pill.jsx';

/* Blog index entry. The list form is a three-column grid divided by ink rules;
   the `feature` form is a full sheet with a 40px title. */
export function PostRow({ href, date, title, description, tags = [], feature, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const common = { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) };
  if (feature) {
    return (
      <a href={href} style={{
        display: 'block', padding: 30, marginBottom: 26, textDecoration: 'none', color: 'var(--ink)',
        background: 'var(--raised)', border: 'var(--bw-strong) solid var(--ink)',
        borderRadius: 'var(--radius)', boxShadow: 'var(--offset)', ...style,
      }} {...common} {...rest}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 14 }}>
          <Pill>Latest</Pill>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-nav)', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>{date}</span>
        </div>
        <h3 style={{ fontFamily: 'var(--font-sub)', fontWeight: 600, fontSize: 40, lineHeight: 1.18, margin: '0 0 10px', maxWidth: '20ch', letterSpacing: 'var(--tracking-heading)' }}>{title}</h3>
        <p style={{ margin: '0 0 10px', color: 'var(--ink-soft)', fontSize: 15, maxWidth: '62ch' }}>{description}</p>
        <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>{tags.map((t) => <Pill key={t} plain>{t}</Pill>)}</div>
      </a>
    );
  }
  return (
    <a href={href} style={{
      display: 'grid', gridTemplateColumns: '130px 1fr auto', gap: 24, alignItems: 'start',
      padding: '24px 4px', borderBottom: 'var(--bw) solid var(--ink)',
      textDecoration: 'none', color: 'var(--ink)',
      background: hover ? 'var(--sunken)' : 'transparent', ...style,
    }} {...common} {...rest}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-nav)', textTransform: 'uppercase', color: 'var(--ink-soft)', paddingTop: 7 }}>{date}</span>
      <div>
        <h3 style={{ fontFamily: 'var(--font-sub)', fontWeight: 600, fontSize: 26, lineHeight: 1.18, margin: '0 0 7px', letterSpacing: 'var(--tracking-heading)' }}>{title}</h3>
        <p style={{ margin: '0 0 10px', color: 'var(--ink-soft)', fontSize: 15, maxWidth: '62ch' }}>{description}</p>
        <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>{tags.map((t) => <Pill key={t} plain>{t}</Pill>)}</div>
      </div>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 15, paddingTop: 6, color: hover ? 'var(--accent-deep)' : 'var(--ink-faint)' }}>→</span>
    </a>
  );
}
