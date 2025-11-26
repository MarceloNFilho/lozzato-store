const Loading = () => {
  return (
    <div className="min-xl:px-5 mt-20 flex w-full max-w-[1280px] flex-1 animate-pulse flex-col gap-8 lg:mx-auto lg:py-8">
      <div className="flex gap-8 max-lg:w-full max-md:flex-col lg:h-[732px] lg:w-full">
        <div className="flex h-full w-full flex-col lg:flex-1">
          <div className="flex h-[380px] w-full items-center justify-center rounded-3xl bg-card lg:h-full">
            <div className="aspect-square h-full max-h-[70%] w-auto max-w-[80%] rounded-3xl bg-accent opacity-50" />
          </div>
          <div className="mt-8 grid grid-cols-4 gap-4 px-5 lg:hidden">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-20 w-20 rounded-3xl bg-accent opacity-50"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col px-5 lg:w-[472px] lg:rounded-3xl lg:bg-card lg:p-10">
          <div className="flex flex-col gap-2">
            <div className="h-6 w-full rounded-3xl bg-accent opacity-50" />
            <div className="h-8 w-32 rounded-3xl bg-accent opacity-50" />
          </div>

          <div className="mt-4 flex items-center gap-2">
            <div className="h-10 w-10 rounded-md bg-accent opacity-50" />
            <div className="h-6 w-4 rounded-3xl bg-accent opacity-50" />
            <div className="h-10 w-10 rounded-md bg-accent opacity-50" />
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <div className="h-5 w-24 rounded-3xl bg-accent opacity-50" />
            <div className="h-40 w-full rounded-3xl bg-accent opacity-50" />
          </div>

          <div className="mt-8 h-10 w-full rounded-3xl bg-accent opacity-50" />

          <div className="mt-5 flex items-center justify-between rounded-3xl bg-accent bg-opacity-5 px-5 py-2">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-accent opacity-50" />
              <div className="flex flex-col gap-1">
                <div className="h-3 w-32 rounded-3xl bg-accent opacity-50" />
                <div className="h-3 w-32 rounded-3xl bg-accent opacity-50" />
              </div>
            </div>
            <div className="h-3 w-20 rounded-3xl bg-accent opacity-50" />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-5 max-md:hidden">
        <div className="h-6 w-60 rounded-3xl bg-accent opacity-50" />

        <div className="grid grid-cols-5 gap-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 rounded-3xl bg-card p-1"
            >
              <div className="aspect-square rounded-3xl bg-accent opacity-50" />
              <div className="flex flex-col gap-1 px-2 lg:px-3">
                <div className="h-4 w-full rounded-3xl bg-accent opacity-50" />
                <div className="h-5 w-20 rounded-3xl bg-accent opacity-50" />
              </div>
              <div className="px-2 pb-3 lg:px-3">
                <div className="h-10 w-full rounded-3xl bg-accent opacity-50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
