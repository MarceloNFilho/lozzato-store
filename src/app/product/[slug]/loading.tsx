const Loading = () => {
  return (
    <div className="flex w-full flex-1 animate-pulse flex-col items-center gap-8">
      <div className="h-96 w-full bg-accent opacity-75" />
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-4 gap-4">
          <div className="h-20 w-20 bg-accent opacity-75" />
          <div className="h-20 w-20 bg-accent opacity-75" />
          <div className="h-20 w-20 bg-accent opacity-75" />
          <div className="h-20 w-20 bg-accent opacity-75" />
        </div>

        <div className="flex flex-col gap-1">
          <div className="h-6 w-32" />
          <div className="h-8 w-32" />
          <div className="h-8 w-32" />
          <div className="h-10 w-24" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
