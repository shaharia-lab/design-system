import React from 'react';

/* A pull quote inside a post: ink border with a 6px blue left edge, raised
   ground, and the quote itself set in the display serif at 25px. */
export function PullQuote({ style, children, ...rest }) {
  return (
    <blockquote style={{
      margin: '26px 0', padding: '20px 24px',
      border: 'var(--bw) solid var(--ink)', borderLeft: '6px solid var(--accent)',
      borderRadius: 'var(--radius)', background: 'var(--raised)', ...style,
    }} {...rest}>
      <p style={{ margin: 0, color: 'var(--ink)', fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 25, lineHeight: 1.3 }}>{children}</p>
    </blockquote>
  );
}
