import Link from "next/link";
import { awards } from "@/data/awards";
import { projects } from "@/data/projects";
import TileCard from "@/components/TileCard";

export default function HomePage() {
    const featuredAwards = [...awards].reverse().filter((a) => a.featured);
    const featuredProjects = [...projects].reverse().filter((p) => p.featured);

    return (
        <main className="space-y-10">
            <section className="space-y-3">
                <h1 className="text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
                    Talhah Patelia
                </h1>
                <p className="max-w-2xl text-[var(--text-muted)]">
                    Engineering + building across embedded systems, HPC, and
                    startups.
                </p>
                <div className="flex gap-3 text-sm">
                    <Link
                        className="rounded-xl border border-[var(--border-soft)] bg-[var(--bg-surface)] px-4 py-2 text-[var(--text-primary)] shadow-[var(--shadow-soft)] transition hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-muted)]"
                        href="/awards"
                    >
                        View Awards
                    </Link>
                    <Link
                        className="rounded-xl border border-[var(--border-soft)] bg-[var(--bg-surface)] px-4 py-2 text-[var(--text-primary)] shadow-[var(--shadow-soft)] transition hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-muted)]"
                        href="/projects"
                    >
                        View Projects
                    </Link>
                    <Link
                        className="rounded-xl border border-[var(--border-soft)] bg-[var(--bg-surface)] px-4 py-2 text-[var(--text-primary)] shadow-[var(--shadow-soft)] transition hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-muted)]"
                        href="/contact"
                    >
                        Contact
                    </Link>
                </div>
            </section>

            <section className="space-y-4">
                <div className="flex items-end justify-between">
                    <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                        Featured Awards
                    </h2>
                    <Link
                        className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
                        href="/awards"
                    >
                        All awards →
                    </Link>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    {featuredAwards.map((a) => (
                        <TileCard
                            key={a.slug}
                            title={a.title}
                            short={a.short}
                            href={`/awards/${a.slug}`}
                            tags={a.tags}
                        />
                    ))}
                </div>
            </section>

            <section className="space-y-4">
                <div className="flex items-end justify-between">
                    <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                        Featured Projects
                    </h2>
                    <Link
                        className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
                        href="/projects"
                    >
                        All projects →
                    </Link>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    {featuredProjects.map((p) => (
                        <TileCard
                            key={p.slug}
                            title={p.title}
                            short={p.short}
                            href={`/projects/${p.slug}`}
                            tags={p.tags}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
