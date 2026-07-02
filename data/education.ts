import type { LinkItem } from "@/lib/types";

export type EducationItem = {
  institution: string;
  credential: string;
  period: string;
  status: string;
  description: string;
  links?: LinkItem[];
};

export const education: EducationItem[] = [
  {
    institution: "University of the Witwatersrand",
    credential: "4th-year Electrical and Information Engineering, Faculty of Engineering and the Built Environment",
    period: "Current",
    status: "4th-year Electrical and Information Engineering student",
    description:
      "Electrical and Information Engineering study connected to systems work, embedded design, high-performance computing, product development, and current ventures in education and transport.",
    links: [
      {
        label: "Dean's Award - Wits",
        href: "/awards/deans-award-hpc-2025",
        kind: "Proof",
      },
      {
        label: "Wits HPC ASC25 site",
        href: "https://asc.witshpc.com/",
        kind: "Proof",
      },
    ],
  },
  {
    institution: "Reddam House Bedfordview",
    credential: "National Senior Certificate / secondary education",
    period: "Completed 2022",
    status: "School leadership and STEM track record",
    description:
      "Secondary education period connected to leadership roles, community work, robotics, science fair representation, and early software competitions.",
  },
  {
    institution: "Auckland Park Academy of Excellence",
    credential: "Early secondary education",
    period: "2018 - 2019",
    status: "Early robotics, debating, and academic awards",
    description:
      "Early foundation for robotics, engineering competitions, debate, mathematics, class leadership, and public recognition before later Wits and venture work.",
  },
];
