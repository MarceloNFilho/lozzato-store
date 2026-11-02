const Loading = () => {
  return (
    <div className="page-container flex animate-pulse flex-col gap-8 pb-24 pt-24 md:pt-28">
      <div className="h-3 w-48 rounded-full bg-black/[0.05]" />

      <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_460px]">
        <div className="flex flex-col gap-4">
          <div className="chamfer-lg aspect-square bg-black/[0.04] lg:aspect-[5/4]" />
          <div className="grid grid-cols-4 gap-3 sm:flex">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="chamfer-sm aspect-square w-full bg-black/[0.04] sm:h-20 sm:w-20 md:h-24 md:w-24"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="h-3 w-20 rounded-full bg-black/[0.05]" />
          <div className="mt-4 h-9 w-full rounded-full bg-black/[0.05]" />
          <div className="mt-2 h-9 w-2/3 rounded-full bg-black/[0.05]" />
          <div className="mt-8 border-t border-border pt-8">
            <div className="h-10 w-48 rounded-full bg-black/[0.05]" />
          </div>
          <div className="mt-8 flex gap-3">
            <div className="chamfer-xs h-12 w-32 bg-black/[0.05]" />
            <div className="chamfer-sm h-12 flex-1 bg-black/[0.05]" />
          </div>
          <div className="chamfer mt-6 h-36 w-full bg-black/[0.04]" />
          <div className="mt-10 flex flex-col gap-2">
            <div className="h-3 w-full rounded-full bg-black/[0.05]" />
            <div className="h-3 w-full rounded-full bg-black/[0.05]" />
            <div className="h-3 w-3/4 rounded-full bg-black/[0.05]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
