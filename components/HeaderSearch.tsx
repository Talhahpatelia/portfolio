"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { search, type SearchDoc } from "@/lib/search";

const TYPE_LABEL = { project: "Project", award: "Award", blog: "Writing" } as const;

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Underlines the words the visitor typed, so it is clear why a result matched. */
function Highlight({ text, query }: { text: string; query: string }) {
  const terms = query.trim().split(/\s+/).filter(Boolean).map(escapeRegExp);
  if (terms.length === 0) return <>{text}</>;
  const parts = text.split(new RegExp(`(${terms.join("|")})`, "ig"));
  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <span key={index} className="underline decoration-signal decoration-2 underline-offset-2">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

export default function HeaderSearch({ index }: { index: SearchDoc[] }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const id = useId();
  const results = useMemo(() => search(index, query), [index, query]);
  const showPanel = open && query.trim().length > 0;

  // Close and clear when the visitor navigates.
  useEffect(() => {
    setOpen(false);
    setQuery("");
  }, [pathname]);

  // Close when clicking elsewhere.
  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  // "/" jumps to search from anywhere that is not a text field.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) return;
      event.preventDefault();
      inputRef.current?.focus();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      <label htmlFor={`${id}-input`} className="sr-only">
        Search projects, awards and writing. Press slash to focus.
      </label>
      <input
        ref={inputRef}
        id={`${id}-input`}
        type="search"
        role="combobox"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
          setActive(0);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setOpen(false);
            inputRef.current?.blur();
          } else if (event.key === "ArrowDown" && results.length > 0) {
            event.preventDefault();
            setOpen(true);
            setActive((current) => (current + 1) % results.length);
          } else if (event.key === "ArrowUp" && results.length > 0) {
            event.preventDefault();
            setActive((current) => (current - 1 + results.length) % results.length);
          } else if (event.key === "Enter" && showPanel && results[active]) {
            event.preventDefault();
            router.push(results[active].href);
          }
        }}
        placeholder="Search"
        autoComplete="off"
        aria-expanded={showPanel}
        aria-controls={`${id}-list`}
        aria-activedescendant={showPanel && results[active] ? `${id}-option-${active}` : undefined}
        className="h-9 w-24 rounded-[2px] border border-rule bg-transparent px-3 text-sm text-ink transition-[width] duration-150 placeholder:text-ink-2 focus:w-44 focus:border-ink sm:w-40 sm:focus:w-64"
      />
      {query === "" && (
        <kbd
          aria-hidden="true"
          className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-[2px] border border-rule px-1.5 text-xs leading-5 text-ink-2 sm:block"
        >
          /
        </kbd>
      )}

      {showPanel && (
        <div className="absolute right-0 z-30 mt-2 w-[min(24rem,calc(100vw-2.5rem))] border border-ink bg-paper">
          {results.length > 0 ? (
            <ul id={`${id}-list`} role="listbox" aria-label="Search results">
              {results.map((doc, position) => (
                <li
                  key={`${doc.type}:${doc.slug}`}
                  id={`${id}-option-${position}`}
                  role="option"
                  aria-selected={position === active}
                  className={["border-t border-rule first:border-t-0", position === active ? "bg-panel" : ""].join(" ")}
                  onMouseEnter={() => setActive(position)}
                >
                  <Link href={doc.href} tabIndex={-1} className="block px-3 py-3">
                    <span className="flex items-baseline justify-between gap-3">
                      <span className="text-sm font-medium">
                        <Highlight text={doc.title} query={query} />
                      </span>
                      <span className="shrink-0 text-xs text-ink-2">
                        {TYPE_LABEL[doc.type]}
                        {doc.year ? `, ${doc.year}` : ""}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p id={`${id}-list`} className="px-3 py-3 text-sm text-ink-2">
              Nothing matches &ldquo;{query.trim()}&rdquo;.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
