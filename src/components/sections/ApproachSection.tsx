export const ApproachSection = () => {
  return (
    <section id="approach" className="border-b border-border/60 bg-background/95">
      <div className="section-shell grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start">
        <div>
          <p className="section-kicker">Why work with me</p>
          <h2 className="section-title">A calm, methodical approach to building software.</h2>
          <p className="section-body">
            Good engineering is more than clever solutions—it&apos;s about clarity, communication, and code that still makes
            sense months later. I focus on building systems your future self and your team will thank you for.
          </p>
        </div>

        <div className="space-y-4 rounded-3xl bg-elevated/80 p-6 shadow-soft-subtle backdrop-blur-xl">
          <ul className="space-y-4 text-sm">
            <li>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Clean code by
                default</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Thoughtful abstractions, consistent patterns, and tests where they matter most—so features ship faster
                instead of slower over time.
              </p>
            </li>
            <li>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Communication you
                can rely on</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Clear progress updates, early risk calls, and a bias for documenting decisions so everyone stays aligned.
              </p>
            </li>
            <li>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Long-term value</p>
              <p className="mt-1 text-xs text-muted-foreground">
                I&apos;m not interested in fragile demos. We build with maintainability, performance, and observability in
                mind from day one.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
