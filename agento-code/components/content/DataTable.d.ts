import * as React from 'react';

/** Reference table for docs — settings, keys, platforms. */
export interface DataTableProps {
  head: React.ReactNode[];
  rows: React.ReactNode[][];
  style?: React.CSSProperties;
}
export declare function DataTable(props: DataTableProps): JSX.Element;
