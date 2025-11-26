import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./category-item";

const Categories = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="grid w-full max-w-[1280px] grid-cols-2 gap-x-6 gap-y-2 max-md:gap-x-4 lg:grid-cols-3 xl:mx-auto xl:grid-cols-6">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Categories;
