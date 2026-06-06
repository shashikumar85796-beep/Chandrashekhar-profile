import { ArrowUp, MessageCircle, Youtube, FileText, Newspaper, Mail } from "lucide-react";
import { professor } from "@/data/professor";

const links = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-2xl">{professor.name}</h3>
          <p className="text-primary-foreground/70 text-sm mt-2 italic">
            Professor, Researcher & Education Advisor
          </p>
          <p className="text-primary-foreground/70 text-sm mt-2">{professor.institution}</p>
          <p className="text-primary-foreground/60 text-xs">{professor.university}</p>
        </div>
        <div>
          <p className="uppercase tracking-[0.2em] text-xs text-gold mb-4">Quick links</p>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-gold transition"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="uppercase tracking-[0.2em] text-xs text-gold mb-4">Connect</p>
          <div className="flex gap-2 mb-4">
            {[
              { Icon: Mail, href: professor.social.email, label: "Email" },
              { Icon: MessageCircle, href: professor.social.whatsapp, label: "WhatsApp" },
              { Icon: Youtube, href: professor.social.youtube, label: "YouTube" },
              { Icon: FileText, href: professor.social.springer, label: "Springer" },
              { Icon: Newspaper, href: professor.social.jatit, label: "JATIT" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full grid place-items-center bg-white/5 hover:bg-gold hover:text-primary border border-white/10 transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <a href={`mailto:${professor.email}`} className="inline-flex items-center gap-2 text-sm hover:text-gold transition">
            <Mail size={14} /> {professor.email}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/60">
          <p>© {year >= 2025 ? year : 2025} {professor.name}. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 hover:bg-gold hover:text-primary hover:border-gold transition"
          >
            Back to top <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}