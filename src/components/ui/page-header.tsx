import { ReactNode } from "react";
import Breadcrumb, { BreadcrumbItem } from "./breadcrumb";

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  breadcrumb?: BreadcrumbItem[];
  meta?: string;
}

const PageHeader = ({
  title,
  description,
  icon,
  breadcrumb = [],
  meta,
}: PageHeaderProps) => {
  return (
    <header className="flex flex-col gap-6 border-b border-border pb-10 pt-32 md:pt-36">
      <Breadcrumb items={breadcrumb} />

      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            {icon && (
              <span className="chamfer-xs flex h-11 w-11 items-center justify-center bg-black/[0.06] text-foreground [&_svg]:h-5 [&_svg]:w-5">
                {icon}
              </span>
            )}
            <h1 className="font-display text-4xl font-semibold uppercase tracking-[0.04em] md:text-6xl">
              {title}
            </h1>
          </div>
          {description && (
            <p className="max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        {meta && <span className="eyebrow shrink-0 tabular-nums">{meta}</span>}
      </div>
    </header>
  );
};

export default PageHeader;
