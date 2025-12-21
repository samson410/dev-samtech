import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      className="relative overflow-hidden"
    >
      <span className="pointer-events-none flex items-center justify-center">
        <Sun className="transition-all duration-300 data-[visible=false]:translate-y-3 data-[visible=false]:opacity-0" data-visible={theme === "light"} />
        <Moon className="absolute transition-all duration-300 data-[visible=false]:-translate-y-3 data-[visible=false]:opacity-0" data-visible={theme === "dark"} />
      </span>
    </Button>
  );
};
