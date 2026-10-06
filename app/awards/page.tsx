import ArchiveList from "@/components/ArchiveList";
import { getAwards } from "@/lib/catalog";
import { absoluteUrl, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Awards and results since 2018",
  description:
    "Awards and results for Talhah Patelia since 2018: student supercomputing, entrepreneurship pitches, hackathons, science fairs and community service.",
  path: "/awards",
});

export default function AwardsPage() {
  const entries = getAwards();
  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Awards and results for Talhah Patelia",
    url: absoluteUrl("/awards"),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: entries
        .filter((entry) => entry.hasPage)
        .map((entry, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(entry.href),
          name: entry.title,
        })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            collection,
            breadcrumbJsonLd([
              { name: "Home", href: "/" },
              { name: "Awards", href: "/awards" },
            ]),
          ]),
        }} />
      <header className="pb-10 pt-10 md:pt-16">
        <h1 className="text-[clamp(2.25rem,5.5vw,3.5rem)]">Awards</h1>
        <p className="lead mt-5">
          Awards and results, newest first. Where there is a public source, it is linked. An older record of the
          early ones, up to January 2023, is{" "}
          <a className="link" href="/portfolio_doc.pdf">
            this PDF
          </a>
          .
        </p>
      </header>
      <section className="border-t border-rule pt-8">
        <ArchiveList entries={entries} noun="awards" />
      </section>
    </>
  );
}
