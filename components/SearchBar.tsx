"use client";

import Link from "next/link";
import type { SearchDoc } from "@/lib/search";

export default function SearchBar({
  value,
  onChange,
  results,
}: {
  value: string;
  onChange: (v: string) => void;
  results: SearchDoc[];
}) {
  return (
    <div className="relative">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search awards + projects (e.g. HPC, infusion, proctoring)…"
        className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-600"
      />

      {(value.trim().length > 0 && results.length > 0) && (
        <div className="absolute mt-2 w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
          {results.map((r) => (
            <Link
              key={`${r.type}:${r.slug}`}
              href={r.href}
              className="block px-4 py-3 hover:bg-zinc-900/60"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-medium">{r.title}</div>
                <div className="text-xs text-zinc-500">{r.type}</div>
              </div>
              <div className="mt-1 text-xs text-zinc-400">{r.short}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
