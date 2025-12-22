import { Github, Linkedin, Mail } from "lucide-react";

export const SiteFooter = () => {
  return (
    <footer className="border-t border-border/60 bg-background/80">
      <div className="section-shell flex flex-col gap-4 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p className="order-2 sm:order-1">
          © {new Date().getFullYear()} Designed and built by Tunde Samson Bada.
        </p>
        <div className="order-1 flex items-center gap-3 sm:order-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="story-link hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="story-link hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:hello@example.com"
            aria-label="Send email"
            className="story-link hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
