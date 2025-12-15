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
  author: string;
  date: string;
  summary: string;
  coverPictureUrl: string;
  coverPictureAlt: string;
  content: string;
  pictures: ArticlePicture[];
}

export interface ArticlePicture {
  url: string;
  alt: string;
}

export interface GalleryInterface {
  id: string;
  title: string;
  slug: string;
  department: number;
  date: string;
  author: string;
  description: string;
  content: string;
  category: string;
  images: GalleryImage[];
}

export interface GalleryImage {
  url: string;
  caption: string;
}

export interface TimelineCardProps {
  id: string;
  startMonth: string | null;
  startYear: number;
  endMonth: string | null;
  endYear: number | null;
  title: string;
  text: string;
  Icon: IconType;
}
