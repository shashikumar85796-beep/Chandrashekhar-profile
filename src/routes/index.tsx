import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Research } from "@/components/site/Research";
import { Awards } from "@/components/site/Awards";
import { Media } from "@/components/site/Media";
import { Gallery } from "@/components/site/Gallery";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/components/site/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Chandra Shekhar — Professor, Big Data Researcher & Career Advisor | Bharatiya Vidya Bhavan, New Delhi" },
      {
        name: "description",
        content:
          "Official website of Dr. Chandra Shekhar — Professor & In-Charge (Admissions) at Bharatiya Vidya Bhavan, New Delhi. Expert in Big Data Analytics, Cybersecurity & Hadoop. Career Advisor on DD Prasar Bharati's Shiksha Avam Rojgar.",
      },
      { name: "keywords", content: "Dr. Chandra Shekhar, Professor, Big Data Analytics, Bharatiya Vidya Bhavan, Career Advisor, DD Prasar Bharati, Shiksha Avam Rojgar, Cybersecurity, Hadoop, Research" },
      { name: "author", content: "Dr. Chandra Shekhar" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Dr. Chandra Shekhar — Professor & Career Advisor | Bharatiya Vidya Bhavan" },
      { property: "og:description", content: "Professor, Big Data Researcher, and nationally recognized Career Advisor on DD Prasar Bharati. Bharatiya Vidya Bhavan, New Delhi." },
      { property: "og:type", content: "profile" },
      { property: "og:locale", content: "en_IN" },
      { property: "profile:first_name", content: "Chandra" },
      { property: "profile:last_name", content: "Shekhar" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dr. Chandra Shekhar — Professor & Career Advisor" },
      { name: "twitter:description", content: "Professor at Bharatiya Vidya Bhavan, Big Data Researcher, and Career Advisor on DD Prasar Bharati's Shiksha Avam Rojgar." },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Research />
        <Awards />
        <Media />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}
