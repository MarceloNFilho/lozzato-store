import { Category } from "@prisma/client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
  productCount?: number;
}

const CategoryItem = ({ category, productCount }: CategoryItemProps) => {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="product-stage chamfer-lg group relative flex aspect-square flex-col justify-between overflow-hidden p-5 md:p-8"
    >
      <div className="relative z-10 flex items-start justify-between gap-2">
        <div className="flex flex-col gap-1">
          <p className="font-display text-base font-semibold uppercase tracking-[0.1em] md:text-2xl">
            {category.name}
          </p>
          {productCount !== undefined && (
            <p className="text-xs text-muted-foreground md:text-sm">
              {productCount} {productCount === 1 ? "produto" : "produtos"}
            </p>
          )}
        </div>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/[0.06] text-foreground/60 transition-all duration-300 ease-premium group-hover:bg-primary group-hover:text-primary-foreground">
          <ArrowUpRight size={16} />
        </span>
      </div>

      <div className="absolute inset-x-[14%] bottom-[10%] top-[28%]">
        <Image
          src={category.imageUrl}
          alt={category.name}
          fill
          quality={100}
          sizes="(min-width: 768px) 33vw, 50vw"
          className="object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,0.12)] transition-transform duration-700 ease-premium group-hover:scale-[1.06]"
        />
      </div>
    </Link>
  );
};

export default CategoryItem;
