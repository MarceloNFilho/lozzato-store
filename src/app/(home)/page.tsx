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
    <div className="lg:space-y-6">
      <div className="relative hidden rounded-lg lg:block">
        <PromoBanner
          src="/banner-home-desktop-01.png"
          alt="Até 55% de desconto esse mês!"
          className="h-[463px] object-cover opacity-20"
        />

        <div className="absolute left-1/2 top-1/2 h-full w-full max-w-[1280px] -translate-x-1/2 -translate-y-1/2 transform">
          <div className="flex h-full flex-col justify-end pb-6 max-xl:px-5">
            <div>
              <Categories />
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-w-[1280px] flex-col gap-8 max-lg:py-8 md:gap-10 lg:mx-auto lg:pb-8">
        <div className="block lg:hidden">
          <PromoBanner
            src="/banner-home-01.png"
            alt="Até 55% de desconto esse mês!"
          />
        </div>

        <div className="max-xl:px-5 lg:hidden">
          <Categories />
        </div>

        <div>
          <ProductList title="ofertas" products={productsWithDiscount} />
        </div>

        <div className="hidden items-center justify-between gap-6 max-xl:px-5 md:mx-auto lg:flex">
          <PromoBanner
            src="/banner-home-desktop-02.png"
            alt="Até 55% de desconto em mouses!"
            className="lg:w-[49%]"
          />

          <PromoBanner
            src="/banner-home-desktop-03.png"
            alt="Até 55% de desconto em mouses!"
            className="lg:w-[49%]"
          />
        </div>

        <div className="lg:hidden">
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

        <div className="hidden max-xl:px-5 lg:block">
          <PromoBanner
            src="/banner-frete-gratis-desktop.png"
            alt="Até 55% de desconto em mouses!"
          />
        </div>

        <div>
          <ProductList title="mouses" products={mouses} />
        </div>
      </div>
    </div>
  );
}
