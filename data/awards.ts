// data/awards.ts
import type { AwardItem } from "@/lib/types";

export const awards: AwardItem[] = [
  {
    slug: "ieee-entrepreneurship-prospectors-2023",
    title: "1st Place – IEEE Entrepreneurship Prospectors Workshop",
    short: "Won 1st place at Wits Innovation Centre with Jesse Thornburg (2023).",
    description:
      "Built and presented a solution focused on entrepreneurship and innovation, culminating in 1st place. Collaborated with Jesse Thornburg and refined the pitch, validation, and execution plan.",
    tags: ["Startup", "EdTech"],
    date: "2023-07",
    org: "IEEE Entrepreneurship / Wits Innovation Centre",
    links: [
      {
        label: "IEEE article",
        href: "https://entrepreneurship.ieee.org/2023_07_21_ieee-entrepreneurship-hosts-successful-workshop-at-wits-university-south-africa/",
      },
    ],
  },
  // add more...
];