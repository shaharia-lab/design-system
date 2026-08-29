import React from 'react';

/* One solid inverted rectangle. Never a window bar, never a title strip — the
   site strips those off Expressive Code's frames to match this. Token classes
   inside: .k keyword, .s string, .c comment. */
export function CodeBlock({ code, children, style, ...rest }) {
  return (
    <pre style={{
      background: 'var(--code-bg)', color: 'var(--code-fg)',
      border: 'var(--bw) solid var(--code-border)', borderRadius: 'var(--radius)',
      fontFamily: 'var(--font-mono)', fontSize: 12.5, lineHeight: 1.7,
      padding: '14px 16px', overflowX: 'auto', margin: 0, ...style,
    }} {...rest}>{children != null ? children : code}</pre>
  );
}

export function CodeKey({ children }) { return <span style={{ color: 'var(--code-key)', fontWeight: 700 }}>{children}</span>; }
export function CodeStr({ children }) { return <span style={{ color: 'var(--accent)' }}>{children}</span>; }
export function CodeComment({ children }) { return <span style={{ color: 'var(--code-comment)' }}>{children}</span>; }
