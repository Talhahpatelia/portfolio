import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="pb-8 pt-16 md:pt-24">
      <h1 className="text-[clamp(2.25rem,5.5vw,3.5rem)]">Page not found</h1>
      <p className="lead mt-5">There is nothing at this address. It may have moved.</p>
      <ul className="mt-8 space-y-2">
        <li>
          <Link className="link" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" href="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="link" href="/awards">
            Awards
          </Link>
        </li>
      </ul>
    </div>
  );
}
