import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import computeProductTotalPrice from "@/helpers/products";
import { prismaClient } from "@/lib/prisma";
import { Percent } from "lucide-react";
import MotionContainer from "@/components/ui/motion-container";

const DealsPage = async () => {
  const products = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div className="mt-20 flex max-w-[1280px] flex-col items-center gap-8 max-xl:p-5 lg:mx-auto xl:py-5">
      <MotionContainer className="flex w-full items-start" delay={0.1}>
        <Badge variant="heading">
          <Percent size={16} />
          Ofertas
        </Badge>
      </MotionContainer>

      <MotionContainer
        className="grid w-full grid-cols-2 gap-8 lg:grid-cols-4 xl:grid-cols-5"
        delay={0.2}
      >
        {products.map((product) => {
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

export default DealsPage;
