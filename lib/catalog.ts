import { awards } from "@/data/awards";
import { blogPosts } from "@/data/blog";
import { projects } from "@/data/projects";
import { categoriesForTags } from "@/lib/categories";
import { hasPage } from "@/lib/content";
import { getYear, sortDateValue, toIsoDate } from "@/lib/date";
import type { AwardItem, BaseItem, ImageItem, ItemType, LinkItem, ProjectItem, ProjectStatus } from "@/lib/types";

/**
 * Everything that appears in a list, in one serialisable shape.
 * Server-only: it checks the content folder to decide which entries have a page.
 */
export type Entry = {
  type: ItemType;
  slug: string;
  title: string;
  /** Title for the page's <title> tag. Falls back to `title`. */
  seoTitle?: string;
  summary: string;
  date?: string;
  /** Full ISO date for <time datetime>. */
  isoDate?: string;
  year: string | null;
  /** The outcome in a word or two, for awards. */
  result?: string;
  /** The entry's own page, or its anchor in the archive when it has no page. */
  href: string;
  hasPage: boolean;
  /** Where the title should link: its own page, else the first related page, else nowhere. */
  link?: string;
  tags: string[];
  categories: string[];
  /** Organisation for awards, role for projects. */
  meta?: string;
  status?: ProjectStatus;
  image?: ImageItem;
  gallery: ImageItem[];
  links: LinkItem[];
  related: { title: string; href: string }[];
  featured: boolean;
};

const ARCHIVE_PATH = { project: "/projects", award: "/awards", blog: "/blog" } as const;
const CONTENT_DIR = { project: "projects", award: "awards", blog: "blog" } as const;

export function pathFor(type: ItemType, slug: string) {
  const page = hasPage(CONTENT_DIR[type], slug);
  return page ? `${ARCHIVE_PATH[type]}/${slug}` : `${ARCHIVE_PATH[type]}#${slug}`;
}

function find(type: "project" | "award", slug: string): ProjectItem | AwardItem | undefined {
  const items: (ProjectItem | AwardItem)[] = type === "project" ? projects : awards;
  return items.find((item) => item.slug === slug);
}

function build(
  type: ItemType,
  item: BaseItem & { org?: string; status?: ProjectStatus; result?: string },
): Entry {
  const page = hasPage(CONTENT_DIR[type], item.slug);
  const related = (item.related ?? []).flatMap((ref) => {
    const target = find(ref.type, ref.slug);
    return target ? [{ title: target.title, href: pathFor(ref.type, ref.slug) }] : [];
  });

  return {
    type,
    slug: item.slug,
    title: item.title,
    seoTitle: item.seoTitle,
    summary: item.summary,
    date: item.date,
    isoDate: toIsoDate(item.date),
    year: getYear(item.date),
    result: item.result,
    href: pathFor(type, item.slug),
    hasPage: page,
    link: page ? pathFor(type, item.slug) : related[0]?.href,
    tags: item.tags,
    categories: categoriesForTags(item.tags),
    meta: type === "award" ? item.org : item.role,
    status: item.status,
    image: item.image,
    gallery: item.gallery ?? [],
    links: item.links ?? [],
    related,
    featured: Boolean(item.featured),
  };
}

export function byNewest<T extends { date?: string }>(items: T[]) {
  return [...items].sort((a, b) => sortDateValue(b.date) - sortDateValue(a.date));
}

export function getProjects(): Entry[] {
  return byNewest(projects).map((item) => build("project", item));
}

export function getAwards(): Entry[] {
  return byNewest(awards).map((item) => build("award", item));
}

export function getPosts(): Entry[] {
  return byNewest(blogPosts).map((item) => build("blog", item));
}

export function getEntry(type: "project" | "award", slug: string): Entry | undefined {
  const item = find(type, slug);
  return item ? build(type, item) : undefined;
}

export function getAllEntries(): Entry[] {
  return [...getProjects(), ...getAwards(), ...getPosts()];
}

/** Entries that have their own page, for the sitemap. */
export function getPagedEntries(): Entry[] {
  return getAllEntries().filter((entry) => entry.hasPage);
}

/**
 * Other pages worth reading after this one: same kind first, then shared
 * categories, then newest. Gives every page onward links for readers and crawlers.
 */
export function getSimilar(entry: Entry, limit = 3): Entry[] {
  const score = (other: Entry) =>
    (other.type === entry.type ? 2 : 0) + other.categories.filter((c) => entry.categories.includes(c)).length;

  return getPagedEntries()
    .filter((other) => other.type !== "blog" && !(other.type === entry.type && other.slug === entry.slug))
    .sort((a, b) => score(b) - score(a) || sortDateValue(b.date) - sortDateValue(a.date))
    .slice(0, limit);
}

/** One occasion in the gallery: an award or project and the pictures that belong to it. */
export type GalleryGroup = {
  type: "project" | "award";
  slug: string;
  title: string;
  summary: string;
  date?: string;
  isoDate?: string;
  result?: string;
  /** Where to read the full story. */
  href: string;
  images: ImageItem[];
};

/**
 * Every picture on the site, grouped by the award or project it belongs to,
 * newest first. A picture used in two places shows once, under the entry where
 * it is the lead image (or else the first one that lists it).
 */
export function getGalleryGroups(): GalleryGroup[] {
  const entries = byNewest([...getAwards(), ...getProjects()]);
  const owner = new Map<string, string>();
  const key = (entry: Entry) => `${entry.type}:${entry.slug}`;

  for (const entry of entries) {
    if (entry.image && !owner.has(entry.image.src)) owner.set(entry.image.src, key(entry));
  }
  for (const entry of entries) {
    for (const image of entry.gallery) if (!owner.has(image.src)) owner.set(image.src, key(entry));
  }

  return entries.flatMap((entry) => {
    const images = [entry.image, ...entry.gallery].filter(
      (image): image is ImageItem => Boolean(image) && owner.get(image!.src) === key(entry),
    );
    if (images.length === 0) return [];
    return [
      {
        type: entry.type as "project" | "award",
        slug: entry.slug,
        title: entry.title,
        summary: entry.summary,
        date: entry.date,
        isoDate: entry.isoDate,
        result: entry.result,
        href: entry.link ?? entry.href,
        images,
      },
    ];
  });
}
