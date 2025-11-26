import LoadingPage from "@/components/ui/loading";

const Loading = () => {
  return (
    <div className="mt-20 max-w-[1280px] max-xl:p-5 lg:mx-auto xl:py-5">
      <div className="h-4 w-32 rounded-full bg-zinc-500 opacity-50" />

      <div className="mt-5 flex flex-col gap-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="flex h-[86px] w-full flex-col justify-center gap-2 rounded-3xl border bg-card px-5 py-4"
          >
            <div className="h-4 w-48 rounded-3xl bg-accent opacity-75" />
            <div className="h-3 w-32 rounded-3xl bg-accent opacity-75" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
