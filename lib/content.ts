import fs from "fs";
import path from "path";

const CONTENT_ROOT = path.join(process.cwd(), "content");

export type ContentType = "awards" | "projects" | "blog";

function filePathFor(type: ContentType, slug: string) {
  return path.join(CONTENT_ROOT, type, `${slug}.md`);
}

export function getMarkdown(type: ContentType, slug: string): string | null {
  const filePath = filePathFor(type, slug);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf8");
}

/**
 * An entry only gets its own page when it has a written note.
 * Everything else lives in the archive list, so there are no empty pages
 * for visitors or search engines to land on.
 */
export function hasPage(type: ContentType, slug: string) {
  return fs.existsSync(filePathFor(type, slug));
}

export function stripMarkdownTitle(md: string): string {
  return md.replace(/^#\s+.+(?:\r?\n)+/, "").trimStart();
}
