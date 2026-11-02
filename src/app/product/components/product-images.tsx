"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductImagesProps {
  name: string;
  imageUrls: string[];
}

const ProductImages = ({ name, imageUrls }: ProductImagesProps) => {
  const [currentImage, SetCurrentImage] = useState(imageUrls[0]);

  const handleSelectedImage = (image: string) => {
    SetCurrentImage(image);
  };

  return (
    <div className="flex flex-col gap-4 lg:sticky lg:top-28">
      <div className="product-stage chamfer-lg relative aspect-square overflow-hidden lg:aspect-[5/4]">
        <Image
          key={currentImage}
          src={currentImage}
          alt={name}
          fill
          priority
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-contain p-[10%] drop-shadow-[0_30px_40px_rgba(0,0,0,0.12)] duration-500 animate-in fade-in-0 zoom-in-95"
        />
      </div>

      {imageUrls.length > 1 && (
        <div className="no-scrollbar flex gap-3 overflow-x-auto">
          {imageUrls.map((image, index) => {
            const isActive = image === currentImage;
            return (
              <button
                key={image}
                aria-label={`Ver imagem ${index + 1} de ${name}`}
                aria-pressed={isActive}
                className={cn(
                  "product-stage chamfer-sm relative flex h-20 w-20 shrink-0 items-center justify-center transition-opacity duration-300 md:h-24 md:w-24",
                  isActive ? "opacity-100" : "opacity-50 hover:opacity-80",
                )}
                onClick={() => handleSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="96px"
                  className="object-contain p-[12%]"
                />
                {isActive && (
                  <span className="absolute inset-x-3 bottom-1.5 h-[2px] bg-foreground" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductImages;
