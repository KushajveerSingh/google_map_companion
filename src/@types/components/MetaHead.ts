import type { ReactNode } from 'react';

export interface TypeMetaHeadProps {
  title: string;
  description?: string;
  url?: string;
  image?: string;
  children?: ReactNode;
}