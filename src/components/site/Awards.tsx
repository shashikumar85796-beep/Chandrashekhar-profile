import { Trophy, Tv, Play } from "lucide-react";
import { awards } from "@/data/professor";

export function Awards() {
  return (
    <section id="awards" className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-8 reveal text-center">
          <p className="text-gold uppercase tracking-[0.25em] text-xs mb-3">Recognition</p>
          <h2 className="section-heading center font-display text-4xl md:text-5xl font-semibold mx-auto inline-block">
            Awards & honors
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          <ul className="space-y-10">
            {awards.map((a, i) => {
              const right = i % 2 === 1;
              const isMedia = a.kind === "media";
              return (
                <li
                  key={a.name}
                  className={`reveal relative md:grid md:grid-cols-2 md:gap-10 ${right ? "" : ""}`}
                >
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-gold text-primary grid place-items-center shadow-lg ring-4 ring-background z-10">
                    {isMedia ? <Tv size={16} /> : <Trophy size={16} />}
                  </div>
                  <div className={right ? "md:col-start-2" : "md:col-start-1 md:text-right"}>
                    <div className={`ml-14 md:ml-0 ${right ? "md:ml-10" : "md:mr-10"} card-soft bg-card border border-border p-5 w-auto`}>
                      <div className={`flex items-start flex-wrap gap-3 mb-1 ${right ? "" : "md:justify-end"}`}>
                        <span className="shrink-0 text-xs font-bold px-2 py-0.5 rounded-full bg-gold text-primary">
                          {a.year}
                        </span>
                        <h3 className="font-display text-lg leading-snug break-words min-w-0 flex-1">{a.name}</h3>
                      </div>
                      <p className="text-sm text-gold font-medium">{a.org}</p>
                      <p className="text-sm text-foreground/70 mt-2 leading-relaxed">{a.desc}</p>
                      {a.watchUrl && (
                        <a
                          href={a.watchUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={`mt-4 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs font-semibold hover:scale-[1.03] transition-transform ${right ? "" : "md:float-right"}`}
                        >
                          <Play size={12} fill="currentColor" /> Watch on YouTube
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}