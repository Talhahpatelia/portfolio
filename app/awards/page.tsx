import type { Metadata } from "next";
import { awards } from "@/data/awards";
import TileCard from "@/components/TileCard";

export const metadata: Metadata = {
  title: "Awards",
  description: "Awards and achievements.",
};

export default function AwardsPage() {
  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold">Awards & Achievements</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {awards.map((a) => (
          <TileCard
            key={a.slug}
            title={a.title}
            short={a.short}
            href={`/awards/${a.slug}`}
            tags={a.tags}
            size="long"
            image={a.image}
          />
        ))}
      </div>
    </main>
  );
}
