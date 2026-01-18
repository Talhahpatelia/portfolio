import type { Metadata } from "next";
import { contact } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact details for Talhah Patelia.",
};

export default function ContactPage() {
  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold text-[var(--text-primary)]">Contact</h1>

      <div className="grid gap-4 sm:grid-cols-2">
        {contact.map((c) => (
          <a
            key={c.label}
            href={c.href}
            className="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-5 text-[var(--text-primary)] shadow-[var(--shadow-soft)] transition hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-muted)]"
          >
            <div className="text-sm text-[var(--text-muted)]">{c.label}</div>
            <div className="mt-1 text-base font-semibold">{c.value}</div>
            {c.description && (
              <div className="mt-1 text-xs text-[var(--text-muted)]">
                {c.description}
              </div>
            )}
          </a>
        ))}
      </div>
    </main>
  );
}
