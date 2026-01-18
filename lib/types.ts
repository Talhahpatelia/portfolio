// lib/types.ts
export type Tag =
  | "HPC"
  | "Embedded"
  | "ML"
  | "Robotics"
  | "EdTech"
  | "Research"
  | "Startup"
  | "CAD"
  | "Medical"
  | "Infrastructure"
  | string;

export type LinkItem = {
  label: string;
  href: string;
};

export type BaseItem = {
  slug: string;
  title: string;
  short: string;          // used in tiles + search results
  description?: string;   // longer body for detail page
  tags: Tag[];
  date?: string;          // e.g. "2024-07"
  image?: {
    src: string;          // put in /public or remote (configure next/image)
    alt: string;
  };
  links?: LinkItem[];
};

export type AwardItem = BaseItem & {
  org?: string;
  role?: string;
};

export type ProjectItem = BaseItem & {
  status?: "Active" | "Paused" | "Shipped";
  stack?: string[];
};
