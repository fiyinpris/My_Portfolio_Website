import {
  Code,
  Palette,
  Server,
  Database,
  Wrench,
  Smartphone,
} from "lucide-react";

const skills = [
  {
    name: "HTML/CSS",
    level: 90,
    description:
      "Crafting responsive, pixel-perfect interfaces with modern CSS techniques",
    category: "frontend",
    icon: Palette,
  },
  {
    name: "JavaScript",
    level: 85,
    description: "Building interactive experiences with vanilla JS and ES6+",
    category: "frontend",
    icon: Code,
  },
  {
    name: "React",
    level: 88,
    description:
      "Creating dynamic UIs with hooks, context, and modern React patterns",
    category: "frontend",
    icon: Code,
  },
  {
    name: "Node.js",
    level: 80,
    description: "Building scalable backend services and RESTful APIs",
    category: "backend",
    icon: Server,
  },
  {
    name: "Tailwind CSS",
    level: 90,
    description:
      "Designing modern, responsive, and visually appealing UIs efficiently using Tailwind utility classes.",
    category: "frontend",
    icon: Palette,
  },
  {
    name: "Git / GitHub",
    level: 85,
    description:
      "Version control and collaboration using Git and GitHub for efficient project management.",
    category: "tools",
    icon: Wrench,
  },
];

export const SkillSection = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-8">
          {/* Left side heading */}
          <div className="lg:max-w-xs text-center lg:text-left">
            <h3 className="text-primary font-bold text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 ">
              How Can I <br className="hidden sm:block" /> Assist You?
            </h3>
            <p className="text-foreground/70 text-sm hidden lg:block">
              With expertise across frontend and modern development
              tools, I bring your ideas to life.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full lg:w-auto lg:max-w-3xl">
            {skills.map((skill, key) => {
              const IconComponent = skill.icon;
              const number = String(key + 1).padStart(2, "0");

              return (
                <div
                  key={key}
                  className="bg-card border p-4 sm:p-5 rounded-lg shadow-sm hover:shadow-md card-hover flex flex-col justify-between min-h-[140px] sm:min-h-[160px]"
                >
                  {/* Top section: Circular Progress and Description */}
                  <div className="flex items-start gap-3 mb-3">
                    {/* Circular Progress (same size as icon was: 8x8) */}
                    <div className="relative w-8 h-8 shrink-0">
                      <svg className="w-8 h-8 transform -rotate-90">
                        <circle
                          cx="16"
                          cy="16"
                          r="14"
                          stroke="currentColor"
                          strokeWidth="3"
                          fill="none"
                          className="text-secondary/50"
                        />
                        <circle
                          cx="16"
                          cy="16"
                          r="14"
                          stroke="currentColor"
                          strokeWidth="3"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 14}`}
                          strokeDashoffset={`${
                            2 * Math.PI * 14 * (1 - skill.level / 100)
                          }`}
                          className="text-primary transition-all duration-1000"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[8px] font-bold">{skill.level}%</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Bottom section: Skill name (left) and Number (right) */}
                  <div className="flex items-end justify-between pt-3 border-t border-border">
                    <h4 className="font-semibold text-base sm:text-lg">
                      {skill.name}
                    </h4>
                    <span className="text-base sm:text-sm font-bold ">
                      {number}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};