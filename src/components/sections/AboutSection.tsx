export const AboutSection = () => {
  return (
    <section id="about" className="border-b border-border/60 bg-background/95">
      <div className="section-shell grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-start">
        <div>
          <p className="section-kicker">About</p>
          <h2 className="section-title">Engineering that balances craft and clarity.</h2>
          <p className="section-body">
            I&apos;m a software engineer and full-stack web developer who cares deeply about building products that feel
            thoughtful, stable, and fast. I gravitate toward problems where UX, performance, and maintainable
            architecture intersect.
          </p>
          <p className="section-body mt-4">
            My work spans modern frontends with React and TypeScript, reliable backends, and the glue in-between—APIs,
            data modeling, and systems that scale without becoming fragile. I enjoy collaborating with designers, asking
            sharp questions, and turning ideas into experiences that feel inevitable.
          </p>
        </div>

        <div className="space-y-4 rounded-3xl bg-elevated/80 p-6 shadow-soft-subtle backdrop-blur-xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Focus areas</p>
          <dl className="mt-3 space-y-4 text-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <dt className="font-medium text-foreground">Frontend engineering</dt>
                <dd className="mt-1 text-xs text-muted-foreground">
                  React, TypeScript, design systems, and interfaces that feel cinematic yet precise.
                </dd>
              </div>
              <span className="rounded-full bg-secondary/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary-foreground">
                Core
              </span>
            </div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <dt className="font-medium text-foreground">Backend & architecture</dt>
                <dd className="mt-1 text-xs text-muted-foreground">
                  API design, data modeling, and systems that prioritize reliability and clarity.
                </dd>
              </div>
              <span className="rounded-full bg-secondary/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary-foreground">
                Strong
              </span>
            </div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <dt className="font-medium text-foreground">Long-term growth</dt>
                <dd className="mt-1 text-xs text-muted-foreground">
                  Curious about advanced frontend patterns, DX, and how AI reshapes product-building workflows.
                </dd>
              </div>
              <span className="rounded-full bg-secondary/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary-foreground">
                Always learning
              </span>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};
