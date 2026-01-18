import type { Metadata } from "next";
import { projects } from "@/data/projects";
import TileCard from "@/components/TileCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects and builds.",
};

export default function ProjectsPage() {
  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <TileCard
            key={p.slug}
            title={p.title}
            short={p.short}
            href={`/projects/${p.slug}`}
            tags={p.tags}
            size="long"
            image={p.image}
          />
        ))}
      </div>
    </main>
  );
}
