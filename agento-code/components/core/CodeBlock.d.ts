import * as React from 'react';

/** A solid inverted code rectangle — no window chrome, no caption bar. */
export interface CodeBlockProps {
  /** Plain-text code. Ignored when children are given. */
  code?: string;
  /** Use CodeKey / CodeStr / CodeComment to colour runs. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function CodeBlock(props: CodeBlockProps): JSX.Element;
export declare function CodeKey(props: { children?: React.ReactNode }): JSX.Element;
export declare function CodeStr(props: { children?: React.ReactNode }): JSX.Element;
export declare function CodeComment(props: { children?: React.ReactNode }): JSX.Element;
