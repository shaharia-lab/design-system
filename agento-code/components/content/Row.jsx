import React from 'react';
import { Badge } from '../core/Badge.jsx';

/* One hairline row in a stacked list. The list has an 8px gap and no shadow of
   its own; the panel around it carries the shadow. Hover promotes the faint
   border to full ink and darkens the ground to sunken. */
export function Row({ href, badge, title, mono, right, go = '→', recommended, style, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'div';
  return (
    <Tag href={href} style={{
      display: 'flex', alignItems: 'center', gap: 14, padding: 'var(--pad-row)',
      border: 'var(--bw-hair) solid ' + (hover || recommended ? 'var(--ink)' : 'var(--ink-faint)'),
      borderRadius: 'var(--radius)',
      background: recommended ? 'var(--accent-tint)' : hover ? 'var(--sunken)' : 'var(--raised)',
      textDecoration: 'none', color: 'var(--ink)', ...style,
    }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}>
      {badge ? <Badge>{badge}</Badge> : null}
      {title ? <span style={{ fontFamily: 'var(--font-sub)', fontWeight: 600, fontSize: 16.5 }}>{title}</span> : null}
      {mono ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5 }}>{mono}</span> : null}
      {children}
      {right ? <span style={{ marginLeft: 'auto', fontSize: 14, color: 'var(--ink-soft)', textAlign: 'right' }}>{right}</span> : null}
      {go ? <span style={{ marginLeft: right ? 0 : 'auto', fontFamily: 'var(--font-mono)', color: hover ? 'var(--accent-deep)' : 'var(--ink-faint)' }}>{go}</span> : null}
    </Tag>
  );
}

export function RowList({ style, children, ...rest }) {
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-rows)', ...style }} {...rest}>{children}</div>;
}
