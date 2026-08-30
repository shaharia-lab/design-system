import * as React from 'react';

export interface KeyListItem {
  /** The bold lead-in. Omit for a plain bullet. */
  term?: string;
  /** The explanation after the em dash. */
  children?: React.ReactNode;
}

export interface KeyListProps extends React.HTMLAttributes<HTMLUListElement> {
  items?: KeyListItem[];
}

export declare function KeyList(props: KeyListProps): React.JSX.Element;
