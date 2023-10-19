import { prismaClient } from "@/lib/prisma";
import ProductImages from "../components/product-images";
import computeProductTotalPrice from "@/helpers/products";
import ProductDetails from "../components/product-details";
import ProductList from "@/components/ui/product-list";

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8 pb-8">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductDetails product={computeProductTotalPrice(product)} />
      <div>
        <ProductList
          products={product.category.products}
          title="produtos recomendados"
        />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
