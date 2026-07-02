import Link from "next/link";
import Icon from "./Icon";
import CopyLinkButton from "./CopyLinkButton";
import { formatDate } from "@/lib/date";

type TileSize = "compact" | "long";

export default function TileCard({
  title,
  short,
  href,
  tags,
  date,
  category,
  description,
  stage,
  role,
  proofCount = 0,
  size = "compact",
}: {
  title: string;
  short: string;
  href: string;
  tags: string[];
  date?: string;
  category?: string;
  image?: { src: string; alt: string };
  description?: string;
  stage?: string;
  role?: string;
  proofCount?: number;
  size?: TileSize;
}) {
  const displayDate = formatDate(date);

  return (
    <article className="group rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)] p-4 shadow-[var(--shadow-soft)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-muted)]">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <Link href={href} className="group/link inline-flex items-start gap-2 text-base font-semibold leading-snug text-[var(--text-primary)] hover:underline">
            <span>{title}</span>
            <Icon name="arrow-up-right" className="mt-0.5 h-4 w-4 shrink-0 opacity-0 transition group-hover/link:opacity-100" />
          </Link>
        </div>
        <CopyLinkButton url={href} />
      </div>

      {(displayDate || category) && (
        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-[var(--text-muted)]">
          {displayDate && (
            <span className="inline-flex items-center gap-1">
              <Icon name="calendar" className="h-3.5 w-3.5" />
              {displayDate}
            </span>
          )}
          {category && (
            <span className="rounded-md border border-[var(--pill-border)] bg-[var(--pill-bg)] px-2 py-0.5 text-[var(--pill-text)]">
              {category}
            </span>
          )}
        </div>
      )}

      <p className={["mt-2 text-sm text-[var(--text-muted)]", size === "long" ? "" : "line-clamp-2"].join(" ")}>
        {short}
      </p>

      {size === "long" && description && (
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-[var(--text-muted)]">
          {description}
        </p>
      )}

      {(stage || role || proofCount > 0) && (
        <div className="mt-3 flex flex-wrap gap-2 text-xs text-[var(--text-muted)]">
          {stage && (
            <span className="inline-flex items-center gap-1 rounded-md border border-[var(--border-soft)] bg-[var(--bg-surface-muted)] px-2 py-1">
              <Icon name="layers" className="h-3.5 w-3.5" />
              {stage}
            </span>
          )}
          {role && (
            <span className="rounded-md border border-[var(--border-soft)] bg-[var(--bg-surface-muted)] px-2 py-1">
              {role}
            </span>
          )}
          {proofCount > 0 && (
            <span className="inline-flex items-center gap-1 rounded-md border border-[var(--proof-border)] bg-[var(--proof-bg)] px-2 py-1 text-[var(--proof-text)]">
              <Icon name="shield" className="h-3.5 w-3.5" />
              {proofCount} proof {proofCount === 1 ? "link" : "links"}
            </span>
          )}
        </div>
      )}

      <div className="mt-3 flex flex-wrap gap-2">
        {tags.slice(0, 6).map((t) => (
          <span
            key={t}
            className="rounded-md border border-[var(--pill-border)] bg-[var(--pill-bg)] px-2 py-0.5 text-xs text-[var(--pill-text)] transition hover:border-[var(--border-strong)]"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
