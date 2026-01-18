"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import SearchBar from "./SearchBar";
import TagPills from "./TagPills";
import { awards } from "@/data/awards";
import { projects } from "@/data/projects";
import { buildSearchIndex, matches } from "@/lib/search";

export default function SiteHeader() {
  const index = useMemo(() => buildSearchIndex(awards, projects), []);
  const allTags = useMemo(() => {
    const s = new Set<string>();
    [...awards, ...projects].forEach((x) => x.tags.forEach((t) => s.add(String(t))));
    return Array.from(s).sort((a, b) => a.localeCompare(b));
  }, []);

  const [q, setQ] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const results = useMemo(() => {
    const filtered = index.filter((doc) => matches(doc, q, activeTags));
    return filtered.slice(0, 8);
  }, [index, q, activeTags]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="font-semibold tracking-tight">
            Talhah Patelia
          </Link>

          <nav className="flex items-center gap-3 text-sm text-zinc-300">
            <Link className="hover:text-white" href="/awards">Awards</Link>
            <Link className="hover:text-white" href="/projects">Projects</Link>
            <Link className="hover:text-white" href="/contact">Contact</Link>
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          <SearchBar value={q} onChange={setQ} results={results} />
          <TagPills
            tags={allTags}
            active={activeTags}
            onToggle={(t) =>
              setActiveTags((prev) =>
                prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
              )
            }
            onClear={() => setActiveTags([])}
          />
        </div>
      </div>
    </header>
  );
}
