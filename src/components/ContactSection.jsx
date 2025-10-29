import { useState } from "react";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { cn } from "../lib/utilis";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Please try again later.");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contacts" className="py-24 px-4 relative bg-secondary">
      <div className="container mx-auto max-w-3xl text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Interested in collaborating or starting a new project? Don’t hesitate
          to reach out, I'm always excited to discuss new opportunities.
        </p>

        {/* first card contact info */}
        <div className="relative bg-gradient-to-tr from-teal-800 via-teal-900 to-teal-400 p-6 md:p-8 rounded-lg shadow-md mb-16 w-full sm:w-[90%] md:max-w-3xl mx-auto overflow-hidden border-white/20 card-hover">
          {/* Background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,rgba(0,0,0,0)_70%)]"></div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-white">
              Let's turn your concept into a masterpiece!
            </h3>

            {/* Contact Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* For Hidden fields for EmailJS for sending mails */}
              <input type="hidden" name="to_name" value="Fiyinfoluwa" />
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />

              {/* Main forms*/}
              <div className="flex flex-col md:flex-row items-center gap-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-5 py-4 md:px-4 md:py-3 rounded-full border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-teal-300 animate-fade-in-delay-1"
                  placeholder="Enter your name"
                  required
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-5 py-4 md:px-4 md:py-3 rounded-full border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-teal-300 animate-fade-in-delay-2"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full h-44 md:h-40 px-5 py-4 md:px-4 md:py-3 rounded-md border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-teal-300 resize-none animate-fade-in-delay-3"
                placeholder="Write your message..."
                required
              />

              <button
                type="submit"
                disabled={isSending}
                className={cn(
                  "normal-button w-full flex items-center justify-center gap-2 disabled:opacity-70 bg-white/20 hover:bg-white/30 text-white transition animate-fade-in-delay-4 py-4 md:py-3"
                )}
              >
                {isSending ? "Sending..." : "Send Message"}
                {!isSending && <Send size={16} />}
              </button>
            </form>
          </div>
        </div>
        {/* End of my main form*/}

        {/* Contact Information Section */}
        <div className="space-y-10 text-center">
          <h3 className="text-2xl font-semibold text-foreground">
            Contact Information
          </h3>

          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            {/* Contact Details */}
            <div className="space-y-5">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:fiyinolaleke@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  fiyinolaleke@gmail.com
                </a>
              </div>

              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a
                  href="tel:+2348135424926"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +234 813 5424 926
                </a>
              </div>

              <div className="flex items-center justify-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <p className="text-muted-foreground">Nigeria</p>
              </div>
            </div>

            {/* Divider for large screens */}
            <div className="hidden md:block h-20 w-px bg-muted-foreground/20" />

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/olaleke-fiyin-453528291"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-transform transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://www.instagram.com/_f_pris"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-transform transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-transform transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
