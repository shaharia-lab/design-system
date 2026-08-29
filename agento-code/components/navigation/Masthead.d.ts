import * as React from 'react';

/**
 * The site header — wordmark, mono nav, star ask, theme toggle.
 *
 */
export interface MastheadProps {
  label?: string;
  links?: { label: string; href: string; onClick?: (e: React.MouseEvent) => void }[];
  /** Label of the current section — gets an ink underline. */
  current?: string;
  /** GitHub star button. `count` is only rendered above ~250 stars. */
  star?: { href: string; count?: string };
  /** Toggle label, naming the mode it switches TO ('Dark' while light). */
  theme?: string;
  onTheme?: () => void;
  style?: React.CSSProperties;
}
export declare function Masthead(props: MastheadProps): JSX.Element;
