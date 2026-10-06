import Link from "next/link";
import Lamp from "@/components/Lamp";
import ZoomImage from "@/components/ZoomImage";
import type { Entry } from "@/lib/catalog";
import { formatDate } from "@/lib/date";

const TYPE_LABEL = { award: "Award", project: "Project", blog: "Writing" } as const;

/**
 * One line in an archive. The left column is for scanning: the date, then the
 * result in bold ("1st", "Gold", "Top 25"). The middle has the title and one
 * sentence. A small photo, if there is one, sits on the right and opens larger.
 * The whole row is a link when there is somewhere to go; sources and photos
 * inside it stay separately clickable.
 */
export default function EntryRow({
  entry,
  compact = false,
  showType = false,
}: {
  entry: Entry;
  compact?: boolean;
  showType?: boolean;
}) {
  const date = formatDate(entry.date);

  return (
    <li
      id={entry.slug}
      className={[
        "group relative grid scroll-mt-6 gap-x-8 gap-y-2 border-t border-rule py-5",
        compact ? "md:grid-cols-[6rem_minmax(0,1fr)]" : "md:grid-cols-[7rem_minmax(0,1fr)_10rem]",
      ].join(" ")}
    >
      <div className="md:pt-[0.4rem]">
        <time dateTime={entry.isoDate} className="label block">
          {date}
        </time>
        {entry.result && <p className="mt-1 text-sm font-semibold leading-snug">{entry.result}</p>}
        {showType && <p className="label mt-1">{TYPE_LABEL[entry.type]}</p>}
      </div>

      <div className="min-w-0">
        <h3 className="text-lg" style={{ fontStretch: "112%" }}>
          {entry.link ? (
            <Link
              href={entry.link}
              className="link after:absolute after:inset-0 after:content-[''] group-hover:decoration-signal group-hover:decoration-2"
            >
              {entry.title}
            </Link>
          ) : (
            entry.title
          )}
        </h3>
        <p className="prose-col mt-1">{entry.summary}</p>

        {(entry.status || entry.meta) && (
          <p className="label mt-2 flex flex-wrap items-center gap-x-5 gap-y-1">
            {entry.status && <Lamp status={entry.status} />}
            {entry.meta && <span>{entry.meta}</span>}
          </p>
        )}

        {!compact && entry.links.length > 0 && (
          <ul className="relative z-10 mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm">
            {entry.links.map((link) => (
              <li key={link.href}>
                <a className="link" href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {!compact && entry.related.length > 0 && (
          <p className="label relative z-10 mt-2">
            See also{" "}
            {entry.related.map((item, index) => (
              <span key={item.href}>
                {index > 0 && ", "}
                <Link href={item.href} className="link">
                  {item.title}
                </Link>
              </span>
            ))}
          </p>
        )}
      </div>

      {!compact && entry.image && (
        <div className="relative z-10 w-full max-w-[10rem] md:justify-self-end">
          <ZoomImage
            image={entry.image}
            sizes="160px"
            className={[
              "aspect-[4/3] h-auto w-full",
              entry.image.fit === "contain" ? "object-contain" : "object-cover object-[50%_20%]",
            ].join(" ")}
          />
        </div>
      )}
    </li>
  );
}
