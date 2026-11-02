import { prismaClient } from "@/lib/prisma";
import ProductImages from "../components/product-images";
import computeProductTotalPrice from "@/helpers/products";
import ProductDetails from "../components/product-details";
import ProductList from "@/components/ui/product-list";
import Breadcrumb from "@/components/ui/breadcrumb";

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
    <div className="flex flex-col gap-24 pb-24 pt-24 md:gap-32 md:pt-28">
      <div className="page-container flex flex-col gap-8">
        <Breadcrumb
          items={[
            {
              label: product.category.name,
              href: `/category/${product.category.slug}`,
            },
            { label: product.name },
          ]}
        />

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_460px]">
          <ProductImages imageUrls={product.imageUrls} name={product.name} />
          <ProductDetails
            categoryName={product.category.name}
            product={JSON.parse(
              JSON.stringify(computeProductTotalPrice(product)),
            )}
          />
        </div>
      </div>

      {product.category.products.length > 0 && (
        <ProductList
          eyebrow="Você também pode gostar"
          title="Recomendados"
          href={`/category/${product.category.slug}`}
          products={JSON.parse(JSON.stringify(product.category.products))}
        />
      )}
    </div>
  );
};

export default ProductDetailsPage;
