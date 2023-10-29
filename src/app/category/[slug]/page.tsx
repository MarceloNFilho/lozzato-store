import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { CATEGORY_ICON } from "@/constants/category-icon";
import computeProductTotalPrice from "@/helpers/products";
import { prismaClient } from "@/lib/prisma";

const CategoryProducts = async ({ params }: any) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  });

  if (!category) {
    return null;
  }

  return (
    <div className="flex max-w-[1280px] flex-col items-center gap-8 max-xl:p-5 lg:mx-auto xl:py-5">
      <div className="flex w-full items-start">
        <Badge variant="heading">
          {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
          {category.name}
        </Badge>
      </div>

      <div className="grid w-full grid-cols-2 gap-8 lg:grid-cols-4 xl:grid-cols-5">
        {category.products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              product={computeProductTotalPrice(product)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryProducts;
