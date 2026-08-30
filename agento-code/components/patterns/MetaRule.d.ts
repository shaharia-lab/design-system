import * as React from 'react';

export interface MetaRuleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The mono aside on the left: "Not your platform?" */
  note?: React.ReactNode;
  /** ArrowLinks, right-aligned. */
  children?: React.ReactNode;
  align?: 'between' | 'flex-start' | 'flex-end';
}

export declare function MetaRule(props: MetaRuleProps): React.JSX.Element;
