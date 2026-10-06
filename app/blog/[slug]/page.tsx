import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import CopyLinkButton from "@/components/CopyLinkButton";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/data/profile";
import { getMarkdown, stripMarkdownTitle } from "@/lib/content";
import { formatDate, toIsoDate } from "@/lib/date";
import { absoluteUrl, breadcrumbJsonLd, pageMetadata, personId } from "@/lib/seo";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.summary,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.updated,
  });
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  const md = getMarkdown("blog", params.slug);
  if (!post || !md) return notFound();

  const path = `/blog/${post.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${absoluteUrl(path)}#post`,
      headline: post.title,
      description: post.summary,
      url: absoluteUrl(path),
      mainEntityOfPage: absoluteUrl(path),
      image: absoluteUrl("/og.png"),
      datePublished: toIsoDate(post.date),
      dateModified: toIsoDate(post.updated ?? post.date),
      inLanguage: "en-ZA",
      author: { "@type": "Person", "@id": personId, name: siteConfig.name, url: siteConfig.url },
      publisher: { "@id": personId },
      isPartOf: { "@type": "Blog", "@id": absoluteUrl("/blog#blog") },
    },
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Writing", href: "/blog" },
      { name: post.title, href: path },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="pb-8 pt-10 md:pt-14">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Writing", href: "/blog" }, { name: post.title }]} />
        <h1 className="mt-8 max-w-4xl text-[clamp(2rem,5vw,3.25rem)]">{post.title}</h1>
        <p className="label mt-5 flex flex-wrap gap-x-5">
          <span>{formatDate(post.date)}</span>
          <span>{post.readingTime}</span>
        </p>

        <div className="mt-10 border-t border-rule pt-10">
          <MarkdownRenderer md={stripMarkdownTitle(md)} />
          <p className="mt-10">
            <CopyLinkButton url={absoluteUrl(path)} />
          </p>
        </div>
      </article>
    </>
  );
}
