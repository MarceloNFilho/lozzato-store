const Loading = () => {
  return (
    <div className="flex w-full max-w-[1280px] animate-pulse flex-col gap-8 max-xl:px-5 max-lg:py-8 lg:mx-auto lg:pb-8">
      <div className="h-36 w-full rounded-lg bg-accent opacity-75 lg:h-[396px] xl:h-[500px]" />

      <div className="grid grid-cols-2 gap-x-4 gap-y-2 xl:grid-cols-6">
        <div className="h-10 w-full rounded-lg bg-accent opacity-75" />
        <div className="h-10 w-full rounded-lg bg-accent opacity-75 " />
        <div className="h-10 w-full rounded-lg bg-accent opacity-75 " />
        <div className="h-10 w-full rounded-lg bg-accent opacity-75 " />
        <div className="h-10 w-full rounded-lg bg-accent opacity-75 " />
        <div className="h-10 w-full rounded-lg bg-accent opacity-75 " />
      </div>

      <div className="flex flex-col gap-5">
        <div className="h-6 w-32 rounded-lg bg-accent opacity-75" />

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          <div className="h-40 w-40 rounded-lg bg-accent opacity-75 lg:h-48 lg:w-48 xl:h-60 xl:w-60 " />
          <div className="h-40 w-40 rounded-lg bg-accent opacity-75 lg:h-48 lg:w-48 xl:h-60 xl:w-60" />
          <div className="hidden h-40 w-40 rounded-lg bg-accent opacity-75 lg:block lg:h-48 lg:w-48 xl:h-60 xl:w-60" />
          <div className="hidden h-40 w-40 rounded-lg bg-accent opacity-75 lg:block lg:h-48 lg:w-48 xl:h-60 xl:w-60" />
          <div className="hidden h-40 w-40 rounded-lg bg-accent opacity-75 lg:block lg:h-48 lg:w-48 xl:h-60 xl:w-60" />
        </div>
      </div>

      <div className="h-36 w-full rounded-lg bg-accent opacity-75 lg:h-[396px] xl:h-[500px]" />

      <div className="flex flex-col gap-5">
        <div className="h-6 w-32 rounded-lg bg-accent opacity-75" />

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          <div className="h-40 w-40 rounded-lg bg-accent opacity-75 lg:h-48 lg:w-48" />
          <div className="h-40 w-40 rounded-lg bg-accent opacity-75 lg:h-48 lg:w-48" />
          <div className="h-40 w-40 rounded-lg bg-accent opacity-75 lg:h-48 lg:w-48" />
          <div className="h-40 w-40 rounded-lg bg-accent opacity-75 lg:h-48 lg:w-48" />
          <div className="h-40 w-40 rounded-lg bg-accent opacity-75 lg:h-48 lg:w-48" />
        </div>
      </div>

      <div className="h-36 w-full rounded-lg bg-accent opacity-75 lg:h-[396px] xl:h-[500px]" />

      <div className="flex flex-col gap-5">
        <div className="h-6 w-32 rounded-lg bg-accent opacity-75" />

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          <div className="h-40 w-40 rounded-lg bg-accent opacity-75 lg:h-48 lg:w-48" />
          <div className="h-40 w-40 rounded-lg bg-accent opacity-75 lg:h-48 lg:w-48" />
          <div className="h-40 w-40 rounded-lg bg-accent opacity-75 lg:h-48 lg:w-48" />
          <div className="h-40 w-40 rounded-lg bg-accent opacity-75 lg:h-48 lg:w-48" />
          <div className="h-40 w-40 rounded-lg bg-accent opacity-75 lg:h-48 lg:w-48" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
