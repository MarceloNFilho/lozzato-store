import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./components/category-item";
import PageHeader from "@/components/ui/page-header";

export const metadata = { title: "Catálogo" };

const CatalogPage = async () => {
  const categories = await prismaClient.category.findMany({
    include: { _count: { select: { products: true } } },
  });

  return (
    <div className="page-container flex flex-col gap-12 pb-24">
      <PageHeader
        title="Catálogo"
        description="Tudo o que você precisa para montar um setup de alta performance, organizado por categoria."
        breadcrumb={[{ label: "Catálogo" }]}
        meta={`${categories.length} categorias`}
      />

      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            productCount={category._count.products}
          />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
