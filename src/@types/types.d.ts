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
  "cover-picture-url": string;
  "cover-picture-alt": string;
  content: string;
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
