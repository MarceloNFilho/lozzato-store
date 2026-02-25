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
      className={twMerge(
        "h-48 w-full object-cover object-center sm:h-64 lg:h-auto",
        className,
      )}
      style={{
        clipPath:
          "polygon(1rem 0px, 100% 0px, 100% calc(100% - 1rem), calc(100% - 1rem) 100%, 0px 100%, 0px 1rem)",
      }}
      unoptimized={true}
      alt={alt}
      priority={true}
      {...props}
    />
  );
};

export default PromoBanner;
