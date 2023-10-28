const Loading = () => {
  return (
    <div className="flex w-full max-w-[1280px] flex-1 animate-pulse flex-col items-center gap-8 lg:mx-auto lg:py-8">
      <div className="flex gap-8 max-lg:w-full max-md:flex-col lg:h-[732px] lg:w-full">
        <div className="h-96 w-full bg-accent opacity-75 lg:h-full lg:flex-1 lg:rounded-lg">
          <div className="hidden grid-rows-4 gap-4 p-8 lg:grid">
            <div className="h-20 w-20 rounded-lg bg-background opacity-75" />
            <div className="h-20 w-20 rounded-lg bg-background opacity-75" />
            <div className="h-20 w-20 rounded-lg bg-background opacity-75" />
            <div className="h-20 w-20 rounded-lg bg-background opacity-75" />
          </div>
        </div>
        <div className="flex flex-col gap-8 max-xl:px-5 lg:w-[472px] lg:rounded-lg lg:bg-accent lg:p-10">
          <div className="grid grid-cols-4 gap-4 lg:hidden">
            <div className="h-20 w-20 rounded-lg bg-accent opacity-75" />
            <div className="h-20 w-20 rounded-lg bg-accent opacity-75" />
            <div className="h-20 w-20 rounded-lg bg-accent opacity-75" />
            <div className="h-20 w-20 rounded-lg bg-accent opacity-75" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="h-6 w-full rounded-lg bg-accent opacity-75 lg:bg-background" />
            <div className="h-8 w-32 rounded-lg bg-accent opacity-75 lg:bg-background" />

            <div className="h-10 w-24 rounded-lg bg-accent opacity-75 lg:mt-4 lg:bg-background" />
          </div>

          <div className="flex flex-col gap-3">
            <div className="h-6 w-32 rounded-lg bg-accent opacity-75 lg:bg-background" />
            <div className="h-20 w-full bg-accent opacity-75 max-lg:rounded-tl-lg max-lg:rounded-tr-lg lg:h-72 lg:rounded-lg lg:bg-background" />

            <div className="h-12 w-full rounded-lg bg-accent opacity-75 max-lg:hidden lg:bg-background" />
            <div className="h-14 w-full rounded-lg bg-accent opacity-75 max-lg:hidden lg:bg-background" />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-5 max-md:hidden">
        <div className="h-6 w-60 rounded-lg bg-accent opacity-75" />

        <div className="grid grid-cols-5 gap-8">
          <div className="h-64 w-64 rounded-lg bg-accent opacity-75" />
          <div className="h-64 w-64 rounded-lg bg-accent opacity-75" />
          <div className="h-64 w-64 rounded-lg bg-accent opacity-75" />
          <div className="h-64 w-64 rounded-lg bg-accent opacity-75" />
          <div className="h-64 w-64 rounded-lg bg-accent opacity-75" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
