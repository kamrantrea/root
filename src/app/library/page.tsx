import Link from "next/link";
import { getAllDocs, DocFolder } from "@/lib/docs";

export const metadata = {
  title: "Library | Root Atlas",
};

function collectFiles(folder: DocFolder): Array<{ slug: string[]; title: string; description?: string }> {
  const files: Array<{ slug: string[]; title: string; description?: string }> = folder.files.map((f) => ({
    slug: f.slug,
    title: f.title,
    description: f.description,
  }));
  for (const sub of folder.subFolders) {
    files.push(...collectFiles(sub));
  }
  return files;
}

function FolderSection({ folder }: { folder: DocFolder }) {
  const allFiles = collectFiles(folder);

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-stone-900 mb-3 pb-2 border-b border-stone-200">
        {folder.label}
      </h2>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {allFiles.map((file) => (
          <Link
            key={file.slug.join("/")}
            href={`/library/${file.slug.join("/")}`}
            className="group block p-4 bg-white border border-stone-200 rounded-lg hover:border-stone-400 transition-colors"
          >
            <h3 className="font-medium text-stone-900 group-hover:text-stone-700 text-sm">
              {file.title}
            </h3>
            {file.description && (
              <p className="text-xs text-stone-500 mt-1 leading-relaxed line-clamp-2">
                {file.description}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function LibraryPage() {
  const folders = getAllDocs();

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold text-stone-900 mb-2 tracking-tight">Library</h1>
      <p className="text-stone-500 mb-8">Primary texts organized by tradition and collection.</p>
      {folders.map((folder) => (
        <FolderSection key={folder.name} folder={folder} />
      ))}
    </div>
  );
}
