export interface SectionInterface {
  label: string;
  path: string;
  pages?: PageInterface[];
}

export interface PageInterface {
  label: string;
  path: string;
}

export interface NavLinkInterface {
  label: string;
  path: string;
}