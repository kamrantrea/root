import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-white border-b border-stone-200 flex items-center px-6">
      <Link href="/" className="text-stone-900 font-semibold text-lg tracking-tight hover:text-stone-600 transition-colors">
        Root Atlas
      </Link>
      <nav className="ml-auto flex items-center gap-6 text-sm text-stone-600">
        <Link href="/timeline" className="hover:text-stone-900 transition-colors">Timeline</Link>
        <Link href="/library" className="hover:text-stone-900 transition-colors">Library</Link>
        <Link href="/method" className="hover:text-stone-900 transition-colors">Method</Link>
        <Link href="/ask" className="hover:text-stone-900 transition-colors">Ask</Link>
      </nav>
    </header>
  );
}
