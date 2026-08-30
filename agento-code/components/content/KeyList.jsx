import React from 'react';

/* The bulleted list inside a landing panel, where each item opens with a bold
   term and then explains it: "Cost per session, priced at the rate in effect
   when each message ran." The marker is a small square, not a disc — the design
   has no round bullets. */
export function KeyList({ items = [], style, ...rest }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10, ...style }} {...rest}>
      {items.map((it, i) => (
        <li key={it.term || i} style={{ display: 'flex', gap: 10, fontSize: 14.5, lineHeight: 1.55, color: 'var(--ink-soft)' }}>
          <span aria-hidden="true" style={{ flex: 'none', width: 5, height: 5, marginTop: 8, background: 'var(--ink)' }}></span>
          <span>
            {it.term ? <b style={{ color: 'var(--ink)', fontWeight: 700 }}>{it.term}</b> : null}
            {it.term && it.children ? ' — ' : null}
            {it.children}
          </span>
        </li>
      ))}
    </ul>
  );
}
