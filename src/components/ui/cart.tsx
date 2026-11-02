"use client";

import { ShoppingBagIcon, Loader2, LockIcon, ArrowRight } from "lucide-react";
import { useContext, useState } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/products";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";
import { createCheckout } from "@/actions/checkout";
import { SheetClose } from "./sheet";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";

import { createOrder } from "@/actions/order";
import { useSession } from "next-auth/react";
import { SignInDialog } from "./sign-in-dialog";

const Cart = () => {
  const { data } = useSession();
  const [signInDialogOpen, setSignInDialogOpen] = useState(false);
  const [processing, setProcessing] = useState(false);
  const { products, subtotal, total, totalDiscount, itemsCount } =
    useContext(CartContext);

  const handleFinishPurchaseClick = async () => {
    if (!data?.user) {
      setSignInDialogOpen(true);
      return;
    }

    try {
      setProcessing(true);

      const order = await createOrder(products, (data?.user as any).id);

      const checkout = await createCheckout(products, order.id);

      if (checkout.url) {
        window.location.href = checkout.url;
      }
    } catch (error) {
      console.error(error);
      setProcessing(false);
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-baseline gap-3 pb-6">
        <h2 className="font-display text-2xl font-semibold uppercase tracking-[0.04em]">
          Carrinho
        </h2>
        {itemsCount > 0 && (
          <span className="text-sm tabular-nums text-muted-foreground">
            {itemsCount} {itemsCount === 1 ? "item" : "itens"}
          </span>
        )}
      </div>

      {products.length > 0 ? (
        <>
          <div className="-mx-2 flex min-h-0 flex-1 flex-col overflow-hidden">
            <ScrollArea className="h-full px-2">
              <div className="flex flex-col divide-y divide-border">
                {products.map((product) => (
                  <CartItem
                    key={product.id}
                    product={computeProductTotalPrice(product as any) as any}
                  />
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className="flex flex-col gap-3 border-t border-border pt-6 text-sm">
            <div className="flex items-center justify-between text-muted-foreground">
              <p>Subtotal</p>
              <p className="tabular-nums">{formatCurrency(subtotal)}</p>
            </div>

            {totalDiscount > 0 && (
              <div className="flex items-center justify-between text-muted-foreground">
                <p>Descontos</p>
                <p className="tabular-nums text-foreground">
                  − {formatCurrency(totalDiscount)}
                </p>
              </div>
            )}

            <div className="flex items-center justify-between text-muted-foreground">
              <p>Entrega</p>
              <p className="text-success">Grátis</p>
            </div>

            <div className="mt-2 flex items-baseline justify-between border-t border-border pt-4">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.14em]">
                Total
              </p>
              <p className="font-display text-2xl font-semibold tabular-nums">
                {formatCurrency(total)}
              </p>
            </div>

            <Button
              size="md"
              className="mt-4 w-full"
              onClick={handleFinishPurchaseClick}
              disabled={processing}
            >
              {processing ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <LockIcon size={14} />
              )}
              Finalizar compra
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              Pagamento seguro processado pela Stripe
            </p>
          </div>
        </>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-6 pb-20 text-center">
          <span className="chamfer flex h-20 w-20 items-center justify-center bg-black/[0.04] text-foreground/40">
            <ShoppingBagIcon size={28} strokeWidth={1.5} />
          </span>
          <div className="flex flex-col gap-2">
            <p className="font-display text-lg font-semibold uppercase tracking-[0.06em]">
              Seu carrinho está vazio
            </p>
            <p className="max-w-[260px] text-sm text-muted-foreground">
              Explore o catálogo e encontre o setup que combina com você.
            </p>
          </div>
          <SheetClose asChild>
            <Button asChild variant="outline">
              <Link href="/catalog">
                Explorar catálogo
                <ArrowRight size={14} />
              </Link>
            </Button>
          </SheetClose>
        </div>
      )}

      <SignInDialog
        open={signInDialogOpen}
        onOpenChange={setSignInDialogOpen}
      />
    </div>
  );
};

export default Cart;
