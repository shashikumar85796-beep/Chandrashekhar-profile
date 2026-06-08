import { MapPin, GraduationCap, Building2, Phone, Mail, Users, BookOpen, Award, School } from "lucide-react";
import { professor } from "@/data/professor";

const stats = [
  { icon: Users,    value: "10,000+", label: "Students Mentored" },
  { icon: School,   value: "200+",    label: "Colleges Guided" },
  { icon: BookOpen, value: "20+",     label: "Research Papers" },
  { icon: Award,    value: "5+",      label: "National Awards" },
];

const bioParagraphs = professor.bio.split("\n\n");
const firstPara   = bioParagraphs[0];
const middleParas = bioParagraphs.slice(1, -1);
const lastPara    = bioParagraphs[bioParagraphs.length - 1];

export function About() {
  return (
    <section id="about" className="bg-white overflow-hidden">

      {/* ── Hero banner ─────────────────────────────────────────── */}
      <div className="bg-gray-50 border-b border-gray-200 py-16 md:py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4 reveal font-semibold">About</p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 leading-[1.05] reveal">
            Two decades of<br />
            <span className="text-gold">academic leadership</span>
          </h2>
          {/* Role badges */}
          <div className="mt-6 flex flex-wrap gap-2 reveal">
            {["Professor", "Academic Administrator", "Career Mentor", "Motivational Speaker", "Strategic Education Advisor"].map((r) => (
              <span key={r} className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-white border-2 border-gray-300 text-gray-800 shadow-sm">
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats strip ─────────────────────────────────────────── */}
      <div className="border-b border-gray-200 reveal">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-4 py-8 px-6 md:px-10 hover:bg-gray-50 transition-colors">
              <div className="w-11 h-11 rounded-full bg-gold/10 text-gold grid place-items-center shrink-0">
                <Icon size={20} />
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-gray-900 leading-none">{value}</div>
                <div className="text-[11px] uppercase tracking-wider text-gray-500 mt-1">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Body ────────────────────────────────────────────────── */}
      <div className="py-16 md:py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">

          {/* Intro — large lead */}
          <p className="reveal text-xl md:text-2xl leading-relaxed text-gray-800 font-display max-w-5xl mb-12 pl-6 border-l-4 border-gold">
            {firstPara}
          </p>

          {/* Middle paragraphs — 2 col */}
          <div className="reveal grid md:grid-cols-2 gap-x-14 gap-y-6 mb-12">
            {middleParas.map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed text-[15px] md:text-base">
                {para}
              </p>
            ))}
          </div>

          {/* Pull quote */}
          <div className="reveal relative rounded-2xl bg-gray-50 border border-gray-200 px-8 py-10 md:px-16 md:py-14 mb-12 overflow-hidden">
            <div className="absolute -top-6 -left-2 font-display text-[9rem] text-gold/15 leading-none select-none pointer-events-none">
              &ldquo;
            </div>
            <blockquote className="relative italic font-display text-xl md:text-2xl leading-relaxed text-gray-800 max-w-4xl">
              {professor.pullQuote}
            </blockquote>
            <footer className="mt-5 text-xs not-italic uppercase tracking-[0.22em] text-gold font-semibold">
              — {professor.name}
            </footer>
          </div>

          {/* Last paragraph */}
          <p className="reveal text-gray-600 leading-relaxed text-[15px] md:text-base max-w-4xl mb-14">
            {lastPara}
          </p>

          {/* Expertise tags */}
          <div className="reveal mb-14">
            <h3 className="font-display text-2xl mb-5 text-gray-900">Areas of Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {professor.interests.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-xs font-medium border border-gray-200 hover:bg-gold hover:text-white hover:border-gold transition cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Qualifications + Office */}
          <div className="reveal grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="p-8 border border-gray-200 rounded-2xl bg-gray-50 hover:shadow-md transition-shadow">
              <h3 className="font-display text-2xl mb-6 flex items-center gap-2.5 text-gray-900">
                <GraduationCap size={22} className="text-gold" /> Qualifications
              </h3>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                {professor.qualifications.map((q) => (
                  <li key={q} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span className="text-gray-600">{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 border border-gray-200 rounded-2xl bg-gray-50 hover:shadow-md transition-shadow">
              <h3 className="font-display text-2xl mb-6 flex items-center gap-2.5 text-gray-900">
                <Building2 size={22} className="text-gold" /> Office & Contact
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Building2 size={16} className="text-gold mt-0.5 shrink-0" />
                  <span>
                    <span className="font-semibold text-gray-800">{professor.institution}</span>
                    <br />
                    <span className="text-gray-500">{professor.university}</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                  <span className="text-gray-700">{professor.role}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={16} className="text-gold mt-0.5 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <a href={`tel:${professor.phone}`} className="text-gray-700 hover:text-gold transition">
                      {professor.phone}
                    </a>
                    <a href={`tel:${professor.phone2}`} className="text-gray-700 hover:text-gold transition">
                      {professor.phone2}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={16} className="text-gold mt-0.5 shrink-0" />
                  <a href={`mailto:${professor.email}`} className="text-gray-700 hover:text-gold transition break-all">
                    {professor.email}
                  </a>
                </li>
              </ul>
              <a
                href={professor.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1EBE57] text-white px-5 py-2.5 text-sm font-semibold hover:scale-[1.03] transition-transform shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Send Message
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
