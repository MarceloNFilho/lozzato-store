import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { Category } from "@prisma/client";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`category/${category.slug}`}>
      <Button
        variant="default"
        className="flex w-full items-center justify-center gap-2 py-3 max-lg:bg-card max-lg:text-primary"
      >
        {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
        <span className="text-xs font-bold uppercase">{category.name}</span>
      </Button>
    </Link>
  );
};

export default CategoryItem;
