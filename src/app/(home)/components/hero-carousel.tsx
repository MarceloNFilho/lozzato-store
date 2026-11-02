"use client";

import { Button } from "@/components/ui/button";
import { ProductWithTotalPrice } from "@/helpers/products";
import { cn, formatCurrency } from "@/lib/utils";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowRight, PauseIcon, PlayIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FocusEvent, MouseEvent, useState } from "react";

export interface HeroSlide {
  product: ProductWithTotalPrice;
  label: string;
  headline: [string, string];
  description: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
}

const EASE = [0.16, 1, 0.3, 1] as const;

const HeroCarousel = ({ slides }: HeroCarouselProps) => {
  const [active, setActive] = useState(0);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const [hasKeyboardFocus, setHasKeyboardFocus] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const productX = useSpring(pointerX, { stiffness: 80, damping: 20 });
  const productY = useSpring(pointerY, { stiffness: 80, damping: 20 });

  const slide = slides[active];
  const { product } = slide;
  const productHref = `/product/${product.slug}`;
  const hasDiscount = product.discountPercentage > 0;
  const isPaused = isPausedByUser || hasKeyboardFocus;

  const goToNext = () => setActive((index) => (index + 1) % slides.length);

  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 28);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 20);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const handleFocus = (event: FocusEvent<HTMLElement>) => {
    if (event.target.matches(":focus-visible")) setHasKeyboardFocus(true);
  };

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setHasKeyboardFocus(false);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-roledescription="carrossel"
        aria-label="Destaques da loja"
        onMouseMove={handlePointerMove}
        onMouseLeave={handlePointerLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="page-container relative flex h-[100svh] min-h-[560px] flex-col pb-5 pt-20 md:pb-8 md:pt-24 lg:min-h-[620px] lg:pt-24"
      >
        <div className="relative flex min-h-0 flex-1 flex-col lg:justify-center">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 right-[-8%] hidden h-[115%] w-[64%] bg-[radial-gradient(closest-side,#fff,transparent)] lg:block"
          />

          <div className="relative z-0 flex flex-col">
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={`eyebrow-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="eyebrow"
              >
                {String(active + 1).padStart(2, "0")} — {product.name}
              </motion.p>
            </AnimatePresence>

            <h1 className="mt-3 font-display text-[clamp(40px,min(12.5vw,7svh),64px)] font-semibold uppercase leading-[0.86] tracking-[-0.01em] sm:mt-5 sm:text-[clamp(56px,min(10vw,8svh),96px)] lg:text-[clamp(72px,min(9.2vw,15svh),148px)]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={`headline-${active}`} className="block">
                  {slide.headline.map((line, lineIndex) => (
                    <span
                      key={line}
                      className="-mt-[0.16em] block overflow-hidden pb-[0.04em] pt-[0.16em]"
                    >
                      <motion.span
                        className="block"
                        initial={{ y: "105%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-105%" }}
                        transition={{
                          duration: 0.7,
                          delay: lineIndex * 0.07,
                          ease: EASE,
                        }}
                      >
                        {line}
                      </motion.span>
                    </span>
                  ))}
                </motion.span>
              </AnimatePresence>
            </h1>
          </div>

          <motion.div
            style={{ x: productX, y: productY }}
            className="relative z-10 my-3 min-h-[140px] w-full flex-1 sm:my-5 lg:absolute lg:inset-y-0 lg:right-0 lg:my-0 lg:w-[56%]"
          >
            {slides.map((item, index) => {
              const isActive = index === active;
              return (
                <motion.div
                  key={item.product.id}
                  aria-hidden={!isActive}
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    x: isActive ? 0 : index < active ? -40 : 60,
                    scale: isActive ? 1 : 0.96,
                  }}
                  transition={{ duration: 0.9, ease: EASE }}
                  className="absolute inset-0"
                >
                  <Image
                    src={item.product.imageUrls[0]}
                    alt={isActive ? item.product.name : ""}
                    fill
                    priority={index === 0}
                    sizes="(min-width: 1024px) 56vw, 100vw"
                    className="object-contain p-[4%] drop-shadow-[0_40px_50px_rgba(0,0,0,0.16)]"
                  />
                </motion.div>
              );
            })}
          </motion.div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`details-${active}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="relative z-20 flex shrink-0 flex-col gap-4 sm:gap-5 lg:mt-[min(5svh,40px)] lg:max-w-[40%] lg:gap-6"
            >
              <p className="line-clamp-2 max-w-[38ch] text-sm leading-relaxed text-muted-foreground sm:text-[15px] md:text-base">
                {slide.description}
              </p>

              <div className="flex items-baseline gap-3">
                <p className="font-display text-2xl font-semibold tabular-nums sm:text-[28px]">
                  {formatCurrency(product.totalPrice)}
                </p>
                {hasDiscount && (
                  <p className="text-sm tabular-nums text-muted-foreground">
                    <span className="line-through">
                      {formatCurrency(product.basePrice)}
                    </span>
                    <span className="ml-2 font-semibold text-foreground">
                      −{product.discountPercentage}%
                    </span>
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 sm:gap-4">
                <Button
                  asChild
                  size="lg"
                  className="h-12 flex-1 px-6 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-background/60 sm:h-14 sm:flex-none sm:px-10"
                >
                  <Link href={productHref}>Comprar agora</Link>
                </Button>
                <Link
                  href={productHref}
                  className="group/link flex shrink-0 items-center justify-center gap-2 px-3 py-4 font-display text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70 outline-none transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:underline focus-visible:underline-offset-4 sm:px-4"
                >
                  Ver detalhes
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 ease-premium group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative z-20 mt-6 flex shrink-0 items-start gap-3 sm:mt-8 sm:gap-6 lg:mt-[min(6svh,56px)]">
          <div
            role="tablist"
            aria-label="Escolher destaque"
            className="grid flex-1 grid-cols-4 gap-3 sm:gap-6"
          >
            {slides.map((item, index) => {
              const isActive = index === active;
              return (
                <button
                  key={item.product.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`${item.label}: ${item.product.name}`}
                  onClick={() => setActive(index)}
                  className="group/tab flex flex-col gap-3 pt-1 text-left outline-none"
                >
                  <span className="relative h-[2px] w-full overflow-hidden bg-black/10">
                    {isActive && (
                      <span
                        key={active}
                        onAnimationEnd={goToNext}
                        style={{
                          animationPlayState: isPaused ? "paused" : "running",
                        }}
                        className={cn(
                          "absolute inset-0 origin-left bg-foreground",
                          prefersReducedMotion ? "" : "animate-hero-progress",
                        )}
                      />
                    )}
                  </span>
                  <span className="flex items-baseline gap-2 sm:gap-3">
                    <span className="font-display text-[11px] tabular-nums text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "hidden font-display text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors group-focus-visible/tab:underline group-focus-visible/tab:underline-offset-4 sm:inline sm:text-sm",
                        isActive
                          ? "text-foreground"
                          : "text-foreground/45 group-hover/tab:text-foreground",
                      )}
                    >
                      {item.label}
                    </span>
                  </span>
                  <span className="hidden text-xs text-muted-foreground lg:line-clamp-1">
                    {item.product.name}
                  </span>
                </button>
              );
            })}
          </div>
          {!prefersReducedMotion && (
            <button
              type="button"
              onClick={() => setIsPausedByUser((paused) => !paused)}
              aria-label={
                isPausedByUser
                  ? "Retomar troca automática"
                  : "Pausar troca automática"
              }
              className="-mt-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/[0.05] text-foreground/70 transition-colors hover:bg-black/[0.09] hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
            >
              {isPausedByUser ? (
                <PlayIcon size={12} className="fill-current" />
              ) : (
                <PauseIcon size={12} className="fill-current" />
              )}
            </button>
          )}
        </div>
      </section>
    </MotionConfig>
  );
};

export default HeroCarousel;
