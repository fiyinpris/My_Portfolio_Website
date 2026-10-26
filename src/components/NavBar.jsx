import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "../lib/utilis";
import { navItems, socials } from "../data/portfolio";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const sectionIds = ["hero", ...navItems.map((item) => item.href.slice(1))];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const progressRef = useRef(null);

  // Navbar background and the scroll progress line
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      setIsScrolled(window.scrollY > 10);
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    const handleScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Highlight the link of the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Mobile menu: lock page scroll, close on Escape or when resized to desktop
  useEffect(() => {
    if (!isMenuOpen) return;

    const desktop = window.matchMedia("(min-width: 768px)");
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    const handleDesktop = (e) => {
      if (e.matches) setIsMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleDesktop);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleDesktop);
    };
  }, [isMenuOpen]);

  const handleLinkClick = (e) => {
    setIsMenuOpen(false);

    // The open menu locks page scroll, which would cancel the jump to the
    // section, so unlock first and scroll to the target ourselves.
    const href = e.currentTarget.getAttribute("href");
    const target = href?.startsWith("#") && document.getElementById(href.slice(1));
    if (!target) return;

    e.preventDefault();
    document.body.style.overflow = "";
    target.scrollIntoView();
    window.history.pushState(null, "", href);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
          isScrolled || isMenuOpen
            ? "border-border bg-background/75 backdrop-blur-xl"
            : "border-transparent"
        )}
      >
        <nav
          aria-label="Main"
          className="shell flex h-16 items-center justify-between gap-4 md:h-[4.5rem]"
        >
          <Logo onClick={handleLinkClick} />

          {/* Desktop view */}
          <ul className="hidden items-center gap-1 rounded-full border border-border bg-card/60 p-1 backdrop-blur md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "block rounded-full px-3 py-1.5 text-sm transition-colors duration-300 lg:px-4",
                      isActive
                        ? "bg-foreground/[0.08] text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contacts"
              className="btn btn-invert hidden min-h-10 px-5 py-2 text-sm lg:inline-flex"
            >
              Let's talk
              <ArrowUpRight className="btn-arrow btn-arrow-diagonal h-4 w-4" />
            </a>

            {/* Mobile hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="icon-btn md:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Scroll progress */}
        <div
          ref={progressRef}
          aria-hidden="true"
          className="absolute -bottom-px left-0 h-px w-full origin-left bg-gradient-to-r from-primary to-accent"
          style={{ transform: "scaleX(0)" }}
        />
      </header>

      {/* Mobile view (kept outside the header so its blur doesn't trap the overlay) */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 bg-background/95 pt-16 backdrop-blur-xl transition-[opacity,visibility] duration-300 md:hidden",
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div className="shell flex h-full flex-col justify-between overflow-y-auto pb-10 pt-6">
          <ul>
            {navItems.map((item, index) => (
              <li
                key={item.href}
                className={cn(
                  "transition-[opacity,transform] duration-500",
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                )}
                style={{
                  transitionDelay: isMenuOpen ? `${80 + index * 50}ms` : "0ms",
                }}
              >
                <a
                  href={item.href}
                  onClick={handleLinkClick}
                  className="flex items-baseline gap-4 border-b border-border py-4 text-3xl font-medium tracking-tight transition-colors hover:text-primary"
                >
                  <span className="font-mono text-xs text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-6">
            <a
              href="#contacts"
              onClick={handleLinkClick}
              className="btn btn-primary w-full"
            >
              Let's talk
            </a>
            <div className="flex justify-center gap-3">
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
          </div>
        </div>
      </div>
    </>
  );
};
