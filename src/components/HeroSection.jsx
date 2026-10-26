import { ArrowDown, ArrowRight, Download } from "lucide-react";
import portrait from "../images/fiyin3.jpeg";
import { profile, skills, socials, toolkit } from "../data/portfolio";

const focusStack = ["React", "Tailwind CSS", "JavaScript", "Node.js"];
const marqueeItems = [
  ...skills.map((skill) => skill.name),
  ...toolkit.proficient,
  ...toolkit.familiar,
];

const fadeUp = (delay) => ({ animationDelay: `${delay}ms` });

export const HeroSection = () => {
  return (
    <section id="hero" className="relative flex min-h-[100svh] flex-col pt-24 md:pt-28">
      <div className="shell grid flex-1 grid-cols-1 items-center gap-16 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:py-16">
        {/* Intro */}
        <div className="max-w-2xl">
          <p className="eyebrow animate-fade-up">
            {profile.role}
            <span aria-hidden="true" className="mx-2 hidden text-muted-foreground/50 sm:inline">
              /
            </span>
            <span className="block sm:inline">Based in {profile.location}</span>
          </p>

          <h1
            className="mt-6 text-[clamp(3rem,9vw,6.25rem)] font-semibold leading-[0.95] tracking-[-0.045em] animate-fade-up"
            style={fadeUp(100)}
          >
            Hi, I'm <span className="text-gradient">Priscilla</span>.
          </h1>

          <p
            className="mt-6 text-2xl font-medium leading-snug tracking-tight text-foreground/85 text-balance sm:text-3xl animate-fade-up"
            style={fadeUp(200)}
          >
            I turn ideas into engaging digital experiences across all devices.
          </p>

          <p
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg animate-fade-up"
            style={fadeUp(300)}
          >
            I'm a React enthusiast passionate about creating responsive,
            user-friendly interfaces with HTML, CSS, JavaScript, and Tailwind
            CSS.
          </p>

          <div
            className="mt-9 flex flex-col gap-3 sm:flex-row animate-fade-up"
            style={fadeUp(400)}
          >
            <a href="#contacts" className="btn btn-primary">
              Connect with me
              <ArrowRight className="btn-arrow h-4 w-4" />
            </a>
            <a href="#projects" className="btn btn-outline">
              View projects
            </a>
          </div>

          <div
            className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4 animate-fade-up"
            style={fadeUp(500)}
          >
            <div className="flex gap-2">
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
            <span aria-hidden="true" className="hidden h-6 w-px bg-border sm:block" />
            <a
              href={profile.cv}
              download={profile.cvFileName}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div
          className="relative mx-auto w-full max-w-[19rem] sm:max-w-sm lg:mr-0 lg:max-w-[25rem] animate-fade-up"
          style={fadeUp(300)}
        >
          {/* orbit ring */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 aspect-square w-[125%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/70"
          />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 aspect-square w-[125%] -translate-x-1/2 -translate-y-1/2"
          >
            <div
              className="h-full w-full rounded-full animate-spin-slow"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0 72%, hsl(var(--primary) / 0.9) 88%, transparent 100%)",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1px))",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1px))",
              }}
            />
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-black/20">
            <img
              src={portrait}
              alt="Portrait of Priscilla"
              width="863"
              height="1080"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"
            />
          </div>

          {/* status chip */}
          <div className="absolute -top-4 right-2 flex items-center gap-2 rounded-full border border-border bg-background/85 px-3.5 py-2 text-xs font-medium shadow-lg backdrop-blur-md sm:-right-6 animate-float">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-dot" />
            Open to opportunities
          </div>

          {/* stack panel */}
          <div className="absolute -bottom-10 -left-3 w-[11.5rem] rounded-2xl border border-border bg-background/85 p-3.5 shadow-xl backdrop-blur-md sm:-bottom-8 sm:-left-10 sm:w-[13.5rem] sm:p-4">
            <div className="flex items-center justify-between border-b border-border pb-2.5">
              <span className="font-mono text-[0.68rem] text-muted-foreground">
                priscilla.stack
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[0.68rem] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                core
              </span>
            </div>
            <ul className="mt-1">
              {focusStack.map((item, index) => (
                <li
                  key={item}
                  className="flex items-center justify-between py-1 text-[0.8rem] sm:py-1.5 sm:text-sm"
                >
                  {item}
                  <span className="font-mono text-[0.65rem] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="mx-auto mb-6 hidden items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary md:inline-flex"
      >
        Scroll down
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
      </a>

      {/* Tech marquee */}
      <div
        className="marquee-mask overflow-hidden border-y border-border bg-card/40 py-5"
        role="region"
        aria-label="Technologies I work with"
      >
        <ul className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <li
              key={index}
              aria-hidden={index >= marqueeItems.length ? "true" : undefined}
              className="flex items-center gap-10 whitespace-nowrap pr-10 font-mono text-sm uppercase tracking-[0.18em] text-muted-foreground"
            >
              {item}
              <span aria-hidden="true" className="text-primary">
                ✦
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
