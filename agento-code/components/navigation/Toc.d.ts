import * as React from 'react';

/** On-page table of contents, 190px right column, sticky at top: 78px. */
export interface TocProps {
  items: { label: string; href: string }[];
  /** href of the section in view. */
  current?: string;
  label?: string;
  style?: React.CSSProperties;
}
export declare function Toc(props: TocProps): JSX.Element;
