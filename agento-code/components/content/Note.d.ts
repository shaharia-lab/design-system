import * as React from 'react';

/** Docs aside — dashed ink border for a note, solid amber for a caution. */
export interface NoteProps {
  kind?: 'note' | 'warn';
  /** Mono keyword in the left column. Defaults to 'Note' / 'Careful'. */
  label?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Note(props: NoteProps): JSX.Element;
