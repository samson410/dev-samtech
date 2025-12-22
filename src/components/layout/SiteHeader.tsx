import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { NavLink } from "@/components/NavLink";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

export const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavItemClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 nav-blur">
      <div className="section-shell flex items-center justify-between gap-4 py-4 sm:py-5">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="flex h-9 px-3 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow group-hover:shadow-glow-strong transition-shadow">
            <span className="font-display text-sm font-semibold tracking-tight">SamTech</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-sm font-semibold tracking-tight">Software Engineer</span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Full-Stack Web</span>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-xs font-medium text-muted-foreground sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="story-link hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="order-1 sm:order-2">
            <ThemeToggle />
          </div>

          <button
            type="button"
            className="order-2 inline-flex items-center justify-center rounded-2xl border border-border/60 bg-background/80 px-3 py-2 text-xs font-medium text-muted-foreground shadow-soft-subtle transition-colors hover:bg-background/95 sm:hidden sm:order-1"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            <span className="sr-only">Toggle navigation</span>
          </button>

          <a
            href="#projects"
            className="hidden text-xs font-medium text-muted-foreground hover:text-foreground sm:inline-flex story-link"
          >
            View work
          </a>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border/60 bg-background/98 shadow-soft-subtle sm:hidden">
          <div className="section-shell py-4">
            <ul className="flex flex-col gap-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="story-link block py-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={handleNavItemClick}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};
