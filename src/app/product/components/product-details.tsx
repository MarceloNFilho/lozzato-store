"use client";

import { Button } from "@/components/ui/button";
import Cart from "@/components/ui/cart";
import DiscountBadge from "@/components/ui/discount-badge";
import QuantityStepper from "@/components/ui/quantity-stepper";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ProductWithTotalPrice } from "@/helpers/products";
import { formatCurrency } from "@/lib/utils";
import { CartContext } from "@/providers/cart";
import { CreditCardIcon, ShoppingBagIcon, TruckIcon } from "lucide-react";
import { useContext, useState } from "react";

interface ProductDetailsProps {
  product: ProductWithTotalPrice;
  categoryName?: string;
}

const ProductDetails = ({ product, categoryName }: ProductDetailsProps) => {
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

  const hasDiscount = product.discountPercentage > 0;
  const savings = Number(product.basePrice) - product.totalPrice;

  return (
    <div className="flex flex-col">
      {categoryName && <span className="eyebrow">{categoryName}</span>}

      <h1 className="mt-3 font-display text-3xl font-semibold uppercase leading-[1.05] tracking-[0.02em] md:text-4xl">
        {product.name}
      </h1>

      <div className="mt-8 flex flex-col gap-2 border-t border-border pt-8">
        <div className="flex items-center gap-3">
          <p className="font-display text-4xl font-semibold tabular-nums">
            {formatCurrency(product.totalPrice)}
          </p>
          {hasDiscount && (
            <DiscountBadge>{product.discountPercentage}</DiscountBadge>
          )}
        </div>
        {hasDiscount && (
          <p className="text-sm text-muted-foreground">
            <span className="tabular-nums line-through">
              {formatCurrency(Number(product.basePrice))}
            </span>
            <span className="ml-2 text-foreground">
              Você economiza {formatCurrency(savings)}
            </span>
          </p>
        )}
      </div>

      <div className="mt-8 flex items-stretch gap-3">
        <QuantityStepper
          value={quantity}
          onDecrease={handleDecreaseQuantity}
          onIncrease={handleIncreaseQuantity}
          className="h-12 [&>button]:h-12"
        />

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="md"
              className="flex-1"
              onClick={HandleAddProductToCart}
            >
              <ShoppingBagIcon size={16} />
              Adicionar ao carrinho
            </Button>
          </SheetTrigger>

          <SheetContent>
            <Cart />
          </SheetContent>
        </Sheet>
      </div>

      <div className="surface chamfer mt-6 flex flex-col divide-y divide-border">
        <div className="flex items-center gap-4 p-5">
          <TruckIcon
            size={20}
            strokeWidth={1.5}
            className="text-foreground/70"
          />
          <div className="flex flex-1 flex-col gap-0.5">
            <p className="text-sm">
              Entrega via <span className="font-semibold">LozzatoPacket®</span>
            </p>
            <p className="text-xs text-muted-foreground">
              Envio para todo o Brasil
            </p>
          </div>
          <span className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-success">
            Grátis
          </span>
        </div>
        <div className="flex items-center gap-4 p-5">
          <CreditCardIcon
            size={20}
            strokeWidth={1.5}
            className="text-foreground/70"
          />
          <div className="flex flex-col gap-0.5">
            <p className="text-sm">Pagamento seguro</p>
            <p className="text-xs text-muted-foreground">
              Checkout criptografado via Stripe
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <h2 className="eyebrow text-foreground">Sobre o produto</h2>
        <p className="whitespace-pre-line text-[15px] leading-relaxed text-muted-foreground">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
