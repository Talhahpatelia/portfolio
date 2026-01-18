import fs from "fs";
import path from "path";

const CONTENT_ROOT = path.join(process.cwd(), "content");

export function getMarkdown(type: "awards" | "projects", slug: string): string | null {
  const filePath = path.join(CONTENT_ROOT, type, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf8");
}

export function getMarkdownPath(type: "awards" | "projects", slug: string): string {
  return path.join(CONTENT_ROOT, type, `${slug}.md`);
}
