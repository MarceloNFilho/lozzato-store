import Categories from "./components/categories";
import ProductList from "../../components/ui/product-list";
import { prismaClient } from "@/lib/prisma";
import PromoBanner from "./components/promo-banner";

export default async function Home() {
  const productsWithDiscount = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <div className="flex max-w-[1280px] flex-col gap-8 max-lg:py-8 md:gap-10 lg:mx-auto lg:pb-8">
      <div className="hidden rounded-lg lg:block">
        <PromoBanner
          src="/banner-home-desktop-01.png"
          alt="Até 55% de desconto esse mês!"
        />
      </div>

      <div className="block lg:hidden">
        <PromoBanner
          src="/banner-home-01.png"
          alt="Até 55% de desconto esse mês!"
        />
      </div>

      <div className="max-xl:px-5">
        <Categories />
      </div>

      <div>
        <ProductList title="ofertas" products={productsWithDiscount} />
      </div>

      <div className="hidden items-center justify-between md:mx-auto md:min-w-[1280px] xl:flex">
        <PromoBanner
          src="/banner-home-02.png"
          alt="Até 55% de desconto em mouses!"
          className="h-[215px] max-w-[602px]"
        />

        <PromoBanner
          src="/banner-home-03.png"
          alt="Até 55% de desconto em mouses!"
          className="h-[215px] max-w-[602px]"
        />
      </div>

      <div className="xl:hidden">
        <PromoBanner
          src="/banner-home-02.png"
          alt="Até 55% de desconto em mouses!"
        />
      </div>

      <div>
        <ProductList title="teclados" products={keyboards} />
      </div>

      <div className="lg:hidden">
        <PromoBanner
          src="/banner-home-03.png"
          alt="Até 55% de desconto em mouses!"
        />
      </div>

      <div className="hidden lg:block">
        <PromoBanner
          src="/banner-frete-gratis-desktop.png"
          alt="Até 55% de desconto em mouses!"
        />
      </div>

      <div>
        <ProductList title="mouses" products={mouses} />
      </div>
    </div>
  );
}
