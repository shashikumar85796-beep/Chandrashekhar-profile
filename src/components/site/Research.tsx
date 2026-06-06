import { useMemo, useState } from "react";
import { Search, Star, ExternalLink, Sparkles } from "lucide-react";
import { publications, type Publication } from "@/data/professor";
import { cn } from "@/lib/utils";

const tabs = ["All", "Journals", "Conferences"] as const;

function Card({ p }: { p: Publication }) {
  return (
    <article className="card-soft bg-card border border-border p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            {p.featured && (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold">
                <Star size={12} fill="currentColor" /> Featured
              </span>
            )}
            {p.isNew && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gold text-primary">
                <Sparkles size={10} /> New
              </span>
            )}
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              {p.type} · {p.date ?? p.year}
            </span>
            {p.volume && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                {p.volume}
              </span>
            )}
          </div>
          <h3 className="font-display text-lg md:text-xl leading-snug mb-2">{p.title}</h3>
          <p className="text-sm italic text-foreground/70 mt-1">{p.venue}</p>
          {p.isbn && <p className="text-xs text-muted-foreground mt-1">{p.isbn}</p>}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      {p.url && (
        <div className="mt-4 flex items-center gap-4 text-sm">
          <a
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-gold hover:underline font-semibold"
          >
            Read Publication <ExternalLink size={12} />
          </a>
        </div>
      )}
    </article>
  );
}

export function Research() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const [q, setQ] = useState("");
  const [count, setCount] = useState(5);

  const filtered = useMemo(() => {
    return publications.filter((p) => {
      const t = tab === "All" ? true : p.type + "s" === tab;
      const matches =
        !q ||
        p.title.toLowerCase().includes(q.toLowerCase()) ||
        p.venue.toLowerCase().includes(q.toLowerCase()) ||
        p.tags.join(" ").toLowerCase().includes(q.toLowerCase());
      return t && matches;
    });
  }, [tab, q]);

  return (
    <section id="research" className="py-12 md:py-16 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-10 reveal">
          <p className="text-gold uppercase tracking-[0.25em] text-xs mb-3">Research</p>
          <h2 className="section-heading font-display text-4xl md:text-5xl font-semibold">
            Publications & selected work
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-8 reveal">
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTab(t);
                  setCount(5);
                }}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium border transition",
                  tab === t
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border hover:border-gold",
                )}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="relative max-w-sm w-full">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search publications…"
              className="w-full pl-9 pr-4 py-2.5 rounded-full bg-card border border-border text-sm outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
            />
          </div>
        </div>

        <div className="grid gap-5 reveal">
          {filtered.slice(0, count).map((p) => (
            <Card key={p.id} p={p} />
          ))}
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No publications found.</p>
          )}
        </div>

        {count < filtered.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setCount((c) => c + 5)}
              className="rounded-full border border-gold text-gold px-6 py-2.5 text-sm font-semibold hover:bg-gold hover:text-primary transition"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}