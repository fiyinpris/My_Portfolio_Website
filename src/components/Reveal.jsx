import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utilis";

// Fades and slides its children in the first time they scroll into view
export const Reveal = ({
  as: Tag = "div",
  delay = 0,
  className,
  style,
  children,
  ...props
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", isVisible && "is-visible", className)}
      style={{ "--reveal-delay": `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
};
