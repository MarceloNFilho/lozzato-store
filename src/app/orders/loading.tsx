import LoadingPage from "@/components/ui/loading";

const Loading = () => {
  return (
    <div className="flex w-full max-w-[1280px] flex-1 flex-col p-5 lg:mx-auto">
      <div className="flex w-full animate-pulse flex-col gap-8">
        <div className="h-8 w-28 rounded-lg bg-accent opacity-75" />
        <div className="flex flex-col gap-4">
          <div className="h-14 w-full rounded-lg bg-accent opacity-75" />
          <div className="h-14 w-full rounded-lg bg-accent opacity-75" />
          <div className="h-14 w-full rounded-lg bg-accent opacity-75" />
          <div className="h-14 w-full rounded-lg bg-accent opacity-75" />
          <div className="h-14 w-full rounded-lg bg-accent opacity-75" />
          <div className="h-14 w-full rounded-lg bg-accent opacity-75" />
          <div className="h-14 w-full rounded-lg bg-accent opacity-75" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
