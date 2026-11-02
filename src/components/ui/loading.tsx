export const ProductCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="chamfer aspect-square bg-black/[0.04]" />
      <div className="flex flex-col gap-2">
        <div className="h-4 w-4/5 rounded-full bg-black/[0.05]" />
        <div className="h-5 w-24 rounded-full bg-black/[0.05]" />
      </div>
      <div className="chamfer-sm h-9 w-full bg-black/[0.04]" />
    </div>
  );
};

const LoadingPage = () => {
  return (
    <div className="page-container flex flex-1 animate-pulse flex-col gap-12 pb-24">
      <div className="flex flex-col gap-6 border-b border-border pb-10 pt-32 md:pt-36">
        <div className="h-3 w-32 rounded-full bg-black/[0.05]" />
        <div className="h-12 w-64 rounded-full bg-black/[0.05] md:h-16" />
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default LoadingPage;
