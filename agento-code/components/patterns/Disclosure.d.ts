import * as React from 'react';

/** Collapsible section — the FAQ item and the per-platform install card. */
export interface DisclosureProps {
  /** 'faq' = hairline, no shadow; 'panel' = full sheet with shadow and meta slot. */
  variant?: 'faq' | 'panel';
  summary: React.ReactNode;
  /** Mono uppercase right slot, e.g. '4 files'. Panel variant only. */
  meta?: React.ReactNode;
  /** Adds the blue offset shadow and the "Recommended for you" flag. */
  recommended?: boolean;
  /** Controlled open state. Omit to use defaultOpen. */
  open?: boolean;
  defaultOpen?: boolean;
  onToggle?: (open: boolean) => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Disclosure(props: DisclosureProps): JSX.Element;
