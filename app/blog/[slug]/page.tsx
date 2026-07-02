import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/data/profile";
import CopyLinkButton from "@/components/CopyLinkButton";
import EvidencePanel from "@/components/EvidencePanel";
import Icon, { type IconName } from "@/components/Icon";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { getMarkdown, stripMarkdownTitle } from "@/lib/content";
import { formatDate } from "@/lib/date";
import { absoluteUrl, breadcrumbJsonLd, imageForMetadata, pageId } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return { title: "Blog" };
  const url = `${siteConfig.url}/blog/${post.slug}`;
  const description = post.description ?? post.short;
  const image = imageForMetadata(post.image);

  return {
    title: post.title,
    description,
    alternates: { canonical: url },
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description,
      url,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      tags: post.tags,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [image.url],
    },
  };
}

export default function BlogDetail({ params }: { params: Params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return notFound();

  const md = getMarkdown("blog", params.slug);
  if (!md) return notFound();
  const body = stripMarkdownTitle(md);
  const path = `/blog/${post.slug}`;
  const image = imageForMetadata(post.image);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": pageId(path),
    headline: post.title,
    description: post.description ?? post.short,
    image: image.url,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    url: absoluteUrl(path),
    keywords: post.tags,
    inLanguage: "en-ZA",
    mainEntityOfPage: {
      "@id": pageId(path),
    },
    author: {
      "@type": "Person",
      "@id": `${siteConfig.url}#person`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      "@id": `${siteConfig.url}#person`,
      name: siteConfig.name,
    },
    isPartOf: {
      "@type": "Blog",
      "@id": `${siteConfig.url}/blog#blog`,
      name: `${siteConfig.name} Blog`,
    },
  };
  const structuredData = [
    jsonLd,
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Blog", href: "/blog" },
      { name: post.title, href: path },
    ]),
  ];
  const meta: { label: string; value: string; icon: IconName }[] = [
    { label: "Published", value: formatDate(post.date), icon: "calendar" },
    { label: "Reading Time", value: post.readingTime, icon: "clock" },
  ];

  return (
    <main className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)]">
        <Icon name="arrow-left" className="h-4 w-4" />
        Blog
      </Link>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                <Icon name="book-open" className="h-4 w-4" />
                Blog
              </div>
              <h1 className="mt-1 text-3xl font-semibold text-[var(--text-primary)]">
                {post.title}
              </h1>
            </div>
            <div className="shrink-0">
              <CopyLinkButton url={`/blog/${post.slug}`} />
            </div>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-[var(--text-muted)]">
            {post.description ?? post.short}
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

        <EvidencePanel links={post.links} hasNarrative title="Referenced work" />
      </section>

      <article className="rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-soft)]">
        <MarkdownRenderer md={body} />
      </article>
    </main>
  );
}
