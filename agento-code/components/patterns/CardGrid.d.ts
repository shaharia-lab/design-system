import * as React from 'react';

export interface CardGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Minimum card width before the grid drops a column. Ignored if cols is set. */
  min?: number;
  /** Fix the column count instead of letting it wrap. */
  cols?: number;
  gap?: string;
  children?: React.ReactNode;
}

export interface SplitProps extends React.HTMLAttributes<HTMLDivElement> {
  /** grid-template-columns. Default '1fr 1fr'. */
  ratio?: string;
  gap?: string;
  align?: React.CSSProperties['alignItems'];
  children?: React.ReactNode;
}

export declare function CardGrid(props: CardGridProps): React.JSX.Element;
export declare function Split(props: SplitProps): React.JSX.Element;
