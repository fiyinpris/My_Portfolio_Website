import { Reveal } from "./Reveal";
import { cn } from "../lib/utilis";

export const SectionHeading = ({
  index,
  label,
  title,
  description,
  align = "left",
  className,
}) => {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p
        className={cn(
          "eyebrow flex items-center gap-3",
          align === "center" && "justify-center"
        )}
      >
        <span className="text-primary">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-border" />
        {label}
      </p>
      <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance leading-[1.08]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </Reveal>
  );
};
