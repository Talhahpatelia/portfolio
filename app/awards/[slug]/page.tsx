import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { awards } from "@/data/awards";
import EvidencePanel from "@/components/EvidencePanel";
import Icon, { type IconName } from "@/components/Icon";
import CopyLinkButton from "@/components/CopyLinkButton";
import { getMarkdown, stripMarkdownTitle } from "@/lib/content";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { primaryCategory } from "@/lib/categories";
import { formatDate } from "@/lib/date";
import { countPublicSignals } from "@/lib/portfolio";
import { siteConfig } from "@/data/profile";
import { absoluteUrl, breadcrumbJsonLd, imageForMetadata, pageId } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return awards.map((award) => ({ slug: award.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const award = awards.find((item) => item.slug === params.slug);
  if (!award) return { title: "Award" };
  const url = `${siteConfig.url}/awards/${award.slug}`;
  const description = award.description ?? award.short;
  const image = imageForMetadata(award.image);

  return {
    title: award.title,
    description,
    alternates: { canonical: url },
    keywords: award.tags,
    openGraph: {
      title: award.title,
      description,
      url,
      type: "article",
      publishedTime: award.date,
      tags: award.tags,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: award.title,
      description,
      images: [image.url],
    },
  };
}

export default function AwardDetail({ params }: { params: Params }) {
  const award = awards.find((item) => item.slug === params.slug);
  if (!award) return notFound();

  const md = getMarkdown("awards", params.slug);
  const body = md ? stripMarkdownTitle(md) : null;
  const category = primaryCategory(award.tags);
  const metaItems: { label: string; value?: string; icon: IconName }[] = [
    { label: "Date", value: formatDate(award.date), icon: "calendar" },
    { label: "Category", value: category, icon: "layers" },
    { label: "Organisation", value: award.org, icon: "building" },
  ];
  const meta = metaItems.filter((item) => Boolean(item.value));
  const signalCount = countPublicSignals(award);
  const path = `/awards/${award.slug}`;
  const image = imageForMetadata(award.image);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": pageId(path),
    name: award.title,
    description: award.description ?? award.short,
    url: absoluteUrl(path),
    image: image.url,
    award: award.title,
    dateReceived: award.date,
    keywords: award.tags,
    about: category,
    mainEntityOfPage: {
      "@id": pageId(path),
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteConfig.url}#website`,
      name: siteConfig.name,
    },
    awardingOrganization: award.org
      ? {
          "@type": "Organization",
          name: award.org,
        }
      : undefined,
    recipient: {
      "@type": "Person",
      "@id": `${siteConfig.url}#person`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    sameAs: award.links?.map((link) => link.href),
  };
  const structuredData = [
    jsonLd,
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Awards", href: "/awards" },
      { name: award.title, href: path },
    ]),
  ];

  return (
    <main className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Link href="/awards" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)]">
        <Icon name="arrow-left" className="h-4 w-4" />
        Awards
      </Link>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                Award / {category}
              </div>
              <h1 className="mt-1 text-3xl font-semibold text-[var(--text-primary)]">
                {award.title}
              </h1>
            </div>
            <div className="shrink-0">
              <CopyLinkButton url={`/awards/${award.slug}`} />
            </div>
          </div>

          <p className="max-w-3xl text-lg leading-8 text-[var(--text-muted)]">
            {award.description ?? award.short}
          </p>

          <dl className="grid gap-3 sm:grid-cols-2">
            {meta.map((item) => (
              <div key={item.label} className="rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)] p-4 shadow-[var(--shadow-soft)]">
                <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                  <Icon name={item.icon} className="h-4 w-4" />
                  {item.label}
                </dt>
                <dd className="mt-2 text-base font-semibold text-[var(--text-primary)]">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <EvidencePanel
          links={award.links}
          image={award.image}
          hasNarrative={Boolean(md)}
          title={`${signalCount} proof signal${signalCount === 1 ? "" : "s"}`}
        />
      </section>

      <section className="rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-soft)]">
        <h2 className="text-xl font-bold text-[var(--text-primary)]">Award Note</h2>
        {body ? (
          <div className="mt-4">
            <MarkdownRenderer md={body} />
          </div>
        ) : (
          <p className="mt-3 max-w-3xl leading-7 text-[var(--text-muted)]">
            A full written note has not been added yet. The award summary,
            organisation, date, and proof panel above are the current source of
            context for this entry.
          </p>
        )}
      </section>

      <section className="rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-soft)]">
        <h2 className="text-lg font-bold text-[var(--text-primary)]">Tags</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {award.tags.map((tag) => (
            <span key={tag} className="rounded-md border border-[var(--pill-border)] bg-[var(--pill-bg)] px-2 py-1 text-sm text-[var(--pill-text)]">
              {tag}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
