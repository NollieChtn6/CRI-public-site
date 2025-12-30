import type { IconType } from "react-icons/lib";

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
  authors: string[];
  date: string;
  tags: string[];
  summary: string;
  coverPictureUrl: string;
  coverPictureAlt: string;
  content: string;
  pictures: Picture[];
}

export interface Picture {
  url: string;
  alt: string;
  caption?: string;
  author?: string;
}

export interface GalleryInterface {
  id: string;
  slug: string;
  title: string;
  description: string;
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
  iconName: string;
  Icon?: IconType;
}

export interface MarkdownModule {
  default: string;
  frontmatter: ArticleFrontmatter;
  filename: string;
}

export interface ArticleFrontmatter {
  slug: string;
  title: string;
  date: string;
  authors: string[];
  summary?: string;
  coverPictureUrl?: string;
  coverPictureAlt?: string;
  tags?: string[];
}
