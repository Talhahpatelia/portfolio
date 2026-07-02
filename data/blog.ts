import type { BaseItem } from "@/lib/types";

export type BlogPost = BaseItem & {
  readingTime: string;
  updated?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "offline-first-systems-for-real-conditions",
    title: "Offline-first systems for real conditions",
    short:
      "A note on why my education and transport work keeps returning to offline capability, local context, and evidence.",
    description:
      "A practical engineering note connecting GotchaEducation, NavigoTransport, exam integrity, campus transit, and resilient software design.",
    tags: ["EdTech", "Transport", "Software", "Impact"],
    date: "2026-07-02",
    readingTime: "4 min read",
    links: [
      {
        label: "GotchaEducation",
        href: "https://www.gotchaeducation.com/",
        kind: "Live",
      },
      {
        label: "NavigoTransport",
        href: "https://www.navigotransport.com/",
        kind: "Live",
      },
    ],
    featured: true,
  },
];
