import { CartContext, CartProduct } from "@/providers/cart";
import { XIcon } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";
import QuantityStepper from "./quantity-stepper";
import { formatCurrency } from "@/lib/utils";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext);

  const handleDecreaseProductQuantityClick = () => {
    decreaseProductQuantity(product.id);
  };

  const handleIncreaseProductQuantityClick = () => {
    increaseProductQuantity(product.id);
  };

  const handleRemoveProductFromCartClick = () => {
    removeProductFromCart(product.id);
  };

  return (
    <div className="flex gap-4 py-5">
      <div className="product-stage chamfer-sm relative h-24 w-24 shrink-0">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          fill
          sizes="96px"
          className="object-contain p-[12%]"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div className="flex items-start justify-between gap-3">
          <p className="line-clamp-2 text-sm leading-snug text-foreground/90">
            {product.name}
          </p>
          <button
            aria-label={`Remover ${product.name}`}
            onClick={handleRemoveProductFromCartClick}
            className="-mr-1 -mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-black/[0.08] hover:text-foreground"
          >
            <XIcon size={14} />
          </button>
        </div>

        <div className="mt-3 flex items-end justify-between gap-3">
          <QuantityStepper
            size="sm"
            min={0}
            value={product.quantity}
            onDecrease={handleDecreaseProductQuantityClick}
            onIncrease={handleIncreaseProductQuantityClick}
          />

          <div className="flex flex-col items-end">
            {product.discountPercentage > 0 && (
              <p className="text-[11px] tabular-nums text-muted-foreground line-through">
                {formatCurrency(Number(product.basePrice) * product.quantity)}
              </p>
            )}
            <p className="font-display text-sm font-semibold tabular-nums">
              {formatCurrency(product.totalPrice * product.quantity)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
