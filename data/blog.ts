import type { BaseItem } from "@/lib/types";

export type BlogPost = BaseItem & {
  readingTime: string;
  updated?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "offline-first-systems-for-real-conditions",
    title: "Why my apps work offline",
    summary:
      "GotchaEducation and NavigoTransport solve different problems, but both have to keep working when the connection does not.",
    tags: ["EdTech", "Transport", "Software"],
    date: "2026-07-02",
    updated: "2026-10-06",
    readingTime: "2 min read",
    links: [
      { label: "GotchaEducation", href: "https://www.gotchaeducation.com/", kind: "Live" },
      { label: "NavigoTransport", href: "https://www.navigotransport.com/", kind: "Live" },
    ],
    featured: true,
  },
];
