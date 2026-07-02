import type { MetadataRoute } from "next";
import { awards } from "@/data/awards";
import { blogPosts } from "@/data/blog";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/profile";
import { sortDateValue, toIsoDate } from "@/lib/date";

type DatedItem = { date?: string; updated?: string };

function entry(path: string, date?: string): MetadataRoute.Sitemap[number] {
  return {
    url: `${siteConfig.url}${path}`,
    lastModified: toIsoDate(date),
  };
}

function latestDate(items: DatedItem[]) {
  return items
    .map((item) => item.updated ?? item.date)
    .filter(Boolean)
    .sort((a, b) => sortDateValue(b) - sortDateValue(a))[0];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const latestProjectDate = latestDate(projects);
  const latestAwardDate = latestDate(awards);
  const latestBlogDate = latestDate(blogPosts);
  const latestSiteDate = latestDate([...projects, ...awards, ...blogPosts]);

  return [
    entry("/", latestSiteDate),
    entry("/projects", latestProjectDate),
    entry("/awards", latestAwardDate),
    entry("/blog", latestBlogDate),
    entry("/contact", latestSiteDate),
    ...projects.map((project) => entry(`/projects/${project.slug}`, project.date)),
    ...awards.map((award) => entry(`/awards/${award.slug}`, award.date)),
    ...blogPosts.map((post) => entry(`/blog/${post.slug}`, post.updated ?? post.date)),
  ];
}
