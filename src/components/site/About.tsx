import { MapPin, GraduationCap, Building2, Phone, Mail } from "lucide-react";
import professorImg from "@/assets/chandrashekhar photo.jpeg";
import { professor } from "@/data/professor";

export function About() {
  return (
    <section id="about" className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-8 reveal">
          <p className="text-gold uppercase tracking-[0.25em] text-xs mb-3">About</p>
          <h2 className="section-heading font-display text-4xl md:text-5xl font-semibold">
            Two decades of academic leadership
          </h2>
        </div>

        <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-start">
          <div className="reveal space-y-6 lg:sticky lg:top-24">
            <div className="relative rounded-2xl overflow-hidden card-soft">
              <img
                src={professorImg}
                alt={professor.name}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>
            <blockquote className="border-l-4 border-gold pl-6 italic font-display text-lg leading-relaxed text-foreground/80">
              &ldquo;{professor.pullQuote}&rdquo;
              <footer className="mt-3 text-xs not-italic uppercase tracking-[0.2em] text-muted-foreground">
                — {professor.name}
              </footer>
            </blockquote>
          </div>

          <div className="reveal">
            {professor.bio.split("\n\n").map((p, i) => (
              <p key={i} className="text-foreground/80 leading-relaxed mb-5 text-[15px] md:text-base">
                {p}
              </p>
            ))}

            <div className="mt-8">
              <h3 className="font-display text-xl mb-4">Research Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {professor.interests.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium hover:bg-gold hover:text-primary transition">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="reveal mt-10 grid md:grid-cols-2 gap-6 lg:gap-8">
          <div className="card-soft bg-card p-8 border border-border">
            <h3 className="font-display text-2xl mb-5 flex items-center gap-2.5">
              <GraduationCap size={22} className="text-gold" /> Qualifications
            </h3>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {professor.qualifications.map((q) => (
                <li key={q} className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span className="text-foreground/80">{q}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-soft bg-card p-8 border border-border">
            <h3 className="font-display text-2xl mb-5 flex items-center gap-2.5">
              <Building2 size={22} className="text-gold" /> Office
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Building2 size={16} className="text-gold mt-0.5 shrink-0" />
                <span><span className="font-semibold">{professor.institution}</span><br /><span className="text-muted-foreground">{professor.university}</span></span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span>{professor.role}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold mt-0.5 shrink-0" />
                <a href={`tel:${professor.phone}`} className="hover:text-gold transition">{professor.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gold mt-0.5 shrink-0" />
                <a href={`mailto:${professor.email}`} className="hover:text-gold transition break-all">{professor.email}</a>
              </li>
            </ul>
            <a
              href={professor.social.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1EBE57] text-white px-5 py-2.5 text-sm font-semibold hover:scale-[1.03] transition-transform"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}