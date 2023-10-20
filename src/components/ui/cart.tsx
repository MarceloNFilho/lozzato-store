import { ShoppingCart } from "lucide-react";
import { Badge } from "./badge";

const Cart = () => {
  return (
    <div>
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-xs uppercase"
        variant="outline"
      >
        <ShoppingCart size={16} />
        Carrinho
      </Badge>
    </div>
  );
};

export default Cart;
