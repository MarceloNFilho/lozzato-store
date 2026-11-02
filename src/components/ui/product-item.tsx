"use client";

import { ProductWithTotalPrice } from "@/helpers/products";
import Image from "next/image";
import Link from "next/link";
import DiscountBadge from "./discount-badge";
import { Button } from "./button";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import { PlusIcon } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

import Cart from "./cart";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { AddProductToCart } = useContext(CartContext);

  const HandleAddProductToCart = () => {
    AddProductToCart({ ...product, quantity: 1 });
  };

  const hasDiscount = product.discountPercentage > 0;

  return (
    <div className="group flex h-full flex-col">
      <Link
        href={`/product/${product.slug}`}
        className="flex flex-1 flex-col gap-4"
      >
        <div className="product-stage chamfer relative aspect-square overflow-hidden">
          <Image
            src={product.imageUrls[0]}
            fill
            sizes="(min-width: 1280px) 20vw, (min-width: 768px) 30vw, 50vw"
            alt={product.name}
            className="object-contain p-[10%] drop-shadow-[0_20px_24px_rgba(0,0,0,0.12)] transition-transform duration-700 ease-premium group-hover:scale-[1.06]"
          />

          {hasDiscount && (
            <DiscountBadge className="absolute left-3 top-3">
              {product.discountPercentage}
            </DiscountBadge>
          )}

          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        <div className="flex flex-col gap-1.5 px-0.5">
          <p className="line-clamp-1 text-sm text-foreground/80 transition-colors group-hover:text-foreground">
            {product.name}
          </p>
          <div className="flex items-baseline gap-2">
            <p className="font-display text-base font-semibold tabular-nums md:text-lg">
              {formatCurrency(product.totalPrice)}
            </p>
            {hasDiscount && (
              <p className="text-xs tabular-nums text-muted-foreground line-through">
                {formatCurrency(Number(product.basePrice))}
              </p>
            )}
          </div>
        </div>
      </Link>

      <div className="mt-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
              onClick={HandleAddProductToCart}
            >
              <PlusIcon size={14} />
              Adicionar
            </Button>
          </SheetTrigger>

          <SheetContent>
            <Cart />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default ProductItem;
