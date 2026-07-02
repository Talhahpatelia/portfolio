import fs from "fs";
import path from "path";

const CONTENT_ROOT = path.join(process.cwd(), "content");

export type ContentType = "awards" | "projects" | "blog";

export function getMarkdown(type: ContentType, slug: string): string | null {
  const filePath = path.join(CONTENT_ROOT, type, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf8");
}

export function getMarkdownPath(type: ContentType, slug: string): string {
  return path.join(CONTENT_ROOT, type, `${slug}.md`);
}

export function stripMarkdownTitle(md: string): string {
  return md.replace(/^#\s+.+(?:\r?\n)+/, "").trimStart();
}
