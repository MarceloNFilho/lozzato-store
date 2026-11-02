import { Badge, BadgeProps } from "./badge";
import { cn } from "@/lib/utils";

const DiscountBadge = ({ children, className, ...props }: BadgeProps) => {
  return (
    <Badge
      variant="default"
      className={cn("tabular-nums", className)}
      {...props}
    >
      -{children}%
    </Badge>
  );
};

export default DiscountBadge;
