// lib/search.ts
import type { AwardItem, ProjectItem } from "@/lib/types";
import type { BlogPost } from "@/data/blog";
import { categoriesForTags } from "@/lib/categories";
import { getYear } from "@/lib/date";

export type SearchDoc = {
  type: "award" | "project" | "blog";
  slug: string;
  title: string;
  short: string;
  tags: string[];
  categories: string[];
  year: string | null;
  href: string;
};

export function buildSearchIndex(
  awards: AwardItem[],
  projects: ProjectItem[],
  blogPosts: BlogPost[] = []
): SearchDoc[] {
  return [
    ...awards.map((a) => ({
      type: "award" as const,
      slug: a.slug,
      title: a.title,
      short: a.short,
      tags: a.tags,
      categories: categoriesForTags(a.tags),
      year: getYear(a.date),
      href: `/awards/${a.slug}`,
    })),
    ...projects.map((p) => ({
      type: "project" as const,
      slug: p.slug,
      title: p.title,
      short: p.short,
      tags: p.tags,
      categories: categoriesForTags(p.tags),
      year: getYear(p.date),
      href: `/projects/${p.slug}`,
    })),
    ...blogPosts.map((post) => ({
      type: "blog" as const,
      slug: post.slug,
      title: post.title,
      short: post.short,
      tags: post.tags,
      categories: categoriesForTags(post.tags),
      year: getYear(post.date),
      href: `/blog/${post.slug}`,
    })),
  ];
}

export function matches(doc: SearchDoc, q: string, activeCategories: string[]) {
  const query = q.trim().toLowerCase();
  const hay = `${doc.title} ${doc.short} ${doc.year ?? ""} ${doc.tags.join(" ")} ${doc.categories.join(" ")}`.toLowerCase();

  const queryOk = query.length === 0 || hay.includes(query);
  const categoriesOk =
    activeCategories.length === 0 ||
    activeCategories.every((category) =>
      doc.categories
        .map((x) => x.toLowerCase())
        .includes(category.toLowerCase())
    );

  return queryOk && categoriesOk;
}
