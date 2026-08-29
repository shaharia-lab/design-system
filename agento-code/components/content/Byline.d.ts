import * as React from 'react';

/** Post author line — initials on a blue-tint disc, never a photograph. */
export interface BylineProps {
  initials: string;
  name: React.ReactNode;
  role?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Byline(props: BylineProps): JSX.Element;
