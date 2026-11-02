import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PromoTileProps {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  imageUrl?: string;
  highlight?: string;
  className?: string;
}

const PromoTile = ({
  eyebrow,
  title,
  description,
  href,
  cta,
  imageUrl,
  highlight,
  className,
}: PromoTileProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "chamfer-lg group relative flex min-h-[340px] flex-col justify-between overflow-hidden bg-card p-8 md:min-h-[420px] md:p-10",
        className,
      )}
    >
      <div className="relative z-10 flex max-w-[56%] flex-col gap-4">
        <span className="eyebrow">{eyebrow}</span>
        <h3 className="font-display text-3xl font-semibold uppercase leading-[1] tracking-[0.02em] md:text-[40px]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>

      {highlight && (
        <span className="pointer-events-none absolute -bottom-6 right-6 z-0 select-none font-display text-[120px] font-bold leading-none text-black/[0.04] md:text-[160px]">
          {highlight}
        </span>
      )}

      {imageUrl && (
        <Image
          src={imageUrl}
          alt=""
          width={0}
          height={0}
          sizes="(min-width: 1024px) 30vw, 60vw"
          className="absolute bottom-8 right-4 z-0 h-auto w-[40%] max-w-[260px] object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.14)] transition-transform duration-700 ease-premium group-hover:-translate-y-2 group-hover:scale-[1.04] md:right-10"
        />
      )}

      <span className="relative z-10 mt-8 flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
        {cta}
        <ArrowRight
          size={14}
          className="transition-transform duration-300 ease-premium group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
};

export default PromoTile;
