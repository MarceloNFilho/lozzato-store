const LoadingPage = () => {
  return (
    <div className="mt-20 flex w-full max-w-[1280px] flex-1 flex-col max-xl:p-5 lg:mx-auto xl:py-5">
      <div className="flex animate-pulse flex-col gap-8">
        <div className="h-8 w-28 rounded-full bg-accent opacity-75" />
        <div className="grid grid-cols-2 gap-6 max-md:gap-4 lg:grid-cols-4 xl:grid-cols-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 rounded-3xl bg-card p-1"
            >
              <div className="aspect-square rounded-3xl bg-accent opacity-75" />
              <div className="flex flex-col gap-1 px-2 lg:px-3">
                <div className="h-4 w-full rounded-3xl bg-accent opacity-75" />
                <div className="h-5 w-20 rounded-3xl bg-accent opacity-75" />
              </div>
              <div className="px-2 pb-3 lg:px-3">
                <div className="h-10 w-full rounded-3xl bg-accent opacity-75" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
