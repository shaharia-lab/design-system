import * as React from 'react';

/** Previous / next links closing a documentation page. */
export interface PagerProps {
  prev?: { label: string; href: string };
  next?: { label: string; href: string };
  style?: React.CSSProperties;
}
export declare function Pager(props: PagerProps): JSX.Element;
