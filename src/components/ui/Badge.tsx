import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded px-2 py-0.5 text-[10px] font-mono font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border border-[var(--color-border)] bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)]",
        accent:
          "border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 text-[var(--color-accent-glow)]",
        functional:
          "border border-green-500/30 bg-green-500/10 text-green-400",
        experimental:
          "border border-amber-500/30 bg-amber-500/10 text-amber-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
