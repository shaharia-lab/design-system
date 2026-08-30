import * as React from 'react';

/**
 * A hairline row in a stacked list — downloads, destinations, search results.
 *
 */
export interface RowProps {
  href?: string;
  /** Squared mono tag on the left (file kind, section key). */
  badge?: string;
  /** Newsreader 600 title. */
  title?: React.ReactNode;
  /** Mono middle slot — a filename, a query. */
  mono?: React.ReactNode;
  /** Right-aligned meta: size, arch, description. */
  right?: React.ReactNode;
  /** Trailing glyph: '→' internal, '↓' download, '↗' external. Pass null to drop. */
  go?: React.ReactNode | null;
  /** Accent-tint ground + full ink border, for the detected platform's file. */
  recommended?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Row(props: RowProps): JSX.Element;
export interface RowListProps { style?: React.CSSProperties; children?: React.ReactNode }
export declare function RowList(props: RowListProps): JSX.Element;
