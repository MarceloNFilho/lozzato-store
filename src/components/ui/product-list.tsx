"use client";

import ProductItem from "@/components/ui/product-item";
import computeProductTotalPrice from "@/helpers/products";
import { Product } from "@prisma/client";
import "keen-slider/keen-slider.min.css";
import { KeenSliderInstance, useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import SectionHeader from "./section-header";

interface ProductListProps {
  title?: string;
  eyebrow?: string;
  href?: string;
  products: Product[];
}

const ProductList = ({ title, eyebrow, href, products }: ProductListProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlide, setMaxSlide] = useState(0);
  const syncNavigation = (slider: KeenSliderInstance) => {
    setCurrentSlide(slider.track.details?.rel ?? 0);
    setMaxSlide(slider.track.details?.maxIdx ?? 0);
  };

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1.6, spacing: 14 },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.6, spacing: 16 },
      },
      "(min-width: 768px)": {
        slides: { perView: 3.4, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 24 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 5, spacing: 24 },
      },
    },
    created: syncNavigation,
    updated: syncNavigation,
    optionsChanged: syncNavigation,
    slideChanged: syncNavigation,
  });

  const arrowClass =
    "flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.06] text-foreground transition-all duration-300 hover:bg-black/[0.09] disabled:pointer-events-none disabled:opacity-25";

  const navigation = (
    <div className="hidden items-center gap-2 lg:flex">
      <button
        aria-label="Anterior"
        className={arrowClass}
        onClick={() => instanceRef.current?.prev()}
        disabled={currentSlide === 0}
      >
        <ChevronLeft size={18} />
      </button>
      <button
        aria-label="Próximo"
        className={arrowClass}
        onClick={() => instanceRef.current?.next()}
        disabled={currentSlide >= maxSlide}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );

  return (
    <section className="page-container flex flex-col gap-8">
      {title ? (
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          href={href}
          actions={navigation}
        />
      ) : (
        <div className="hidden justify-end lg:flex">{navigation}</div>
      )}

      <div
        ref={sliderRef}
        className="keen-slider no-scrollbar !overflow-visible lg:!overflow-hidden"
      >
        {products.map((product) => {
          return (
            <div key={product.id} className="keen-slider__slide">
              <ProductItem product={computeProductTotalPrice(product)} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;
