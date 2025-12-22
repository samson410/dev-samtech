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
  return (
    <header className="sticky top-0 z-40 nav-blur">
      <div className="section-shell flex items-center justify-between gap-4 py-4 sm:py-5">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow group-hover:shadow-glow-strong transition-shadow">
            <span className="font-display text-sm font-semibold">SE</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-sm font-semibold tracking-tight">Software Engineer</span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Full-Stack Web</span>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-xs font-medium text-muted-foreground sm:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className="story-link hover:text-foreground transition-colors"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#projects"
            className="hidden text-xs font-medium text-muted-foreground hover:text-foreground sm:inline-flex story-link"
          >
            View work
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
