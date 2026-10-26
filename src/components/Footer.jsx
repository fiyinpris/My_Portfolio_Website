import { ArrowUp } from "lucide-react";
import { navItems, profile, socials } from "../data/portfolio";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="shell py-12 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Building responsive, user-friendly interfaces with React,
              JavaScript and Tailwind CSS.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm sm:grid-cols-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

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
        </div>

        <div className="mt-12 flex flex-col-reverse gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {profile.fullName}. All rights
            reserved.
          </p>
          <a
            href="#hero"
            className="group inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Back to top
            <span className="icon-btn h-9 w-9 group-hover:-translate-y-0.5 group-hover:border-primary/50 group-hover:text-primary">
              <ArrowUp className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none -mb-[3.5vw] select-none text-center text-[19vw] font-semibold leading-none tracking-[-0.06em] text-foreground/[0.04]"
      >
        {profile.firstName}
      </p>
    </footer>
  );
};
