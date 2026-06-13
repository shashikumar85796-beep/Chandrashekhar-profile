import { useEffect, useRef, useState } from "react";
import { Mail } from "lucide-react";
import professorImg from "@/assets/chandrashekhar photo.jpeg";
import { professor } from "@/data/professor";
import { useCountUp } from "./useReveal";

function Stat({ value, label, run }: { value: number; label: string; run: boolean }) {
  const v = useCountUp(value, run);
  const display = v >= 1000 ? `${(v / 1000).toFixed(v % 1000 === 0 ? 0 : 1)}K` : v.toLocaleString();
  return (
    <div className="text-center">
      <div className="font-display text-4xl md:text-5xl font-semibold text-gold">
        {display}+
      </div>
      <div className="mt-1 text-xs md:text-sm uppercase tracking-[0.18em] text-white/60">
        {label}
      </div>
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setRun(true), 600);
    return () => clearTimeout(t);
  }, []);
  return (
    <section
      id="home"
      ref={ref}
      className="hero-gradient relative min-h-screen flex items-center pt-20 pb-12 text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-16 items-center w-full">
        <div className="relative mx-auto lg:mx-0">
          <div className="absolute -inset-3 rounded-full bg-gold/20 blur-2xl" />
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-white/10 shadow-2xl">
            <img
              src={professorImg}
              alt="Dr. Chandra Shekhar — Professor at Bharatiya Vidya Bhavan, New Delhi"
              className="w-full h-full object-cover"
              width={512}
              height={512}
              fetchPriority="high"
            />
          </div>
          
        </div>

        <div>
          <h1 className="font-display font-semibold leading-[1.05] text-[44px] md:text-[52px] lg:text-[64px] opacity-0 animate-text-reveal" style={{ animationDelay: "0.3s" }}>
            {professor.name}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80 opacity-0 animate-text-reveal" style={{ animationDelay: "0.5s" }}>
            {professor.title} · <span className="text-white">{professor.institution}</span>
          </p>
          <p className="mt-1 text-sm text-white/60 opacity-0 animate-text-reveal" style={{ animationDelay: "0.6s" }}>
            {professor.university}
          </p>
          <p className="mt-3 italic text-white/70 max-w-2xl text-base md:text-lg opacity-0 animate-text-reveal" style={{ animationDelay: "0.7s" }}>
            &ldquo;{professor.tagline}&rdquo;
          </p>

          <div className="mt-8 grid grid-cols-3 gap-6 max-w-lg opacity-0 animate-text-reveal" style={{ animationDelay: "0.9s" }}>
            {professor.stats.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} run={run} />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3 opacity-0 animate-text-reveal" style={{ animationDelay: "1.1s" }}>
            <a
              href={professor.social.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1EBE57] text-white px-6 py-3 text-sm font-semibold hover:scale-[1.03] transition-transform shadow-lg shadow-green-900/30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Send Message
            </a>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10 hover:scale-[1.03] transition"
            >
              <Mail size={16} /> Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}