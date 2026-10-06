import type { LinkItem, ProjectStatus } from "@/lib/types";

export const siteConfig = {
  name: "Talhah Patelia",
  // The apex domain redirects to www, so www is the canonical host.
  url: "https://www.talhahpatelia.com",
  title: "Talhah Patelia | Engineering student at Wits",
  description:
    "Electrical and information engineering student at Wits. I build school software and a campus shuttle app, and compete with the Wits supercomputing team.",
  location: "Johannesburg, South Africa",
  /** Bump this when the content changes. It feeds the footer, the sitemap and the profile's dateModified. */
  updated: "2026-10-06",
  jobTitle: "Electrical and information engineering student",
  email: "admin@talhahpatelia.com",
  linkedin: "https://www.linkedin.com/in/talhah-patelia-77250a196/",
  github: "https://github.com/Talhahpatelia",
  knowsAbout: [
    "Education technology",
    "Offline-first mobile apps",
    "High performance computing",
    "Embedded systems",
    "Robotics",
  ],
  headshot: {
    src: "/images/talhah-patelia.jpg",
    alt: "Talhah Patelia in a navy suit and tie, outdoors",
    width: 960,
    height: 960,
  },
};

export type CurrentWorkItem = {
  slug: string;
  name: string;
  status: ProjectStatus;
  role: string;
  summary: string;
  facts: { label: string; value: string }[];
  links: LinkItem[];
};

export const currentWork: CurrentWorkItem[] = [
  {
    slug: "gotchaeducation-platform",
    name: "GotchaEducation",
    status: "Live",
    role: "Founder",
    summary:
      "Software for schools: a class and progress app for Hifz classes, an exam platform that works offline, and a community service tracker.",
    facts: [
      { label: "Use", value: "8 schools, 22 teachers, 182 students (to 17 July 2026)" },
      { label: "Team", value: "Five people" },
    ],
    links: [
      { label: "gotchaeducation.com", href: "https://www.gotchaeducation.com/", kind: "Live" },
      { label: "Hifz App", href: "https://hifz.gotchaeducation.com/", kind: "Live" },
      { label: "GotchaExam", href: "https://www.gotchaexam.com/", kind: "Live" },
    ],
  },
  {
    slug: "navigotransport-campus-transit",
    name: "NavigoTransport",
    status: "Live",
    role: "Co-founder and director",
    summary:
      "A shuttle app for Wits students. It plans trips on the phone itself, so routes and timetables work without signal.",
    facts: [
      { label: "Use", value: "Just under 1,000 student users" },
      { label: "Available on", value: "Google Play and iOS TestFlight" },
    ],
    links: [
      { label: "navigotransport.com", href: "https://www.navigotransport.com/", kind: "Live" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.navigotransport.app&pcampaignid=web_share",
        kind: "Store",
      },
      { label: "iOS TestFlight", href: "https://testflight.apple.com/join/vK7WpcnY", kind: "Beta" },
    ],
  },
];
