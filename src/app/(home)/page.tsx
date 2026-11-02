import Categories from "./components/categories";
import ProductList from "../../components/ui/product-list";
import { prismaClient } from "@/lib/prisma";
import Hero, { HERO_CAMPAIGN } from "./components/hero";
import PromoTile from "./components/promo-tile";
import Benefits from "./components/benefits";
import MotionContainer from "@/components/ui/motion-container";
import SectionHeader from "@/components/ui/section-header";
import computeProductTotalPrice from "@/helpers/products";

export default async function Home() {
  const [productsWithDiscount, keyboards, mouses, heroProducts, categories] =
    await Promise.all([
      prismaClient.product.findMany({
        where: { discountPercentage: { gt: 0 } },
      }),
      prismaClient.product.findMany({
        where: { category: { slug: "keyboards" } },
      }),
      prismaClient.product.findMany({
        where: { category: { slug: "mouses" } },
      }),
      prismaClient.product.findMany({
        where: { slug: { in: Object.keys(HERO_CAMPAIGN) } },
      }),
      prismaClient.category.findMany({}),
    ]);

  const mouseCategory = categories.find((c) => c.slug === "mouses");
  const headphoneCategory = categories.find((c) => c.slug === "headphones");

  const maxMouseDiscount = Math.max(
    0,
    ...mouses.map((mouse) => mouse.discountPercentage),
  );

  return (
    <div className="bg-background">
      <Hero
        products={JSON.parse(
          JSON.stringify(heroProducts.map(computeProductTotalPrice)),
        )}
      />

      <div className="relative z-20 flex w-full flex-col gap-24 pb-24 pt-12 md:gap-32 md:pt-16">
        <MotionContainer className="page-container flex flex-col gap-8">
          <SectionHeader
            eyebrow="Explore"
            title="Por categoria"
            href="/catalog"
            linkLabel="Catálogo completo"
          />
          <Categories categories={categories} />
        </MotionContainer>

        <MotionContainer>
          <ProductList
            eyebrow="Por tempo limitado"
            title="Ofertas"
            href="/deals"
            products={JSON.parse(JSON.stringify(productsWithDiscount))}
          />
        </MotionContainer>

        <MotionContainer className="page-container grid gap-4 md:gap-6 lg:grid-cols-5">
          <PromoTile
            className="lg:col-span-3"
            eyebrow="Mouses"
            title={
              maxMouseDiscount > 0
                ? `Até ${maxMouseDiscount}% off`
                : "Precisão absoluta"
            }
            description="Sensores de ponta, peso pluma e zero latência. Encontre o mouse ideal para o seu estilo de jogo."
            href="/category/mouses"
            cta="Ver mouses"
            imageUrl={mouseCategory?.imageUrl}
          />
          <PromoTile
            className="lg:col-span-2"
            eyebrow="LozzatoPacket®"
            title="Frete grátis"
            description="Entrega para todo o Brasil em qualquer pedido, sem valor mínimo."
            href="/catalog"
            cta="Começar a comprar"
            imageUrl={headphoneCategory?.imageUrl}
          />
        </MotionContainer>

        <MotionContainer>
          <ProductList
            eyebrow="Cada tecla conta"
            title="Teclados"
            href="/category/keyboards"
            products={JSON.parse(JSON.stringify(keyboards))}
          />
        </MotionContainer>

        <MotionContainer>
          <Benefits />
        </MotionContainer>

        <MotionContainer>
          <ProductList
            eyebrow="Controle total"
            title="Mouses"
            href="/category/mouses"
            products={JSON.parse(JSON.stringify(mouses))}
          />
        </MotionContainer>
      </div>
    </div>
  );
}
