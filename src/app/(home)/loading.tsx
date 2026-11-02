import { ProductCardSkeleton } from "@/components/ui/loading";

const Loading = () => {
  return (
    <div className="animate-pulse">
      <div className="page-container flex h-[100svh] min-h-[560px] flex-col pb-5 pt-20 md:pb-8 md:pt-24 lg:min-h-[620px]">
        <div className="relative flex min-h-0 flex-1 flex-col gap-6 lg:justify-center">
          <div className="h-3 w-56 rounded-full bg-black/[0.06]" />
          <div className="h-16 w-3/4 rounded-full bg-black/[0.06] lg:h-28 lg:w-[40%]" />
          <div className="h-16 w-2/3 rounded-full bg-black/[0.06] lg:h-28 lg:w-[34%]" />
          <div className="min-h-[140px] w-full flex-1 rounded-3xl bg-black/[0.04] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[52%]" />
          <div className="h-4 w-72 rounded-full bg-black/[0.06]" />
          <div className="chamfer-sm h-14 w-48 bg-black/[0.06]" />
        </div>
        <div className="mt-6 grid shrink-0 grid-cols-4 gap-6 sm:mt-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-[2px] bg-black/10" />
          ))}
        </div>
      </div>

      <div className="page-container flex flex-col gap-8 pb-24 pt-12 md:pt-16">
        <div className="flex flex-col gap-3">
          <div className="h-3 w-24 rounded-full bg-black/[0.05]" />
          <div className="h-8 w-56 rounded-full bg-black/[0.05]" />
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className={index >= 2 ? "hidden lg:block" : ""}>
              <ProductCardSkeleton />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
