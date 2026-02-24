import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface DocFile {
  slug: string[];
  title: string;
  description?: string;
  filePath: string;
}

export interface DocFolder {
  name: string;
  label: string;
  files: DocFile[];
  subFolders: DocFolder[];
}

const DOCS_DIR = path.join(process.cwd(), "docs");

function toLabel(name: string): string {
  return name
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function getMdxFrontmatter(filePath: string): { title: string; description?: string } {
  try {
    const { data } = matter.read(filePath);
    return {
      title: typeof data.title === "string" ? data.title : "",
      description: typeof data.description === "string" ? data.description : undefined,
    };
  } catch {
    // ignore
  }
  return { title: "" };
}

function readFolder(dir: string, slugPrefix: string[]): DocFolder {
  const name = path.basename(dir);
  const folder: DocFolder = {
    name,
    label: toLabel(name),
    files: [],
    subFolders: [],
  };

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      folder.subFolders.push(readFolder(fullPath, [...slugPrefix, entry.name]));
    } else if (entry.isFile() && /\.mdx?$/.test(entry.name)) {
      const baseName = entry.name.replace(/\.mdx?$/, "");
      const slug = baseName === "index" ? slugPrefix : [...slugPrefix, baseName];
      const { title, description } = getMdxFrontmatter(fullPath);
      folder.files.push({
        slug,
        title: title || toLabel(baseName),
        description,
        filePath: fullPath,
      });
    }
  }

  return folder;
}

export function getAllDocs(): DocFolder[] {
  if (!fs.existsSync(DOCS_DIR)) return [];
  const entries = fs.readdirSync(DOCS_DIR, { withFileTypes: true });
  return entries
    .filter((e) => e.isDirectory())
    .map((e) => readFolder(path.join(DOCS_DIR, e.name), [e.name]));
}

export function getDocBySlug(slug: string[]): { content: string; title: string; description?: string } | null {
  const candidates = [
    path.join(DOCS_DIR, ...slug) + ".mdx",
    path.join(DOCS_DIR, ...slug) + ".md",
    path.join(DOCS_DIR, ...slug, "index.mdx"),
    path.join(DOCS_DIR, ...slug, "index.md"),
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      const content = fs.readFileSync(candidate, "utf-8");
      const { title, description } = getMdxFrontmatter(candidate);
      return { content, title, description };
    }
  }
  return null;
}

export function buildSidebarNav(): DocFolder[] {
  return getAllDocs();
}
