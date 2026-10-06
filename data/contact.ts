import { siteConfig } from "@/data/profile";

export type ContactItem = {
  label: string;
  value: string;
  href: string;
};

export const contact: ContactItem[] = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "LinkedIn", value: "talhah-patelia", href: siteConfig.linkedin },
  { label: "GitHub", value: "Talhahpatelia", href: siteConfig.github },
];
