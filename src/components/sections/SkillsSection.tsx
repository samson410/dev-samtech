import { Badge } from "@/components/ui/badge";

const skillsByTier = {
  Core: ["HTML", "CSS", "JavaScript", "React", "Git / GitHub"],
  Advanced: ["TypeScript", "Node.js", "PHP", "REST APIs"],
  Learning: ["Design systems", "Advanced performance", "DevOps & observability"],
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="border-b border-border/60 bg-background/95">
      <div className="section-shell">
        <p className="section-kicker text-foreground/80">Skills &amp; tools</p>
        <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-start">
          <div>
            <h2 className="section-title text-foreground">A focused stack for building modern web products.</h2>
            <p className="section-body">
              My toolkit is intentionally opinionated: technologies that are battle-tested, maintainable, and proven in
              production. I value clarity over hype, automation over repetition, and design awareness at every layer.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted-foreground">
              <Badge variant="outline">HTML</Badge>
              <Badge variant="outline">CSS</Badge>
              <Badge variant="outline">JavaScript</Badge>
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">PHP</Badge>
              <Badge variant="outline">Git / GitHub</Badge>
              <Badge variant="outline">UI/UX awareness</Badge>
            </div>
          </div>

          <div className="grid gap-6 rounded-3xl bg-elevated/80 p-6 shadow-soft-subtle backdrop-blur-xl sm:grid-cols-3 sm:gap-8 sm:p-7 lg:p-8">
            {Object.entries(skillsByTier).map(([tier, items]) => (
              <div
                key={tier}
                className="min-h-[150px] space-y-3 rounded-2xl bg-elevated-soft/60 px-4 py-5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">{tier}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="h-1.5 w-5 rounded-full bg-gradient-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
