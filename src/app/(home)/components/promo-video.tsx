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
    <div className="relative h-full w-full overflow-hidden">
      <video
        src={src}
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className={twMerge(
          "absolute inset-0 z-10 flex w-full",
          variant === "mobile"
            ? "flex-col items-center justify-end gap-4 px-5 pb-12 text-center uppercase"
            : "items-center",
        )}
      >
        <div
          className={twMerge(
            "flex flex-col items-center gap-4 uppercase lg:items-start",
            variant === "desktop" &&
              "mx-auto w-full max-w-[1280px] justify-center px-5 xl:px-0",
          )}
        >
          <h1 className="line-clamp-2 text-4xl font-semibold tracking-normal sm:max-w-md lg:max-w-2xl">
            PlayStation 5 Slim 2024 1TB
          </h1>
          <div className="tagline line-clamp-2 text-base tracking-normal sm:max-w-md">
            Inclui um Controle Branco Sony e os jogos Returnal e Ratchet &amp;
            Clank
          </div>
          <Link href="/product/playStation-5-slim" className="mt-4 w-60">
            <Button variant="outline" className="flex w-full gap-2">
              <ShoppingBag size={16} />
              Ver produto
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 h-full w-full bg-gradient-to-t from-background via-background/0 to-transparent lg:hidden" />
    </div>
  );
};

export default PromoVideo;
