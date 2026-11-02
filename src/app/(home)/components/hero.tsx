import { ProductWithTotalPrice } from "@/helpers/products";
import HeroCarousel, { HeroSlide } from "./hero-carousel";

export const HERO_CAMPAIGN: Record<string, Omit<HeroSlide, "product">> = {
  "playStation-5-slim": {
    label: "Consoles",
    headline: ["Nova", "geração"],
    description:
      "PlayStation 5 Slim com 1TB de armazenamento, DualSense e dois jogos inclusos.",
  },
  "logitech-pro-x-2-lightspeed": {
    label: "Áudio",
    headline: ["Som", "sem fio"],
    description:
      "Logitech Pro X 2 Lightspeed. Áudio de nível profissional, sem nenhum cabo.",
  },
  "dell-s3422dwg": {
    label: "Monitores",
    headline: ["Imersão", "total"],
    description:
      "Dell S3422DWG. Tela curva de 34 polegadas para jogar e trabalhar.",
  },
  "razer-deathadder-v2-pro": {
    label: "Mouses",
    headline: ["Precisão", "pura"],
    description:
      "Razer DeathAdder V2 Pro. A ergonomia lendária da Razer, agora sem fio.",
  },
};

interface HeroProps {
  products: ProductWithTotalPrice[];
}

const Hero = ({ products }: HeroProps) => {
  const slides = Object.entries(HERO_CAMPAIGN).flatMap(([slug, copy]) => {
    const product = products.find((item) => item.slug === slug);
    return product ? [{ ...copy, product }] : [];
  });

  if (slides.length === 0) return null;

  return <HeroCarousel slides={slides} />;
};

export default Hero;
