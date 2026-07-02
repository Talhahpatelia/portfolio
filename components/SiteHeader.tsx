"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BookOpen, BriefcaseBusiness, Filter, FolderKanban, GraduationCap, Mail, ShieldCheck, Trophy, X } from "lucide-react";
import SearchBar from "./SearchBar";
import TagPills from "./TagPills";
import { awards } from "@/data/awards";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";
import { buildSearchIndex, matches } from "@/lib/search";
import { allCategories } from "@/lib/categories";
import ThemeToggle from "./ThemeToggle";

function archivePathFor(pathname: string) {
    if (pathname === "/projects" || pathname === "/awards" || pathname === "/blog") {
        return pathname;
    }
    return null;
}

export default function SiteHeader() {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const index = useMemo(() => buildSearchIndex(awards, projects, blogPosts), []);
    const categories = useMemo(() => allCategories([...awards, ...projects, ...blogPosts]), []);
    const routeCategories = useMemo(() => {
        const selected = searchParams
            .getAll("category")
            .flatMap((category) => category.split(","))
            .map((category) => category.trim())
            .filter(Boolean);
        return categories.filter((category) => selected.includes(category));
    }, [categories, searchParams]);

    const [q, setQ] = useState("");
    const [activeCategories, setActiveCategories] = useState<string[]>(routeCategories);
    const [filtersOpen, setFiltersOpen] = useState(false);
    const activeArchivePath = archivePathFor(pathname);

    const routeCategoriesKey = routeCategories.join("|");
    useEffect(() => {
        setActiveCategories(routeCategories);
    }, [routeCategoriesKey]);

    const results = useMemo(() => {
        const filtered = index.filter((doc) => matches(doc, q, activeCategories));
        return filtered.slice(0, 8);
    }, [index, q, activeCategories]);

    function applyCategories(nextCategories: string[]) {
        setActiveCategories(nextCategories);
        if (!activeArchivePath) return;

        const params = new URLSearchParams(searchParams.toString());
        params.delete("category");
        nextCategories.forEach((category) => params.append("category", category));
        const query = params.toString();
        router.replace(query ? `${activeArchivePath}?${query}` : activeArchivePath, { scroll: false });
    }

    return (
        <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-[var(--bg-surface-translucent)] backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <Link href="/" className="inline-flex items-center font-medium text-[var(--text-primary)]">
                        <span>Talhah Patelia</span>
                    </Link>

                    <nav className="order-3 flex w-full flex-wrap items-center gap-2 text-sm text-[var(--text-muted)] sm:order-none sm:w-auto">
                        <Link className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 transition-colors hover:bg-[var(--bg-surface-muted)] hover:text-[var(--text-primary)]" href="/#current-work">
                            <BriefcaseBusiness aria-hidden="true" className="h-4 w-4" />
                            Work
                        </Link>
                        <Link className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 transition-colors hover:bg-[var(--bg-surface-muted)] hover:text-[var(--text-primary)]" href="/projects">
                            <FolderKanban aria-hidden="true" className="h-4 w-4" />
                            Projects
                        </Link>
                        <Link className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 transition-colors hover:bg-[var(--bg-surface-muted)] hover:text-[var(--text-primary)]" href="/awards">
                            <Trophy aria-hidden="true" className="h-4 w-4" />
                            Awards
                        </Link>
                        <Link className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 transition-colors hover:bg-[var(--bg-surface-muted)] hover:text-[var(--text-primary)]" href="/blog">
                            <BookOpen aria-hidden="true" className="h-4 w-4" />
                            Blog
                        </Link>
                        <Link className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 transition-colors hover:bg-[var(--bg-surface-muted)] hover:text-[var(--text-primary)]" href="/#education">
                            <GraduationCap aria-hidden="true" className="h-4 w-4" />
                            Education
                        </Link>
                        <Link className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 transition-colors hover:bg-[var(--bg-surface-muted)] hover:text-[var(--text-primary)]" href="/#proof">
                            <ShieldCheck aria-hidden="true" className="h-4 w-4" />
                            Proof
                        </Link>
                        <Link className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 transition-colors hover:bg-[var(--bg-surface-muted)] hover:text-[var(--text-primary)]" href="/contact">
                            <Mail aria-hidden="true" className="h-4 w-4" />
                            Contact
                        </Link>
                    </nav>
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => setFiltersOpen((value) => !value)}
                            className="inline-flex h-9 items-center gap-2 rounded-md border border-[var(--border-soft)] bg-[var(--bg-surface)] px-3 text-xs font-medium text-[var(--text-primary)] shadow-[var(--shadow-soft)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
                            aria-expanded={filtersOpen}
                        >
                            {filtersOpen ? <X aria-hidden="true" className="h-4 w-4" /> : <Filter aria-hidden="true" className="h-4 w-4" />}
                            Filters
                        </button>
                        <ThemeToggle />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <SearchBar
                        value={q}
                        onChange={setQ}
                        results={results}
                        showResults={activeCategories.length > 0 && !activeArchivePath}
                    />
                    {(filtersOpen || activeCategories.length > 0) && (
                    <div className="space-y-2 rounded-md border border-[var(--border-soft)] bg-[var(--bg-surface)] p-3">
                        <div className="flex items-center justify-between gap-3 text-xs font-medium text-[var(--text-muted)]">
                            <span>Filter by evidence area</span>
                            {activeCategories.length > 0 && (
                                <span>{activeCategories.length} active</span>
                            )}
                        </div>
                        <TagPills
                            tags={categories}
                            active={activeCategories}
                            onToggle={(t) =>
                                applyCategories(
                                    activeCategories.includes(t)
                                        ? activeCategories.filter((x) => x !== t)
                                        : [...activeCategories, t],
                                )
                            }
                            onClear={() => applyCategories([])}
                        />
                    </div>
                    )}
                </div>
            </div>
        </header>
    );
}
