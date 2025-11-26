import { Badge } from "@/components/ui/badge";
import { ShapesIcon } from "lucide-react";

const Loading = () => {
  return (
    <div className="mt-20 flex max-w-[1280px] flex-col items-center gap-8 max-xl:p-5 lg:mx-auto xl:py-5">
      <div className="flex w-full items-start">
        <Badge variant="heading">
          <ShapesIcon size={16} />
          Catálogo
        </Badge>
      </div>
      <div className="grid w-full grid-cols-2 gap-8 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 rounded-3xl bg-card py-3"
          >
            <div className="flex aspect-square w-full items-center justify-center rounded-3xl bg-card">
              <div className="aspect-square h-[70%] w-[70%] rounded-3xl bg-accent opacity-50" />
            </div>
            <div className="flex items-center justify-center rounded-bl-3xl rounded-br-3xl bg-card py-3 pt-0">
              <div className="h-4 w-32 rounded-3xl bg-zinc-500 opacity-50" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
