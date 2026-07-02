import type { Metadata } from "next";
import Icon, { type IconName } from "@/components/Icon";
import { contact } from "@/data/contact";
import { currentWork, siteConfig } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact details and current work links for Talhah Patelia, GotchaEducation, and NavigoTransport.",
  alternates: { canonical: "/contact" },
};

function iconFor(label: string): IconName {
  if (label.toLowerCase().includes("cell")) return "phone";
  return "mail";
}

export default function ContactPage() {
  return (
    <main className="space-y-8">
      <section>
        <div className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
          Contact
        </div>
        <h1 className="mt-1 text-3xl font-semibold text-[var(--text-primary)]">
          Reach the right inbox quickly
        </h1>
        <p className="mt-3 max-w-3xl leading-7 text-[var(--text-muted)]">
          Use the business email for venture, consulting, proof, or portfolio
          enquiries. Current product sites are linked below for direct context.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--text-muted)]">
          <Icon name="map" className="h-4 w-4" />
          {siteConfig.location}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {contact.map((item) => {
          const icon = iconFor(item.label);
          return (
            <a
              key={item.label}
              href={item.href}
              className="rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)] p-5 text-[var(--text-primary)] shadow-[var(--shadow-soft)] transition hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-muted)]"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[var(--border-soft)] bg-[var(--bg-surface-muted)] text-[var(--accent)]">
                  <Icon name={icon} className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm text-[var(--text-muted)]">{item.label}</span>
                  <span className="mt-1 block text-base font-semibold">{item.value}</span>
                  {item.description && (
                    <span className="mt-1 block text-xs text-[var(--text-muted)]">
                      {item.description}
                    </span>
                  )}
                </span>
              </div>
            </a>
          );
        })}
      </section>

      <section className="space-y-4">
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
            Current Work
          </div>
          <h2 className="mt-1 text-2xl font-bold text-[var(--text-primary)]">
            Product context before you email
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {currentWork.map((work) => (
            <a
              key={work.name}
              href={work.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-[var(--border-soft)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-soft)] transition hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-muted)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-[var(--accent)]">{work.label}</div>
                  <h3 className="mt-1 text-xl font-bold text-[var(--text-primary)]">{work.name}</h3>
                </div>
                <Icon name="external" className="h-4 w-4 text-[var(--text-muted)]" />
              </div>
              <p className="mt-3 leading-7 text-[var(--text-muted)]">{work.description}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
