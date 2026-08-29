import * as React from 'react';

/**
 * Blog index entry — the ruled list row, or the featured sheet.
 *
 */
export interface PostRowProps {
  href?: string;
  /** '25 Aug 2026' in the list, '25 August 2026' when featured. */
  date?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  tags?: string[];
  /** The one shadowed sheet at the top of the index. */
  feature?: boolean;
  style?: React.CSSProperties;
}
export declare function PostRow(props: PostRowProps): JSX.Element;
