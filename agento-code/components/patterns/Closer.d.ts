import * as React from 'react';

/** The inverted closing panel — the last thing on a marketing page. */
export interface CloserProps {
  /** A full sentence, e.g. 'Your sessions are already on disk.' */
  title: React.ReactNode;
  /** Buttons. Pass `onInvert` on each so borders and shadows flip to paper. */
  actions?: React.ReactNode;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Closer(props: CloserProps): JSX.Element;
