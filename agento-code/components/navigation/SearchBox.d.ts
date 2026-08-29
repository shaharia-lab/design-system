import * as React from 'react';

/** Search trigger above the docs sidebar — a button, not a text field. */
export interface SearchBoxProps {
  label?: string;
  /** Shortcut shown in the kbd chip. Default '⌘K'. */
  shortcut?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function SearchBox(props: SearchBoxProps): JSX.Element;
