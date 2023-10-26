const LoadingPage = () => {
  return (
    <div className="flex w-full flex-1 flex-col items-center p-5">
      <div className="flex animate-pulse flex-col gap-8">
        <div className="h-8 w-28 rounded-lg bg-gray-900" />
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <div className="h-44 w-44 rounded-lg bg-gray-900" />
            <div className="h-8 w-32 rounded-lg bg-gray-900" />
            <div className="h-8 w-24 rounded-lg bg-gray-900" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-44 w-44 rounded-lg bg-gray-900" />
            <div className="h-8 w-32 rounded-lg bg-gray-900" />
            <div className="h-8 w-24 rounded-lg bg-gray-900" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-44 w-44 rounded-lg bg-gray-900" />
            <div className="h-8 w-32 rounded-lg bg-gray-900" />
            <div className="h-8 w-24 rounded-lg bg-gray-900" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-44 w-44 rounded-lg bg-gray-900" />
            <div className="h-8 w-32 rounded-lg bg-gray-900" />
            <div className="h-8 w-24 rounded-lg bg-gray-900" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
