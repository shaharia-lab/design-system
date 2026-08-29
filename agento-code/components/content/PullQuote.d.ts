import * as React from 'react';

/** Blog pull quote — display serif, blue left edge. One per post. */
export interface PullQuoteProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function PullQuote(props: PullQuoteProps): JSX.Element;
