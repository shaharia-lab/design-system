import * as React from 'react';

/** The bare card surface: ink border + solid offset shadow, no padding. */
export interface SheetProps {
  /** default = raised + 8px ink offset; flat = no shadow; dashed = provisional surface; accent = blue offset (the recommended item). */
  variant?: 'default' | 'flat' | 'dashed' | 'accent';
  /** Element to render — 'div' (default), 'section', 'details', 'article'. */
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Sheet(props: SheetProps): JSX.Element;
