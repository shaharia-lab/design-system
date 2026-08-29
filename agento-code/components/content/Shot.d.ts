import * as React from 'react';

/**
 * The screenshot frame — window bar, ink border, solid offset, mono caption.
 *
 */
export interface ShotProps {
  /** Mono uppercase app label in the title bar, e.g. "Agento — Insights". */
  name: React.ReactNode;
  /** Image URL. Omitted renders a labelled placeholder box. */
  src?: string;
  alt?: string;
  /** Mono caption below a hairline rule. */
  caption?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Shot(props: ShotProps): JSX.Element;
