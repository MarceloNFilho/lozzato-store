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
      className={twMerge("h-auto w-full max-lg:px-5", className)}
      sizes="100vw"
      quality={100}
      alt={alt}
      priority={true}
      {...props}
    />
  );
};

export default PromoBanner;
