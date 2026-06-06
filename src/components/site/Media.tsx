import { Play, Tv, Youtube } from "lucide-react";
import { mediaAppearances } from "@/data/professor";

function getYouTubeThumbnail(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|v=)([a-zA-Z0-9_-]{11})/);
  return match ? `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg` : null;
}

const CHANNEL_URL = "https://www.youtube.com/@Dr.chandra_shekhar";

export function Media() {
  return (
    <section id="media" className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-10 reveal">
          <p className="text-gold uppercase tracking-[0.25em] text-xs mb-3">TV & Media</p>
          <h2 className="section-heading font-display text-4xl md:text-5xl font-semibold">
            Media appearances
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 reveal">
          {/* Existing media appearance cards */}
          {mediaAppearances.map((m) => {
            const thumbnail = getYouTubeThumbnail(m.url);
            return (
              <article key={m.show} className="card-soft bg-card border border-border overflow-hidden flex flex-col">
                <a
                  href={m.url}
                  target="_blank"
                  rel="noreferrer"
                  className="aspect-video relative overflow-hidden group"
                >
                  {thumbnail ? (
                    <img
                      src={thumbnail}
                      alt={m.show}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const match = m.url.match(/(?:youtu\.be\/|v=)([a-zA-Z0-9_-]{11})/);
                        if (match) {
                          (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
                        }
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/70" />
                  )}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="w-16 h-16 rounded-full bg-gold text-primary grid place-items-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <Play size={22} fill="currentColor" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full bg-gold text-primary">
                    <Tv size={10} /> Live on Air
                  </span>
                </a>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs uppercase tracking-wider text-gold font-semibold mb-1">{m.outlet}</p>
                  <h3 className="font-display text-xl leading-snug">{m.show}</h3>
                  <p className="text-sm text-muted-foreground mt-1">Role: {m.role}</p>
                  <p className="text-sm text-foreground/75 mt-3 leading-relaxed flex-1">{m.description}</p>
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:scale-[1.03] transition-transform w-fit"
                  >
                    <Play size={14} fill="currentColor" /> Watch Episode
                  </a>
                </div>
              </article>
            );
          })}

          {/* YouTube channel card — same style as above */}
          <article className="card-soft bg-card border border-border overflow-hidden flex flex-col">
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noreferrer"
              className="aspect-video relative overflow-hidden group bg-[#FF0000]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000] to-[#990000]" />
              {/* Grid pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-white text-[#FF0000] grid place-items-center shadow-2xl mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Youtube size={28} fill="currentColor" />
                  </div>
                  <p className="mt-3 text-white font-display text-lg font-semibold drop-shadow">
                    @Dr.chandra_shekhar
                  </p>
                </div>
              </div>
              <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full bg-white text-[#FF0000]">
                <Youtube size={10} /> YouTube
              </span>
            </a>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-xs uppercase tracking-wider text-gold font-semibold mb-1">Official Channel</p>
              <h3 className="font-display text-xl leading-snug">Dr. Chandra Shekhar — YouTube</h3>
              <p className="text-sm text-muted-foreground mt-1">Career Advisor · Educator · TV Expert</p>
              <p className="text-sm text-foreground/75 mt-3 leading-relaxed flex-1">
                Watch career guidance sessions, Shiksha Avam Rojgar episodes, Big Data & tech talks, and education insights on the official YouTube channel.
              </p>
              <a
                href={CHANNEL_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#FF0000] hover:bg-[#cc0000] text-white px-5 py-2.5 text-sm font-semibold hover:scale-[1.03] transition-all w-fit shadow-lg shadow-red-500/20"
              >
                <Youtube size={14} fill="white" /> Visit Channel
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}