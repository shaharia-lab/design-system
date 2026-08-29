import * as React from 'react';

/** Docs sidebar: eyebrow-styled group headings, blue-tint current page. */
export interface SidebarNavProps {
  groups: { label: string; items: { label: string; href: string }[] }[];
  /** href of the current page. */
  current?: string;
  style?: React.CSSProperties;
}
export declare function SidebarNav(props: SidebarNavProps): JSX.Element;
