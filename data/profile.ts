import type { LinkItem } from "@/lib/types";

export const siteConfig = {
  name: "Talhah Patelia",
  initials: "TP",
  url: "https://talhahpatelia.com",
  title: "Talhah Patelia - Engineering Portfolio",
  description:
    "Proof-led engineering portfolio for Talhah Patelia: 4th-year Electrical and Information Engineering at Wits, education technology, transport systems, HPC, robotics, embedded systems, awards, and current ventures.",
  location: "Johannesburg, South Africa",
  role: "4th-year Electrical and Information Engineering student, software developer, engineer, and student entrepreneur",
  email: "admin@talhahpatelia.com",
  keywords: [
    "Talhah Patelia",
    "GotchaEducation",
    "NavigoTransport",
    "Wits HPC",
    "University of the Witwatersrand",
    "Electrical and Information Engineering",
    "4th-year Electrical and Information Engineering student",
    "student entrepreneur",
    "education technology",
    "transport technology",
    "embedded systems",
    "robotics",
    "high performance computing",
  ],
  sameAs: [
    "https://www.linkedin.com/in/talhah-patelia-77250a196/",
    "https://www.gotchaeducation.com/",
    "https://www.navigotransport.com/",
    "https://asc.witshpc.com/",
  ],
  proofPacket: {
    label: "Portfolio proof packet",
    href: "/portfolio_doc.pdf",
  },
};

export type CurrentWorkItem = {
  name: string;
  href: string;
  label: string;
  description: string;
  status: string;
  metrics: string[];
  links: LinkItem[];
};

export const currentWork: CurrentWorkItem[] = [
  {
    name: "GotchaEducation",
    href: "https://www.gotchaeducation.com/",
    label: "Offline-first education software",
    description:
      "Education software and consulting for schools, tutoring companies, Hifz classes, professional bodies, and learning communities that need reliable online and offline workflows.",
    status: "Live products + consulting",
    metrics: ["100+ students", "2+ countries", "1,000s of records"],
    links: [
      {
        label: "GotchaEducation",
        href: "https://www.gotchaeducation.com/",
        kind: "Live",
      },
      {
        label: "Hifz App",
        href: "https://hifz.gotchaeducation.com/",
        kind: "Live",
      },
      {
        label: "GotchaExam",
        href: "https://www.gotchaexam.com/",
        kind: "Live",
      },
    ],
  },
  {
    name: "NavigoTransport",
    href: "https://www.navigotransport.com/",
    label: "Offline-first campus transit",
    description:
      "A Wits campus shuttle companion that plans journeys on-device, keeps timetables available offline, and ships student-focused safety, reminders, and lost-and-found flows.",
    status: "Private beta",
    metrics: ["Android listing", "iOS TestFlight", "Offline routing"],
    links: [
      {
        label: "NavigoTransport",
        href: "https://www.navigotransport.com/",
        kind: "Live",
      },
      {
        label: "Google Play listing",
        href: "https://play.google.com/store/apps/details?id=com.navigotransport.app&pcampaignid=web_share",
        kind: "Store",
      },
      {
        label: "iOS TestFlight beta",
        href: "https://testflight.apple.com/join/vK7WpcnY",
        kind: "Beta",
      },
    ],
  },
];
