import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./category-item";

const Categories = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="grid max-w-[1280px] grid-cols-2 gap-x-4 gap-y-2 xl:mx-auto xl:grid-cols-6">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Categories;
