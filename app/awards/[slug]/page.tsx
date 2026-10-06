import { notFound } from "next/navigation";
import EntryDetail, { factsFor } from "@/components/EntryDetail";
import { siteConfig } from "@/data/profile";
import { getAwards, getEntry } from "@/lib/catalog";
import { getMarkdown, stripMarkdownTitle } from "@/lib/content";
import { toIsoDate } from "@/lib/date";
import { absoluteUrl, breadcrumbJsonLd, imageObjects, pageMetadata, personId, websiteId } from "@/lib/seo";

type Params = { slug: string };

// Only awards with a written note have a page. Everything else is in the archive.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAwards()
    .filter((entry) => entry.hasPage)
    .map((entry) => ({ slug: entry.slug }));
}

export function generateMetadata({ params }: { params: Params }) {
  const entry = getEntry("award", params.slug);
  if (!entry) return {};
  return pageMetadata({
    title: entry.seoTitle ?? entry.title,
    description: entry.summary,
    path: entry.href,
    image: entry.image,
    type: "article",
    publishedTime: entry.date,
  });
}

export default function AwardPage({ params }: { params: Params }) {
  const entry = getEntry("award", params.slug);
  const md = getMarkdown("awards", params.slug);
  if (!entry || !md) return notFound();

  const url = absoluteUrl(entry.href);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": `${url}#award`,
      name: entry.title,
      description: entry.summary,
      url,
      image: imageObjects([entry.image, ...entry.gallery]),
      dateCreated: toIsoDate(entry.date),
      keywords: entry.tags.join(", "),
      about: { "@id": personId },
      creator: { "@type": "Person", "@id": personId, name: siteConfig.name, url: siteConfig.url },
      isPartOf: { "@id": websiteId },
    },
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Awards", href: "/awards" },
      { name: entry.title, href: entry.href },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EntryDetail
        entry={entry}
        body={stripMarkdownTitle(md)}
        section={{ name: "Awards", href: "/awards" }}
        facts={factsFor(entry, { organisation: entry.meta })}
      />
    </>
  );
}
