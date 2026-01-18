// data/projects.ts
import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "infusion-pump-platform",
    title: "Infusion Pump Platform (Peristaltic + Control)",
    short: "Designing a low-cost infusion pump system with quick-change tubing and variable flow control.",
    description:
      "Working on pump mechanics (linear/cam/peristaltic), motor control, safety constraints, and manufacturable design. Emphasis on affordability and maintainability.",
    tags: ["Medical", "Embedded", "CAD", "Research"],
    status: "Active",
    stack: ["ESP32", "Motor drivers", "Mechanical design"],
    links: [
      { label: "Notes", href: "https://example.com" },
    ],
  },
  {
    slug: "gotcha-exam",
    title: "Gotcha (EdTech Proctoring)",
    short: "Autonomous cheat detection online/offline.",
    tags: ["EdTech", "ML", "Startup"],
    status: "Shipped",
    links: [{ label: "Website", href: "https://gotchaexam.com/" }],
  },
];
