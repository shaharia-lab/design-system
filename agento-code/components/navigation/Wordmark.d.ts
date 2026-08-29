import * as React from 'react';

/** The Agento wordmark: display serif + the blue dot. Set as type, never as an image. */
export interface WordmarkProps {
  href?: string;
  /** Product name. Use another Shaharia Lab project's name to re-brand a site. */
  label?: string;
  /** Font size in px; the dot scales with it. Default 26. */
  size?: number;
  style?: React.CSSProperties;
}
export declare function Wordmark(props: WordmarkProps): JSX.Element;
