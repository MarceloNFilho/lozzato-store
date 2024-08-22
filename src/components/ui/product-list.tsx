"use client";

import ProductItem from "@/components/ui/product-item";
import computeProductTotalPrice from "@/helpers/products";
import { Product } from "@prisma/client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { Button } from "./button";

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
        slides: { perView: 4, spacing: 24 },
        initial: 0,
        slideChanged(slider) {
          setCurrentSlide(slider.track.details.rel);
        },
      },
      "(min-width: 1280px)": {
        slides: { perView: 5, spacing: 24 },
        initial: 0,
        slideChanged(slider) {
          setCurrentSlide(slider.track.details.rel);
        },
      },
    },
  });

  return (
    <div className="lg:px-5 xl:px-0">
      <h1 className="mb-5 max-w-[1280px] font-bold uppercase max-lg:px-5 md:mx-auto">
        {title}
      </h1>
      <div
        ref={sliderRef}
        className="keen-slider relative flex w-full overflow-x-auto max-lg:px-5 [&::-webkit-scrollbar]:hidden"
      >
        <Button
          className="absolute bottom-[30%] left-2 z-10 hidden h-14 w-14 -translate-y-1/2 rounded-full border border-solid border-secondary bg-background disabled:hidden lg:block"
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="text-white hover:brightness-125" size={24} />
        </Button>
        {products.map((product) => {
          return (
            <div key={product.id} className="keen-slider__slide">
              <ProductItem product={computeProductTotalPrice(product)} />
            </div>
          );
        })}
        <Button
          className="absolute bottom-[30%] right-2 hidden h-14 w-14 -translate-y-1/2 rounded-full border border-solid border-secondary bg-background disabled:hidden lg:block"
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
          disabled={
            currentSlide ===
            instanceRef?.current?.track.details.slides.length! - 1
          }
        >
          <ChevronRight className="text-white hover:brightness-125" size={24} />
        </Button>
      </div>
    </div>
  );
};

export default ProductList;
