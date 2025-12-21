import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-soft hover:bg-primary/90 hover:shadow-soft-strong",
        destructive:
          "bg-destructive text-destructive-foreground shadow-soft hover:bg-destructive/90 hover:shadow-soft-strong",
        outline:
          "border border-border/60 bg-background/40 text-foreground hover:bg-background/70 hover:border-border shadow-soft-subtle",
        secondary:
          "bg-secondary/70 text-secondary-foreground shadow-soft hover:bg-secondary hover:shadow-soft-strong",
        ghost: "bg-transparent text-foreground hover:bg-accent/40 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero:
          "bg-gradient-primary text-primary-foreground px-7 shadow-glow hover:shadow-glow-strong hover:brightness-110",
        subtle:
          "bg-elevated/80 text-foreground border border-border/40 shadow-soft-subtle hover:bg-elevated hover:border-border/80",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-3 text-xs",
        lg: "h-12 px-7 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
