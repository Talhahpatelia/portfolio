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
  featured?: boolean;
};

export type AwardItem = BaseItem & {
  org?: string;
  role?: string;
  stack?: string[];
};


export type ProjectStage =
  | "Idea"
  | "Validation"
  | "MVP"
  | "Scaling"
  | "Completed";

export type FundingStage =
  | "Bootstrapped"
  | "Grant"
  | "Pre-Seed"
  | "Seed"
  | "Funded"
  | "None";

export type ProjectItem = BaseItem & {
  stage: ProjectStage;        // business / product lifecycle
  funding?: FundingStage;     // money status (optional)
  stack?: string[];
};