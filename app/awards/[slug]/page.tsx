import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { awards } from "@/data/awards";
import CopyLinkButton from "@/components/CopyLinkButton";

type Params = { slug: string };

export function generateStaticParams() {
  return awards.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const a = awards.find((x) => x.slug === params.slug);
  if (!a) return { title: "Award" };
  return {
    title: a.title,
    description: a.short,
    openGraph: { title: a.title, description: a.short },
  };
}

export default function AwardDetail({ params }: { params: Params }) {
  const a = awards.find((x) => x.slug === params.slug);
  if (!a) return notFound();

  return (
    <main className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-3xl font-bold text-[var(--text-primary)]">{a.title}</h1>
        <div className="shrink-0">
          <CopyLinkButton url={`/awards/${a.slug}`} />
        </div>
      </div>

      <p className="max-w-3xl text-[var(--text-muted)]">{a.description ?? a.short}</p>

      <div className="flex flex-wrap gap-2">
        {a.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-[var(--pill-border)] bg-[var(--pill-bg)] px-3 py-1 text-xs text-[var(--pill-text)]"
          >
            {t}
          </span>
        ))}
      </div>

      {a.stack?.length ? (
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">Stack</h2>
          <ul className="list-disc pl-5 text-[var(--text-muted)]">
            {a.stack.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </section>
      ) : null}

      {a.links?.length ? (
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">Links</h2>
          <ul className="space-y-2">
            {a.links.map((l) => (
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
