import Image from "next/image";
import Link from "next/link";
import EntryRow from "@/components/EntryRow";
import Lamp from "@/components/Lamp";
import Section from "@/components/Section";
import SpecList from "@/components/SpecList";
import YearExplorer from "@/components/YearExplorer";
import { education } from "@/data/education";
import { currentWork, siteConfig } from "@/data/profile";
import { getAwards, getPosts, getProjects } from "@/lib/catalog";
import { absoluteUrl, pageMetadata, personId, websiteId } from "@/lib/seo";

export const metadata = pageMetadata({
  title: siteConfig.title,
  absoluteTitle: true,
  description: siteConfig.description,
  path: "/",
  image: siteConfig.headshot,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#profile`,
      url: siteConfig.url,
      name: siteConfig.title,
      dateModified: siteConfig.updated,
      mainEntity: { "@id": personId },
      isPartOf: { "@id": websiteId },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.name,
      url: siteConfig.url,
      image: absoluteUrl(siteConfig.headshot.src),
      email: siteConfig.email,
      jobTitle: siteConfig.jobTitle,
      description: siteConfig.description,
      address: { "@type": "PostalAddress", addressLocality: "Johannesburg", addressCountry: "ZA" },
      sameAs: [siteConfig.linkedin, siteConfig.github],
      knowsAbout: siteConfig.knowsAbout,
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "University of the Witwatersrand",
        url: "https://www.wits.ac.za/",
      },
      alumniOf: education
        .filter((item) => item.institution !== "University of the Witwatersrand")
        .map((item) => ({ "@type": "EducationalOrganization", name: item.institution })),
      worksFor: [
        { "@type": "Organization", name: "GotchaEducation", url: "https://www.gotchaeducation.com/" },
        { "@type": "Organization", name: "NavigoTransport", url: "https://www.navigotransport.com/" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: "en-ZA",
      publisher: { "@id": personId },
    },
  ],
};

export default function HomePage() {
  const awards = getAwards();
  const projects = getProjects();
  const highlights = awards.filter((entry) => entry.featured).slice(0, 8);
  const posts = getPosts();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="grid gap-8 pb-14 pt-10 md:grid-cols-12 md:gap-x-8 md:pb-20 md:pt-16">
        <div className="md:col-span-4">
          <Image
            src={siteConfig.headshot.src}
            alt={siteConfig.headshot.alt}
            width={siteConfig.headshot.width}
            height={siteConfig.headshot.height}
            priority
            sizes="(min-width: 768px) 33vw, 288px"
            className="aspect-square w-full max-w-[18rem] bg-panel object-cover md:max-w-none"
          />
        </div>

        <div className="flex flex-col justify-between gap-10 md:col-span-8">
          <div>
            <h1 className="text-[clamp(2.5rem,6.5vw,4.5rem)]">{siteConfig.name}</h1>
            <p className="lead mt-6">
              I&rsquo;m a fourth-year electrical and information engineering student at Wits in Johannesburg. I build
              software for schools and for campus transport, and I compete with the Wits supercomputing team.
            </p>
          </div>

          <SpecList
            items={[
              {
                label: "Studying",
                value: (
                  <>
                    BSc(Eng) <b>Electrical and Information Engineering</b>, University of the Witwatersrand. Fourth year.
                  </>
                ),
              },
              {
                label: "Building",
                value: (
                  <>
                    <a className="link" href="#work">
                      GotchaEducation
                    </a>
                    , school software used by <b>182 students at 8 schools</b>.{" "}
                    <a className="link" href="#work">
                      NavigoTransport
                    </a>
                    , a live shuttle app for Wits students.
                  </>
                ),
              },
              {
                label: "Competing",
                value: (
                  <>
                    Wits HPC team. 2025 ASC finalist (<b>top 25 of 300+ teams</b>) and <b>2nd overall</b> at the 2024
                    CHPC national competition.
                  </>
                ),
              },
              {
                label: "Funded by",
                value: (
                  <>
                    The <b>Special Dean&rsquo;s Award</b> (full Master&rsquo;s tuition) and the{" "}
                    <b>Allan Gray Orbis Foundation</b> Candidate Fellowship.
                  </>
                ),
              },
            ]}
          />
        </div>
      </section>

      <Section id="work" label="Work">
        <div className="space-y-6">
          {currentWork.map((work) => (
            <article key={work.slug} className="bg-panel p-6 md:p-8">
              <div className="grid gap-8 md:grid-cols-2 md:gap-x-10">
                <div>
                  <p className="label flex flex-wrap items-center gap-x-5 gap-y-1">
                    <Lamp status={work.status} />
                    <span>{work.role}</span>
                  </p>
                  <h3 className="mt-4 text-2xl">
                    <Link href={`/projects/${work.slug}`} className="link">
                      {work.name}
                    </Link>
                  </h3>
                  <p className="mt-3">{work.summary}</p>
                </div>
                <div>
                  <SpecList
                    items={work.facts.map((fact) => ({ label: fact.label, value: fact.value }))}
                    className="[&>div]:sm:grid-cols-[6rem_minmax(0,1fr)]"
                  />
                  <ul className="flex flex-wrap gap-x-5 gap-y-1 border-t border-rule pt-3 text-sm">
                    {work.links.map((link) => (
                      <li key={link.href}>
                        <a className="link" href={link.href} target="_blank" rel="noopener noreferrer">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="results" label="Results">
        <YearExplorer highlights={highlights} all={[...awards, ...projects]} />
      </Section>

      <Section id="education" label="Education">
        <ul className="border-b border-rule">
          {education.map((item) => (
            <li
              key={item.institution}
              className="grid gap-x-8 gap-y-1 border-t border-rule py-5 md:grid-cols-[11rem_minmax(0,1fr)]"
            >
              <p className="label md:pt-[0.4rem]">{item.period}</p>
              <div>
                <h3 className="text-lg" style={{ fontStretch: "112%" }}>
                  {item.institution}
                </h3>
                <p className="mt-1">{item.credential}</p>
                <p className="label mt-1">{item.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="writing" label="Writing">
        <ul className="border-b border-rule">
          {posts.map((entry) => (
            <EntryRow key={entry.slug} entry={entry} />
          ))}
        </ul>
      </Section>
    </>
  );
}
