import { MinusIcon, PlusIcon, Trash2Icon } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuantityStepperProps {
  value: number;
  onDecrease: () => void;
  onIncrease: () => void;
  min?: number;
  size?: "sm" | "default";
  className?: string;
}

const QuantityStepper = ({
  value,
  onDecrease,
  onIncrease,
  min = 1,
  size = "default",
  className,
}: QuantityStepperProps) => {
  const iconSize = size === "sm" ? 14 : 16;
  const removesOnDecrease = min === 0 && value === 1;

  const buttonClass = cn(
    "flex items-center justify-center text-foreground/70 transition-colors hover:bg-black/[0.08] hover:text-foreground disabled:opacity-30",
    size === "sm" ? "h-8 w-8" : "h-11 w-11",
  );

  return (
    <div
      className={cn(
        "chamfer-xs inline-flex items-center bg-black/[0.06]",
        className,
      )}
    >
      <button
        type="button"
        aria-label={removesOnDecrease ? "Remover item" : "Diminuir quantidade"}
        className={cn(
          buttonClass,
          removesOnDecrease && "hover:text-destructive",
        )}
        onClick={onDecrease}
        disabled={value <= min}
      >
        {removesOnDecrease ? (
          <Trash2Icon size={iconSize} />
        ) : (
          <MinusIcon size={iconSize} />
        )}
      </button>
      <span
        className={cn(
          "min-w-8 text-center font-display font-semibold tabular-nums",
          size === "sm" ? "text-xs" : "text-sm",
        )}
      >
        {value}
      </span>
      <button
        type="button"
        aria-label="Aumentar quantidade"
        className={buttonClass}
        onClick={onIncrease}
      >
        <PlusIcon size={iconSize} />
      </button>
    </div>
  );
};

export default QuantityStepper;
