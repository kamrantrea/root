# Root Atlas

A multi-user learning platform for studying human history, primary texts, and traditions using an **exegesis-first** method.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/timeline` | Chronological event timeline (from `/data/timeline.json`) |
| `/library` | Text library index (auto-generated from `/docs`) |
| `/library/[...slug]` | Individual MDX document renderer |
| `/method` | Exegesis methodology — Certain / Likely / Debated |
| `/ask` | Chat interface (UI only, Phase 1) |

## Content

- **`/docs`** — MDX source files organized by tradition:
  - `tanakh/` — Torah (Genesis, Exodus), Prophets (Isaiah)
  - `new-testament/` — Gospels (Matthew), Epistles (Romans)
  - `second-temple/` — Dead Sea Scrolls
  - `ancient-near-east/` — Enuma Elish
- **`/data/timeline.json`** — Timeline events with `id`, `title`, `date`, `category`, `description`, `relatedDocs`

## Stack

- [Next.js](https://nextjs.org) 16 — App Router
- TypeScript
- Tailwind CSS v4
- MDX via `next-mdx-remote/rsc`
