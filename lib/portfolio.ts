import type { AwardItem, BaseItem, ProjectItem } from "@/lib/types";
import { sortDateValue } from "@/lib/date";

export type PortfolioEntry =
  | (AwardItem & { type: "award"; href: string })
  | (ProjectItem & { type: "project"; href: string });

export function countPublicSignals(item: Pick<BaseItem, "links" | "image">) {
  return (item.links?.length ?? 0) + (item.image ? 1 : 0);
}

export function byNewest<T extends { date?: string }>(items: T[]) {
  return [...items].sort((a, b) => sortDateValue(b.date) - sortDateValue(a.date));
}

export function buildTimeline(awards: AwardItem[], projects: ProjectItem[]) {
  const entries: PortfolioEntry[] = [
    ...awards.map((item) => ({
      ...item,
      type: "award" as const,
      href: `/awards/${item.slug}`,
    })),
    ...projects.map((item) => ({
      ...item,
      type: "project" as const,
      href: `/projects/${item.slug}`,
    })),
  ];

  return byNewest(entries);
}
