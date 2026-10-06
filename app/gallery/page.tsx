import GalleryView from "@/components/GalleryView";
import { getGalleryGroups } from "@/lib/catalog";
import { absoluteUrl, breadcrumbJsonLd, pageMetadata, personId } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Photo gallery: events, awards and projects",
  description:
    "Photos, certificates and app screens from Talhah Patelia's awards and projects, from science fairs and supercomputing finals to the Navigo app.",
  path: "/gallery",
});

export default function GalleryPage() {
  const groups = getGalleryGroups();
  const total = groups.reduce((sum, group) => sum + group.images.length, 0);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      name: "Photo gallery: Talhah Patelia",
      url: absoluteUrl("/gallery"),
      about: { "@id": personId },
      hasPart: groups.flatMap((group) =>
        group.images.map((image) => ({
          "@type": "ImageObject",
          contentUrl: absoluteUrl(image.src),
          width: image.width,
          height: image.height,
          caption: image.caption ?? image.alt,
          description: image.alt,
          isPartOf: { "@id": `${absoluteUrl(group.href)}` },
        })),
      ),
    },
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Gallery", href: "/gallery" },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="pb-10 pt-10 md:pt-16">
        <h1 className="text-[clamp(2.25rem,5.5vw,3.5rem)]">Gallery</h1>
        <p className="lead mt-5">
          {total} pictures from the awards and projects on this site, newest first. Each set says what it is about and
          links to the full story. Click any picture to enlarge it.
        </p>
      </header>
      <section className="border-t border-rule pt-8">
        <GalleryView groups={groups} />
      </section>
    </>
  );
}
