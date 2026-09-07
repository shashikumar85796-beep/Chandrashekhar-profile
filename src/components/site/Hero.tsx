import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, MessageCircle } from "lucide-react";
import professorImg from "@/assets/chandrashekhar photo.jpeg";
import { professor } from "@/data/professor";
import { useCountUp } from "./useReveal";

function Stat({
  value,
  label,
  run,
  className = "",
}: {
  value: number;
  label: string;
  run: boolean;
  className?: string;
}) {
  const v = useCountUp(value, run);
  const display = v >= 1000 ? `${(v / 1000).toFixed(v % 1000 === 0 ? 0 : 1)}K` : v.toLocaleString();
  return (
    <div
      className={`rounded-xl border border-[#D9E1EC] bg-white/95 px-4 py-3 shadow-[0_12px_30px_rgba(16,42,86,0.10)] backdrop-blur-sm ${className}`}
    >
      <div className="font-display text-2xl font-semibold leading-none text-[#102A56]">
        {display}
        <span className="text-[#F28C28]">+</span>
      </div>
      <div className="mt-1.5 max-w-[10rem] text-[10px] font-semibold uppercase leading-tight tracking-[0.13em] text-[#64748B]">
        {label}
      </div>
    </div>
  );
}

export function Hero() {
  const [run, setRun] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setRun(true), 600);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-white pb-16 pt-28 text-[#102A56] sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[linear-gradient(115deg,transparent_0%,transparent_54%,#F7F9FC_54%,#F7F9FC_100%)]" />
      <div className="pointer-events-none absolute -top-20 right-[11%] -z-10 h-[38rem] w-px rotate-[25deg] bg-[#E8EEF6]" />
      <div className="pointer-events-none absolute bottom-12 left-[7%] -z-10 h-px w-[44%] bg-[#E8EEF6]" />
      <div className="pointer-events-none absolute right-[3%] top-28 -z-10 font-display text-[clamp(5rem,15vw,13rem)] font-semibold leading-none tracking-[-0.06em] text-[#EDF2F8]">
        ACADEMIA
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-10">
        <div className="max-w-2xl">
          <p
            className="mb-5 text-[10px] font-bold uppercase tracking-[0.24em] text-[#F28C28] opacity-0 animate-text-reveal sm:text-xs"
            style={{ animationDelay: "0.15s" }}
          >
            Professor <span className="mx-1 text-[#CBD5E1]">&bull;</span> Academic Administrator{" "}
            <span className="mx-1 text-[#CBD5E1]">&bull;</span> Mentor
          </p>
          <h1
            className="font-display text-[clamp(3.35rem,7vw,6.6rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-[#102A56] opacity-0 animate-text-reveal"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="block text-[0.46em] leading-[1.1] tracking-[-0.01em] text-[#64748B]">
              Prof. Dr.
            </span>
            <span className="block">Chandra Shekhar</span>
          </h1>
          <div
            className="mt-7 max-w-xl border-l-2 border-[#F28C28] pl-5 opacity-0 animate-text-reveal"
            style={{ animationDelay: "0.5s" }}
          >
            <p className="text-base font-semibold leading-snug text-[#102A56] sm:text-lg">
              {professor.title}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[#64748B] sm:text-base">
              Bharatiya Vidya Bhavan College, GGSIP University, Delhi
            </p>
          </div>
          <p
            className="mt-7 max-w-md font-display text-xl leading-snug text-[#102A56] opacity-0 animate-text-reveal sm:text-2xl"
            style={{ animationDelay: "0.65s" }}
          >
            Shaping careers through education, mentorship &amp; academic leadership.
          </p>

          <div
            className="mt-9 flex flex-wrap gap-3 opacity-0 animate-text-reveal"
            style={{ animationDelay: "0.85s" }}
          >
            <a
              href={professor.social.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#F28C28] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(242,140,40,0.22)] transition-transform hover:-translate-y-0.5 hover:bg-[#dc7918]"
            >
              <MessageCircle size={16} /> Connect on WhatsApp <ArrowUpRight size={15} />
            </a>
            <button
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 rounded-md border border-[#102A56] bg-white px-5 py-3 text-sm font-semibold text-[#102A56] transition-colors hover:bg-[#F7F9FC]"
            >
              Explore Profile <ArrowUpRight size={15} />
            </button>
          </div>

          <div className="mt-12 hidden items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#64748B] sm:flex">
            <span>20+ Years Experience</span>
            <span className="text-[#CBD5E1]">|</span>
            <span>20+ Research Publications</span>
            <span className="text-[#CBD5E1]">|</span>
            <span>10K+ Students Mentored</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[31rem] lg:mx-0 lg:ml-auto">
          <div className="mb-4 flex items-center justify-end gap-3 pr-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#64748B]">
            <span className="h-px w-10 bg-[#F28C28]" /> Faculty Profile{" "}
            <span className="text-[#CBD5E1]">/</span> Delhi
          </div>
          <div className="absolute -bottom-5 -left-5 h-[88%] w-[88%] border border-[#F28C28] sm:-bottom-7 sm:-left-7" />
          <div
            className="relative mx-auto aspect-[4/5] w-[min(78vw,28rem)] overflow-hidden rounded-[20px] bg-[#EAF0F7] shadow-[0_22px_50px_rgba(16,42,86,0.16)] opacity-0 animate-text-reveal"
            style={{ animationDelay: "0.45s" }}
          >
            <img
              src={professorImg}
              alt="Dr. Chandra Shekhar - Professor at Bharatiya Vidya Bhavan, New Delhi"
              className="h-full w-full object-cover object-[center_18%] transition-transform duration-700 hover:scale-[1.025]"
              width={800}
              height={1000}
              fetchPriority="high"
            />
          </div>
          <div className="absolute -bottom-7 left-0 right-0 flex justify-center gap-2 sm:-left-12 sm:right-auto sm:bottom-8 sm:flex-col sm:items-start">
            {professor.stats.map((stat, index) => (
              <Stat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                run={run}
                className={`opacity-0 animate-text-reveal ${index === 1 ? "hidden sm:block" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#CBD5E1] sm:hidden">
        <ArrowDown size={18} />
      </div>
    </section>
  );
}
