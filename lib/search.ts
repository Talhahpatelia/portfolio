import type { Entry } from "@/lib/catalog";

/** The slice of an entry that the header search needs. Small enough to ship to the browser. */
export type SearchDoc = {
  type: Entry["type"];
  slug: string;
  title: string;
  summary: string;
  year: string | null;
  href: string;
  haystack: string;
};

export function buildSearchIndex(entries: Entry[]): SearchDoc[] {
  return entries.map((entry) => ({
    type: entry.type,
    slug: entry.slug,
    title: entry.title,
    summary: entry.summary,
    year: entry.year,
    href: entry.href,
    haystack: [entry.title, entry.summary, entry.year ?? "", entry.tags.join(" "), entry.categories.join(" "), entry.meta ?? ""]
      .join(" ")
      .toLowerCase(),
  }));
}

export function search(index: SearchDoc[], query: string, limit = 8) {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];
  return index.filter((doc) => terms.every((term) => doc.haystack.includes(term))).slice(0, limit);
}
