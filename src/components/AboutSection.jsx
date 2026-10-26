import { ArrowRight, Code, Compass, Download } from "lucide-react";
import { profile } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SpotlightCard } from "./SpotlightCard";

const highlights = [
  {
    icon: Code,
    title: "Web developer",
    text: "I'm a creative web developer with 3 years of experience building responsive, user-friendly interfaces using React, JavaScript, HTML and Tailwind CSS. I love turning ideas into engaging digital experiences across all devices.",
  },
  {
    icon: Compass,
    title: "Mission",
    text: "My mission is to help startups and enterprises build meaningful connections between their products and satisfied, engaged customers.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="shell">
        {/* Heading and intro */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              index="01"
              label="About me"
              title="Turning ideas into engaging digital experiences."
            />
          </div>

          <Reveal delay={120} className="lg:col-span-5">
            <p className="text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
              An experienced front-end developer proficient in HTML/CSS,
              Tailwind CSS, React, and JavaScript. I thrive in dynamic
              environments, driving innovation and overcoming challenges
              effectively.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contacts" className="btn btn-primary">
                Get in touch
                <ArrowRight className="btn-arrow h-4 w-4" />
              </a>
              <a
                href={profile.cv}
                download={profile.cvFileName}
                className="btn btn-outline"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </Reveal>
        </div>

        {/* Highlights */}
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {highlights.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 120}>
              <SpotlightCard className="flex h-full flex-col p-6 sm:p-8">
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
