import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utilis";

export const ThemeToggle = ({ className }) => {
  // index.html applies the saved theme before React loads, so read it from <html>
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    const nextIsDark = !isDarkMode;
    document.documentElement.classList.toggle("dark", nextIsDark);
    try {
      localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    } catch {
      // storage can be unavailable (private mode); the toggle still works
    }
    setIsDarkMode(nextIsDark);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn("icon-btn", className)}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Sun className="h-[18px] w-[18px]" />
      ) : (
        <Moon className="h-[18px] w-[18px]" />
      )}
    </button>
  );
};
