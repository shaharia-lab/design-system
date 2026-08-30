import React from 'react';

/* Docs sidebar. Group headings take the em-rule eyebrow with an ink underline;
   the current page is accent-tint with a full ink border. */
export function SidebarNav({ groups = [], current, style, ...rest }) {
  return (
    <nav style={{ ...style }} {...rest}>
      {groups.map((g) => (
        <div key={g.label} style={{ marginBottom: 22 }}>
          <span className="label" style={{ display: 'block', paddingBottom: 8, borderBottom: 'var(--bw) solid var(--ink)', marginBottom: 8, letterSpacing: 'var(--tracking-eyebrow)' }}>{g.label}</span>
          {g.items.map((it) => <SidebarLink key={it.href} {...it} active={it.href === current} />)}
        </div>
      ))}
    </nav>
  );
}

function SidebarLink({ label, href, active }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={href} aria-current={active ? 'page' : undefined} style={{
      display: 'block', padding: '5px 9px', textDecoration: 'none', color: 'var(--ink)',
      fontSize: 14.5, borderRadius: 2,
      border: '1.5px solid ' + (active ? 'var(--ink)' : 'transparent'),
      background: active ? 'var(--accent-tint)' : hover ? 'var(--sunken)' : 'transparent',
      fontWeight: active ? 600 : 400,
    }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>{label}</a>
  );
}
