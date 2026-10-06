import { notFound } from "next/navigation";
import EntryDetail, { factsFor } from "@/components/EntryDetail";
import { projects } from "@/data/projects";
import { currentWork, siteConfig } from "@/data/profile";
import { getEntry, getProjects } from "@/lib/catalog";
import { getMarkdown, stripMarkdownTitle } from "@/lib/content";
import { toIsoDate } from "@/lib/date";
import { absoluteUrl, breadcrumbJsonLd, imageObjects, pageMetadata, personId, websiteId } from "@/lib/seo";

type Params = { slug: string };

// Only projects with a written note have a page. Everything else is in the archive.
export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects()
    .filter((entry) => entry.hasPage)
    .map((entry) => ({ slug: entry.slug }));
}

export function generateMetadata({ params }: { params: Params }) {
  const entry = getEntry("project", params.slug);
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

export default function ProjectPage({ params }: { params: Params }) {
  const entry = getEntry("project", params.slug);
  const md = getMarkdown("projects", params.slug);
  if (!entry || !md) return notFound();

  const project = projects.find((item) => item.slug === params.slug);
  const url = absoluteUrl(entry.href);
  // GotchaEducation and NavigoTransport are companies, so say so in structured data.
  const company = currentWork.find((work) => work.slug === entry.slug);
  const companyNode = company
    ? {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${url}#organization`,
        name: company.name,
        url: company.links[0].href,
        description: company.summary,
        founder: { "@id": personId },
      }
    : null;
  const jsonLd = [
    ...(companyNode ? [companyNode] : []),
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": `${url}#work`,
      name: entry.title,
      description: entry.summary,
      url,
      image: imageObjects([entry.image, ...entry.gallery]),
      dateCreated: toIsoDate(entry.date),
      keywords: entry.tags.join(", "),
      creator: { "@type": "Person", "@id": personId, name: siteConfig.name, url: siteConfig.url },
      isPartOf: { "@id": websiteId },
      ...(companyNode ? { about: { "@id": companyNode["@id"] } } : {}),
    },
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Projects", href: "/projects" },
      { name: entry.title, href: entry.href },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EntryDetail
        entry={entry}
        body={stripMarkdownTitle(md)}
        section={{ name: "Projects", href: "/projects" }}
        facts={factsFor(entry, { role: entry.meta, stack: project?.stack })}
      />
    </>
  );
}
