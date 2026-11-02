import ProductItem from "@/components/ui/product-item";
import PageHeader from "@/components/ui/page-header";
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
    <div className="page-container flex flex-col gap-12 pb-24">
      <PageHeader
        title={category.name}
        icon={CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        breadcrumb={[
          { label: "Catálogo", href: "/catalog" },
          { label: category.name },
        ]}
        meta={`${category.products.length} ${
          category.products.length === 1 ? "produto" : "produtos"
        }`}
      />

      <div className="grid w-full grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 xl:grid-cols-5">
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
