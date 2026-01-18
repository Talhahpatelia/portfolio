import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import CopyLinkButton from "@/components/CopyLinkButton";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return { title: "Project" };
  return {
    title: p.title,
    description: p.short,
    openGraph: { title: p.title, description: p.short },
  };
}

export default function ProjectDetail({ params }: { params: Params }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  return (
    <main className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-3xl font-bold text-[var(--text-primary)]">{p.title}</h1>
        <div className="shrink-0">
          <CopyLinkButton url={`/projects/${p.slug}`} />
        </div>
      </div>

      <p className="max-w-3xl text-[var(--text-muted)]">{p.description ?? p.short}</p>

      <div className="flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-[var(--pill-border)] bg-[var(--pill-bg)] px-3 py-1 text-xs text-[var(--pill-text)]"
          >
            {t}
          </span>
        ))}
      </div>

      {p.stack?.length ? (
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">Stack</h2>
          <ul className="list-disc pl-5 text-[var(--text-muted)]">
            {p.stack.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </section>
      ) : null}

      {p.links?.length ? (
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">Links</h2>
          <ul className="space-y-2">
            {p.links.map((l) => (
              <li key={l.href}>
                <a className="text-[var(--text-primary)] underline underline-offset-4 hover:text-[var(--accent)]" href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
