// data/contact.ts

export type ContactItem = {
  label: string;
  value: string;
  href: string;
  description?: string;
};

export const contact: ContactItem[] = [
  {
    label: "Cell Number",
    value: "+27 82 579 2911",
    href: "tel:+27825792911",
  },
  {
    label: "Personal Email",
    value: "talhah1911@gmail.com",
    href: "mailto:talhah1911@gmail.com",
  },
  {
    label: "Work Email",
    value: "talhahpatelia@gmail.com",
    href: "mailto:talhahpatelia@gmail.com",
  },
  {
    label: "Student Email",
    value: "2658126@students.wits.ac.za",
    href: "mailto:2658126@students.wits.ac.za",
    description: "University of the Witwatersrand",
  },
  {
    label: "Business Email",
    value: "admin@talhahpatelia.com",
    href: "mailto:admin@talhahpatelia.com",
    description: "Talhah Patelia Engineering Solutions (PTY) LTD",
  },
];
