import { cn } from "@/lib/utils";

interface LogoSymbolProps {
  className?: string;
}

export const LogoSymbol = ({ className }: LogoSymbolProps) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden
    className={cn("h-6 w-6 shrink-0", className)}
  >
    <path fill="currentColor" d="M0 5L5 0H10V14H24V19L19 24H0Z" />
  </svg>
);

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

const Logo = ({ className, showWordmark = true }: LogoProps) => (
  <span className={cn("flex items-center gap-2.5 font-display", className)}>
    <LogoSymbol className="h-[1.2em] w-[1.2em]" />
    {showWordmark && (
      <span className="text-[1em] font-semibold uppercase leading-none tracking-[0.2em]">
        Lozzato
      </span>
    )}
  </span>
);

export default Logo;
