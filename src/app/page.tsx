import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-2xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-stone-900 mb-4 tracking-tight">
          Root Atlas
        </h1>
        <p className="text-xl text-stone-600 leading-relaxed">
          A research platform for studying human history, primary texts, and traditions
          using an exegesis-first method.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Link
          href="/timeline"
          className="group block p-6 bg-white border border-stone-200 rounded-lg hover:border-stone-400 transition-colors"
        >
          <h2 className="font-semibold text-stone-900 mb-1 group-hover:text-stone-700">
            Timeline →
          </h2>
          <p className="text-sm text-stone-500">
            Chronological view of key events across traditions
          </p>
        </Link>

        <Link
          href="/library"
          className="group block p-6 bg-white border border-stone-200 rounded-lg hover:border-stone-400 transition-colors"
        >
          <h2 className="font-semibold text-stone-900 mb-1 group-hover:text-stone-700">
            Library →
          </h2>
          <p className="text-sm text-stone-500">
            Primary texts with exegetical notes
          </p>
        </Link>

        <Link
          href="/method"
          className="group block p-6 bg-white border border-stone-200 rounded-lg hover:border-stone-400 transition-colors"
        >
          <h2 className="font-semibold text-stone-900 mb-1 group-hover:text-stone-700">
            Method →
          </h2>
          <p className="text-sm text-stone-500">
            The exegesis methodology explained
          </p>
        </Link>

        <Link
          href="/ask"
          className="group block p-6 bg-white border border-stone-200 rounded-lg hover:border-stone-400 transition-colors"
        >
          <h2 className="font-semibold text-stone-900 mb-1 group-hover:text-stone-700">
            Ask →
          </h2>
          <p className="text-sm text-stone-500">
            Ask questions about the texts and traditions
          </p>
        </Link>
      </div>

      <div className="mt-12 p-6 bg-stone-100 rounded-lg border border-stone-200">
        <h2 className="font-semibold text-stone-800 mb-2">About this platform</h2>
        <p className="text-sm text-stone-600 leading-relaxed">
          Root Atlas applies a rigorous exegesis-first methodology to primary texts,
          distinguishing between what texts say (exegesis) and what interpreters bring
          to them (eisegesis). Each document notes confidence levels: <strong>Certain</strong>,{" "}
          <strong>Likely</strong>, or <strong>Debated</strong>.
        </p>
      </div>
    </div>
  );
}
