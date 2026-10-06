import ArchiveList from "@/components/ArchiveList";
import { getProjects } from "@/lib/catalog";
import { absoluteUrl, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects: school software, robotics, HPC",
  description:
    "Software, robotics and hardware built by Talhah Patelia since 2018: school software, a campus shuttle app, a student supercomputer, robots and embedded systems.",
  path: "/projects",
});

export default function ProjectsPage() {
  const entries = getProjects();
  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects by Talhah Patelia",
    url: absoluteUrl("/projects"),
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
              { name: "Projects", href: "/projects" },
            ]),
          ]),
        }} />
      <header className="pb-10 pt-10 md:pt-16">
        <h1 className="text-[clamp(2.25rem,5.5vw,3.5rem)]">Projects</h1>
        <p className="lead mt-5">
          What I&rsquo;ve built, newest first. Where there is more to say, the title links to a write-up.
        </p>
      </header>
      <section className="border-t border-rule pt-8">
        <ArchiveList entries={entries} noun="projects" />
      </section>
    </>
  );
}
