"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { SearchDoc } from "@/lib/search";

export default function SearchBar({
  value,
  onChange,
  results,
  showResults = false,
}: {
  value: string;
  onChange: (v: string) => void;
  results: SearchDoc[];
  showResults?: boolean;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [suppressUntilEdit, setSuppressUntilEdit] = useState(false);
  const hasQuery = value.trim().length > 0;
  const shouldShowResults = isOpen && !suppressUntilEdit && (hasQuery || showResults);

  useEffect(() => {
    if (!hasQuery && !showResults) {
      setSuppressUntilEdit(false);
      setIsOpen(false);
    } else if (!suppressUntilEdit) {
      setIsOpen(true);
    }
  }, [hasQuery, showResults, suppressUntilEdit]);

  return (
    <div className="relative">
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]"
      />
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => {
          setSuppressUntilEdit(false);
          setIsOpen(true);
          onChange(e.target.value);
        }}
        onFocus={() => {
          if (!suppressUntilEdit && (hasQuery || showResults)) setIsOpen(true);
        }}
        placeholder="Search proof, work, writing"
        className="w-full rounded-md border border-[var(--border-soft)] bg-[var(--bg-surface)] px-9 py-3
           text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]
           shadow-[var(--shadow-soft)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
      />

      {shouldShowResults && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-md border border-[var(--border-strong)] bg-[var(--bg-surface)] shadow-[var(--shadow-soft)]">
          {results.length > 0 ? results.map((r) => (
            <Link
              key={`${r.type}:${r.slug}`}
              href={r.href}
              onClick={() => {
                setSuppressUntilEdit(true);
                setIsOpen(false);
                onChange("");
                inputRef.current?.blur();
              }}
              className="block px-4 py-3 hover:bg-[var(--bg-surface-muted)]"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-medium text-[var(--text-primary)]">{r.title}</div>
                <div className="shrink-0 text-xs text-[var(--text-muted)]">
                  {[r.type, r.year].filter(Boolean).join(" / ")}
                </div>
              </div>
              <div className="mt-1 text-xs text-[var(--text-muted)]">{r.short}</div>
            </Link>
          )) : (
            <div className="px-4 py-3 text-sm text-[var(--text-muted)]">
              No matching portfolio entries.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
