import { profile } from "../data/portfolio";
import { cn } from "../lib/utilis";

export const Logo = ({ className, onClick }) => {
  return (
    <a
      href="#hero"
      onClick={onClick}
      className={cn("group flex items-center gap-3", className)}
      aria-label={`${profile.firstName}, back to top`}
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-card font-mono text-sm font-semibold text-primary transition-colors duration-300 group-hover:border-primary/60">
        P
      </span>
      <span className="leading-tight">
        <span className="block text-[0.95rem] font-semibold tracking-tight">
          {profile.firstName}
        </span>
        <span className="block font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">
          Developer
        </span>
      </span>
    </a>
  );
};
