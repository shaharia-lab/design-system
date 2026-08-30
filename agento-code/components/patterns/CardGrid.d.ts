import * as React from 'react';

export interface CardGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Columns at desktop width. 2 and 3 have breakpoints in base.css. */
  cols?: 2 | 3;
  /** Override the token gap. Rarely needed. */
  gap?: string;
  className?: string;
  children?: React.ReactNode;
}

export interface SplitProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The lopsided screenshot-plus-note variant (.split--media). */
  media?: boolean;
  gap?: string;
  className?: string;
  children?: React.ReactNode;
}

export declare function CardGrid(props: CardGridProps): React.JSX.Element;
export declare function Split(props: SplitProps): React.JSX.Element;
