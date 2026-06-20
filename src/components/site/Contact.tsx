import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, MessageCircle, Building2, Youtube, Instagram, Linkedin, Facebook } from "lucide-react";
import { toast } from "sonner";
import { professor } from "@/data/professor";
import { cn } from "@/lib/utils";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  });

  const onSubmit = async (data: FormValues) => {
    const text = `Hello Dr. Chandra Shekhar,\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || "Not provided"}\nSubject: ${data.subject}\n\nMessage:\n${data.message}\n\n(Sent via website contact form)`;
    const whatsappURL = `https://wa.me/${professor.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappURL, "_blank");
    toast.success("Opening WhatsApp to send your message...", {
      description: `Thanks, ${data.name}.`,
    });
    reset();
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-12 reveal">
          <p className="text-gold uppercase tracking-[0.25em] text-xs mb-3">Contact</p>
          <h2 className="section-heading font-display text-4xl md:text-5xl font-semibold">
            Get in touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="reveal space-y-8">
            <div className="card-soft bg-card border border-border p-6">
              <h3 className="font-display text-xl">{professor.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {professor.role}, Bharatiya Vidya Bhavan, New Delhi
              </p>
            </div>

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#25D366]/15 text-[#25D366] grid place-items-center shrink-0">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Mobile / WhatsApp</p>
                  <p className="font-medium">{professor.phone}</p>
                  <p className="font-medium">{professor.phone2}</p>
                  <a
                    href={professor.social.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#25D366] hover:underline mt-1"
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-gold/15 text-gold grid place-items-center shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                  <a href={`mailto:${professor.email}`} className="font-medium hover:text-gold transition">
                    {professor.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-gold/15 text-gold grid place-items-center shrink-0">
                  <Building2 size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Institution</p>
                  <p className="font-medium">{professor.institution}</p>
                  <p className="text-sm text-muted-foreground">{professor.university}</p>
                </div>
              </li>
            </ul>

            <p className="text-sm text-muted-foreground italic">
              I typically respond within a few hours.
            </p>

            {/* Social links */}
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Follow & Connect</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { Icon: Youtube,   href: professor.social.youtube,   label: "YouTube",   color: "hover:bg-[#FF0000] hover:border-[#FF0000]" },
                  { Icon: Instagram, href: professor.social.instagram, label: "Instagram", color: "hover:bg-[#E1306C] hover:border-[#E1306C]" },
                  { Icon: Linkedin,  href: professor.social.linkedin,  label: "LinkedIn",  color: "hover:bg-[#0A66C2] hover:border-[#0A66C2]" },
                  { Icon: Facebook,  href: professor.social.facebook,  label: "Facebook",  color: "hover:bg-[#1877F2] hover:border-[#1877F2]" },
                ].map(({ Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium hover:text-white transition ${color}`}
                  >
                    <Icon size={15} /> {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="reveal card-soft bg-card border border-border p-6 md:p-8 space-y-5"
          >
            <Field label="Full Name" error={errors.name?.message}>
              <input
                {...register("name", { required: "Please enter your name" })}
                className={inputCls(!!errors.name)}
                placeholder="Your full name"
              />
            </Field>
            <Field label="Email Address" error={errors.email?.message}>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                })}
                className={inputCls(!!errors.email)}
                placeholder="you@example.com"
              />
            </Field>
            <Field label="Phone Number (optional)" error={errors.phone?.message}>
              <input
                type="tel"
                {...register("phone")}
                className={inputCls(!!errors.phone)}
                placeholder="+91 …"
              />
            </Field>
            <Field label="Subject" error={errors.subject?.message}>
              <select
                {...register("subject", { required: "Please choose a subject" })}
                className={inputCls(!!errors.subject)}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a topic…
                </option>
                <option>Academic / Research Inquiry</option>
                <option>Admission Query</option>
                <option>Career Counseling</option>
                <option>Collaboration Proposal</option>
                <option>Media / Press Inquiry</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Message" error={errors.message?.message}>
              <textarea
                rows={5}
                {...register("message", {
                  required: "A short message helps me reply faster",
                  minLength: { value: 20, message: "At least 20 characters" },
                })}
                className={inputCls(!!errors.message)}
                placeholder="How can I help?"
              />
            </Field>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1EBE57] text-white py-3 font-semibold hover:scale-[1.02] transition-all disabled:opacity-60 shadow-lg shadow-[#25D366]/25"
            >
              <MessageCircle size={18} fill="currentColor" className="text-white" />
              {isSubmitting ? "Sending…" : "Send via WhatsApp"}
            </button>
            <p className="text-xs text-muted-foreground text-center pt-2">
              💬 Prefer to chat? Click "Send via WhatsApp" and I'll receive your message directly on WhatsApp. I typically respond within a few hours.
            </p>
          </form>
        </div>

        {/* Website Management Section */}
        <div className="mt-12 reveal border-t border-border pt-10">
          <div className="card-soft bg-card border border-border p-6 md:p-8">
            <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
              <Building2 size={18} className="text-gold" /> Website Management
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              This website is officially managed by{" "}
              <span className="font-semibold text-foreground">GIPSM Technology India Private Limited</span>{" "}
              on behalf of {professor.name}.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">For website-related support</p>
                <a href="mailto:info@prof-chandrashekhar.com" className="flex items-center gap-2 font-medium hover:text-gold transition">
                  <Mail size={14} className="text-gold" /> info@prof-chandrashekhar.com
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Company</p>
                <p className="font-medium text-foreground">GIPSM Technology India Private Limited</p>
                <p className="text-muted-foreground text-xs mt-0.5">GSTIN: 07AAHCG9141N2Z3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
        {label}
      </span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function inputCls(error: boolean) {
  return cn(
    "w-full rounded-xl bg-background border px-4 py-3 text-sm outline-none transition",
    error
      ? "border-destructive focus:ring-2 focus:ring-destructive/30"
      : "border-border focus:border-gold focus:ring-2 focus:ring-gold/30",
  );
}