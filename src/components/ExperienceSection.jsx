import { ArrowUpRight, Download, FolderGit2, MapPin } from "lucide-react";
import { experience, profile } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SpotlightCard } from "./SpotlightCard";

const glance = [
  { label: "Focus", value: "Frontend & backend development" },
  { label: "Experience", value: profile.experience },
  { label: "Core stack", value: "React, Tailwind CSS, JavaScript" },
  { label: "Location", value: profile.location },
  { label: "Languages", value: profile.languages.join(", ") },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          index="03"
          label="Experience"
          title="Where I've sharpened my craft."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Timeline */}
          <ol className="space-y-8 lg:col-span-8">
            {experience.map((job) => (
              <Reveal
                as="li"
                key={`${job.company}-${job.period}`}
                className="relative pl-6 sm:pl-10"
              >
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-[5px] top-3 w-px bg-gradient-to-b from-primary/70 via-border to-transparent"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-2 h-[11px] w-[11px] rounded-full bg-primary animate-pulse-dot"
                />

                <SpotlightCard interactive={false} className="p-5 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="eyebrow">
                      <span className="text-primary">{job.period}</span>
                    </p>
                    <p className="chip">
                      <MapPin className="h-3 w-3" />
                      {job.location}
                    </p>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-muted-foreground">{job.company}</p>

                  <ul className="mt-6 space-y-3">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 leading-relaxed text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {job.keyProject && (
                    <a
                      href={job.keyProject.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-7 flex items-start gap-4 rounded-2xl border border-border bg-muted/40 p-4 transition-colors duration-300 hover:border-primary/40"
                    >
                      <span className="hidden h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary sm:grid">
                        <FolderGit2 className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="eyebrow block">Key project</span>
                        <span className="mt-1 block font-medium">
                          {job.keyProject.title}
                        </span>
                        <span className="mt-1 block text-sm text-muted-foreground">
                          {job.keyProject.summary}
                        </span>
                      </span>
                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                      <span className="sr-only">(opens the live site in a new tab)</span>
                    </a>
                  )}

                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                    {job.tags.map((tag) => (
                      <li key={tag} className="chip">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            ))}
          </ol>

          {/* At a glance */}
          <Reveal as="aside" delay={150} className="lg:col-span-4">
            <SpotlightCard interactive={false} className="p-6 sm:p-8 lg:sticky lg:top-28">
              <p className="eyebrow">At a glance</p>
              <dl className="mt-4 divide-y divide-border">
                {glance.map((item) => (
                  <div key={item.label} className="py-4">
                    <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                      {item.label}
                    </dt>
                    <dd className="mt-1 font-medium">{item.value}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={profile.cv}
                download={profile.cvFileName}
                className="btn btn-outline mt-4 w-full"
              >
                <Download className="h-4 w-4" />
                Download full CV
              </a>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
