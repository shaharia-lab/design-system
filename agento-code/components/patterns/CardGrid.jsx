import React from 'react';

/* The two layout wrappers the landing page repeats: an even card grid (three up,
   two at 1000px, one at 760px) and the two-column split (one at 760px).

   Both name a class from base.css rather than inlining grid-template-columns.
   That is deliberate and load-bearing: an inline style outranks a stylesheet and
   a media query cannot reach it, so an inlined grid stays three columns on a
   phone. Anything the browser owns — breakpoints, hover, reduced motion — has to
   live in CSS. */
export function CardGrid({ cols = 3, gap, className = '', style, children, ...rest }) {
  const cls = ['grid' + cols, className].filter(Boolean).join(' ');
  return <div className={cls} style={gap ? { gap, ...style } : style} {...rest}>{children}</div>;
}

/* The 1:1 split ("Two halves, one window."). `media` is the lopsided variant the
   design section uses, where the screenshot is wider than its note. */
export function Split({ media, gap, className = '', style, children, ...rest }) {
  const cls = ['split', media && 'split--media', className].filter(Boolean).join(' ');
  return <div className={cls} style={gap ? { gap, ...style } : style} {...rest}>{children}</div>;
}
