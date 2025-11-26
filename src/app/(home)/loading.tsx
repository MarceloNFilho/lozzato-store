const Loading = () => {
  return (
    <>
      <div className="relative mb-6 hidden h-screen w-full overflow-hidden rounded-lg bg-accent opacity-75 lg:block">
        <div className="absolute bottom-[45%] left-0 right-0 mx-auto flex max-w-[1280px] flex-col items-start gap-4 px-5 xl:px-0">
          <div className="h-10 w-60 rounded-lg bg-zinc-500 opacity-50" />
          <div className="h-6 w-32 rounded-lg bg-zinc-500 opacity-50" />
          <div className="h-12 w-40 rounded-lg bg-zinc-500 opacity-50" />
        </div>

        <div className="absolute bottom-0 left-1/2 w-full max-w-[1280px] -translate-x-1/2 transform pb-6">
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 lg:grid-cols-3 xl:grid-cols-6">
            <div className="h-12 w-full rounded-lg bg-zinc-500 opacity-50" />
            <div className="h-12 w-full rounded-lg bg-zinc-500 opacity-50" />
            <div className="h-12 w-full rounded-lg bg-zinc-500 opacity-50" />
            <div className="h-12 w-full rounded-lg bg-zinc-500 opacity-50" />
            <div className="h-12 w-full rounded-lg bg-zinc-500 opacity-50" />
            <div className="h-12 w-full rounded-lg bg-zinc-500 opacity-50" />
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-[1280px] animate-pulse flex-col gap-8 lg:mx-auto lg:pb-8">
        <div className="relative h-screen w-full lg:hidden">
          <div className="h-full w-full bg-accent opacity-75" />
          <div className="absolute bottom-16 flex w-full flex-col items-center gap-4 px-5">
            <div className="h-8 w-3/4 rounded-lg bg-zinc-500 opacity-50" />
            <div className="h-5 w-4/5 rounded-lg bg-zinc-500 opacity-50" />
            <div className="h-5 w-3/4 rounded-lg bg-zinc-500 opacity-50" />
            <div className="h-10 w-60 rounded-lg bg-zinc-500 opacity-50" />
          </div>
        </div>

        <div className="flex flex-col gap-8 px-5 pb-8 lg:p-0">
          <div className="flex flex-col gap-5">
            <div className="h-6 w-32 rounded-lg bg-accent opacity-75" />

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-5 lg:gap-8">
              <div className="h-40 rounded-lg bg-accent opacity-75 lg:h-48 lg:w-48 xl:h-60 xl:w-60" />
              <div className="h-40 rounded-lg bg-accent opacity-75 lg:h-48 lg:w-48 xl:h-60 xl:w-60" />
              <div className="hidden h-40 rounded-lg bg-accent opacity-75 lg:block lg:h-48 lg:w-48 xl:h-60 xl:w-60" />
              <div className="hidden h-40 rounded-lg bg-accent opacity-75 lg:block lg:h-48 lg:w-48 xl:h-60 xl:w-60" />
              <div className="hidden h-40 rounded-lg bg-accent opacity-75 lg:block lg:h-48 lg:w-48 xl:h-60 xl:w-60" />
            </div>
          </div>

          <div className="h-36 w-full rounded-lg bg-accent opacity-75 lg:h-[396px] xl:h-[500px]" />

          <div className="flex flex-col gap-5">
            <div className="h-6 w-32 rounded-lg bg-accent opacity-75" />

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-5 lg:gap-8">
              <div className="h-40 rounded-lg bg-accent opacity-75 lg:h-48 lg:w-48 xl:h-60 xl:w-60" />
              <div className="h-40 rounded-lg bg-accent opacity-75 lg:h-48 lg:w-48 xl:h-60 xl:w-60" />
              <div className="hidden h-40 rounded-lg bg-accent opacity-75 lg:block lg:h-48 lg:w-48 xl:h-60 xl:w-60" />
              <div className="hidden h-40 rounded-lg bg-accent opacity-75 lg:block lg:h-48 lg:w-48 xl:h-60 xl:w-60" />
              <div className="hidden h-40 rounded-lg bg-accent opacity-75 lg:block lg:h-48 lg:w-48 xl:h-60 xl:w-60" />
            </div>
          </div>

          <div className="h-36 w-full rounded-lg bg-accent opacity-75 lg:h-[396px] xl:h-[500px]" />

          <div className="flex flex-col gap-5">
            <div className="h-6 w-32 rounded-lg bg-accent opacity-75" />

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-5 lg:gap-8">
              <div className="h-40 rounded-lg bg-accent opacity-75 lg:h-48 lg:w-48 xl:h-60 xl:w-60" />
              <div className="h-40 rounded-lg bg-accent opacity-75 lg:h-48 lg:w-48 xl:h-60 xl:w-60" />
              <div className="hidden h-40 rounded-lg bg-accent opacity-75 lg:block lg:h-48 lg:w-48 xl:h-60 xl:w-60" />
              <div className="hidden h-40 rounded-lg bg-accent opacity-75 lg:block lg:h-48 lg:w-48 xl:h-60 xl:w-60" />
              <div className="hidden h-40 rounded-lg bg-accent opacity-75 lg:block lg:h-48 lg:w-48 xl:h-60 xl:w-60" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
