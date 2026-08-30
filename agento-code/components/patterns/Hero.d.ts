import * as React from 'react';

export interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  /** Status pills: version, platforms, licence. Strings or Pill props. */
  pills?: (string | { label: string; tone?: string })[];
  /** The claim. Pass markup so one word can be an <em>. */
  title?: React.ReactNode;
  /** Two or three sentences, no more. */
  lede?: React.ReactNode;
  /** The button row — usually one primary and one default Button. */
  actions?: React.ReactNode;
  /** Mono aside beside the buttons: "No API key. No account. No telemetry." */
  note?: React.ReactNode;
}

export declare function Hero(props: HeroProps): React.JSX.Element;
