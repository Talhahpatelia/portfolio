import type { Metadata } from "next";
import Link from "next/link";
import { awards } from "@/data/awards";
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
  const title = filtered ? `Awards: ${selectedCategories.join(", ")}` : "Awards";
  const description = filtered
    ? `Filtered awards archive for Talhah Patelia covering ${selectedCategories.join(", ")} with dates, organisations, and proof links.`
    : "Awards and achievements for Talhah Patelia with dates, organisations, descriptions, images, and public proof links.";

  return {
    title,
    description,
    alternates: { canonical: "/awards" },
    robots: filtered ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/awards`,
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

export default function AwardsPage({
  searchParams = {},
}: {
  searchParams?: ArchiveSearchParams;
}) {
  const selectedCategories = categoriesFromParam(searchParams.category);
  const visibleAwards = byNewest(awards).filter((award) =>
    matchesCategoryFilter(award, selectedCategories),
  );
  const publicSignals = visibleAwards.reduce((total, award) => total + countPublicSignals(award), 0);
  const years = new Set(visibleAwards.map((award) => award.date?.slice(0, 4)).filter(Boolean));
  const metrics: { label: string; value: number; icon: IconName }[] = [
    { label: selectedCategories.length ? "Showing" : "Awards", value: visibleAwards.length, icon: "award" },
    { label: "Years", value: years.size, icon: "calendar" },
    { label: "Signals", value: publicSignals, icon: "shield" },
  ];
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Talhah Patelia awards archive",
    itemListElement: visibleAwards.map((award, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/awards/${award.slug}`),
      name: award.title,
    })),
  };

  return (
    <main className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
            Awards Archive
          </div>
          <h1 className="mt-1 text-3xl font-semibold text-[var(--text-primary)]">
            Recognition with dates, organisations, and evidence
          </h1>
          <p className="mt-3 max-w-3xl leading-7 text-[var(--text-muted)]">
            Awards are ordered by recency and include the institution,
            category, available images, and public references where they exist.
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
            Filtering awards by{" "}
            <span className="font-medium text-[var(--text-primary)]">
              {selectedCategories.join(", ")}
            </span>
            .
          </div>
          <Link href="/awards" className="font-medium text-[var(--text-primary)] underline underline-offset-4">
            Clear filters
          </Link>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {visibleAwards.map((award) => (
          <TileCard
            key={award.slug}
            title={award.title}
            short={award.short}
            description={award.description}
            href={`/awards/${award.slug}`}
            tags={award.tags}
            date={award.date}
            category={primaryCategory(award.tags)}
            size="long"
            image={award.image}
            stage={award.org}
            role={award.role}
            proofCount={countPublicSignals(award)}
          />
        ))}
      </div>

      {visibleAwards.length === 0 && (
        <div className="rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)] p-5 text-sm text-[var(--text-muted)] shadow-[var(--shadow-soft)]">
          No awards match the selected filters.
        </div>
      )}
    </main>
  );
}
