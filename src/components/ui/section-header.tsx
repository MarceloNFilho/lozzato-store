import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  href?: string;
  linkLabel?: string;
  actions?: ReactNode;
  className?: string;
}

const SectionHeader = ({
  eyebrow,
  title,
  href,
  linkLabel = "Ver tudo",
  actions,
  className,
}: SectionHeaderProps) => {
  return (
    <div className={cn("flex items-end justify-between gap-6", className)}>
      <div className="flex flex-col gap-3">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="font-display text-2xl font-semibold uppercase tracking-[0.04em] md:text-[34px] md:leading-none">
          {title}
        </h2>
      </div>

      <div className="flex shrink-0 items-center gap-4">
        {href && (
          <Link
            href={href}
            className="group flex items-center gap-1 font-display text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
          >
            {linkLabel}
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        )}
        {actions}
      </div>
    </div>
  );
};

export default SectionHeader;
