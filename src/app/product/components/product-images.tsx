"use client";

import Image from "next/image";
import { useState } from "react";

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
    <div className="flex flex-1 flex-col">
      <div className="relative h-full">
        <div className="flex h-[380px] flex-1 items-center justify-center bg-accent lg:h-full lg:rounded-lg">
          <Image
            src={currentImage}
            alt={name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-full max-h-[70%] w-auto max-w-[80%] object-contain"
          />
        </div>

        <div className="grid gap-4 max-xl:bottom-8 max-xl:flex max-md:mt-8 max-md:grid-cols-4 max-md:px-5 lg:absolute lg:left-1/2 lg:-translate-x-1/2 xl:left-8 xl:top-8 xl:translate-x-0">
          {imageUrls.map((image) => {
            return (
              <button
                key={image}
                className={`flex h-20 w-20 items-center justify-center rounded-lg bg-accent lg:bg-background ${
                  image === currentImage &&
                  "border-2 border-solid border-primary"
                }`}
                onClick={() => handleSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
