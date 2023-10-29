import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import CategoryItem from "./components/category-item";

const CatalogPage = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="flex max-w-[1280px] flex-col items-center gap-8 max-xl:p-5 lg:mx-auto xl:py-5">
      <div className="flex w-full items-start">
        <Badge variant="heading">
          <ShapesIcon size={16} />
          Catálogo
        </Badge>
      </div>

      <div className="grid w-full grid-cols-2 gap-8 lg:grid-cols-4 xl:grid-cols-5">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
