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
    <div className="bg-background">
      {/* 105vh wrapper allows for 5vh of scrolling while the video remains sticky at the top */}
      <div className="relative h-[105vh] w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="relative hidden h-full w-full lg:block">
            <MotionContainer className="h-full w-full">
              <PromoVideo src="/ps5-desktop-video.mp4" variant="desktop" />
            </MotionContainer>
            <div className="absolute bottom-[8vh] left-1/2 z-20 w-full max-w-[1280px] -translate-x-1/2 px-5 xl:px-0">
              <MotionContainer delay={0.2}>
                <Categories />
              </MotionContainer>
            </div>
          </div>
          <MotionContainer className="block h-full w-full lg:hidden">
            <PromoVideo src="/ps5.mp4" variant="mobile" />
          </MotionContainer>
        </div>
      </div>

      {/* The content wrapper with negative margin pulls it up by 5vh to overlap the video exactly as the sticky effect releases */}
      <div className="relative z-20 -mt-[5vh] flex w-full flex-col items-center bg-background pt-8 pb-8 lg:pb-8 lg:pt-12">
        <div className="flex w-full max-w-[1280px] flex-col gap-8 md:gap-10 lg:space-y-6">
          <MotionContainer className="px-5 lg:hidden" delay={0.1}>
            <Categories />
          </MotionContainer>

          <MotionContainer delay={0.2}>
            <ProductList title="ofertas" products={productsWithDiscount} />
          </MotionContainer>

          <div className="hidden items-center justify-between gap-6 px-5 lg:mx-0 md:mx-auto lg:flex xl:px-0">
            <MotionContainer className="w-full lg:w-[49%]" delay={0.4}>
              <PromoBanner
                src="/banner-home-desktop-02.png"
                alt="Até 55% de desconto em mouses!"
                className="w-full"
              />
            </MotionContainer>

            <MotionContainer className="w-full lg:w-[49%]" delay={0.4}>
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

          <MotionContainer className="hidden px-5 lg:block xl:px-0" delay={0.5}>
            <PromoBanner
              src="/banner-frete-gratis-desktop.png"
              alt="Até 55% de desconto em frete!"
            />
          </MotionContainer>

          <MotionContainer delay={0.6}>
            <ProductList title="mouses" products={mouses} />
          </MotionContainer>
        </div>
      </div>
    </div>
  );
}
