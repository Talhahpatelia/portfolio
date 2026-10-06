"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Figure from "@/components/Figure";
import type { GalleryGroup } from "@/lib/catalog";
import { formatDate } from "@/lib/date";

type Kind = "photo" | "certificate" | "screen";

const KIND_LABEL: Record<Kind, string> = {
  photo: "Photos",
  certificate: "Certificates",
  screen: "Screens and renders",
};

/**
 * The gallery: every picture grouped by the award or project it belongs to,
 * with a sentence on what each is about. Filter by kind of picture.
 */
export default function GalleryView({ groups }: { groups: GalleryGroup[] }) {
  const [kind, setKind] = useState<Kind | null>(null);

  const counts = useMemo(() => {
    const result: Record<Kind, number> = { photo: 0, certificate: 0, screen: 0 };
    for (const group of groups) for (const image of group.images) result[image.kind ?? "photo"] += 1;
    return result;
  }, [groups]);
  const total = counts.photo + counts.certificate + counts.screen;

  const visible = groups
    .map((group) => ({ ...group, images: group.images.filter((image) => !kind || (image.kind ?? "photo") === kind) }))
    .filter((group) => group.images.length > 0);
  const shown = visible.reduce((sum, group) => sum + group.images.length, 0);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by kind of picture">
        <FilterButton selected={kind === null} onClick={() => setKind(null)}>
          All ({total})
        </FilterButton>
        {(Object.keys(KIND_LABEL) as Kind[])
          .filter((name) => counts[name] > 0)
          .map((name) => (
            <FilterButton key={name} selected={kind === name} onClick={() => setKind(kind === name ? null : name)}>
              {KIND_LABEL[name]} ({counts[name]})
            </FilterButton>
          ))}
      </div>

      <p className="label mt-5" aria-live="polite">
        Showing {shown} of {total} pictures in {visible.length} {visible.length === 1 ? "set" : "sets"}
      </p>

      <div className="mt-4">
        {visible.map((group) => {
          const id = `${group.type}-${group.slug}`;
          return (
            <section
              key={id}
              id={id}
              aria-labelledby={`${id}-title`}
              className="grid scroll-mt-6 gap-6 border-t border-rule py-10 md:grid-cols-12 md:gap-x-8"
            >
              <div className="md:sticky md:top-6 md:col-span-4 md:self-start">
                <p className="label flex flex-wrap gap-x-4">
                  <time dateTime={group.isoDate}>{formatDate(group.date)}</time>
                  <span>{group.type === "award" ? "Award" : "Project"}</span>
                </p>
                <h2 id={`${id}-title`} className="mt-2 text-xl">
                  <Link href={group.href} className="link">
                    {group.title}
                  </Link>
                </h2>
                {group.result && <p className="mt-1 text-sm font-semibold">{group.result}</p>}
                <p className="mt-3 text-[0.9375rem] leading-6">{group.summary}</p>
              </div>

              <ul className="columns-1 gap-4 sm:columns-2 md:col-span-8">
                {group.images.map((image) => (
                  <li key={image.src} className="mb-4 break-inside-avoid">
                    <Figure
                      image={{ ...image, caption: image.caption ?? image.alt }}
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw"
                    />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
        <div className="border-t border-rule" />
      </div>
    </div>
  );
}

function FilterButton({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={[
        "h-8 rounded-[2px] border px-3 text-sm transition-colors",
        selected ? "border-signal bg-signal text-on-signal" : "border-rule text-ink-2 hover:border-ink hover:text-ink",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
