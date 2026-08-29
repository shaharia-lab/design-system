import React from 'react';

/* The two <details> shapes in the source, behind one component.
   variant="faq"   — hairline sheet, 16.5px Newsreader summary, no shadow.
   variant="panel" — full sheet with shadow, 20px summary, right-hand meta slot
                     and an optional "Recommended for you" flag. */
export function Disclosure({ variant = 'faq', summary, meta, recommended, open, defaultOpen, onToggle, style, children, ...rest }) {
  const isPanel = variant === 'panel';
  const [self, setSelf] = React.useState(!!defaultOpen);
  const isOpen = open === undefined ? self : open;
  const [hover, setHover] = React.useState(false);
  const toggle = (e) => { e.preventDefault(); if (open === undefined) setSelf(!isOpen); if (onToggle) onToggle(!isOpen); };
  return (
    <div style={{
      border: 'var(--bw' + (isPanel ? '' : '-hair') + ') solid ' + (isPanel || isOpen ? 'var(--ink)' : 'var(--ink-faint)'),
      borderRadius: 'var(--radius)', background: 'var(--raised)',
      boxShadow: isPanel ? (recommended ? 'var(--offset-accent)' : 'var(--offset)') : 'none',
      overflow: 'hidden', ...style,
    }} {...rest}>
      <div role="button" tabIndex={0} onClick={toggle} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggle(e); }}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{
          display: 'flex', alignItems: isPanel ? 'center' : 'baseline', gap: isPanel ? 14 : 12,
          padding: isPanel ? '15px 20px' : '12px 15px', cursor: 'pointer',
          background: hover ? 'var(--sunken)' : 'transparent',
          fontFamily: 'var(--font-sub)', fontWeight: 600, fontSize: isPanel ? 20 : 16.5,
        }}>
        <span aria-hidden="true" style={{
          fontFamily: 'var(--font-mono)', color: isPanel ? 'var(--ink-soft)' : 'var(--ink-faint)',
          transform: isOpen ? 'rotate(90deg)' : 'none',
          transition: 'transform var(--dur-chev) var(--ease)', display: 'inline-block',
        }}>▸</span>
        <span>{summary}</span>
        {recommended ? <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 700,
          letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase',
          padding: '3px 9px', border: '1.5px solid var(--ink)', borderRadius: 'var(--radius-pill)',
          background: 'var(--accent-tint)', color: 'var(--ink)',
        }}>Recommended for you</span> : null}
        {meta ? <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-nav)', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>{meta}</span> : null}
      </div>
      {isOpen ? (
        <div style={isPanel
          ? { padding: '18px 20px 20px', borderTop: '1px dashed var(--ink-faint)' }
          : { padding: '0 15px 14px 39px' }}>{children}</div>
      ) : null}
    </div>
  );
}
