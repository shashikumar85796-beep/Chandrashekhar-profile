import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Prof. Dr. Chandra Shekhar" },
      { name: "description", content: "Privacy Policy for www.prof-chandrashekhar.com, managed by GIPSM Technology India Private Limited." },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-gold transition text-sm mb-6"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <p className="text-gold uppercase tracking-[0.25em] text-xs mb-3 font-semibold">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-primary-foreground/60 text-sm mt-3">Last updated: June 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16 space-y-10">

        {/* Business Information */}
        <section>
          <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">1. Business Information</h2>
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              This website (<a href="https://www.prof-chandrashekhar.com" className="text-gold hover:underline">www.prof-chandrashekhar.com</a>) is owned, managed, and maintained by{" "}
              <span className="font-semibold text-foreground">GIPSM Technology India Private Limited</span>.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">Registered Company</p>
                <p className="text-foreground font-medium">GIPSM Technology India Private Limited</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">GSTIN</p>
                <p className="text-foreground font-medium font-mono">07AAHCG9141N2Z3</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">Registered Office</p>
                <p className="text-foreground">
                  Plot No. 4B/4/1, Khasra No. 648, Gali No. 6,<br />
                  Indra Park Palam, New Delhi – 110045.
                </p>
              </div>
            </div>
            <p className="pt-2 border-t border-border">
              The website represents the professional profile, academic work, research, publications, and educational activities of{" "}
              <span className="text-foreground font-medium">Prof. Dr. Chandra Shekhar</span>.
            </p>
          </div>
        </section>

        {/* Information We Collect */}
        <section>
          <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">2. Information We Collect</h2>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>We may collect the following information when you use this website:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Name, email address, and phone number submitted via the contact form</li>
              <li>Messages and inquiries sent through the website</li>
              <li>Usage data such as pages visited and time spent (via analytics tools)</li>
            </ul>
          </div>
        </section>

        {/* How We Use Information */}
        <section>
          <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">3. How We Use Your Information</h2>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>Information collected is used solely to:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Respond to your inquiries and messages</li>
              <li>Provide academic counselling and career guidance information</li>
              <li>Improve the website and user experience</li>
            </ul>
            <p>We do not sell, trade, or transfer your personal information to third parties.</p>
          </div>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">4. Cookies</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This website may use cookies to enhance the user experience. Cookies are small files stored on your device. You may choose to disable cookies through your browser settings, though this may affect certain features of the website.
          </p>
        </section>

        {/* Third-Party Links */}
        <section>
          <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">5. Third-Party Links</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This website contains links to external websites including YouTube, LinkedIn, Instagram, Facebook, and academic publication platforms. We are not responsible for the privacy practices or content of these third-party sites.
          </p>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">6. Data Security</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">7. Contact Us</h2>
          <div className="bg-card border border-border rounded-2xl p-6 text-sm text-muted-foreground leading-relaxed space-y-2">
            <p>If you have any questions about this Privacy Policy, please contact:</p>
            <p className="font-semibold text-foreground">GIPSM Technology India Private Limited</p>
            <p>
              Email:{" "}
              <a href="mailto:info@prof-chandrashekhar.com" className="text-gold hover:underline">
                info@prof-chandrashekhar.com
              </a>
            </p>
            <p>GSTIN: <span className="font-mono text-foreground">07AAHCG9141N2Z3</span></p>
            <p>Plot No. 4B/4/1, Khasra No. 648, Gali No. 6, Indra Park Palam, New Delhi – 110045.</p>
          </div>
        </section>

      </div>

      {/* Footer */}
      <div className="border-t border-border py-6 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Prof. Dr. Chandra Shekhar. Managed by GIPSM Technology India Private Limited.</p>
          <Link to="/" className="hover:text-gold transition">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
