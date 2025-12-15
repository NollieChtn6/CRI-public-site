export interface SectionInterface {
  label: string;
  path: string;
  pages?: PageInterface[];
}

export interface PageInterface {
  label: string;
  path: string;
  description?: string;
}

export interface NavLinkInterface {
  label: string;
  path: string;
}

export interface ArticleInterface {
  id: string;
  title: string;
  slug: string;
  author: string;
  date: string;
  summary: string;
  coverPictureUrl: string;
  coverPictureAlt: string;
  content: string;
  pictures: Picture[];
}

export interface Picture {
  url: string;
  alt: string;
}

export interface GalleryInterface {
  id: string;
  title: string;
  slug: string;
  department: number;
  date: string;
  authors: string[];
  description: string;
  content: string;
  tag: string;
  pictures: Picture[];
}

export interface TimelineCardProps {
  id: string;
  startDay: number | null;
  startMonth: number | null;
  startYear: number;
  endDay: number | null;
  endMonth: number | null;
  endYear: number | null;
  title: string;
  text: string;
  iconName?: string;
}
