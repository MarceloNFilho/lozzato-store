import { Button } from "@/components/ui/button";
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
            ? "bottom-16 items-center text-center"
            : "bottom-[45%] left-0 right-0 mx-auto max-w-[1280px] items-start xl:px-0",
        )}
      >
        <h1 className="line-clamp-2 text-xl font-semibold tracking-normal sm:max-w-md">
          PlayStation 5 Slim 2024 1TB
        </h1>
        <div className="tagline line-clamp-2 text-base tracking-normal sm:max-w-md">
          Inclui um Controle Branco Sony e os jogos Returnal e Ratchet &amp;
          Clank
        </div>
        <Link href="/product/playStation-5-slim" className="w-60">
          <Button variant="default" className="w-full text-base uppercase">
            Ver produto
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PromoVideo;
