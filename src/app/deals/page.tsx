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
    <div className="flex flex-col items-center gap-8 p-5">
      <div className="flex w-full items-start">
        <Badge variant="heading">
          <Percent size={16} />
          Ofertas
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-8">
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
