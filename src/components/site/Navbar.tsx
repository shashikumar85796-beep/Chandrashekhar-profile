import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "gallery", label: "Gallery" },
  { id: "awards", label: "Awards" },
  { id: "media", label: "Media" },
  { id: "research", label: "Research" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (y / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
        <div
          className="h-full bg-gold transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/90 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.06)] border-b border-border"
            : "bg-white/90 backdrop-blur-sm border-b border-[#E8EEF6]",
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <div />

          <ul className="hidden lg:flex items-center gap-8">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => go(s.id)}
                  className={cn(
                    "text-sm font-medium relative transition-colors",
                    "text-[#102A56]/80 hover:text-[#102A56]",
                    active === s.id && "text-gold!",
                  )}
                >
                  {s.label}
                  {active === s.id && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gold rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Open menu"
            className={cn(
              "lg:hidden p-2 rounded-full hover:bg-foreground/10 transition",
              "text-[#102A56]",
            )}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-opacity",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
        <aside
          className={cn(
            "absolute right-0 top-0 h-full w-72 bg-background shadow-2xl border-l border-border p-6 transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <ul className="mt-12 space-y-1">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => go(s.id)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg text-sm font-medium hover:bg-muted transition",
                    active === s.id && "bg-muted text-gold",
                  )}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
}
