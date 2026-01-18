import Link from "next/link";
import { awards } from "@/data/awards";
import { projects } from "@/data/projects";
import TileCard from "@/components/TileCard";

export default function HomePage() {
  const featuredAwards = awards.slice(0, 4);
  const featuredProjects = projects.slice(0, 4);

  return (
    <main className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight">Talhah Patelia</h1>
        <p className="max-w-2xl text-zinc-300">
          Engineering + building across embedded systems, HPC, and startups.
        </p>
        <div className="flex gap-3 text-sm">
          <Link className="rounded-xl border border-zinc-800 px-4 py-2 hover:border-zinc-600" href="/awards">
            View Awards
          </Link>
          <Link className="rounded-xl border border-zinc-800 px-4 py-2 hover:border-zinc-600" href="/projects">
            View Projects
          </Link>
          <Link className="rounded-xl border border-zinc-800 px-4 py-2 hover:border-zinc-600" href="/contact">
            Contact
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold">Featured Awards</h2>
          <Link className="text-sm text-zinc-400 hover:text-white" href="/awards">All awards →</Link>
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
          <h2 className="text-xl font-semibold">Featured Projects</h2>
          <Link className="text-sm text-zinc-400 hover:text-white" href="/projects">All projects →</Link>
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
