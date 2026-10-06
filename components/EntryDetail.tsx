import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import EntryRow from "@/components/EntryRow";
import CopyLinkButton from "@/components/CopyLinkButton";
import Figure from "@/components/Figure";
import Lamp from "@/components/Lamp";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import SpecList, { type SpecItem } from "@/components/SpecList";
import { getSimilar, type Entry } from "@/lib/catalog";
import { formatDate } from "@/lib/date";
import { absoluteUrl } from "@/lib/seo";

/** Facts shown beside a write-up: the same fields every time, in the same order. */
export function factsFor(
  entry: Entry,
  extra: { role?: string; organisation?: string; stack?: string[] } = {},
): SpecItem[] {
  const facts: SpecItem[] = [];
  if (entry.status) facts.push({ label: "Status", value: <Lamp status={entry.status} /> });
  if (extra.role) facts.push({ label: "Role", value: extra.role });
  if (extra.organisation) facts.push({ label: "Awarded by", value: extra.organisation });
  const date = formatDate(entry.date);
  if (date) facts.push({ label: "Date", value: <time dateTime={entry.isoDate}>{date}</time> });
  if (extra.stack?.length) facts.push({ label: "Built with", value: extra.stack.join(", ") });
  if (entry.links.length) {
    facts.push({
      label: "Sources",
      value: (
        <ul className="space-y-1">
          {entry.links.map((link) => (
            <li key={link.href}>
              <a className="link" href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      ),
    });
  }
  if (entry.related.length) {
    facts.push({
      label: "See also",
      value: (
        <ul className="space-y-1">
          {entry.related.map((item) => (
            <li key={item.href}>
              <Link className="link" href={item.href}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      ),
    });
  }
  return facts;
}

export default function EntryDetail({
  entry,
  body,
  section,
  facts,
}: {
  entry: Entry;
  body: string;
  section: { name: string; href: string };
  facts: SpecItem[];
}) {
  const isTall = (image: { width: number; height: number }) => image.height > image.width * 1.1;
  const portrait = Boolean(entry.image && isTall(entry.image));
  // A run of phone screens reads best as one set, so a tall lead image joins the gallery.
  const merged = portrait && entry.gallery.length > 0;
  const gallery = merged && entry.image ? [entry.image, ...entry.gallery] : entry.gallery;
  const allTall = gallery.length > 0 && gallery.every(isTall);
  const similar = getSimilar(entry, 3);

  return (
    <article className="pb-8 pt-10 md:pt-14">
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: section.name, href: section.href }, { name: entry.title }]} />

      <h1 className="mt-8 max-w-4xl text-[clamp(2rem,5vw,3.25rem)]">{entry.title}</h1>
      <p className="lead mt-6">{entry.summary}</p>

      <div className="mt-12 grid gap-10 border-t border-rule pt-10 md:grid-cols-12 md:gap-x-8">
        <div className="min-w-0 md:col-span-8">
          {/* Landscape photos lead the page. Tall documents follow the text, smaller. */}
          {entry.image && !portrait && (
            <div className="mb-10 max-w-[40rem]">
              <Figure image={entry.image} priority />
            </div>
          )}
          <MarkdownRenderer md={body} />
          {entry.image && portrait && !merged && (
            <div className="mt-10 max-w-[22rem]">
              <Figure image={entry.image} sizes="352px" />
            </div>
          )}
          {gallery.length > 0 && (
            <section aria-label="More photos" className="mt-12">
              <ul className={allTall ? "columns-2 gap-4 sm:columns-3" : "columns-1 gap-4 sm:columns-2"}>
                {gallery.map((image) => (
                  <li key={image.src} className="mb-4 break-inside-avoid">
                    <Figure image={image} sizes="(min-width: 1024px) 320px, 50vw" />
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="md:col-span-4" aria-label="Facts">
          <SpecList items={facts} className="border-b border-rule [&>div]:sm:grid-cols-[6.5rem_minmax(0,1fr)]" />
          <p className="mt-4">
            <CopyLinkButton url={absoluteUrl(entry.href)} />
          </p>
        </aside>
      </div>

      {similar.length > 0 && (
        <section className="mt-16 border-t border-rule pt-10" aria-labelledby="keep-reading">
          <div className="grid gap-6 md:grid-cols-12 md:gap-x-8">
            <h2 id="keep-reading" className="text-base md:col-span-4" style={{ fontStretch: "116%" }}>
              Keep reading
            </h2>
            <ul className="border-b border-rule md:col-span-8">
              {similar.map((item) => (
                <EntryRow key={`${item.type}:${item.slug}`} entry={item} compact showType />
              ))}
            </ul>
          </div>
        </section>
      )}
    </article>
  );
}
