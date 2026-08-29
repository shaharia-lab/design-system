import * as React from 'react';

/** A numbered procedure in one divided strip — install, first-run, setup. */
export interface StepsProps {
  items: { title: React.ReactNode; body: React.ReactNode; footer?: React.ReactNode }[];
  style?: React.CSSProperties;
}
export declare function Steps(props: StepsProps): JSX.Element;
