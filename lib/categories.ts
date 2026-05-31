import type { BaseItem, Tag } from "@/lib/types";

const CATEGORY_ORDER = [
  "Healthcare",
  "Education",
  "Software",
  "AI/ML",
  "Robotics",
  "Engineering",
  "HPC",
  "Entrepreneurship",
  "Sustainability",
  "Infrastructure",
  "Transport",
  "Community",
  "Academic",
  "Arts",
];

const TAG_TO_CATEGORY: Record<string, string> = {
  "3d printing": "Engineering",
  academic: "Academic",
  agriculture: "Sustainability",
  ai: "AI/ML",
  "ai/ml": "AI/ML",
  arts: "Arts",
  cad: "Engineering",
  community: "Community",
  consulting: "Entrepreneurship",
  debating: "Arts",
  design: "Engineering",
  edtech: "Education",
  education: "Education",
  electronics: "Engineering",
  embedded: "Engineering",
  engineering: "Engineering",
  entrepreneurship: "Entrepreneurship",
  fintech: "Software",
  funding: "Entrepreneurship",
  hackathon: "Entrepreneurship",
  hardware: "Engineering",
  healthcare: "Healthcare",
  hpc: "HPC",
  impact: "Community",
  infrastructure: "Infrastructure",
  internship: "Software",
  international: "Academic",
  leadership: "Community",
  machine_learning: "AI/ML",
  "machine learning": "AI/ML",
  medical: "Healthcare",
  ml: "AI/ML",
  mobile: "Software",
  recognition: "Academic",
  research: "Academic",
  robotics: "Robotics",
  science: "Academic",
  "signal processing": "Engineering",
  software: "Software",
  startup: "Entrepreneurship",
  sustainability: "Sustainability",
  systems: "Engineering",
  transport: "Transport",
};

function sortCategories(categories: Iterable<string>) {
  const set = new Set(categories);
  return [
    ...CATEGORY_ORDER.filter((category) => set.has(category)),
    ...Array.from(set)
      .filter((category) => !CATEGORY_ORDER.includes(category))
      .sort((a, b) => a.localeCompare(b)),
  ];
}

export function categoriesForTags(tags: Tag[]) {
  const categories = tags
    .map((tag) => TAG_TO_CATEGORY[String(tag).toLowerCase()])
    .filter(Boolean);

  return sortCategories(categories);
}

export function primaryCategory(tags: Tag[]) {
  return categoriesForTags(tags)[0];
}

export function allCategories(items: Pick<BaseItem, "tags">[]) {
  return sortCategories(items.flatMap((item) => categoriesForTags(item.tags)));
}
