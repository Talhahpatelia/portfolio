// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: {
    default: "Talhah Patelia",
    template: "%s | Talhah Patelia",
  },
  description: "Portfolio: awards, projects, and contact.",
  openGraph: {
    title: "Talhah Patelia",
    description: "Awards, projects, and contact.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-zinc-950 text-zinc-100">
        <SiteHeader />
        <div className="mx-auto w-full max-w-6xl px-6 py-10">{children}</div>
      </body>
    </html>
  );
}
