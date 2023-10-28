"use client";

import ProductItem from "@/components/ui/product-item";
import computeProductTotalPrice from "@/helpers/products";
import { Product } from "@prisma/client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

interface ProductListProps {
  title?: string;
  products: Product[];
}

const ProductList = ({ title, products }: ProductListProps) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 2.4, spacing: 16 },
    loop: true,
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 4.5, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 16 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 4.8, spacing: 16 },
      },
    },
  });
  return (
    <>
      <h1 className="mb-5 max-w-[1280px] font-bold uppercase max-xl:px-5 md:mx-auto">
        {title}
      </h1>
      <div
        ref={sliderRef}
        className="keen-slider relative flex w-full overflow-x-auto max-xl:px-5 [&::-webkit-scrollbar]:hidden"
      >
        <div className="absolute left-0 z-10 h-full w-5 bg-gradient-to-r from-background to-transparent" />
        {products.map((product) => {
          return (
            <div key={product.id} className="keen-slider__slide">
              <ProductItem product={computeProductTotalPrice(product)} />
            </div>
          );
        })}
        <div className="absolute right-0 z-10 h-full w-5 bg-gradient-to-l from-background to-transparent" />
      </div>
    </>
  );
};

export default ProductList;
