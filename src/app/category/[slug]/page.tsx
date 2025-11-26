import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { CATEGORY_ICON } from "@/constants/category-icon";
import computeProductTotalPrice from "@/helpers/products";
import { prismaClient } from "@/lib/prisma";
import MotionContainer from "@/components/ui/motion-container";

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
    <div className="mt-20 flex max-w-[1280px] flex-col items-center gap-8 max-xl:p-5 lg:mx-auto xl:py-5">
      <MotionContainer className="flex w-full items-start" delay={0.1}>
        <Badge variant="heading">
          {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
          {category.name}
        </Badge>
      </MotionContainer>

      <MotionContainer
        className="grid w-full grid-cols-2 gap-6 max-md:gap-4 lg:grid-cols-4 xl:grid-cols-5"
        delay={0.2}
      >
        {category.products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              product={computeProductTotalPrice(product)}
            />
          );
        })}
      </MotionContainer>
    </div>
  );
};

export default CategoryProducts;
