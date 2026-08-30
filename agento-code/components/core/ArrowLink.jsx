import React from 'react';

/* The small mono link that ends a panel or a section: "Requirements ↗",
   "All documentation ↗", "Full installation guide". Never a button — it is the
   quiet way out of a block. The arrow is a character, not an icon: ↗ leaves the
   page or opens a doc, → continues within it. */
export function ArrowLink({ href, arrow = 'out', tone = 'muted', size = 11, onClick, style, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const accent = tone === 'accent';
  const glyph = arrow === 'in' ? '→' : arrow === 'none' ? null : '↗';
  return (
    <a href={href} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 5,
        fontFamily: 'var(--font-mono)', fontSize: size, fontWeight: 500,
        letterSpacing: 'var(--tracking-nav)', textTransform: 'uppercase',
        textDecoration: 'none', color: accent ? 'var(--accent-deep)' : 'var(--ink-soft)',
        borderBottom: '1.5px solid ' + (hover ? (accent ? 'var(--accent)' : 'var(--ink)') : 'transparent'),
        paddingBottom: 1, cursor: 'pointer', ...style,
      }} {...rest}>
      {children}
      {glyph ? <span aria-hidden="true" style={{ transform: hover ? 'translate(1px, ' + (arrow === 'in' ? '0' : '-1px') + ')' : 'none', transition: 'transform var(--dur-press) var(--ease)' }}>{glyph}</span> : null}
    </a>
  );
}
