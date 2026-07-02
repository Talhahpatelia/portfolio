import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import Icon, { type IconName } from "@/components/Icon";
import TileCard from "@/components/TileCard";
import { categoriesFromParam, matchesCategoryFilter, primaryCategory } from "@/lib/categories";
import { byNewest, countPublicSignals } from "@/lib/portfolio";
import { siteConfig } from "@/data/profile";
import { absoluteUrl, defaultOgImage } from "@/lib/seo";

type ArchiveSearchParams = { category?: string | string[] };

export function generateMetadata({
  searchParams = {},
}: {
  searchParams?: ArchiveSearchParams;
}): Metadata {
  const selectedCategories = categoriesFromParam(searchParams.category);
  const filtered = selectedCategories.length > 0;
  const title = filtered ? `Blog: ${selectedCategories.join(", ")}` : "Blog";
  const description = filtered
    ? `Filtered writing archive for Talhah Patelia covering ${selectedCategories.join(", ")}.`
    : "Engineering notes from Talhah Patelia on offline-first systems, education technology, transport, proof-led portfolios, and product lessons.";

  return {
    title,
    description,
    alternates: { canonical: "/blog" },
    robots: filtered ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/blog`,
      type: "website",
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage.url],
    },
  };
}

export default function BlogPage({
  searchParams = {},
}: {
  searchParams?: ArchiveSearchParams;
}) {
  const selectedCategories = categoriesFromParam(searchParams.category);
  const posts = byNewest(blogPosts).filter((post) => matchesCategoryFilter(post, selectedCategories));
  const proofSignals = posts.reduce((total, post) => total + countPublicSignals(post), 0);
  const metrics: { label: string; value: string | number; icon: IconName }[] = [
    { label: selectedCategories.length ? "Showing" : "Posts", value: posts.length, icon: "book-open" },
    { label: "Signals", value: proofSignals, icon: "shield" },
    { label: "Format", value: "MD", icon: "clock" },
  ];
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Talhah Patelia blog archive",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/blog/${post.slug}`),
      name: post.title,
    })),
  };

  return (
    <main className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
            Blog
          </div>
          <h1 className="mt-1 text-3xl font-semibold text-[var(--text-primary)]">
            Notes on what I am building and learning
          </h1>
          <p className="mt-3 max-w-3xl leading-7 text-[var(--text-muted)]">
            Short, evidence-aware writing about products, engineering decisions,
            competitions, and the ideas behind the portfolio.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)] p-3 shadow-[var(--shadow-soft)]">
              <Icon name={metric.icon} className="h-4 w-4 text-[var(--accent)]" />
              <div className="mt-2 font-mono text-2xl font-semibold text-[var(--text-primary)]">{metric.value}</div>
              <div className="text-xs text-[var(--text-muted)]">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      {selectedCategories.length > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)] p-4 text-sm shadow-[var(--shadow-soft)]">
          <div className="text-[var(--text-muted)]">
            Filtering blog posts by{" "}
            <span className="font-medium text-[var(--text-primary)]">
              {selectedCategories.join(", ")}
            </span>
            .
          </div>
          <Link href="/blog" className="font-medium text-[var(--text-primary)] underline underline-offset-4">
            Clear filters
          </Link>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <TileCard
            key={post.slug}
            title={post.title}
            short={post.short}
            description={post.description}
            href={`/blog/${post.slug}`}
            tags={post.tags}
            date={post.date}
            category={primaryCategory(post.tags)}
            size="long"
            stage={post.readingTime}
            proofCount={countPublicSignals(post)}
          />
        ))}
      </div>

      {posts.length === 0 && (
        <div className="rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)] p-5 text-sm text-[var(--text-muted)] shadow-[var(--shadow-soft)]">
          No blog posts match the selected filters.
        </div>
      )}
    </main>
  );
}
