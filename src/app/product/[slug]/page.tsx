import { prismaClient } from "@/lib/prisma";
import ProductImages from "../components/product-images";
import computeProductTotalPrice from "@/helpers/products";
import ProductDetails from "../components/product-details";

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
  });

  if (!product) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductDetails product={computeProductTotalPrice(product)} />
    </div>
  );
};

export default ProductDetailsPage;
