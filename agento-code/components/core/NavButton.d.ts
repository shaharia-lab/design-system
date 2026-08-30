import * as React from 'react';

/** A 26px masthead-scale control: the GitHub star button and the theme toggle. */
export interface NavButtonProps {
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  /** Hover ground: 'sunken' (default) or 'accent' for the star button. */
  hoverTint?: 'sunken' | 'accent';
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function NavButton(props: NavButtonProps): JSX.Element;
