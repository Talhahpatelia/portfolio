import Image from "next/image";
import Icon from "./Icon";
import type { LinkItem } from "@/lib/types";

function hostFor(href: string) {
  if (href.startsWith("/")) return "talhahpatelia.com";
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
}

export function proofCount({
  links,
  image,
}: {
  links?: LinkItem[];
  image?: { src: string; alt: string };
}) {
  return (links?.length ?? 0) + (image ? 1 : 0);
}

export default function EvidencePanel({
  title = "Proof",
  links,
  image,
  hasNarrative,
}: {
  title?: string;
  links?: LinkItem[];
  image?: { src: string; alt: string };
  hasNarrative?: boolean;
}) {
  const count = proofCount({ links, image });

  return (
    <aside className="rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)] p-4 shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)]">
        <Icon name="shield" className="h-4 w-4 text-[var(--proof-text)]" />
        {title}
      </div>

      <div className="mt-3 flex flex-wrap gap-2 text-xs text-[var(--text-muted)]">
        <span className="rounded-md border border-[var(--proof-border)] bg-[var(--proof-bg)] px-2 py-1 text-[var(--proof-text)]">
          {count > 0 ? `${count} public signal${count === 1 ? "" : "s"}` : "Public proof pending"}
        </span>
        {hasNarrative && (
          <span className="inline-flex items-center gap-1 rounded-md border border-[var(--border-soft)] bg-[var(--bg-surface-muted)] px-2 py-1">
            <Icon name="file" className="h-3.5 w-3.5" />
            Written note
          </span>
        )}
      </div>

      {image && (
        <div className="mt-4 overflow-hidden rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface-muted)]">
          <Image src={image.src} alt={image.alt} width={900} height={520} className="h-auto w-full" />
        </div>
      )}

      {links?.length ? (
        <ul className="mt-4 divide-y divide-[var(--border-soft)] border-y border-[var(--border-soft)]">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.href.startsWith("/") ? undefined : "_blank"}
                rel={link.href.startsWith("/") ? undefined : "noreferrer"}
                className="group flex items-start justify-between gap-3 py-3 text-sm text-[var(--text-primary)]"
              >
                <span className="min-w-0">
                  <span className="flex items-center gap-2 font-medium">
                    <Icon name="link" className="h-4 w-4 shrink-0 text-[var(--text-muted)]" />
                    <span>{link.label}</span>
                  </span>
                  <span className="mt-1 block text-xs text-[var(--text-muted)]">
                    {[link.kind ?? "Source", hostFor(link.href)].join(" / ")}
                  </span>
                </span>
                <Icon name="external" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--text-muted)] transition group-hover:text-[var(--text-primary)]" />
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-4 flex items-start gap-2 rounded-md border border-[var(--border-soft)] bg-[var(--bg-surface-muted)] p-3 text-sm text-[var(--text-muted)]">
          <Icon name="alert-circle" className="mt-0.5 h-4 w-4 shrink-0" />
          <p>
            This entry is recorded from local portfolio data. Add a public article,
            certificate, repository, document, or product link when one is available.
          </p>
        </div>
      )}

      {image && (
        <div className="mt-3 inline-flex items-center gap-2 text-xs text-[var(--text-muted)]">
          <Icon name="image" className="h-3.5 w-3.5" />
          Image evidence included
        </div>
      )}
    </aside>
  );
}
