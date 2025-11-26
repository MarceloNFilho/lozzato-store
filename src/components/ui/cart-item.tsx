import { CartContext, CartProduct } from "@/providers/cart";
import { ArrowLeft, ArrowRight, TrashIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";
import { useContext } from "react";

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
    <div className="flex items-center gap-4">
      <div className="flex h-[84px] w-[84px] items-center justify-center rounded-3xl bg-accent">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
        />
      </div>

      <div className="flex w-full flex-1 flex-col">
        <p className="max-w-[90%] overflow-hidden text-ellipsis whitespace-nowrap text-xs">
          {product.name}
        </p>

        <div className="flex items-center gap-2">
          <p className="text-sm font-bold">R${product.totalPrice.toFixed(2)}</p>
          {product.discountPercentage > 0 && (
            <p className="text-xs line-through opacity-75">
              R$ {Number(product.basePrice).toFixed(2)}
            </p>
          )}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Button
              size="icon"
              variant="outline"
              className="h-8 w-8"
              onClick={handleDecreaseProductQuantityClick}
            >
              <ArrowLeft size={16} />
            </Button>

            <span className="text-xs">{product.quantity}</span>

            <Button
              size="icon"
              variant="outline"
              className="h-8 w-8"
              onClick={handleIncreaseProductQuantityClick}
            >
              <ArrowRight size={16} />
            </Button>
          </div>

          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8"
            onClick={handleRemoveProductFromCartClick}
          >
            <TrashIcon size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
