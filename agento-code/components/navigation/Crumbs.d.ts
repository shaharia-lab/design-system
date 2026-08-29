import * as React from 'react';

/** Mono uppercase breadcrumbs above a documentation title. */
export interface CrumbsProps {
  items: React.ReactNode[];
  style?: React.CSSProperties;
}
export declare function Crumbs(props: CrumbsProps): JSX.Element;
