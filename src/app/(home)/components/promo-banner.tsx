import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

interface PromoBannerProps {
  className?: string;
}

const PromoBanner = ({ className, alt, ...props }: ImageProps) => {
  return (
    <Image
      width={0}
      height={0}
      className={twMerge("h-auto w-full", className)}
      style={{
        clipPath: "polygon(1rem 0px, 100% 0px, 100% calc(100% - 1rem), calc(100% - 1rem) 100%, 0px 100%, 0px 1rem)",
      }}
      sizes="100vw"
      quality={100}
      alt={alt}
      priority={true}
      {...props}
    />
  );
};

export default PromoBanner;
