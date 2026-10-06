"use client";

import Link from "next/link";
import { useState } from "react";
import EntryRow from "@/components/EntryRow";
import YearScale from "@/components/YearScale";
import type { Entry } from "@/lib/catalog";

/**
 * Home page results. Opens on the highlights; pick a year on the scale to see
 * everything from that year, awards and projects together.
 */
export default function YearExplorer({ highlights, all }: { highlights: Entry[]; all: Entry[] }) {
  const [year, setYear] = useState<string | null>(null);
  const shown = year ? all.filter((entry) => entry.year === year) : highlights;
  const awardCount = all.filter((entry) => entry.type === "award").length;

  return (
    <div>
      <YearScale entries={all} selected={year} onSelect={setYear} allLabel="Highlights" />

      <p className="label mt-8" aria-live="polite">
        {year ? `${shown.length} from ${year}` : "Highlights"}
      </p>

      <ul className="mt-2 border-b border-rule">
        {shown.map((entry) => (
          <EntryRow key={`${entry.type}:${entry.slug}`} entry={entry} compact showType={year !== null} />
        ))}
      </ul>

      <p className="mt-8 flex flex-wrap gap-x-6 gap-y-1">
        <Link href="/awards" className="link">
          All {awardCount} awards and results
        </Link>
        <Link href="/projects" className="link">
          All projects
        </Link>
        <Link href="/gallery" className="link">
          Photo gallery
        </Link>
      </p>
    </div>
  );
}
