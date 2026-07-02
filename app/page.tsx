import Link from "next/link";
import { awards } from "@/data/awards";
import { blogPosts } from "@/data/blog";
import { education } from "@/data/education";
import { currentWork, siteConfig } from "@/data/profile";
import { projects } from "@/data/projects";
import Icon, { type IconName } from "@/components/Icon";
import TileCard from "@/components/TileCard";
import { primaryCategory } from "@/lib/categories";
import { formatDate } from "@/lib/date";
import { buildTimeline, byNewest, countPublicSignals } from "@/lib/portfolio";

export default function HomePage() {
  const featuredAwards = byNewest(awards.filter((award) => award.featured)).slice(0, 4);
  const featuredProjects = byNewest(projects.filter((project) => project.featured)).slice(0, 4);
  const timeline = buildTimeline(awards, projects).slice(0, 9);
  const publicSignals = [...awards, ...projects].reduce(
    (total, item) => total + countPublicSignals(item),
    0,
  );
  const currentProjectSlugs = new Set([
    "gotchaeducation-platform",
    "navigotransport-campus-transit",
  ]);
  const activeBuilds = projects.filter((project) => currentProjectSlugs.has(project.slug));

  return (
    <main className="space-y-12">
      <section className="grid gap-8 py-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-md border border-[var(--proof-border)] bg-[var(--proof-bg)] px-3 py-1 text-sm font-medium text-[var(--proof-text)]">
            <Icon name="shield" className="h-4 w-4" />
            Proof-led engineering portfolio
          </div>
          <div className="space-y-3">
            <h1 className="max-w-4xl text-4xl font-semibold text-[var(--text-primary)] sm:text-5xl">
              Talhah Patelia
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-[var(--text-muted)]">
              Software developer, engineer, and student entrepreneur building
              education technology, transport systems, HPC infrastructure,
              robotics, and embedded hardware while in 4th-year Electrical and
              Information Engineering at Wits. Dates, proof, and current status
              stay visible.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-4 py-2 font-semibold text-[var(--accent-contrast)] shadow-[var(--shadow-soft)] transition hover:bg-[var(--accent-soft)]"
              href="#current-work"
            >
              <Icon name="briefcase" className="h-4 w-4" />
              Current work
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-md border border-[var(--border-soft)] bg-[var(--bg-surface)] px-4 py-2 font-semibold text-[var(--text-primary)] shadow-[var(--shadow-soft)] transition hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-muted)]"
              href="#proof"
            >
              <Icon name="shield" className="h-4 w-4" />
              Proof timeline
            </Link>
            <a
              className="inline-flex items-center gap-2 rounded-md border border-[var(--border-soft)] bg-[var(--bg-surface)] px-4 py-2 font-semibold text-[var(--text-primary)] shadow-[var(--shadow-soft)] transition hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-muted)]"
              href={siteConfig.proofPacket.href}
            >
              <Icon name="file" className="h-4 w-4" />
              Proof packet
            </a>
            <Link
              className="inline-flex items-center gap-2 rounded-md border border-[var(--border-soft)] bg-[var(--bg-surface)] px-4 py-2 font-semibold text-[var(--text-primary)] shadow-[var(--shadow-soft)] transition hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-muted)]"
              href="#education"
            >
              <Icon name="graduation" className="h-4 w-4" />
              Education
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {([
            { label: "Projects", value: projects.length, icon: "folder" },
            { label: "Awards", value: awards.length, icon: "trophy" },
            { label: "Public signals", value: publicSignals, icon: "shield" },
            { label: "Active builds", value: activeBuilds.length, icon: "briefcase" },
          ] satisfies { label: string; value: number; icon: IconName }[]).map((metric) => (
            <div key={metric.label} className="rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)] p-4 shadow-[var(--shadow-soft)]">
              <Icon name={metric.icon} className="h-5 w-5 text-[var(--accent)]" />
              <div className="mt-3 font-mono text-3xl font-semibold text-[var(--text-primary)]">{metric.value}</div>
              <div className="text-sm text-[var(--text-muted)]">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="grid gap-6 scroll-mt-40 lg:grid-cols-[320px_minmax(0,1fr)]">
        <div>
          <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
            <Icon name="graduation" className="h-4 w-4" />
            Education
          </div>
          <h2 className="mt-1 text-2xl font-bold text-[var(--text-primary)]">
            Degree context and academic path
          </h2>
          <p className="mt-3 leading-7 text-[var(--text-muted)]">
            Education is shown as a timeline, tied back to proof where available,
            so visitors can quickly separate current study, school background,
            and awards.
          </p>
        </div>

        <div className="divide-y divide-[var(--border-soft)] overflow-hidden rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)] shadow-[var(--shadow-soft)]">
          {education.map((item) => (
            <article key={item.institution} className="p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="font-semibold text-[var(--text-primary)]">{item.institution}</div>
                  <div className="mt-1 text-sm text-[var(--text-muted)]">{item.credential}</div>
                </div>
                <div className="rounded-md border border-[var(--border-soft)] bg-[var(--bg-surface-muted)] px-2 py-1 font-mono text-xs text-[var(--text-muted)]">
                  {item.period}
                </div>
              </div>
              <div className="mt-3 inline-flex items-center gap-1 rounded-md border border-[var(--proof-border)] bg-[var(--proof-bg)] px-2 py-1 text-xs font-medium text-[var(--proof-text)]">
                <Icon name="shield" className="h-3.5 w-3.5" />
                {item.status}
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                {item.description}
              </p>
              {item.links?.length ? (
                <div className="mt-3 flex flex-wrap gap-3 text-sm">
                  {item.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-1.5 font-medium text-[var(--text-primary)] underline underline-offset-4 hover:text-[var(--accent)]"
                      target={link.href.startsWith("/") ? undefined : "_blank"}
                      rel={link.href.startsWith("/") ? undefined : "noreferrer"}
                    >
                      {link.label}
                      <Icon name={link.href.startsWith("/") ? "arrow-right" : "external"} className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section id="current-work" className="space-y-4 scroll-mt-40">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
              Current Work
            </div>
            <h2 className="mt-1 text-2xl font-bold text-[var(--text-primary)]">
              Live systems people can inspect now
            </h2>
          </div>
          <Link className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)]" href="/projects">
            View all projects
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {currentWork.map((work) => (
            <article key={work.name} className="rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-soft)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-[var(--accent)]">{work.label}</div>
                  <h3 className="mt-1 text-xl font-bold text-[var(--text-primary)]">{work.name}</h3>
                </div>
                <a
                  href={work.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border-soft)] bg-[var(--bg-surface-muted)] text-[var(--text-muted)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                  aria-label={`Open ${work.name}`}
                >
                  <Icon name="external" className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-3 leading-7 text-[var(--text-muted)]">{work.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-md border border-[var(--proof-border)] bg-[var(--proof-bg)] px-2 py-1 text-xs font-medium text-[var(--proof-text)]">
                  {work.status}
                </span>
                {work.metrics.map((metric) => (
                  <span key={metric} className="rounded-md border border-[var(--border-soft)] bg-[var(--bg-surface-muted)] px-2 py-1 text-xs text-[var(--text-muted)]">
                    {metric}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                {work.links.map((link) => (
                  <a key={link.href} className="inline-flex items-center gap-1.5 font-semibold text-[var(--text-primary)] underline underline-offset-4 hover:text-[var(--accent)]" href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                    <Icon name="external" className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="proof" className="grid gap-6 scroll-mt-40 lg:grid-cols-[360px_minmax(0,1fr)]">
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
            Proof Timeline
          </div>
          <h2 className="mt-1 text-2xl font-bold text-[var(--text-primary)]">
            Dates first, context second, proof always visible
          </h2>
          <p className="mt-3 leading-7 text-[var(--text-muted)]">
            A quick path through the most recent work and recognition, including
            whether each item has public evidence attached.
          </p>
        </div>

        <div className="divide-y divide-[var(--border-soft)] overflow-hidden rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)] shadow-[var(--shadow-soft)]">
          {timeline.map((entry) => (
            <Link key={`${entry.type}:${entry.slug}`} href={entry.href} className="grid gap-3 p-4 transition hover:bg-[var(--bg-surface-muted)] sm:grid-cols-[120px_minmax(0,1fr)_120px] sm:items-center">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)]">
                <Icon name="calendar" className="h-4 w-4" />
                {formatDate(entry.date)}
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold capitalize text-[var(--accent)]">{entry.type}</div>
                <div className="font-semibold text-[var(--text-primary)]">{entry.title}</div>
                <div className="mt-1 line-clamp-1 text-sm text-[var(--text-muted)]">{entry.short}</div>
              </div>
              <div className="inline-flex items-center gap-1 rounded-md border border-[var(--proof-border)] bg-[var(--proof-bg)] px-2 py-1 text-xs font-medium text-[var(--proof-text)] sm:justify-center">
                <Icon name="shield" className="h-3.5 w-3.5" />
                {countPublicSignals(entry)} signals
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
              Featured Evidence
            </div>
            <h2 className="mt-1 text-2xl font-bold text-[var(--text-primary)]">
              Projects and awards with the strongest public context
            </h2>
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {[...featuredProjects, ...featuredAwards].map((item) => {
            const href = "stage" in item ? `/projects/${item.slug}` : `/awards/${item.slug}`;
            return (
              <TileCard
                key={item.slug}
                title={item.title}
                short={item.short}
                description={item.description}
                href={href}
                tags={item.tags}
                date={item.date}
                category={primaryCategory(item.tags)}
                image={item.image}
                role={item.role}
                stage={"stage" in item ? item.stage : item.org}
                proofCount={countPublicSignals(item)}
                size="long"
              />
            );
          })}
        </div>
      </section>

      <section className="rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-soft)]">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
              <Icon name="book-open" className="h-4 w-4" />
              Writing
            </div>
            <h2 className="mt-1 text-2xl font-bold text-[var(--text-primary)]">
              Engineering notes and portfolio updates
            </h2>
          </div>
          <Link className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)]" href="/blog">
            Open blog
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {blogPosts.map((post) => (
            <TileCard
              key={post.slug}
              title={post.title}
              short={post.short}
              description={post.description}
              href={`/blog/${post.slug}`}
              tags={post.tags}
              date={post.date}
              category={primaryCategory(post.tags)}
              stage={post.readingTime}
              proofCount={countPublicSignals(post)}
              size="long"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
