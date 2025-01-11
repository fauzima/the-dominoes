"use client";
import { useTheme } from "next-themes";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <button
      onClick={toggleTheme}
      className="hover:bg-accent w-24 rounded-full bg-primary py-1 text-center text-white transition-colors ease-in-out sm:w-32 mr-1"
      aria-label="Theme selector button"
    >
      {theme === "dark" ? "Dark theme" : "Light theme"}
    </button>
  );
}
