import { useState } from "react";
import {
  Check,
  CircleAlert,
  CircleCheck,
  Copy,
  LoaderCircle,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { profile, socials } from "../data/portfolio";
import { cn } from "../lib/utilis";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const statusMessages = {
  success: "Message sent successfully! I'll get back to you soon.",
  error: "Something went wrong. Please try again later.",
};

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [isCopied, setIsCopied] = useState(false);

  const isSending = status === "sending";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status !== "idle" && status !== "sending") setStatus("idle");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
      });
  };

  const copyEmail = () => {
    navigator.clipboard
      ?.writeText(profile.email)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(() => {});
  };

  const contactMethods = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
    { icon: MapPin, label: "Location", value: profile.location },
  ];

  return (
    <section id="contacts" className="relative py-24 md:py-32">
      <div className="shell">
        <div className="card relative overflow-hidden">
          <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-40 h-[30rem] w-[30rem]"
            style={{
              background:
                "radial-gradient(closest-side, hsl(var(--primary) / 0.18), transparent)",
            }}
          />

          <div className="relative grid grid-cols-1 gap-12 p-5 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
            {/* Contact Information */}
            <div className="min-w-0">
              <SectionHeading
                index="05"
                label="Contact"
                title="Let's turn your concept into a masterpiece!"
                description="Interested in collaborating or starting a new project? Don't hesitate to reach out, I'm always excited to discuss new opportunities."
              />

              <Reveal delay={100}>
                <ul className="mt-10 space-y-3">
                  {contactMethods.map(({ icon: Icon, label, value, href }) => (
                    <li
                      key={label}
                      className="flex items-center gap-4 rounded-2xl border border-border bg-background/50 p-3 pr-4"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
                          {label}
                        </span>
                        {href ? (
                          <a
                            href={href}
                            className="block truncate font-medium transition-colors hover:text-primary"
                          >
                            {value}
                          </a>
                        ) : (
                          <span className="block font-medium">{value}</span>
                        )}
                      </span>
                      {label === "Email" && (
                        <button
                          type="button"
                          onClick={copyEmail}
                          className="icon-btn h-9 w-9 shrink-0"
                          aria-label={isCopied ? "Email address copied" : "Copy email address"}
                        >
                          {isCopied ? (
                            <Check className="h-4 w-4 text-primary" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Social Links */}
                <div className="mt-8 flex items-center gap-3">
                  {socials.map(({ name, href, icon: Icon }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn"
                      aria-label={name}
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Contact Form */}
            <Reveal delay={150} className="min-w-0">
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-[1.25rem] border border-border bg-background/70 p-5 shadow-xl shadow-black/5 backdrop-blur sm:p-8"
              >
                {/* Hidden fields used by the EmailJS template */}
                <input type="hidden" name="to_name" value="Fiyinfoluwa" />
                <input
                  type="hidden"
                  name="time"
                  value={new Date().toLocaleString()}
                />

                <div>
                  <p className="text-xl font-semibold tracking-tight">Send a message</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    All fields are required.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="field"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="field"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="field resize-y min-h-36"
                    placeholder="Write your message..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="btn btn-primary w-full"
                >
                  {isSending ? (
                    <>
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="btn-arrow h-4 w-4" />
                    </>
                  )}
                </button>

                <p
                  role="status"
                  aria-live="polite"
                  className={cn(
                    "flex items-center gap-2 text-sm",
                    status === "success" && "text-primary",
                    status === "error" && "text-red-500"
                  )}
                >
                  {status === "success" && <CircleCheck className="h-4 w-4 shrink-0" />}
                  {status === "error" && <CircleAlert className="h-4 w-4 shrink-0" />}
                  {statusMessages[status]}
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
