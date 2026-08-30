import React from 'react';

/* The two <details> shapes in the source, behind one component.
   variant="faq"   — hairline sheet, 16.5px Newsreader summary, no shadow.
   variant="panel" — full sheet with shadow, 20px summary, right-hand meta slot
                     and an optional "Recommended for you" flag.

   Native <details>/<summary>, not a div with role="button": the element carries
   its own open state, keyboard behaviour, find-in-page and screen-reader
   announcement. The marker is suppressed in base.css and drawn as a chevron that
   rotates off the [open] attribute — CSS, so it survives with no JavaScript. */
export function Disclosure({ variant = 'faq', summary, meta, recommended, open, defaultOpen, onToggle, className = '', style, children, ...rest }) {
  const isPanel = variant === 'panel';
  const ref = React.useRef(null);
  React.useEffect(() => { if (open !== undefined && ref.current) ref.current.open = open; }, [open]);
  const cls = ['disclosure', isPanel ? 'disclosure--panel' : 'disclosure--faq', recommended && 'disclosure--rec', className].filter(Boolean).join(' ');
  return (
    <details ref={ref} className={cls} open={open === undefined ? defaultOpen : undefined} style={style}
      onToggle={(e) => { if (onToggle) onToggle(e.currentTarget.open); }} {...rest}>
      <summary>
        <span className="disclosure__chev" aria-hidden="true">▸</span>
        <span className="disclosure__title">{summary}</span>
        {recommended ? <span className="disclosure__flag">Recommended for you</span> : null}
        {meta ? <span className="disclosure__meta">{meta}</span> : null}
      </summary>
      <div className="disclosure__body">{children}</div>
    </details>
  );
}
