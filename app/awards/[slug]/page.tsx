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
        <h1 className="text-3xl font-bold">{p.title}</h1>
        <div className="shrink-0">
          <CopyLinkButton url={`/projects/${p.slug}`} />
        </div>
      </div>

      <p className="max-w-3xl text-zinc-300">{p.description ?? p.short}</p>

      <div className="flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-300">
            {t}
          </span>
        ))}
      </div>

      {p.stack?.length ? (
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Stack</h2>
          <ul className="list-disc pl-5 text-zinc-300">
            {p.stack.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </section>
      ) : null}

      {p.links?.length ? (
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Links</h2>
          <ul className="space-y-2">
            {p.links.map((l) => (
              <li key={l.href}>
                <a className="text-zinc-200 underline hover:text-white" href={l.href} target="_blank" rel="noreferrer">
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
