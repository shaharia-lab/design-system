import * as React from 'react';

/**
 * The site's primary control — mono uppercase label, hard ink border, solid
 * offset shadow, presses onto its own shadow.
 *
 */
export interface ButtonProps {
  /** default = bone sheet, primary = electric blue, ink = solid near-black, ghost = transparent (inverted grounds only). */
  variant?: 'default' | 'primary' | 'ink' | 'ghost';
  /** Renders an <a> instead of a <button>. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  /** Set on a dark/inverted panel: border and shadow become paper-coloured. */
  onInvert?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
