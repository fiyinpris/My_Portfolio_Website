import { cn } from "../lib/utilis";

// Card with a soft glow that follows the cursor
export const SpotlightCard = ({
  as: Tag = "div",
  className,
  interactive = true,
  children,
  ...props
}) => {
  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <Tag
      onPointerMove={handlePointerMove}
      className={cn(
        "card spotlight",
        interactive && "card-interactive",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};
