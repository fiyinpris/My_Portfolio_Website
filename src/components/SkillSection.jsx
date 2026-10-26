import { skills, toolkit } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SpotlightCard } from "./SpotlightCard";

export const SkillSection = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="shell grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left side heading */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              index="02"
              label="Skills"
              title="How can I assist you?"
              description="With expertise across frontend and modern development tools, I bring your ideas to life."
            />

            <Reveal delay={150} className="mt-10 space-y-6">
              <div>
                <p className="eyebrow">Also proficient in</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {toolkit.proficient.map((item) => (
                    <li key={item} className="chip text-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow">Familiar with</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {toolkit.familiar.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Skills Grid */}
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
          {skills.map((skill, key) => {
            const IconComponent = skill.icon;
            const number = String(key + 1).padStart(2, "0");

            return (
              <Reveal as="li" key={skill.name} delay={(key % 2) * 120}>
                <SpotlightCard className="flex h-full flex-col p-6">
                  <div className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                      <IconComponent className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">{skill.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {skill.description}
                  </p>

                  <div className="mt-6">
                    <div className="flex items-center justify-between font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
                      <span>Proficiency</span>
                      <span className="text-foreground">{skill.level}%</span>
                    </div>
                    <div
                      className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted"
                      role="progressbar"
                      aria-label={`${skill.name} proficiency`}
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="skill-bar h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        style={{ "--level": skill.level / 100 }}
                      />
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
