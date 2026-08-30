import * as React from 'react';

export interface DisclosureProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onToggle'> {
  /** faq = hairline row in a stack; panel = full sheet with shadow and meta. */
  variant?: 'faq' | 'panel';
  summary?: React.ReactNode;
  /** Mono text pinned right — file counts, sizes. Panel variant only. */
  meta?: React.ReactNode;
  /** Tints the summary and swaps the shadow for the accent offset. */
  recommended?: boolean;
  /** Controlled open state. Omit for self-managed. */
  open?: boolean;
  defaultOpen?: boolean;
  onToggle?: (open: boolean) => void;
  className?: string;
  children?: React.ReactNode;
}

export declare function Disclosure(props: DisclosureProps): React.JSX.Element;
