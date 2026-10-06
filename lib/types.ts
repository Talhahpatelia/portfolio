export type LinkItem = {
  label: string;
  href: string;
  kind?: "Live" | "Source" | "Press" | "Store" | "Document" | "Beta";
};

export type ImageItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Credit or one-line explanation shown under the image. */
  caption?: string;
  /** How a thumbnail is cropped. Certificates and screenshots use "contain" so nothing is cut off. */
  fit?: "cover" | "contain";
  /** What sort of image this is, for the gallery filter. Defaults to a photo. */
  kind?: "photo" | "certificate" | "screen";
};

export type RelatedRef = { type: "project" | "award"; slug: string };

export type BaseItem = {
  slug: string;
  title: string;
  /** One plain sentence. Shown in lists, search and as the meta description. */
  summary: string;
  /** Page title for search results, when it should say more than the heading does. Keep it under 44 characters. */
  seoTitle?: string;
  tags: string[];
  /** ISO date: "2024", "2024-07" or "2024-07-26". */
  date?: string;
  role?: string;
  image?: ImageItem;
  /** More photos, shown on the entry's own page below the write-up. */
  gallery?: ImageItem[];
  links?: LinkItem[];
  related?: RelatedRef[];
  featured?: boolean;
};

export type AwardItem = BaseItem & {
  org?: string;
  /** The outcome in one or two words ("1st", "Gold", "Top 25"). Shown down the left of the list so it can be scanned. */
  result?: string;
};

export type ProjectStatus = "Live" | "Beta" | "In progress" | "Completed";

export type ProjectItem = BaseItem & {
  status?: ProjectStatus;
  stack?: string[];
};

export type ItemType = "project" | "award" | "blog";
