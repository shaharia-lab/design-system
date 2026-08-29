import * as React from 'react';

/** Site footer — dashed rule, mono links, a closing aside pinned right. */
export interface FooterProps {
  /** e.g. '© 2026 Shaharia Lab · MIT'. */
  copyright?: React.ReactNode;
  links?: { label: string; href: string; onClick?: (e: React.MouseEvent) => void }[];
  /** Closing note, right-aligned. The site's ends in an em dash. */
  aside?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Footer(props: FooterProps): JSX.Element;
