import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/data/profile";
import { toIsoDate } from "@/lib/date";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const items = blogPosts
    .map((post) => {
      const url = `${siteConfig.url}/blog/${post.slug}`;
      const iso = toIsoDate(post.updated ?? post.date);
      const pubDate = iso
        ? new Date(`${iso}T00:00:00.000Z`).toUTCString()
        : new Date().toUTCString();
      return `
        <item>
          <title>${escapeXml(post.title)}</title>
          <link>${url}</link>
          <guid>${url}</guid>
          <description>${escapeXml(post.description ?? post.short)}</description>
          <pubDate>${pubDate}</pubDate>
        </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${escapeXml(siteConfig.name)} Blog</title>
        <link>${siteConfig.url}/blog</link>
        <description>${escapeXml(siteConfig.description)}</description>
        <language>en-ZA</language>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml.trim(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
