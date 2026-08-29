import React from 'react';

/* Ink-bordered wrapper, mono uppercase headers on a sunken ground, hairline
   faint cell rules, last row unruled. */
export function DataTable({ head = [], rows = [], style, ...rest }) {
  return (
    <div style={{ overflowX: 'auto', border: 'var(--bw) solid var(--ink)', borderRadius: 'var(--radius)', ...style }} {...rest}>
      <table style={{ borderCollapse: 'collapse', width: '100%', background: 'var(--raised)', fontSize: 14.5 }}>
        <thead><tr>{head.map((h, i) => (
          <th key={i} style={{
            textAlign: 'left', padding: '9px 12px',
            fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 700,
            letterSpacing: 'var(--tracking-button)', textTransform: 'uppercase',
            background: 'var(--sunken)', borderBottom: 'var(--bw) solid var(--ink)',
          }}>{h}</th>
        ))}</tr></thead>
        <tbody>{rows.map((r, ri) => (
          <tr key={ri}>{r.map((c, ci) => (
            <td key={ci} style={{ textAlign: 'left', padding: '9px 12px', borderBottom: ri === rows.length - 1 ? 0 : 'var(--bw-hair) solid var(--ink-faint)' }}>{c}</td>
          ))}</tr>
        ))}</tbody>
      </table>
    </div>
  );
}
