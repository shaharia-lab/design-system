import React from 'react';

/* The wordmark is type, not an image: "Agento" in Instrument Serif at 26px,
   preceded by a 9px ink-bordered accent dot — the app mark's circle, extracted. */
export function Wordmark({ href = '/', label = 'Agento', size = 26, style, ...rest }) {
  return (
    <a href={href} style={{
      fontFamily: 'var(--font-display)', fontSize: size, lineHeight: 1,
      textDecoration: 'none', color: 'var(--ink)',
      display: 'flex', alignItems: 'baseline', gap: 8, ...style,
    }} {...rest}>
      <span style={{
        width: Math.round(size * 0.35), height: Math.round(size * 0.35),
        borderRadius: 'var(--radius-pill)', background: 'var(--accent)',
        border: '1.5px solid var(--ink)', display: 'inline-block',
      }}></span>{label}
    </a>
  );
}
