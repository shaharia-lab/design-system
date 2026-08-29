import * as React from 'react';

/** The hero's proof strip: one shadowed container, ink-divided cells, tabular numerals. */
export interface StatGridProps {
  /** n = the figure ("0", "~60s"); k = the mono uppercase caption. */
  items: { n: React.ReactNode; k: React.ReactNode }[];
  style?: React.CSSProperties;
}
export declare function StatGrid(props: StatGridProps): JSX.Element;
