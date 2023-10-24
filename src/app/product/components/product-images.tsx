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
    <div className="flex flex-col">
      <div className="flex h-[380px] w-full items-center justify-center bg-accent">
        <Image
          src={currentImage}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-full max-h-[70%] w-auto max-w-[80%] object-contain"
        />
      </div>

      <div className="mt-8 grid grid-cols-4 gap-4 px-5">
        {imageUrls.map((image) => {
          return (
            <button
              key={image}
              className={`flex h-20 items-center justify-center rounded-lg bg-accent ${
                image === currentImage && "border-2 border-solid border-primary"
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
  );
};

export default ProductImages;
