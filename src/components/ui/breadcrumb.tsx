import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const trail: BreadcrumbItem[] = [{ label: "Início", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1.5">
        {trail.map((item, index) => (
          <li
            key={`${item.label}-${index}`}
            className="flex min-w-0 items-center gap-1.5"
          >
            {index > 0 && (
              <ChevronRight
                size={12}
                aria-hidden
                className="shrink-0 text-muted-foreground/60"
              />
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="whitespace-nowrap text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="line-clamp-1 text-xs">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
