const Loading = () => {
  return (
    <>
      <div
        id="loading-overlay"
        className="fixed left-0 top-0 z-[99] w-full p-5 xl:mx-auto xl:p-0 xl:py-5"
      >
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between">
          <div className="h-8 w-52 rounded-3xl bg-zinc-500 opacity-50" />

          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-3xl bg-zinc-500 opacity-50" />
            <div className="h-10 w-10 rounded-3xl bg-zinc-500 opacity-50" />
          </div>
        </div>
      </div>
      <div className="relative mb-6 hidden h-screen w-full overflow-hidden bg-accent opacity-75 lg:block">
        <div className="absolute bottom-[45%] left-0 right-0 mx-auto flex max-w-[1280px] flex-col items-start gap-4 px-5 xl:px-0">
          <div className="h-10 w-60 rounded-3xl bg-zinc-500 opacity-50" />
          <div className="h-6 w-80 rounded-3xl bg-zinc-500 opacity-50" />
          <div className="h-6 w-60 rounded-3xl bg-zinc-500 opacity-50" />
          <div className="h-9 w-60 rounded-3xl bg-zinc-500 opacity-50" />
        </div>

        <div className="absolute bottom-0 left-1/2 w-full max-w-[1280px] -translate-x-1/2 transform pb-6">
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 lg:grid-cols-3 xl:grid-cols-6">
            <div className="h-12 w-full rounded-3xl bg-zinc-500 opacity-50" />
            <div className="h-12 w-full rounded-3xl bg-zinc-500 opacity-50" />
            <div className="h-12 w-full rounded-3xl bg-zinc-500 opacity-50" />
            <div className="h-12 w-full rounded-3xl bg-zinc-500 opacity-50" />
            <div className="h-12 w-full rounded-3xl bg-zinc-500 opacity-50" />
            <div className="h-12 w-full rounded-3xl bg-zinc-500 opacity-50" />
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-[1280px] animate-pulse flex-col gap-8 lg:mx-auto lg:pb-8">
        <div className="relative h-screen w-full lg:hidden">
          <div className="h-full w-full bg-accent opacity-75" />
          <div className="absolute bottom-16 flex w-full flex-col items-center gap-4 px-5">
            <div className="h-8 w-3/4 rounded-3xl bg-zinc-500 opacity-50" />
            <div className="h-5 w-4/5 rounded-3xl bg-zinc-500 opacity-50" />
            <div className="h-5 w-3/4 rounded-3xl bg-zinc-500 opacity-50" />
            <div className="h-10 w-60 rounded-3xl bg-zinc-500 opacity-50" />
          </div>
        </div>

        <div className="flex flex-col gap-8 px-5 pb-8 lg:p-0">
          <div className="flex flex-col gap-5">
            <div className="h-6 w-32 rounded-3xl bg-accent opacity-75" />

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-5 lg:gap-8">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-3 rounded-3xl bg-card p-1 ${
                    index >= 2 ? "hidden lg:flex" : ""
                  }`}
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

          <div className="h-36 w-full rounded-3xl bg-accent opacity-75 lg:h-[396px] xl:h-[500px]" />

          <div className="flex flex-col gap-5">
            <div className="h-6 w-32 rounded-3xl bg-accent opacity-75" />

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-5 lg:gap-8">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-3 rounded-3xl bg-card p-1 ${
                    index >= 2 ? "hidden lg:flex" : ""
                  }`}
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

          <div className="h-36 w-full rounded-3xl bg-accent opacity-75 lg:h-[396px] xl:h-[500px]" />

          <div className="flex flex-col gap-5">
            <div className="h-6 w-32 rounded-3xl bg-accent opacity-75" />

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-5 lg:gap-8">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-3 rounded-3xl bg-card p-1 ${
                    index >= 2 ? "hidden lg:flex" : ""
                  }`}
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
      </div>
    </>
  );
};

export default Loading;
