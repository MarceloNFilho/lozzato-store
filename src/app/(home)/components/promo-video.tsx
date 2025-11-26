import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface PromoVideoProps {
  src: string;
  variant?: "mobile" | "desktop";
}

const PromoVideo = ({ src, variant = "mobile" }: PromoVideoProps) => {
  return (
    <div className="relative w-full">
      <video
        src={src}
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
        className="relative h-screen w-full object-cover"
      />
      <div
        className={twMerge(
          "absolute z-50 flex w-full flex-col gap-4 px-5 uppercase",
          variant === "mobile"
            ? "bottom-0 items-center bg-gradient-to-t from-black/75 to-transparent pb-16 pt-6 text-center"
            : "bottom-[42%] left-0 right-0 mx-auto max-w-[1280px] items-start xl:px-0",
        )}
      >
        <h1 className="line-clamp-2 text-2xl font-semibold tracking-normal sm:max-w-md">
          PlayStation 5 Slim 2024 1TB
        </h1>
        <div className="tagline line-clamp-2 text-base tracking-normal sm:max-w-md">
          Inclui um Controle Branco Sony e os jogos Returnal e Ratchet &amp;
          Clank
        </div>
        <Link href="/product/playStation-5-slim" className="mt-4 w-60">
          <Button
            variant="outline"
            className="flex w-full gap-2 rounded-3xl uppercase"
          >
            <ShoppingBag size={16} />
            Ver produto
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PromoVideo;
