"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#work", label: "Work", match: null },
  { href: "/projects", label: "Projects", match: "/projects" },
  { href: "/awards", label: "Awards", match: "/awards" },
  { href: "/gallery", label: "Gallery", match: "/gallery" },
  { href: "/blog", label: "Writing", match: "/blog" },
  { href: "/contact", label: "Contact", match: "/contact" },
] as const;

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="order-last w-full sm:order-none sm:w-auto">
      <ul className="flex flex-wrap gap-x-6 gap-y-1 text-[0.9375rem]">
        {links.map((link) => {
          const current = link.match !== null && (pathname === link.match || pathname.startsWith(`${link.match}/`));
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={current ? "page" : undefined}
                className={[
                  "inline-block border-b-2 py-1 transition-colors",
                  current ? "border-signal text-ink" : "border-transparent text-ink-2 hover:border-rule hover:text-ink",
                ].join(" ")}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
