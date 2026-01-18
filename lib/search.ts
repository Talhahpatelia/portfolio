// lib/search.ts
import type { AwardItem, ProjectItem } from "@/lib/types";

export type SearchDoc = {
  type: "award" | "project";
  slug: string;
  title: string;
  short: string;
  tags: string[];
  href: string;
};

export function buildSearchIndex(
  awards: AwardItem[],
  projects: ProjectItem[]
): SearchDoc[] {
  return [
    ...awards.map((a) => ({
      type: "award" as const,
      slug: a.slug,
      title: a.title,
      short: a.short,
      tags: a.tags,
      href: `/awards/${a.slug}`,
    })),
    ...projects.map((p) => ({
      type: "project" as const,
      slug: p.slug,
      title: p.title,
      short: p.short,
      tags: p.tags,
      href: `/projects/${p.slug}`,
    })),
  ];
}

export function matches(doc: SearchDoc, q: string, activeTags: string[]) {
  const query = q.trim().toLowerCase();
  const hay = `${doc.title} ${doc.short} ${doc.tags.join(" ")}`.toLowerCase();

  const queryOk = query.length === 0 || hay.includes(query);
  const tagsOk =
    activeTags.length === 0 ||
    activeTags.every((t) => doc.tags.map(x => x.toLowerCase()).includes(t.toLowerCase()));

  return queryOk && tagsOk;
}
