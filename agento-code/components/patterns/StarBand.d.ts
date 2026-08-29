import * as React from 'react';

/** The GitHub star ask — copy left, one primary button right. */
export interface StarBandProps {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  /** Formatted star count. Only pass it above ~250 stars. */
  count?: React.ReactNode;
  /** The button, normally <Button variant="primary">★ Star on GitHub</Button>. */
  action?: React.ReactNode;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function StarBand(props: StarBandProps): JSX.Element;
