import React from 'react';

/* A button that opens search, not an input. Mono uppercase placeholder with the
   shortcut in a hairline kbd on the right. */
export function SearchBox({ label = 'Search docs', shortcut = '⌘K', onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      display: 'flex', alignItems: 'center', gap: 8, width: '100%',
      padding: '8px 10px', marginBottom: 22,
      background: hover ? 'var(--sunken)' : 'var(--raised)',
      border: 'var(--bw) solid var(--ink)', borderRadius: 'var(--radius)',
      fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-nav)',
      textTransform: 'uppercase', color: 'var(--ink-soft)', cursor: 'pointer', ...style,
    }} {...rest}>
      {label}
      <kbd style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 10, border: '1.2px solid var(--ink-faint)', borderRadius: 2, padding: '1px 5px', color: 'var(--ink-soft)' }}>{shortcut}</kbd>
    </button>
  );
}
