import * as React from 'react';

/** Round mono capsule for version, platform, licence and tag metadata. */
export interface PillProps {
  /** Transparent ground — the form used for secondary metadata. */
  plain?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Pill(props: PillProps): JSX.Element;
