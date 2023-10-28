"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Cart from "@/components/ui/cart";
import DiscountBadge from "@/components/ui/discount-badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ProductWithTotalPrice } from "@/helpers/products";
import { CartContext } from "@/providers/cart";
import { ArrowDown, ArrowLeft, ArrowRight, TruckIcon } from "lucide-react";
import { useContext, useState } from "react";

interface ProductDetailsProps {
  product: ProductWithTotalPrice;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);

  const { AddProductToCart } = useContext(CartContext);

  const HandleAddProductToCart = () => {
    AddProductToCart({ ...product, quantity });
  };

  const handleDecreaseQuantity = () => {
    setQuantity((state) => (state === 1 ? state : state - 1));
  };

  const handleIncreaseQuantity = () => {
    setQuantity((state) => state + 1);
  };

  return (
    <div className="flex flex-col px-5 lg:max-w-[472px] lg:rounded-lg lg:bg-accent lg:p-10">
      <h2 className="text-lg">{product.name}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">
          R$ {product.totalPrice.toFixed(2)}
        </h1>
        {product.discountPercentage > 0 && (
          <DiscountBadge>{product.discountPercentage}</DiscountBadge>
        )}
      </div>
      {product.discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          R$ {Number(product.basePrice).toFixed(2)}
        </p>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Button size="icon" variant="outline" onClick={handleDecreaseQuantity}>
          <ArrowLeft size={16} />
        </Button>

        <span>{quantity}</span>

        <Button size="icon" variant="outline" onClick={handleIncreaseQuantity}>
          <ArrowRight size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>

        <p className="text-justify text-sm opacity-60">{product.description}</p>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="mt-8 font-bold uppercase"
            onClick={HandleAddProductToCart}
          >
            Adicionar ao carrinho
          </Button>
        </SheetTrigger>

        <SheetContent>
          <Cart />
        </SheetContent>
      </Sheet>

      <div className="mt-5 flex items-center justify-between rounded-lg bg-white bg-opacity-5 px-5 py-2">
        <div className="flex items-center gap-3">
          <TruckIcon />
          <div className="flex flex-col">
            <p className="text-xs leading-6">
              Entrega via <span className="font-bold">LozzatoPacket®</span>
            </p>
            <p className="text-xs text-primary">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>
        <p className="text-xs font-bold">Frete Grátis</p>
      </div>
    </div>
  );
};

export default ProductDetails;
