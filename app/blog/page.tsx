import EntryRow from "@/components/EntryRow";
import { siteConfig } from "@/data/profile";
import { getPosts } from "@/lib/catalog";
import { absoluteUrl, breadcrumbJsonLd, pageMetadata, personId } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Writing on offline-first apps",
  description: "Notes by Talhah Patelia on building school software and a campus transport app that work offline.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getPosts();
  const blog = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": absoluteUrl("/blog#blog"),
    url: absoluteUrl("/blog"),
    name: `${siteConfig.name}: writing`,
    inLanguage: "en-ZA",
    author: { "@id": personId },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: absoluteUrl(post.href),
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            blog,
            breadcrumbJsonLd([
              { name: "Home", href: "/" },
              { name: "Writing", href: "/blog" },
            ]),
          ]),
        }} />
      <header className="pb-10 pt-10 md:pt-16">
        <h1 className="text-[clamp(2.25rem,5.5vw,3.5rem)]">Writing</h1>
        <p className="lead mt-5">
          Notes on what I&rsquo;m building. There is also an{" "}
          <a className="link" href="/rss.xml">
            RSS feed
          </a>
          .
        </p>
      </header>
      <section className="border-t border-rule pt-8">
        <h2 className="sr-only">All posts</h2>
        <ul className="border-b border-rule">
          {posts.map((post) => (
            <EntryRow key={post.slug} entry={post} />
          ))}
        </ul>
      </section>
    </>
  );
}
