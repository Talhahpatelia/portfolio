import Link from "next/link";
import CopyEmail from "@/components/CopyEmail";
import { contact } from "@/data/contact";
import { siteConfig } from "@/data/profile";
import { formatDate } from "@/lib/date";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule">
      <div className="mx-auto max-w-page px-5 py-12 sm:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-6">
            <p className="label">Email</p>
            <div className="mt-2" style={{ fontStretch: "116%" }}>
              <CopyEmail email={siteConfig.email} className="text-[clamp(1.25rem,3.4vw,2rem)] leading-tight" />
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="label">Elsewhere</p>
            <ul className="mt-2 space-y-1">
              {contact
                .filter((item) => item.label !== "Email")
                .map((item) => (
                  <li key={item.label}>
                    <a className="link" href={item.href} rel="me noopener" target="_blank">
                      {item.label}
                    </a>
                  </li>
                ))}
              <li>
                <a className="link" href="/rss.xml">
                  RSS feed
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="label">Pages</p>
            <ul className="mt-2 space-y-1">
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
              <li>
                <Link className="link" href="/gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="link" href="/blog">
                  Writing
                </Link>
              </li>
              <li>
                <Link className="link" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="label mt-12 flex flex-wrap gap-x-5 gap-y-1">
          <span>
            {siteConfig.name}, {siteConfig.location}
          </span>
          <span>
            Last updated <time dateTime={siteConfig.updated}>{formatDate(siteConfig.updated)}</time>
          </span>
        </p>
      </div>
    </footer>
  );
}
