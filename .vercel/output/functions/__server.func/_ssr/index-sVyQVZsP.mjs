import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { T as Toaster$1, t as toast } from "../_libs/sonner.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { u as useForm } from "../_libs/react-hook-form.mjs";
import { X, M as Menu, a as Mail, G as GraduationCap, B as Building2, b as MapPin, P as Phone, Z as ZoomIn, S as Search, T as Tv, c as Trophy, d as Play, Y as Youtube, e as MessageCircle, F as FileText, N as Newspaper, A as ArrowUp, C as ChevronLeft, f as ChevronRight, g as Star, h as Sparkles, E as ExternalLink } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "gallery", label: "Gallery" },
  { id: "research", label: "Research" },
  { id: "awards", label: "Awards" },
  { id: "media", label: "Media" },
  { id: "contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [progress, setProgress] = reactExports.useState(0);
  const [active, setActive] = reactExports.useState("home");
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? y / h * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "h-full bg-gold transition-[width] duration-150",
        style: { width: `${progress}%` }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "header",
      {
        className: cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-background/90 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.06)] border-b border-border" : "bg-transparent"
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => go("home"),
              className: cn(
                "font-display text-lg font-semibold tracking-tight transition-colors",
                scrolled ? "text-foreground" : "text-white"
              ),
              children: "Dr. Chandra Shekhar"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden lg:flex items-center gap-8", children: sections.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => go(s.id),
              className: cn(
                "text-sm font-medium relative transition-colors",
                scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white",
                active === s.id && "text-gold!"
              ),
              children: [
                s.label,
                active === s.id && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gold rounded-full" })
              ]
            }
          ) }, s.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setOpen((o) => !o),
              "aria-label": "Open menu",
              className: cn(
                "lg:hidden p-2 rounded-full hover:bg-foreground/10 transition",
                scrolled ? "text-foreground" : "text-white"
              ),
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 20 })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn(
          "fixed inset-0 z-40 lg:hidden transition-opacity",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/40", onClick: () => setOpen(false) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "aside",
            {
              className: cn(
                "absolute right-0 top-0 h-full w-72 bg-background shadow-2xl border-l border-border p-6 transition-transform duration-300",
                open ? "translate-x-0" : "translate-x-full"
              ),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-12 space-y-1", children: sections.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => go(s.id),
                  className: cn(
                    "w-full text-left px-4 py-3 rounded-lg text-sm font-medium hover:bg-muted transition",
                    active === s.id && "bg-muted text-gold"
                  ),
                  children: s.label
                }
              ) }, s.id)) })
            }
          )
        ]
      }
    )
  ] });
}
const professorImg = "/assets/chandrashekhar%20photo-BM1WGr8c.png";
const professor = {
  name: "Dr. Chandra Shekhar",
  title: "Professor & In-Charge (Admissions)",
  institution: "BHARATIYA VIDYA BHAVAN, KG Marg, Copernicus Marg, New Delhi, Delhi 110001",
  university: "Guru Gobind Singh Indraprastha University, Delhi",
  department: "Bharatiya Vidya Bhavan · New Delhi",
  tagline: "Visionary academic leader in Big Data Analytics, Research Innovation, and Education Administration",
  roleBadge: "सलाहकार – शिक्षा एवं रोजगार",
  bio: `Dr. Chandra Shekhar is a distinguished Professor and In-Charge of Admissions at BHARATIYA VIDYA BHAVAN, KG Marg, Copernicus Marg, New Delhi, Delhi 110001, affiliated with Guru Gobind Singh Indraprastha University, Delhi. With over two decades of experience in higher education, he is a recognized leader in Big Data Analytics, Cybersecurity, Data Mining, and Academic Administration.

A recipient of the prestigious Shiksha Ratna Award (2023) and the National Recognition Award (2024) — both presented by the Hon'ble Speaker of the Delhi Vidhan Sabha — Dr. Shekhar is also a Career Advisor for Door Darshan Prasar Bharati, hosting the nationally televised morning show "Shiksha Avam Rojgar," where he guides students and professionals on education and employment opportunities across India.

His research spans Apache Hadoop frameworks, encrypted voting systems, Big Data security, and political data analytics. He is committed to mentoring the next generation of engineers and researchers, building strong academic-industry bridges, and transforming educational institutions through strategic leadership and innovation.`,
  pullQuote: "Dedicated to fostering student-centric learning, promoting research excellence, and empowering teams through integrity, innovation, and purposeful leadership.",
  email: "cshekharrajput@gmail.com",
  phone: "+91 8826252304",
  whatsappNumber: "918826252304",
  role: "Professor & In-Charge (Admissions)",
  social: {
    springer: "https://link.springer.com/article/10.1007/s41870-025-02405-3",
    jatit: "https://www.jatit.org/",
    youtube: "https://youtu.be/LDwy1OKb5Vw?si=EZ9zyn4rCMQn4xi4",
    whatsapp: "https://wa.me/918826252304",
    email: "mailto:cshekharrajput@gmail.com"
  },
  stats: [
    { label: "Years of Experience", value: 20 },
    { label: "Research Publications", value: 6 },
    { label: "National Awards", value: 2 }
  ],
  interests: [
    "Big Data Analytics",
    "Apache Hadoop",
    "Data Mining",
    "Sentiment Analysis",
    "Cybersecurity",
    "ECDSA & Digital Signatures",
    "Machine Learning",
    "Cloud Computing",
    "Educational Administration",
    "Career Counseling"
  ],
  qualifications: [
    "Ph.D. – Big Data Analytics (Doctoral Research)",
    "Ph.D. – Education (Doctoral Honorary)",
    "M.Tech – Computer Science Engineering",
    "M.Tech – Information Technology",
    "MCA – Master of Computer Applications",
    "M.Sc – Mathematics"
  ]
};
const publications = [
  {
    id: "p1",
    title: "Enhanced Sentiment Analysis and Data Mining of Political Leaders' Popularity on Social Media Platforms Using an Optimized Apache Hadoop Framework for Accurate Election Outcome Prediction",
    venue: "Journal of Theoretical and Applied Information Technology (JATIT)",
    volume: "Vol. 103, No. 11",
    year: 2025,
    date: "15 June 2025",
    type: "Journal",
    url: "https://www.jatit.org/volumes/Vol103No11/23Vol103No11.pdf",
    tags: ["Hadoop", "Data Mining", "Sentiment Analysis", "Election Prediction"],
    featured: true,
    isNew: true
  },
  {
    id: "p2",
    title: "An Innovative and Secured Electronic Voting System Based on Elliptic Curved Signing Approach (ECDSA) and Digital Signatures",
    venue: "Springer Nature (Scopus Indexed)",
    year: 2025,
    date: "6 March 2025",
    type: "Journal",
    url: "https://link.springer.com/article/10.1007/s41870-025-02405-3",
    tags: ["Cybersecurity", "ECDSA", "Digital Signatures", "E-Voting"],
    featured: true,
    isNew: true
  },
  {
    id: "p3",
    title: "A Robust and Secured Encryption Scheme for Big Data Security Based on Hadoop Distributed File System",
    venue: "European Chemical Bulletin (Scopus Indexed)",
    volume: "Volume 12, Special Issue 3",
    year: 2023,
    type: "Journal",
    url: "https://www.eurchembull.com/issue-content/a-robust-and-secured-encryption-scheme-for-big-data-security-based-on-hadoop-distributed-file-system-12746",
    isbn: "ISSN: 2063-5346",
    tags: ["Big Data", "Hadoop HDFS", "Encryption", "Security"]
  },
  {
    id: "p4",
    title: "Efficient Data Mining of Political Result Through the Apache Hadoop Structure",
    venue: "International Journal of Scientific Development and Research",
    volume: "Vol. 7, Issue 3",
    year: 2023,
    date: "March 2023",
    type: "Journal",
    tags: ["Data Mining", "Apache Hadoop", "Political Analytics"]
  },
  {
    id: "p5",
    title: "Defiance and Predicament: 4G Network",
    venue: "5th National Conference — Innovations in E-Commerce, Management, IT and Media",
    year: 2018,
    date: "February 21, 2018",
    type: "Conference",
    tags: ["4G Networks", "Telecommunications"]
  },
  {
    id: "p6",
    title: "Identification of Faces in Images Using MapReduce",
    venue: "Proceeding — Digital India: Recent Paradigm Shift in IT, Media & Management",
    year: 2016,
    date: "March 2016",
    type: "Conference",
    tags: ["MapReduce", "Face Recognition", "Digital India"]
  }
];
const awards = [
  {
    year: 2024,
    name: "National Recognition Award – 2024",
    org: "National Recognition Forum · Field: Education",
    desc: "Presented by the Hon'ble Speaker of the Delhi Vidhan Sabha, Government of Delhi.",
    presentedBy: "Hon'ble Speaker of the Delhi Vidhan Sabha",
    kind: "award"
  },
  {
    year: 2023,
    name: "Shiksha Ratna Award – 2023",
    org: "National Recognition Forum · Field: Education",
    desc: "Presented by the Hon'ble Speaker of the Delhi Vidhan Sabha, Shri Ram Nivas, Government of Delhi.",
    presentedBy: "Hon'ble Speaker of the Delhi Vidhan Sabha",
    kind: "award"
  },
  {
    year: "Ongoing",
    name: "Career Advisor – Door Darshan Prasar Bharati",
    org: "DD Morning Live Show — Shiksha Avam Rojgar",
    desc: "Regular guest expert on the DD Morning Live Show 'Shiksha Avam Rojgar,' advising students and youth on education and employment opportunities. Nationally broadcast on Doordarshan (DD India).",
    watchUrl: "https://youtu.be/LDwy1OKb5Vw?si=EZ9zyn4rCMQn4xi4",
    kind: "media"
  }
];
const mediaAppearances = [
  {
    outlet: "Doordarshan (DD India) — Prasar Bharati",
    show: "DD Morning Live Show — Shiksha Avam Rojgar",
    role: "Career Advisor",
    description: "Dr. Chandra Shekhar appears as a career and education advisor on this nationally televised morning show, guiding lakhs of viewers on higher education, career paths, and employment opportunities in India.",
    url: "https://youtu.be/LDwy1OKb5Vw?si=EZ9zyn4rCMQn4xi4"
  }
];
function useReveal() {
  reactExports.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
function useCountUp(target, run, duration = 1500) {
  return useCountUpImpl(target, run, duration);
}
function useCountUpImpl(target, run, duration) {
  const [val, setVal] = reactExports.useState(0);
  const started = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (!run || started.current) return;
    started.current = true;
    const start = performance.now();
    let raf = 0;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);
  return val;
}
function Stat({ value, label, run }) {
  const v = useCountUp(value, run);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-4xl md:text-5xl font-semibold text-gold", children: [
      v.toLocaleString(),
      "+"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs md:text-sm uppercase tracking-[0.18em] text-white/60", children: label })
  ] });
}
function Hero() {
  const ref = reactExports.useRef(null);
  const [run, setRun] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setRun(true), 600);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "home",
      ref,
      className: "hero-gradient relative min-h-screen flex items-center pt-20 pb-12 text-white overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 opacity-[0.06] pointer-events-none",
            style: {
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-16 items-center w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto lg:mx-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-3 rounded-full bg-gold/20 blur-2xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-white/10 shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: professorImg,
                alt: "Dr. Chandra Shekhar — Professor at Bharatiya Vidya Bhavan, New Delhi",
                className: "w-full h-full object-cover",
                width: 512,
                height: 512,
                fetchPriority: "high"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full bg-gold text-xs font-semibold text-primary tracking-wide", children: professor.roleBadge })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gold uppercase tracking-[0.3em] text-xs mb-4 opacity-0 animate-text-reveal", style: { animationDelay: "0.1s" }, children: professor.department }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-semibold leading-[1.05] text-[44px] md:text-[52px] lg:text-[64px] opacity-0 animate-text-reveal", style: { animationDelay: "0.3s" }, children: professor.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-lg md:text-xl text-white/80 opacity-0 animate-text-reveal", style: { animationDelay: "0.5s" }, children: [
              professor.title,
              " · ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: professor.institution })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-white/60 opacity-0 animate-text-reveal", style: { animationDelay: "0.6s" }, children: professor.university }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 italic text-white/70 max-w-2xl text-base md:text-lg opacity-0 animate-text-reveal", style: { animationDelay: "0.7s" }, children: [
              "“",
              professor.tagline,
              "”"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-3 gap-6 max-w-lg opacity-0 animate-text-reveal", style: { animationDelay: "0.9s" }, children: professor.stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: s.value, label: s.label, run }, s.label)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-3 opacity-0 animate-text-reveal", style: { animationDelay: "1.1s" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: professor.social.whatsapp,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1EBE57] text-white px-6 py-3 text-sm font-semibold hover:scale-[1.03] transition-transform shadow-lg shadow-green-900/30",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) }),
                    "Send Message"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
                  className: "inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10 hover:scale-[1.03] transition",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16 }),
                    " Get in Touch"
                  ]
                }
              )
            ] })
          ] })
        ] })
      ]
    }
  );
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "py-12 md:py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gold uppercase tracking-[0.25em] text-xs mb-3", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-heading font-display text-4xl md:text-5xl font-semibold", children: "Two decades of academic leadership" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal space-y-6 lg:sticky lg:top-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden card-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: professorImg,
              alt: professor.name,
              loading: "lazy",
              className: "w-full aspect-[4/5] object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "border-l-4 border-gold pl-6 italic font-display text-lg leading-relaxed text-foreground/80", children: [
          "“",
          professor.pullQuote,
          "”",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-3 text-xs not-italic uppercase tracking-[0.2em] text-muted-foreground", children: [
            "— ",
            professor.name
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", children: [
        professor.bio.split("\n\n").map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/80 leading-relaxed mb-5 text-[15px] md:text-base", children: p }, i)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-4", children: "Research Expertise" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: professor.interests.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium hover:bg-gold hover:text-primary transition", children: t }, t)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mt-10 grid md:grid-cols-2 gap-6 lg:gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-soft bg-card p-8 border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-2xl mb-5 flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { size: 22, className: "text-gold" }),
          " Qualifications"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm", children: professor.qualifications.map((q) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: q })
        ] }, q)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-soft bg-card p-8 border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-2xl mb-5 flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 22, className: "text-gold" }),
          " Office"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 16, className: "text-gold mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: professor.institution }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: professor.university })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16, className: "text-gold mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: professor.role })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16, className: "text-gold mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${professor.phone}`, className: "hover:text-gold transition", children: professor.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16, className: "text-gold mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${professor.email}`, className: "hover:text-gold transition break-all", children: professor.email })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: professor.social.whatsapp,
            target: "_blank",
            rel: "noreferrer",
            className: "mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1EBE57] text-white px-5 py-2.5 text-sm font-semibold hover:scale-[1.03] transition-transform",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15", height: "15", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) }),
              "Send Message"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
const tabs = ["All", "Journals", "Conferences"];
function Card({ p }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "card-soft bg-card border border-border p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2 flex-wrap", children: [
        p.featured && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs font-semibold text-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 12, fill: "currentColor" }),
          " Featured"
        ] }),
        p.isNew && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gold text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 10 }),
          " New"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: [
          p.type,
          " · ",
          p.date ?? p.year
        ] }),
        p.volume && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground", children: p.volume })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg md:text-xl leading-snug mb-2", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm italic text-foreground/70 mt-1", children: p.venue }),
      p.isbn && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: p.isbn }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-1.5", children: p.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20", children: t }, t)) })
    ] }) }),
    p.url && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-center gap-4 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: p.url,
        target: "_blank",
        rel: "noreferrer",
        className: "inline-flex items-center gap-1 text-gold hover:underline font-semibold",
        children: [
          "Read Publication ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 12 })
        ]
      }
    ) })
  ] });
}
function Research() {
  const [tab, setTab] = reactExports.useState("All");
  const [q, setQ] = reactExports.useState("");
  const [count, setCount] = reactExports.useState(5);
  const filtered = reactExports.useMemo(() => {
    return publications.filter((p) => {
      const t = tab === "All" ? true : p.type + "s" === tab;
      const matches = !q || p.title.toLowerCase().includes(q.toLowerCase()) || p.venue.toLowerCase().includes(q.toLowerCase()) || p.tags.join(" ").toLowerCase().includes(q.toLowerCase());
      return t && matches;
    });
  }, [tab, q]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "research", className: "py-12 md:py-16 bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gold uppercase tracking-[0.25em] text-xs mb-3", children: "Research" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-heading font-display text-4xl md:text-5xl font-semibold", children: "Publications & selected work" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-8 reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: tabs.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            setTab(t);
            setCount(5);
          },
          className: cn(
            "px-4 py-2 rounded-full text-sm font-medium border transition",
            tab === t ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border hover:border-gold"
          ),
          children: t
        },
        t
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-sm w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 16, className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            value: q,
            onChange: (e) => setQ(e.target.value),
            placeholder: "Search publications…",
            className: "w-full pl-9 pr-4 py-2.5 rounded-full bg-card border border-border text-sm outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 reveal", children: [
      filtered.slice(0, count).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { p }, p.id)),
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground py-12", children: "No publications found." })
    ] }),
    count < filtered.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setCount((c) => c + 5),
        className: "rounded-full border border-gold text-gold px-6 py-2.5 text-sm font-semibold hover:bg-gold hover:text-primary transition",
        children: "Load more"
      }
    ) })
  ] }) });
}
function Awards() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "awards", className: "py-12 md:py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 reveal text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gold uppercase tracking-[0.25em] text-xs mb-3", children: "Recognition" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-heading center font-display text-4xl md:text-5xl font-semibold mx-auto inline-block", children: "Awards & honors" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-10", children: awards.map((a, i) => {
        const right = i % 2 === 1;
        const isMedia = a.kind === "media";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "li",
          {
            className: `reveal relative md:grid md:grid-cols-2 md:gap-10 ${right ? "" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-gold text-primary grid place-items-center shadow-lg ring-4 ring-background z-10", children: isMedia ? /* @__PURE__ */ jsxRuntimeExports.jsx(Tv, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { size: 16 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: right ? "md:col-start-2" : "md:col-start-1 md:text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `ml-14 md:ml-0 ${right ? "md:ml-10" : "md:mr-10"} card-soft bg-card border border-border p-5 w-auto`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-start flex-wrap gap-3 mb-1 ${right ? "" : "md:justify-end"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-xs font-bold px-2 py-0.5 rounded-full bg-gold text-primary", children: a.year }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg leading-snug break-words min-w-0 flex-1", children: a.name })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gold font-medium", children: a.org }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/70 mt-2 leading-relaxed", children: a.desc }),
                a.watchUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: a.watchUrl,
                    target: "_blank",
                    rel: "noreferrer",
                    className: `mt-4 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs font-semibold hover:scale-[1.03] transition-transform ${right ? "" : "md:float-right"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 12, fill: "currentColor" }),
                      " Watch on YouTube"
                    ]
                  }
                )
              ] }) })
            ]
          },
          a.name
        );
      }) })
    ] })
  ] }) });
}
function getYouTubeThumbnail(url) {
  const match = url.match(/(?:youtu\.be\/|v=)([a-zA-Z0-9_-]{11})/);
  return match ? `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg` : null;
}
const CHANNEL_URL = "https://www.youtube.com/@Dr.chandra_shekhar";
function Media() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "media", className: "py-12 md:py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gold uppercase tracking-[0.25em] text-xs mb-3", children: "TV & Media" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-heading font-display text-4xl md:text-5xl font-semibold", children: "Media appearances" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 lg:gap-8 reveal", children: [
      mediaAppearances.map((m) => {
        const thumbnail = getYouTubeThumbnail(m.url);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "card-soft bg-card border border-border overflow-hidden flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: m.url,
              target: "_blank",
              rel: "noreferrer",
              className: "aspect-video relative overflow-hidden group",
              children: [
                thumbnail ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: thumbnail,
                    alt: m.show,
                    loading: "lazy",
                    decoding: "async",
                    className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                    onError: (e) => {
                      const match = m.url.match(/(?:youtu\.be\/|v=)([a-zA-Z0-9_-]{11})/);
                      if (match) {
                        e.target.src = `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
                      }
                    }
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary to-primary/70" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-gold text-primary grid place-items-center shadow-2xl group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 22, fill: "currentColor" }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-3 left-3 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full bg-gold text-primary", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tv, { size: 10 }),
                  " Live on Air"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-gold font-semibold mb-1", children: m.outlet }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl leading-snug", children: m.show }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
              "Role: ",
              m.role
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/75 mt-3 leading-relaxed flex-1", children: m.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: m.url,
                target: "_blank",
                rel: "noreferrer",
                className: "mt-5 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:scale-[1.03] transition-transform w-fit",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 14, fill: "currentColor" }),
                  " Watch Episode"
                ]
              }
            )
          ] })
        ] }, m.show);
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "card-soft bg-card border border-border overflow-hidden flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: CHANNEL_URL,
            target: "_blank",
            rel: "noreferrer",
            className: "aspect-video relative overflow-hidden group bg-[#FF0000]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#FF0000] to-[#990000]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 opacity-10",
                  style: {
                    backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                    backgroundSize: "24px 24px"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-white text-[#FF0000] grid place-items-center shadow-2xl mx-auto group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { size: 28, fill: "currentColor" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-white font-display text-lg font-semibold drop-shadow", children: "@Dr.chandra_shekhar" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-3 left-3 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full bg-white text-[#FF0000]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { size: 10 }),
                " YouTube"
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-gold font-semibold mb-1", children: "Official Channel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl leading-snug", children: "Dr. Chandra Shekhar — YouTube" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Career Advisor · Educator · TV Expert" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/75 mt-3 leading-relaxed flex-1", children: "Watch career guidance sessions, Shiksha Avam Rojgar episodes, Big Data & tech talks, and education insights on the official YouTube channel." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: CHANNEL_URL,
              target: "_blank",
              rel: "noreferrer",
              className: "mt-5 inline-flex items-center gap-2 rounded-full bg-[#FF0000] hover:bg-[#cc0000] text-white px-5 py-2.5 text-sm font-semibold hover:scale-[1.03] transition-all w-fit shadow-lg shadow-red-500/20",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { size: 14, fill: "white" }),
                " Visit Channel"
              ]
            }
          )
        ] })
      ] })
    ] })
  ] }) });
}
const dd1 = "/assets/dd1-Bbo13XDJ.png";
const dd2 = "/assets/dd2-Do3E_Sur.png";
const dd3 = "/assets/dd3-DP4aHYg6.png";
const dd4 = "/assets/dd4-BbFe3N0v.png";
const dd5 = "/assets/dd5-BRa83vXI.png";
const galleryImages = [
  { src: dd1, caption: "DD Morning Live Show — Shiksha Avam Rojgar", tag: "Media" },
  { src: dd2, caption: "Career Guidance Session on Doordarshan", tag: "Media" },
  { src: dd3, caption: "Live on DD Prasar Bharati", tag: "Media" },
  { src: dd4, caption: "Education & Employment Advisory", tag: "Media" },
  { src: dd5, caption: "Shiksha Avam Rojgar — National Broadcast", tag: "Media" }
];
function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext
}) {
  reactExports.useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center",
      onClick: onClose,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onClose,
            className: "absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white grid place-items-center transition z-10",
            "aria-label": "Close",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 })
          }
        ),
        images.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: (e) => {
              e.stopPropagation();
              onPrev();
            },
            className: "absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-gold hover:text-primary text-white grid place-items-center transition z-10",
            "aria-label": "Previous",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 22 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "max-w-5xl w-full px-20 flex flex-col items-center",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: images[index].src,
                  alt: images[index].caption,
                  className: "max-h-[76vh] max-w-full object-contain rounded-xl shadow-2xl"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 text-center", children: [
                images[index].tag && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gold text-primary mb-1.5", children: images[index].tag }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-sm", children: images[index].caption }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/40 text-xs mt-1", children: [
                  index + 1,
                  " / ",
                  images.length
                ] })
              ] })
            ]
          }
        ),
        images.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: (e) => {
              e.stopPropagation();
              onNext();
            },
            className: "absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-gold hover:text-primary text-white grid place-items-center transition z-10",
            "aria-label": "Next",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 22 })
          }
        )
      ]
    }
  );
}
function Gallery() {
  const [lightbox, setLightbox] = reactExports.useState(null);
  const images = galleryImages;
  const total = images.length;
  const closeLightbox = reactExports.useCallback(() => setLightbox(null), []);
  const prevLightbox = reactExports.useCallback(
    () => setLightbox((i) => ((i ?? 0) - 1 + total) % total),
    [total]
  );
  const nextLightbox = reactExports.useCallback(
    () => setLightbox((i) => ((i ?? 0) + 1) % total),
    [total]
  );
  if (total === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "gallery", className: "py-12 md:py-16 bg-muted/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gold uppercase tracking-[0.25em] text-xs mb-3", children: "Gallery" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-heading font-display text-4xl md:text-5xl font-semibold", children: "Photo gallery" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal", children: images.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setLightbox(i),
          className: "group relative rounded-2xl overflow-hidden bg-muted border border-border card-soft focus:outline-none focus:ring-2 focus:ring-gold",
          "aria-label": `Open ${img.caption}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: img.src,
                alt: img.caption,
                loading: "lazy",
                decoding: "async",
                className: "w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-gold text-primary grid place-items-center shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomIn, { size: 20 }) }) })
          ]
        },
        i
      )) })
    ] }),
    lightbox !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Lightbox,
      {
        images,
        index: lightbox,
        onClose: closeLightbox,
        onPrev: prevLightbox,
        onNext: nextLightbox
      }
    )
  ] });
}
function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" }
  });
  const onSubmit = async (data) => {
    const text = `Hello Dr. Chandra Shekhar,

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Subject: ${data.subject}

Message:
${data.message}

(Sent via website contact form)`;
    const whatsappURL = `https://wa.me/${professor.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappURL, "_blank");
    toast.success("Opening WhatsApp to send your message...", {
      description: `Thanks, ${data.name}.`
    });
    reset();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "py-12 md:py-16 bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gold uppercase tracking-[0.25em] text-xs mb-3", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-heading font-display text-4xl md:text-5xl font-semibold", children: "Get in touch" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-soft bg-card border border-border p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl", children: professor.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
            professor.role,
            ", Bharatiya Vidya Bhavan, New Delhi"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-full bg-[#25D366]/15 text-[#25D366] grid place-items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 18 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Mobile / WhatsApp" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: professor.phone }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: professor.social.whatsapp,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "inline-flex items-center gap-1.5 text-sm font-semibold text-[#25D366] hover:underline mt-1",
                  children: "Chat on WhatsApp →"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-full bg-gold/15 text-gold grid place-items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 18 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${professor.email}`, className: "font-medium hover:text-gold transition", children: professor.email })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-full bg-gold/15 text-gold grid place-items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 18 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Institution" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: professor.institution }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: professor.university })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic", children: "I typically respond within a few hours." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: handleSubmit(onSubmit),
          className: "reveal card-soft bg-card border border-border p-6 md:p-8 space-y-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name", error: errors.name?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ...register("name", { required: "Please enter your name" }),
                className: inputCls(!!errors.name),
                placeholder: "Your full name"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email Address", error: errors.email?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "email",
                ...register("email", {
                  required: "Email is required",
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" }
                }),
                className: inputCls(!!errors.email),
                placeholder: "you@example.com"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone Number (optional)", error: errors.phone?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "tel",
                ...register("phone"),
                className: inputCls(!!errors.phone),
                placeholder: "+91 …"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Subject", error: errors.subject?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                ...register("subject", { required: "Please choose a subject" }),
                className: inputCls(!!errors.subject),
                defaultValue: "",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Select a topic…" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Academic / Research Inquiry" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Admission Query" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Career Counseling" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Collaboration Proposal" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Media / Press Inquiry" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Other" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Message", error: errors.message?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                rows: 5,
                ...register("message", {
                  required: "A short message helps me reply faster",
                  minLength: { value: 20, message: "At least 20 characters" }
                }),
                className: inputCls(!!errors.message),
                placeholder: "How can I help?"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "submit",
                disabled: isSubmitting,
                className: "w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1EBE57] text-white py-3 font-semibold hover:scale-[1.02] transition-all disabled:opacity-60 shadow-lg shadow-[#25D366]/25",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 18, fill: "currentColor", className: "text-white" }),
                  isSubmitting ? "Sending…" : "Send via WhatsApp"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center pt-2", children: `💬 Prefer to chat? Click "Send via WhatsApp" and I'll receive your message directly on WhatsApp. I typically respond within a few hours.` })
          ]
        }
      )
    ] })
  ] }) });
}
function Field({
  label,
  error,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5", children }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 block text-xs text-destructive", children: error })
  ] });
}
function inputCls(error) {
  return cn(
    "w-full rounded-xl bg-background border px-4 py-3 text-sm outline-none transition",
    error ? "border-destructive focus:ring-2 focus:ring-destructive/30" : "border-border focus:border-gold focus:ring-2 focus:ring-gold/30"
  );
}
const links = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" }
];
function Footer() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-primary text-primary-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl", children: professor.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 text-sm mt-2 italic", children: "Professor, Researcher & Education Advisor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 text-sm mt-2", children: professor.institution }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/60 text-xs", children: professor.university })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "uppercase tracking-[0.2em] text-xs text-gold mb-4", children: "Quick links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" }),
            className: "hover:text-gold transition",
            children: l.label
          }
        ) }, l.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "uppercase tracking-[0.2em] text-xs text-gold mb-4", children: "Connect" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mb-4", children: [
          { Icon: Mail, href: professor.social.email, label: "Email" },
          { Icon: MessageCircle, href: professor.social.whatsapp, label: "WhatsApp" },
          { Icon: Youtube, href: professor.social.youtube, label: "YouTube" },
          { Icon: FileText, href: professor.social.springer, label: "Springer" },
          { Icon: Newspaper, href: professor.social.jatit, label: "JATIT" }
        ].map(({ Icon, href, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href,
            target: "_blank",
            rel: "noreferrer",
            "aria-label": label,
            className: "w-10 h-10 rounded-full grid place-items-center bg-white/5 hover:bg-gold hover:text-primary border border-white/10 transition",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16 })
          },
          label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${professor.email}`, className: "inline-flex items-center gap-2 text-sm hover:text-gold transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 14 }),
          " ",
          professor.email
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        year >= 2025 ? year : 2025,
        " ",
        professor.name,
        ". All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
          className: "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 hover:bg-gold hover:text-primary hover:border-gold transition",
          children: [
            "Back to top ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { size: 12 })
          ]
        }
      )
    ] }) })
  ] });
}
function Index() {
  useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Research, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Awards, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Media, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-right" })
  ] });
}
export {
  Index as component
};
