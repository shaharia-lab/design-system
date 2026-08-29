import * as React from 'react';

/** The em-rule + mono label that names a panel. Agento's signature device. */
export interface EyebrowProps {
  /** Right-aligned slot — normally a link underlined in blue, ending in ↗. */
  end?: React.ReactNode;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;
