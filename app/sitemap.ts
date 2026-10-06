import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/profile";
import { blogPosts } from "@/data/blog";
import { getPagedEntries } from "@/lib/catalog";
import { sortDateValue, toIsoDate } from "@/lib/date";

/**
 * Only pages that exist and say something are listed. `lastModified` comes from
 * `siteConfig.updated` and from blog post dates; detail pages carry none, because
 * a made-up date is worse than leaving it out.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries = getPagedEntries();
  const latestPost = [...blogPosts]
    .map((post) => post.updated ?? post.date)
    .sort((a, b) => sortDateValue(b) - sortDateValue(a))[0];

  return [
    { url: `${siteConfig.url}/`, lastModified: siteConfig.updated },
    { url: `${siteConfig.url}/projects`, lastModified: siteConfig.updated },
    { url: `${siteConfig.url}/awards`, lastModified: siteConfig.updated },
    { url: `${siteConfig.url}/gallery`, lastModified: siteConfig.updated },
    { url: `${siteConfig.url}/blog`, lastModified: toIsoDate(latestPost) },
    { url: `${siteConfig.url}/contact`, lastModified: siteConfig.updated },
    ...entries.map((entry) => ({
      url: `${siteConfig.url}${entry.href}`,
      ...(entry.type === "blog"
        ? { lastModified: toIsoDate(blogPosts.find((post) => post.slug === entry.slug)?.updated ?? entry.date) }
        : {}),
    })),
  ];
}
