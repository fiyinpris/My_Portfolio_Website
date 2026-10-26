import { ArrowRight, Code, Compass, Download } from "lucide-react";
import myImage from "../images/fiyin2.jpeg";
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

const facts = [
  { label: "Experience", value: profile.experience },
  { label: "Based in", value: profile.location },
  { label: "Languages", value: profile.languages.join(" & ") },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="shell grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Photo */}
        <Reveal className="lg:col-span-5">
          <figure className="relative mx-auto max-w-sm lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2.4rem] border border-dashed border-border"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-card">
              <img
                src={myImage}
                alt="Priscilla smiling in a pink dress"
                width="1080"
                height="932"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-[50%_30%] transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-5 pt-16 text-white">
                <p className="font-semibold">{profile.fullName}</p>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/70">
                  {profile.role}
                </p>
              </figcaption>
            </div>
          </figure>
        </Reveal>

        {/* Text */}
        <div className="lg:col-span-7">
          <SectionHeading
            index="01"
            label="About me"
            title="Turning ideas into engaging digital experiences."
            description="An experienced front-end developer proficient in HTML/CSS, Tailwind CSS, React, and JavaScript. I thrive in dynamic environments, driving innovation and overcoming challenges effectively."
          />

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 120}>
                <SpotlightCard className="h-full p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <dl className="mt-8 grid grid-cols-3 divide-x divide-border rounded-2xl border border-border bg-card/50">
              {facts.map((fact) => (
                <div key={fact.label} className="px-3 py-4 sm:px-5">
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground sm:text-[0.68rem]">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-semibold sm:text-base">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

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
      </div>
    </section>
  );
};
