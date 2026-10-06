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

function rfc822(date?: string) {
  const iso = toIsoDate(date);
  return iso ? new Date(`${iso}T00:00:00.000Z`).toUTCString() : undefined;
}

export function GET() {
  const items = blogPosts
    .map((post) => {
      const url = `${siteConfig.url}/blog/${post.slug}`;
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.summary)}</description>
      <pubDate>${rfc822(post.date)}</pubDate>
    </item>`;
    })
    .join("\n");

  const latest = rfc822(blogPosts[0]?.updated ?? blogPosts[0]?.date);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteConfig.name)}: writing</title>
    <link>${siteConfig.url}/blog</link>
    <atom:link href="${siteConfig.url}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Notes on building school software and a campus transport app that work offline.</description>
    <language>en-ZA</language>${latest ? `\n    <lastBuildDate>${latest}</lastBuildDate>` : ""}
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
