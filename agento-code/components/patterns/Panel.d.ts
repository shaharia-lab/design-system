import * as React from 'react';

/**
 * The padded, headed sheet — the landing page's workhorse card.
 *
 */
export interface PanelProps {
  variant?: 'default' | 'flat' | 'dashed' | 'accent';
  /** 'panel' = 26px pad + 25px Newsreader heading; 'card' = 20px pad + 19.5px heading. */
  size?: 'panel' | 'card';
  /** Mono eyebrow label above the heading. */
  eyebrow?: React.ReactNode;
  /** Right-hand slot of the eyebrow, normally a ↗ link. */
  eyebrowEnd?: React.ReactNode;
  title?: React.ReactNode;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Panel(props: PanelProps): JSX.Element;
