import type { Metadata } from "next";
import { siteConfig } from "@/data/profile";
import { toIsoDate } from "@/lib/date";
import type { ImageItem } from "@/lib/types";

/** Shared 1200x630 card, used when a page has no photo of its own. */
export const defaultOgImage = {
  url: `${siteConfig.url}/og.png`,
  width: 1200,
  height: 630,
  alt: `${siteConfig.name}, engineering student at Wits`,
};

export function absoluteUrl(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Share cards are landscape, so only landscape photos are used as one.
 * Square and portrait images fall back to the designed card.
 */
export function imageForMetadata(image?: ImageItem) {
  if (!image || image.width / image.height < 1.3) return defaultOgImage;
  return { url: absoluteUrl(image.src), width: image.width, height: image.height, alt: image.alt };
}

/** Metadata shared by every page: canonical URL, Open Graph and Twitter card. */
export function pageMetadata({
  title,
  absoluteTitle = false,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
}: {
  title: string;
  /** Use the title as written, without the " | Talhah Patelia" suffix. */
  absoluteTitle?: boolean;
  description: string;
  path: string;
  image?: ImageItem;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = imageForMetadata(image);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    // Setting `alternates` on a page replaces the layout's, so the feed link is repeated.
    alternates: { canonical: url, types: { "application/rss+xml": `${siteConfig.url}/rss.xml` } },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: "en_ZA",
      images: [ogImage],
      ...(type === "article"
        ? { publishedTime: toIsoDate(publishedTime), modifiedTime: toIsoDate(modifiedTime ?? publishedTime) }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

/** Every photo on a page as schema.org ImageObjects, so images are tied to the page that explains them. */
export function imageObjects(images: (ImageItem | undefined)[]) {
  const list = images.filter((image): image is ImageItem => Boolean(image));
  if (list.length === 0) return [defaultOgImage.url];
  return list.map((image) => ({
    "@type": "ImageObject",
    url: absoluteUrl(image.src),
    width: image.width,
    height: image.height,
    caption: image.caption ?? image.alt,
    description: image.alt,
  }));
}

export const personId = `${siteConfig.url}/#person`;
export const websiteId = `${siteConfig.url}/#website`;
