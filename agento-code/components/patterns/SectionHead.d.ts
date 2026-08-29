import * as React from 'react';

/** Opens a landing-page section: serif sentence left, mono label right. */
export interface SectionHeadProps {
  /** A complete sentence, with its full stop. May contain an <em> for the one blue word. */
  title: React.ReactNode;
  /** Mono uppercase label pinned right, e.g. 'What you get', '⌘K', 'Design'. */
  label?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function SectionHead(props: SectionHeadProps): JSX.Element;
