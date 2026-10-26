import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "../data/portfolio";
import { cn } from "../lib/utilis";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SpotlightCard } from "./SpotlightCard";

// Screenshot inside a minimal browser window
const ProjectPreview = ({ project }) => {
  const host = project.liveUrl ? new URL(project.liveUrl).host : "preview";
  const Wrapper = project.liveUrl ? "a" : "div";
  const linkProps = project.liveUrl
    ? {
        href: project.liveUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        tabIndex: -1,
        "aria-hidden": "true",
      }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className="block overflow-hidden rounded-2xl border border-border bg-muted/60"
    >
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        </span>
        <span className="mx-auto min-w-0 max-w-[70%] truncate rounded-full bg-background/70 px-3 py-1 font-mono text-[0.68rem] text-muted-foreground">
          {host}
        </span>
        <span aria-hidden="true" className="w-[42px]" />
      </div>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={encodeURI(project.image)}
          alt={`Screenshot of the ${project.title} website`}
          width="1024"
          height="768"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
    </Wrapper>
  );
};

const ProjectCard = ({ project, index }) => {
  const number = String(index + 1).padStart(2, "0");
  const isReversed = index % 2 === 1;

  return (
    <Reveal as="article">
      <SpotlightCard
        className="group grid grid-cols-1 gap-6 p-3 sm:p-4 lg:grid-cols-12 lg:items-center lg:gap-10"
      >
        <div className={cn("min-w-0 lg:col-span-7", isReversed && "lg:order-2")}>
          <ProjectPreview project={project} />
        </div>

        <div
          className={cn(
            "min-w-0 px-3 pb-5 sm:px-4 lg:col-span-5 lg:py-6",
            isReversed ? "lg:order-1 lg:pl-8" : "lg:pr-8"
          )}
        >
          <div className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="text-primary">{number}</span>
            <span aria-hidden="true">/</span>
            <span>{project.category}</span>
            {project.status && (
              <span className="ml-auto inline-flex items-center gap-2 text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
                {project.status}
              </span>
            )}
          </div>

          <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
            {project.tech.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Live site
                <ArrowUpRight className="btn-arrow btn-arrow-diagonal h-4 w-4" />
                <span className="sr-only">for {project.title} (opens in a new tab)</span>
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <Github className="h-4 w-4" />
                Source code
                <span className="sr-only">for {project.title} (opens in a new tab)</span>
              </a>
            )}
            {!project.liveUrl && !project.codeUrl && (
              <p className="chip">Screenshot preview</p>
            )}
          </div>
        </div>
      </SpotlightCard>
    </Reveal>
  );
};

export const ProjectSection = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="04"
            label="Projects"
            title="Selected work."
            description="Websites I've designed and built, from e-commerce to education."
          />
          <Reveal delay={150} className="shrink-0">
            <a
              href="https://github.com/fiyinpris"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Github className="h-4 w-4" />
              More on GitHub
              <ArrowUpRight className="btn-arrow btn-arrow-diagonal h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 space-y-8 md:space-y-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
