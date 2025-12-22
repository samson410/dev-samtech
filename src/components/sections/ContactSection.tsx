import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail } from "lucide-react";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Please share your name." })
    .max(100, { message: "Name should be under 100 characters." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email." })
    .max(255, { message: "Email is too long." }),
  message: z
    .string()
    .trim()
    .min(10, { message: "A bit more detail helps me respond thoughtfully." })
    .max(1200, { message: "Message is a bit too long. Can you tighten it up?" }),
});

export const ContactSection = () => {
  const { toast } = useToast();
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof values, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof typeof values) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

 const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof typeof values, string>> = {};
    parsed.error.issues.forEach((issue) => {
      const field = issue.path[0] as keyof typeof values;
      fieldErrors[field] = issue.message;
    });
    setErrors(fieldErrors);
    return;
  }

  setSubmitting(true);

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    const result = await res.json();

    if (res.ok) {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setValues({ name: "", email: "", message: "" });
    } else {
      toast({
        title: "Error sending message",
        description: result.message || "Something went wrong. Try again later.",
        variant: "destructive",
      });
    }
  } catch (err) {
    console.error(err);
    toast({
      title: "Error sending message",
      description: "Something went wrong. Try again later.",
      variant: "destructive",
    });
  } finally {
    setSubmitting(false);
  }
};

  return (
    <section id="contact" className="bg-background/98">
      <div className="section-shell grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Let&apos;s talk about your next release.</h2>
          <p className="section-body">
            Whether you&apos;re validating a new idea, evolving an existing product, or untangling a complex codebase, I
            enjoy joining early, asking sharp questions, and helping you ship with confidence.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="story-link inline-flex items-center gap-2 hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="story-link inline-flex items-center gap-2 hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="mailto:hello@example.com"
              className="story-link inline-flex items-center gap-2 hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-panel mt-2 space-y-4 bg-elevated/90 p-6 shadow-soft-subtle backdrop-blur-xl"
          noValidate
        >
          <div className="space-y-1">
            <label htmlFor="name" className="text-xs font-medium text-muted-foreground">
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange("name")}
              placeholder="How should I address you?"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-[11px] text-destructive">
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="text-xs font-medium text-muted-foreground">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange("email")}
              placeholder="Where can I reach you?"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-[11px] text-destructive">
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="text-xs font-medium text-muted-foreground">
              Project, idea, or question
            </label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={handleChange("message")}
              placeholder="Share context, constraints, and what success looks like."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-[11px] text-destructive">
                {errors.message}
              </p>
            )}
          </div>

          <Button type="submit" variant="hero" size="lg" className="w-full hover-scale" disabled={submitting}>
            {submitting ? "Preparing message..." : "Send message"}
          </Button>

          <p className="text-[11px] text-muted-foreground">
            This contact form is intentionally simple. No tracking, no noise—just a direct line when you&apos;re ready to
            talk.
          </p>
        </form>
      </div>
    </section>
  );
};
