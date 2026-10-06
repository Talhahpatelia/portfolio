import Section from "@/components/Section";
import SpecList from "@/components/SpecList";
import { contact } from "@/data/contact";
import { currentWork } from "@/data/profile";
import CopyEmail from "@/components/CopyEmail";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: "How to reach Talhah Patelia: email, LinkedIn and GitHub. Based in Johannesburg, South Africa.",
  path: "/contact",
});

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Talhah Patelia",
    url: "https://www.talhahpatelia.com/contact",
  },
  breadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ]),
];

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="pb-10 pt-10 md:pt-16">
        <h1 className="text-[clamp(2.25rem,5.5vw,3.5rem)]">Contact</h1>
        <p className="lead mt-5">Email is the best way to reach me. I&rsquo;m in Johannesburg, South Africa.</p>
      </header>

      <Section label="Reach me">
        <SpecList
          className="border-b border-rule"
          items={contact.map((item) => ({
            label: item.label,
            value:
              item.label === "Email" ? (
                <CopyEmail email={item.value} />
              ) : (
                <a
                  className="link"
                  href={item.href}
                  {...(item.href.startsWith("http") ? { target: "_blank", rel: "me noopener" } : {})}
                >
                  {item.value}
                </a>
              ),
          }))}
        />
      </Section>

      <Section label="Companies">
        <ul className="border-b border-rule">
          {currentWork.map((work) => (
            <li key={work.slug} className="border-t border-rule py-4 first:border-t-0 first:pt-0">
              <a className="link text-lg" href={work.links[0].href} target="_blank" rel="noopener noreferrer">
                {work.name}
              </a>
              <p className="prose-col mt-1">{work.summary}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
