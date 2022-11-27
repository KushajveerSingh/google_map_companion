import type { ReactNode } from 'react';

export interface TypeMetaTagsProps {
  title: string;
  description?: string;
  url?: string;
  image?: string;
  children?: ReactNode;
}
