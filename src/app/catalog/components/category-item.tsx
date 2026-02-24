import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div 
        className="flex flex-col gap-2 bg-card py-3"
        style={{
          clipPath: "polygon(1rem 0px, 100% 0px, 100% calc(100% - 1rem), calc(100% - 1rem) 100%, 0px 100%, 0px 1rem)",
        }}
      >
        <div className="flex aspect-square w-full items-center justify-center bg-card">
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

        <div className="bg-card py-3">
          <p className="text-center text-sm font-semibold">{category.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
