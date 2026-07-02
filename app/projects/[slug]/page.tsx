import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
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
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return { title: "Project" };
  const url = `${siteConfig.url}/projects/${project.slug}`;
  const description = project.description ?? project.short;
  const image = imageForMetadata(project.image);

  return {
    title: project.title,
    description,
    alternates: { canonical: url },
    keywords: project.tags,
    openGraph: {
      title: project.title,
      description,
      url,
      type: "article",
      publishedTime: project.date,
      tags: project.tags,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description,
      images: [image.url],
    },
  };
}

export default function ProjectDetail({ params }: { params: Params }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return notFound();

  const md = getMarkdown("projects", params.slug);
  const body = md ? stripMarkdownTitle(md) : null;
  const category = primaryCategory(project.tags);
  const metaItems: { label: string; value?: string; icon: IconName }[] = [
    { label: "Date", value: formatDate(project.date), icon: "calendar" },
    { label: "Category", value: category, icon: "layers" },
    { label: "Stage", value: project.stage, icon: "layers" },
    { label: "Funding", value: project.funding, icon: "wallet" },
  ];
  const meta = metaItems.filter((item) => Boolean(item.value));
  const path = `/projects/${project.slug}`;
  const image = imageForMetadata(project.image);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": pageId(path),
    name: project.title,
    description: project.description ?? project.short,
    url: absoluteUrl(path),
    image: image.url,
    dateCreated: project.date,
    dateModified: project.date,
    keywords: project.tags,
    about: category,
    mainEntityOfPage: {
      "@id": pageId(path),
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteConfig.url}#website`,
      name: siteConfig.name,
    },
    creator: {
      "@type": "Person",
      "@id": `${siteConfig.url}#person`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    sameAs: project.links?.map((link) => link.href),
  };
  const structuredData = [
    jsonLd,
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Projects", href: "/projects" },
      { name: project.title, href: path },
    ]),
  ];

  return (
    <main className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)]">
        <Icon name="arrow-left" className="h-4 w-4" />
        Projects
      </Link>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                Project / {category}
              </div>
              <h1 className="mt-1 text-3xl font-semibold text-[var(--text-primary)]">
                {project.title}
              </h1>
            </div>
            <div className="shrink-0">
              <CopyLinkButton url={`/projects/${project.slug}`} />
            </div>
          </div>

          <p className="max-w-3xl text-lg leading-8 text-[var(--text-muted)]">
            {project.description ?? project.short}
          </p>

          {project.impact && (
            <div className="rounded-lg border border-[var(--proof-border)] bg-[var(--proof-bg)] p-4 text-sm font-medium leading-6 text-[var(--proof-text)]">
              {project.impact}
            </div>
          )}

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
            {project.role && (
              <div className="rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)] p-4 shadow-[var(--shadow-soft)]">
                <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Role</dt>
                <dd className="mt-2 text-base font-semibold text-[var(--text-primary)]">{project.role}</dd>
              </div>
            )}
          </dl>
        </div>

        <EvidencePanel
          links={project.links}
          image={project.image}
          hasNarrative={Boolean(md)}
          title={`${countPublicSignals(project)} proof signal${countPublicSignals(project) === 1 ? "" : "s"}`}
        />
      </section>

      <section className="rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-soft)]">
        <h2 className="text-xl font-bold text-[var(--text-primary)]">Project Note</h2>
        {body ? (
          <div className="mt-4">
            <MarkdownRenderer md={body} />
          </div>
        ) : (
          <p className="mt-3 max-w-3xl leading-7 text-[var(--text-muted)]">
            A full written note has not been added yet. The project summary,
            date, stage, stack, and proof panel above are the current source of
            context for this entry.
          </p>
        )}
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-soft)]">
          <h2 className="text-lg font-bold text-[var(--text-primary)]">Stack</h2>
          {project.stack?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-md border border-[var(--pill-border)] bg-[var(--pill-bg)] px-2 py-1 text-sm text-[var(--pill-text)]">
                  {item}
                </span>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm text-[var(--text-muted)]">Stack details are still being documented.</p>
          )}
        </div>

        <div className="rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-soft)]">
          <h2 className="text-lg font-bold text-[var(--text-primary)]">Tags</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-md border border-[var(--pill-border)] bg-[var(--pill-bg)] px-2 py-1 text-sm text-[var(--pill-text)]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
