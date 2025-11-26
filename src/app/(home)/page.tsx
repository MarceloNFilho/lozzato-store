import Categories from "./components/categories";
import ProductList from "../../components/ui/product-list";
import { prismaClient } from "@/lib/prisma";
import PromoBanner from "./components/promo-banner";
import PromoVideo from "./components/promo-video";
import MotionContainer from "@/components/ui/motion-container";

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
      <MotionContainer>
        <div className="relative hidden overflow-hidden rounded-lg lg:block">
          <PromoVideo src="/ps5-desktop-video.mp4" variant="desktop" />

          <div className="absolute left-1/2 top-1/2 h-full w-full max-w-[1280px] -translate-x-1/2 -translate-y-1/2 transform">
            <div className="flex h-full flex-col justify-end pb-6 max-xl:px-5">
              <Categories />
            </div>
          </div>
        </div>
      </MotionContainer>
      <div className="flex max-w-[1280px] flex-col gap-8 max-lg:pb-8 md:gap-10 lg:mx-auto lg:pb-8">
        <MotionContainer className="lg:hidden">
          <PromoVideo src="/ps5.mp4" variant="mobile" />
        </MotionContainer>

        <MotionContainer className="max-xl:px-5 lg:hidden" delay={0.1}>
          <Categories />
        </MotionContainer>

        <MotionContainer delay={0.2}>
          <ProductList title="ofertas" products={productsWithDiscount} />
        </MotionContainer>

        <div className="hidden items-center justify-between gap-6 max-xl:px-5 md:mx-auto lg:flex">
          <MotionContainer className="lg:w-[49%]" delay={0.4}>
            <PromoBanner
              src="/banner-home-desktop-02.png"
              alt="Até 55% de desconto em mouses!"
              className="w-full"
            />
          </MotionContainer>

          <MotionContainer className="lg:w-[49%]" delay={0.4}>
            <PromoBanner
              src="/banner-home-desktop-03.png"
              alt="Até 55% de desconto em mouses!"
              className="w-full"
            />
          </MotionContainer>
        </div>

        <MotionContainer className="px-5 lg:hidden" delay={0.3}>
          <PromoBanner
            src="/banner-home-02.png"
            alt="Até 55% de desconto em mouses!"
          />
        </MotionContainer>

        <MotionContainer delay={0.4}>
          <ProductList title="teclados" products={keyboards} />
        </MotionContainer>

        <MotionContainer className="px-5 lg:hidden" delay={0.5}>
          <PromoBanner
            src="/banner-home-03.png"
            alt="Até 55% de desconto em mouses!"
          />
        </MotionContainer>

        <MotionContainer className="hidden max-xl:px-5 lg:block" delay={0.5}>
          <PromoBanner
            src="/banner-frete-gratis-desktop.png"
            alt="Até 55% de desconto em mouses!"
          />
        </MotionContainer>

        <MotionContainer delay={0.6}>
          <ProductList title="mouses" products={mouses} />
        </MotionContainer>
      </div>
    </div>
  );
}
