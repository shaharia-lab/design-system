import * as React from 'react';

export interface ArrowLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  /** out = ↗ (leaves the block), in = → (continues), none = no glyph. */
  arrow?: 'out' | 'in' | 'none';
  /** muted is the default; accent is for the one link that must be noticed. */
  tone?: 'muted' | 'accent';
  /** Font size in px. 11 in panels, 12 on a section rule. */
  size?: number;
  children?: React.ReactNode;
}

export declare function ArrowLink(props: ArrowLinkProps): React.JSX.Element;
