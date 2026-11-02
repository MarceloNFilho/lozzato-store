import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "chamfer-xs inline-flex items-center gap-1 px-2.5 py-1 font-display text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-black/[0.08] text-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "bg-black/[0.04] text-muted-foreground",
        heading: "w-fit gap-1.5 bg-black/[0.06] px-3 py-1.5 text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
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
