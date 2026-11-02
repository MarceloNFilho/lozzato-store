import { CATEGORY_ICON } from "@/constants/category-icon";
import { Category } from "@prisma/client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="product-stage chamfer group relative flex aspect-[4/5] w-[42%] shrink-0 snap-start flex-col justify-between overflow-hidden p-4 sm:w-[30%] md:w-auto"
    >
      <div className="relative z-10 flex items-start justify-between">
        <span className="text-foreground/50 transition-colors group-hover:text-foreground">
          {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
        </span>
        <ArrowUpRight
          size={16}
          className="text-foreground/40 transition-all duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
        />
      </div>

      <div className="absolute inset-x-[10%] inset-y-[20%]">
        <Image
          src={category.imageUrl}
          alt=""
          fill
          sizes="(min-width: 1280px) 16vw, (min-width: 768px) 30vw, 42vw"
          className="object-contain drop-shadow-[0_16px_20px_rgba(0,0,0,0.12)] transition-transform duration-700 ease-premium group-hover:scale-[1.08]"
        />
      </div>

      <span className="relative z-10 font-display text-sm font-semibold uppercase tracking-[0.16em]">
        {category.name}
      </span>
    </Link>
  );
};

export default CategoryItem;
