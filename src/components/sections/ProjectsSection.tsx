import { Badge } from "@/components/ui/badge";
import { Github, Globe, Link2 } from "lucide-react";

const projects = [
  {
    title: "Product analytics dashboard",
    purpose: "Turn raw product metrics into decisions teams can actually act on.",
    tech: ["React", "TypeScript", "Recharts", "Node.js"],
    value: "Clean dashboards, segmentable metrics, and a UX that respects focus.",
    href: "#",
  },
  {
    title: "Client project delivery portal",
    purpose: "Give clients a single, honest view of progress, scope, and next steps.",
    tech: ["React", "PHP", "REST APIs", "PostgreSQL"],
    value: "Reduced status meetings and made collaboration feel transparent.",
    href: "#",
  },
  {
    title: "Design-aware marketing site engine",
    purpose: "Ship new marketing pages without rewriting the front-end each time.",
    tech: ["React", "TypeScript", "Headless CMS", "UI/UX"],
    value: "Fast iteration with performance budgets baked into the system.",
    href: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="border-b border-border/60 bg-background/95">
      <div className="section-shell">
        <p className="section-kicker">Selected work</p>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="section-title">Projects built to solve concrete problems.</h2>
            <p className="section-body">
              Each project starts with a clear constraint: what decision, workflow, or experience needs to feel easier?
              Then we work backwards into architecture, interfaces, and details that hold up in production.
            </p>
          </div>
          <div className="flex gap-3 text-xs text-muted-foreground">
            <span className="hidden items-center gap-2 sm:inline-flex">
              <Globe className="h-3.5 w-3.5" />
              Real-world use cases
            </span>
            <span className="flex items-center gap-2">
              <Link2 className="h-3.5 w-3.5" />
              Links on request
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group block"
              onClick={(e) => {
                if (!project.href || project.href === "#") {
                  e.preventDefault();
                }
              }}
            >
              <article className="glass-panel flex h-full flex-col justify-between bg-elevated-soft/90 p-5 hover-scale">
                <header>
                  <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{project.purpose}</p>
                </header>

                <div className="mt-4 flex flex-wrap gap-1.5 text-[11px]">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{project.value}</p>

                <div className="mt-4 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Github className="h-3.5 w-3.5" />
                    Code samples & breakdowns available.
                  </span>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
