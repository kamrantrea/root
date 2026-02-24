import fs from "fs";
import path from "path";
import Timeline from "@/components/Timeline";

export const metadata = {
  title: "Timeline | Root Atlas",
};

interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  relatedDocs: string[];
}

function getTimelineEvents(): TimelineEvent[] {
  const filePath = path.join(process.cwd(), "data", "timeline.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as TimelineEvent[];
}

export default function TimelinePage() {
  const events = getTimelineEvents();

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold text-stone-900 mb-2 tracking-tight">Timeline</h1>
      <p className="text-stone-500 mb-8">Key events across ancient history and textual traditions.</p>
      <Timeline events={events} />
    </div>
  );
}
