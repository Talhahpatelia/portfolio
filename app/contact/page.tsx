import type { Metadata } from "next";
import { contact } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact details for Talhah Patelia.",
};

export default function ContactPage() {
  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>

      <div className="grid gap-4 sm:grid-cols-2">
        {contact.map((c) => (
          <a
            key={c.label}
            href={c.href}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 transition hover:border-zinc-600"
          >
            <div className="text-sm text-zinc-400">{c.label}</div>
            <div className="mt-1 text-base font-semibold">{c.value}</div>
            {c.description && (
              <div className="mt-1 text-xs text-zinc-500">
                {c.description}
              </div>
            )}
          </a>
        ))}
      </div>
    </main>
  );
}
