import Link from "next/link";
import HeaderSearch from "@/components/HeaderSearch";
import Nav from "@/components/Nav";
import ThemeToggle from "@/components/ThemeToggle";
import { getAllEntries } from "@/lib/catalog";
import { buildSearchIndex } from "@/lib/search";

export default function SiteHeader() {
  const index = buildSearchIndex(getAllEntries());

  return (
    <header className="border-b border-rule">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-4 sm:gap-x-10 sm:gap-y-3">
          <Link
            href="/"
            className="text-lg font-semibold lowercase tracking-tight"
            style={{ fontStretch: "125%" }}
          >
            talhah patelia
          </Link>

          <Nav />

          <div className="flex items-center gap-3">
            <HeaderSearch index={index} />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
