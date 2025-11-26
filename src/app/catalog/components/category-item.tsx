import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="flex flex-col gap-2 rounded-3xl bg-card py-3">
        <div className="flex aspect-square w-full items-center justify-center rounded-3xl bg-card">
          <Image
            src={category.imageUrl}
            alt={category.name}
            width={0}
            height={0}
            quality={100}
            sizes="100vw"
            className="h-full max-h-[70%] w-auto max-w-[80%] object-contain"
          />
        </div>

        <div className="rounded-bl-3xl rounded-br-3xl bg-card py-3">
          <p className="text-center text-sm font-semibold">{category.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
