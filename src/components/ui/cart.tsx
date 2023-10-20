import { ShoppingCart } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import computeProductTotalPrice from "@/helpers/products";
import { Separator } from "./separator";

const Cart = () => {
  const { products, subtotal, total, totalDiscount } = useContext(CartContext);
  return (
    <div className="flex flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-xs uppercase"
        variant="outline"
      >
        <ShoppingCart size={16} />
        Carrinho
      </Badge>

      <div className="flex flex-col gap-5">
        {products.length > 0 ? (
          products.map((product) => {
            return (
              <>
                <CartItem
                  key={product.id}
                  product={computeProductTotalPrice(product as any) as any}
                />

                <div className="flex flex-col gap-3">
                  <Separator />
                  <div className="flex items-center justify-between">
                    <p className="text-xs">Subtotal</p>
                    <p className="text-xs">R$ {subtotal.toFixed(2)}</p>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <p className="text-xs">Entrega</p>
                    <p className="text-xs uppercase">grátis</p>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <p className="text-xs">Descontos</p>
                    <p className="text-xs">- R$ {totalDiscount.toFixed(2)}</p>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold">Total</p>
                    <p className="text-sm font-bold">R$ {total.toFixed(2)}</p>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <p className="text-center text-sm font-semibold opacity-75">
            Carrinho vazio.
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
