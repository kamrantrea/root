import { notFound } from "next/navigation";
import { getDocBySlug, getAllDocs, DocFolder } from "@/lib/docs";
import { compileMDX } from "next-mdx-remote/rsc";

function getAllSlugs(folder: DocFolder): string[][] {
  const slugs: string[][] = folder.files.map((f) => f.slug);
  for (const sub of folder.subFolders) {
    slugs.push(...getAllSlugs(sub));
  }
  return slugs;
}

export async function generateStaticParams() {
  const folders = getAllDocs();
  const slugs: string[][] = [];
  for (const folder of folders) {
    slugs.push(...getAllSlugs(folder));
  }
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  return {
    title: doc ? `${doc.title} | Root Atlas` : "Library | Root Atlas",
  };
}

export default async function DocPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const { content } = await compileMDX({
    source: doc.content,
    options: { parseFrontmatter: true },
  });

  return (
    <article className="max-w-2xl prose prose-stone prose-sm sm:prose-base lg:prose-lg">
      {content}
    </article>
  );
}
