import Link from "next/link";
import { buildSidebarNav, DocFolder } from "@/lib/docs";

function FolderNav({ folder, depth = 0 }: { folder: DocFolder; depth?: number }) {
  return (
    <div className={depth > 0 ? "ml-3 border-l border-stone-200 pl-3" : ""}>
      <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mt-4 mb-1">
        {folder.label}
      </p>
      {folder.files.map((file) => (
        <Link
          key={file.slug.join("/")}
          href={`/library/${file.slug.join("/")}`}
          className="block text-sm text-stone-600 hover:text-stone-900 py-0.5 transition-colors truncate"
        >
          {file.title}
        </Link>
      ))}
      {folder.subFolders.map((sub) => (
        <FolderNav key={sub.name} folder={sub} depth={depth + 1} />
      ))}
    </div>
  );
}

export default async function Sidebar() {
  const folders = buildSidebarNav();

  return (
    <aside className="fixed left-0 top-14 bottom-0 w-64 bg-stone-50 border-r border-stone-200 overflow-y-auto px-4 py-4">
      <nav>
        <div className="mb-4">
          <Link href="/" className="block text-sm text-stone-500 hover:text-stone-900 py-0.5 transition-colors">Home</Link>
          <Link href="/timeline" className="block text-sm text-stone-500 hover:text-stone-900 py-0.5 transition-colors">Timeline</Link>
          <Link href="/library" className="block text-sm text-stone-500 hover:text-stone-900 py-0.5 transition-colors">Library</Link>
          <Link href="/method" className="block text-sm text-stone-500 hover:text-stone-900 py-0.5 transition-colors">Method</Link>
          <Link href="/ask" className="block text-sm text-stone-500 hover:text-stone-900 py-0.5 transition-colors">Ask</Link>
        </div>
        <hr className="border-stone-200 mb-4" />
        <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">Library</p>
        {folders.map((folder) => (
          <FolderNav key={folder.name} folder={folder} />
        ))}
      </nav>
    </aside>
  );
}
