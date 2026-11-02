import ProductItem from "@/components/ui/product-item";
import PageHeader from "@/components/ui/page-header";
import computeProductTotalPrice from "@/helpers/products";
import { prismaClient } from "@/lib/prisma";
import { Percent } from "lucide-react";

export const metadata = { title: "Ofertas" };

const DealsPage = async () => {
  const products = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    orderBy: { discountPercentage: "desc" },
  });

  return (
    <div className="page-container flex flex-col gap-12 pb-24">
      <PageHeader
        title="Ofertas"
        icon={<Percent />}
        description="Os melhores preços da loja, reunidos em um só lugar. Por tempo limitado."
        breadcrumb={[{ label: "Ofertas" }]}
        meta={`${products.length} produtos`}
      />

      <div className="grid w-full grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 xl:grid-cols-5">
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
