import { prismaClient } from "@/lib/prisma";
import ProductImages from "../components/product-images";
import computeProductTotalPrice from "@/helpers/products";
import ProductDetails from "../components/product-details";
import ProductList from "@/components/ui/product-list";
import MotionContainer from "@/components/ui/motion-container";

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
    <div className="mt-20 flex max-w-[1280px] flex-col gap-8 max-lg:pb-8 lg:mx-auto lg:py-8">
      <MotionContainer className="flex gap-8 max-xl:px-0 max-lg:flex-col">
        <ProductImages imageUrls={product.imageUrls} name={product.name} />
        <ProductDetails product={computeProductTotalPrice(product)} />
      </MotionContainer>
      <MotionContainer delay={0.2}>
        <ProductList
          products={product.category.products}
          title="produtos recomendados"
        />
      </MotionContainer>
    </div>
  );
};

export default ProductDetailsPage;
