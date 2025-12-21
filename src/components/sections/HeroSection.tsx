import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkle } from "lucide-react";
import { useEffect, useState } from "react";

const heroHighlights = [
  "Software Engineer & Full-Stack Web Developer",
  "Crafting reliable, scalable web products",
  "Design-aware. Performance-obsessed. Human-focused.",
];

export const HeroSection = () => {
  const [activeHighlight, setActiveHighlight] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveHighlight((prev) => (prev + 1) % heroHighlights.length);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-background/80 via-background/90 to-background/95"
    >
      <div className="pointer-events-none orb-light -top-40 left-1/4" aria-hidden="true" />
      <div className="pointer-events-none orb-light top-1/2 right-[-10%] opacity-20" aria-hidden="true" />

      <div className="section-shell flex flex-col gap-10 pt-16 pb-20 sm:pt-20 sm:pb-24 lg:flex-row lg:items-center lg:gap-16">
        <div className="relative z-10 flex-1 space-y-7 animate-fade-in">
          <p className="section-kicker flex items-center gap-2 text-[11px]">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-[10px] text-secondary-foreground">
              <Sparkle className="h-3 w-3" />
            </span>
            Building the future, one precise commit at a time
          </p>

          <h1 className="section-title font-display text-[2.6rem] leading-[1.05] sm:text-[3.1rem] lg:text-[3.4rem]">
            <span className="hero-gradient-text block">Software engineer</span>
            <span className="mt-1 block text-foreground">crafting cinematic web experiences.</span>
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            I design and build full-stack web applications that feel effortless to use, yet powerful under the hood—clean
            architecture, thoughtful UX, and production-grade execution from concept to launch.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button variant="hero" size="lg" className="hover-scale" asChild>
              <a href="#projects" className="flex items-center gap-2">
                View selected work
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="subtle" size="lg" className="hover-scale" asChild>
              <a href="#contact">Let&apos;s build something</a>
            </Button>
            <p className="w-full text-xs text-muted-foreground sm:w-auto">
              Currently focused on React, TypeScript, and scalable backend architecture.
            </p>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="rounded-full bg-secondary/60 px-3 py-1 text-[10px] font-medium text-secondary-foreground">
              Full-stack web development
            </span>
            <span className="rounded-full bg-secondary/40 px-3 py-1 text-[10px] font-medium text-secondary-foreground">
              Product-minded engineering
            </span>
          </div>
        </div>

        <aside className="relative z-10 flex-1 max-w-md self-stretch lg:max-w-sm">
          <div className="glass-panel bg-elevated-soft/90 p-5 sm:p-6 lg:p-7 animate-enter">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Signal snapshot</p>
            <p className="mt-3 text-sm font-medium text-muted-foreground">How I show up as an engineer</p>

            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-6 rounded-full bg-gradient-primary" />
                <div>
                  <p className="text-xs font-medium text-muted-foreground">End-to-end ownership</p>
                  <p className="text-xs text-muted-foreground/80">
                    From architecture and APIs to polished UI, I care about every layer of the product.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-6 rounded-full bg-gradient-primary" />
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Reliable delivery</p>
                  <p className="text-xs text-muted-foreground/80">
                    I value clear communication, predictable timelines, and code that your team can trust.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-5 rounded-2xl border border-border/60 bg-background/60 px-4 py-3 text-xs text-muted-foreground">
              <p className="font-medium text-foreground">Currently exploring</p>
              <p className="mt-1 text-muted-foreground">
                Type-safe APIs, design systems, and how to make complex products feel simple.
              </p>
              <p className="mt-2 text-[11px] font-medium text-primary">
                {heroHighlights[activeHighlight]}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
