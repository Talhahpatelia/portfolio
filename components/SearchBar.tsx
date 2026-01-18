"use client";

import Link from "next/link";
import { useRef } from "react";
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
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="relative">
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search awards + projects (e.g. HPC, infusion, proctoring)."
        className="w-full rounded-xl border border-[var(--border-soft)] bg-[var(--bg-surface)] px-4 py-3
           text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]
           shadow-[var(--shadow-soft)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
      />

      {(value.trim().length > 0 && results.length > 0) && (
        <div className="absolute mt-2 w-full overflow-hidden rounded-xl border border-[var(--border-strong)] bg-[var(--bg-surface)] shadow-[var(--shadow-soft)]">
          {results.map((r) => (
            <Link
              key={`${r.type}:${r.slug}`}
              href={r.href}
              onClick={() => {
                onChange("");
                inputRef.current?.blur();
              }}
              className="block px-4 py-3 hover:bg-[var(--bg-surface-muted)]"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-medium text-[var(--text-primary)]">{r.title}</div>
                <div className="text-xs text-[var(--text-muted)]">{r.type}</div>
              </div>
              <div className="mt-1 text-xs text-[var(--text-muted)]">{r.short}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
