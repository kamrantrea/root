import Link from "next/link";

interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  relatedDocs: string[];
}

const categoryColors: Record<string, string> = {
  tanakh: "bg-amber-100 text-amber-800",
  "new-testament": "bg-blue-100 text-blue-800",
  "second-temple": "bg-purple-100 text-purple-800",
  "ancient-near-east": "bg-emerald-100 text-emerald-800",
};

export default function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-stone-200" />
      <div className="space-y-8 pl-12">
        {events.map((event) => (
          <div key={event.id} className="relative">
            <div className="absolute -left-[2.15rem] top-1.5 w-3 h-3 rounded-full bg-stone-400 border-2 border-white" />
            <div className="bg-white border border-stone-200 rounded-lg p-5 hover:border-stone-300 transition-colors">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="font-semibold text-stone-900">{event.title}</h3>
                <span className="text-xs text-stone-400 whitespace-nowrap mt-0.5">{event.date}</span>
              </div>
              <span className={`inline-block text-xs px-2 py-0.5 rounded-full mb-2 ${categoryColors[event.category] || "bg-stone-100 text-stone-600"}`}>
                {event.category.replace(/-/g, " ")}
              </span>
              <p className="text-sm text-stone-600 leading-relaxed">{event.description}</p>
              {event.relatedDocs.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {event.relatedDocs.map((docSlug) => (
                    <Link
                      key={docSlug}
                      href={`/library/${docSlug}`}
                      className="text-xs text-stone-500 hover:text-stone-900 underline underline-offset-2 transition-colors"
                    >
                      {docSlug.split("/").pop()?.replace(/-/g, " ")}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
