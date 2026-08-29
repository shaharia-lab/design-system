import React from 'react';

/* The site's primary control. A 2px ink border, a solid 5px offset shadow, and
   a press that translates the button onto its own shadow. Mono, uppercase,
   0.08em tracking. */
const VARIANTS = {
  default: { background: 'var(--raised)', color: 'var(--ink)' },
  primary: { background: 'var(--accent)', color: 'var(--on-accent)' },
  ink: { background: 'var(--ink)', color: 'var(--paper)' },
  ghost: { background: 'transparent', color: 'var(--paper)' },
};

export function Button({ variant = 'default', href, onClick, disabled, onInvert, style, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const shadowColor = onInvert ? 'var(--paper)' : 'var(--ink)';
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: 'var(--pad-btn)',
    border: 'var(--bw-strong) solid ' + (onInvert ? 'var(--paper)' : 'var(--ink)'),
    borderRadius: 'var(--radius)',
    fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700,
    letterSpacing: 'var(--tracking-button)', textTransform: 'uppercase',
    textDecoration: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    boxShadow: press ? '0 0 0 ' + shadowColor : hover ? '2px 2px 0 ' + shadowColor : '5px 5px 0 ' + shadowColor,
    transform: press ? 'translate(4px, 4px)' : hover ? 'translate(2px, 2px)' : 'none',
    transition: 'transform var(--dur-press) var(--ease), box-shadow var(--dur-press) var(--ease)',
    ...VARIANTS[variant] || VARIANTS.default,
    ...style,
  };
  const handlers = disabled ? {} : {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => { setHover(false); setPress(false); },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onClick,
  };
  if (href && !disabled) return <a href={href} style={base} {...handlers} {...rest}>{children}</a>;
  return <button type="button" style={base} disabled={disabled} {...handlers} {...rest}>{children}</button>;
}
