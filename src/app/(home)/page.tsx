import Categories from "./components/categories";
import ProductList from "../../components/ui/product-list";
import { prismaClient } from "@/lib/prisma";
import PromoBanner from "./components/promo-banner";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      <div className="flex max-w-[1280px] flex-col gap-8 max-lg:pb-8 md:gap-10 lg:mx-auto lg:pb-8">
        <PromoBanner
          src="/banner-home-desktop-01.png"
          alt="Até 55% de desconto esse mês!"
          className="h-[463px] object-cover opacity-20 max-md:hidden lg:hidden"
        />
        <div className="relative text-center">
          <video
            src="/ps5.mp4"
            preload="auto"
            autoPlay
            loop
            muted
            playsInline
            className="relative h-screen w-full object-cover md:hidden"
          />
          <div className="absolute bottom-16 z-50 flex flex-col items-center gap-4 px-5 uppercase md:hidden">
            <h1 className="line-clamp-2 text-xl font-semibold tracking-normal sm:max-w-md">
              PlayStation 5 Slim 2024 1TB
            </h1>
            <div className="tagline line-clamp-2 text-base tracking-normal sm:max-w-md">
              Inclui um Controle Branco Sony e os jogos Returnal e Ratchet &amp;
              Clank
            </div>
            <Link href="/product/playStation-5-slim" className="w-60">
              <Button variant="default" className="w-full text-base uppercase">
                Ver produto
              </Button>
            </Link>
          </div>
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

        <div className="px-5 lg:hidden">
          <PromoBanner
            src="/banner-home-02.png"
            alt="Até 55% de desconto em mouses!"
          />
        </div>

        <div>
          <ProductList title="teclados" products={keyboards} />
        </div>

        <div className="px-5 lg:hidden">
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
