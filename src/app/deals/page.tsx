import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import computeProductTotalPrice from "@/helpers/products";
import { prismaClient } from "@/lib/prisma";
import { Percent } from "lucide-react";

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
      <div className="flex w-full items-start">
        <Badge variant="heading">
          <Percent size={16} />
          Ofertas
        </Badge>
      </div>

      <div className="grid w-full grid-cols-2 gap-8 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => {
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

export default DealsPage;
