import { siteConfig } from "@/data/profile";

export const defaultOgImage = {
  url: `${siteConfig.url}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} engineering portfolio`,
};

export function absoluteUrl(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function imageForMetadata(image?: { src: string; alt: string }) {
  if (!image) return defaultOgImage;

  return {
    url: absoluteUrl(image.src),
    width: 1200,
    height: 630,
    alt: image.alt,
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

export function pageId(path: string) {
  return `${absoluteUrl(path)}#webpage`;
}
