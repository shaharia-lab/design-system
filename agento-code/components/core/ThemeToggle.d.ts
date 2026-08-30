import * as React from 'react';

export interface ThemeToggleProps extends React.HTMLAttributes<HTMLElement> {
  /** localStorage key the choice is remembered under. Match the host site. */
  storageKey?: string;
  /** Force a theme instead of reading storage / system preference. */
  defaultTheme?: 'light' | 'dark';
  /** Called with the newly applied theme. */
  onChange?: (theme: 'light' | 'dark') => void;
}

export declare function ThemeToggle(props: ThemeToggleProps): React.JSX.Element;
