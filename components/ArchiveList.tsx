"use client";

import { useEffect, useMemo, useState } from "react";
import EntryRow from "@/components/EntryRow";
import YearScale from "@/components/YearScale";
import type { Entry } from "@/lib/catalog";
import { allCategories } from "@/lib/categories";

/**
 * Archive list with a year scale and a category filter. Filtering happens in
 * the browser, so the archive has one URL and every entry is in the page HTML.
 * The current filter is kept in the URL hash, so a filtered view can be shared
 * without creating a second page for search engines to index.
 */
export default function ArchiveList({ entries, noun }: { entries: Entry[]; noun: string }) {
  const categories = useMemo(() => allCategories(entries), [entries]);
  const [category, setCategory] = useState<string | null>(null);
  const [year, setYear] = useState<string | null>(null);

  // Restore a shared filter, e.g. /awards#year=2024&category=HPC, on load and
  // whenever the hash changes (back and forward, or an edited link).
  useEffect(() => {
    function readHash() {
      const hash = window.location.hash.slice(1);
      if (!hash.includes("=")) return; // a plain anchor such as #some-entry is not a filter
      const params = new URLSearchParams(hash);
      const wantedYear = params.get("year");
      const wantedCategory = params.get("category");
      setYear(wantedYear && entries.some((entry) => entry.year === wantedYear) ? wantedYear : null);
      setCategory(wantedCategory && categories.includes(wantedCategory) ? wantedCategory : null);
    }
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, [entries, categories]);

  const inCategory = (list: Entry[], wanted: string | null) =>
    wanted ? list.filter((entry) => entry.categories.includes(wanted)) : list;

  function apply(nextCategory: string | null, nextYear: string | null) {
    // If the chosen year has nothing in the new category, drop the year.
    const yearHasEntries = nextYear && inCategory(entries, nextCategory).some((entry) => entry.year === nextYear);
    const finalYear = yearHasEntries ? nextYear : null;
    setCategory(nextCategory);
    setYear(finalYear);

    const params = new URLSearchParams();
    if (finalYear) params.set("year", finalYear);
    if (nextCategory) params.set("category", nextCategory);
    const hash = params.toString();
    window.history.replaceState(null, "", hash ? `#${hash}` : window.location.pathname);
  }

  const byCategory = inCategory(entries, category);
  const shown = year ? byCategory.filter((entry) => entry.year === year) : byCategory;
  const filtered = category !== null || year !== null;

  return (
    <div>
      <YearScale entries={byCategory} selected={year} onSelect={(next) => apply(category, next)} allLabel="All years" />

      <div className="mt-8 flex flex-wrap items-center gap-2" role="group" aria-label={`Filter ${noun} by category`}>
        <FilterButton selected={category === null} onClick={() => apply(null, year)}>
          All
        </FilterButton>
        {categories.map((name) => (
          <FilterButton key={name} selected={category === name} onClick={() => apply(category === name ? null : name, year)}>
            {name}
          </FilterButton>
        ))}
      </div>

      <p className="label mt-5 flex flex-wrap items-center gap-x-4" aria-live="polite">
        <span>
          Showing {shown.length} of {entries.length} {noun}
        </span>
        {filtered && (
          <button type="button" onClick={() => apply(null, null)} className="link">
            Clear filters
          </button>
        )}
      </p>

      <h2 className="sr-only">All {noun}</h2>
      <ul className="mt-4 border-b border-rule">
        {shown.map((entry) => (
          <EntryRow key={`${entry.type}:${entry.slug}`} entry={entry} />
        ))}
      </ul>
      {shown.length === 0 && <p className="py-8">Nothing matches these filters.</p>}
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
