"use client";

import ProductItem from "@/components/ui/product-item";
import computeProductTotalPrice from "@/helpers/products";
import { Product } from "@prisma/client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { useState } from "react";

interface ProductListProps {
  title?: string;
  products: Product[];
}

const ProductList = ({ title, products }: ProductListProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 2.3, spacing: 16 },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 3.5, spacing: 16 },
      },
      "(min-width: 748px)": {
        slides: { perView: 4.5, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 16 },
        initial: 0,
        slideChanged(slider) {
          setCurrentSlide(slider.track.details.rel);
        },
      },
      "(min-width: 1280px)": {
        slides: { perView: 5, spacing: 16 },
        initial: 0,
        slideChanged(slider) {
          setCurrentSlide(slider.track.details.rel);
        },
      },
    },
  });

  return (
    <div className="lg:px-5">
      <h1 className="mb-5 max-w-[1280px] font-bold uppercase max-lg:px-5 md:mx-auto">
        {title}
      </h1>
      <div
        ref={sliderRef}
        className="keen-slider relative flex w-full overflow-x-auto max-lg:px-5 [&::-webkit-scrollbar]:hidden"
      >
        <button
          className="hidden disabled:hidden lg:block"
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
          disabled={currentSlide === 0}
        >
          <ArrowLeftCircle
            className="absolute bottom-1/2 left-2 z-10 -translate-y-1/2 text-primary hover:brightness-125"
            size={24}
          />
        </button>
        {products.map((product) => {
          return (
            <div key={product.id} className="keen-slider__slide">
              <ProductItem product={computeProductTotalPrice(product)} />
            </div>
          );
        })}
        <button
          className="hidden disabled:hidden lg:block"
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
          disabled={
            currentSlide ===
            instanceRef?.current?.track.details.slides.length - 1
          }
        >
          <ArrowRightCircle
            className="absolute bottom-1/2 right-2 -translate-y-1/2 text-primary hover:brightness-125"
            size={24}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductList;
