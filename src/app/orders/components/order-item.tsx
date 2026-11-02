"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Order, Prisma } from "@prisma/client";
import { format } from "date-fns";
import OrderProductItem from "./order-product-items";
import { cn, formatCurrency } from "@/lib/utils";
import { useMemo } from "react";
import { computeProductTotalPrice } from "@/helpers/products";
import { getOrderStatus } from "../helpers/status";

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: {
        include: { product: true };
      };
    };
  }>;
}

const OrderItem = ({ order }: OrderItemProps) => {
  const subtotal = useMemo(() => {
    return order.orderProducts.reduce((acc, orderProduct) => {
      return (
        acc + Number(orderProduct.product.basePrice) * orderProduct.quantity
      );
    }, 0);
  }, [order.orderProducts]);

  const total = useMemo(() => {
    return order.orderProducts.reduce((acc, product) => {
      const productWithTotalPrice = computeProductTotalPrice(product.product);

      return acc + productWithTotalPrice.totalPrice * product.quantity;
    }, 0);
  }, [order.orderProducts]);

  const totalDiscounts = subtotal - total;

  const isPaid = order.status === "PAYMENT_CONFIRMED";

  return (
    <Card className="chamfer surface rounded-none border-0 px-5 shadow-none md:px-8">
      <Accordion type="single" className="w-full" collapsible>
        <AccordionItem value={order.id} className="border-0">
          <AccordionTrigger className="gap-4 py-6 hover:no-underline">
            <div className="flex flex-1 flex-col gap-4 text-left md:flex-row md:items-center md:justify-between md:pr-6">
              <div className="flex flex-col gap-1">
                <p className="font-display text-sm font-semibold uppercase tracking-[0.12em]">
                  Pedido #{order.id.slice(-6).toUpperCase()}
                </p>
                <span className="text-xs text-muted-foreground">
                  {format(new Date(order.createdAt), "d/MM/y 'às' HH:mm")} ·{" "}
                  {order.orderProducts.length}{" "}
                  {order.orderProducts.length === 1 ? "produto" : "produtos"}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
                    isPaid
                      ? "bg-success/10 text-success"
                      : "bg-amber-500/10 text-amber-700",
                  )}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {getOrderStatus(order.status)}
                </span>
                <p className="font-display text-base font-semibold tabular-nums">
                  {formatCurrency(total)}
                </p>
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent>
            <div className="flex flex-col gap-2 border-t border-border pt-2">
              <div className="flex flex-col divide-y divide-border">
                {order.orderProducts.map((orderProduct) => (
                  <OrderProductItem
                    key={orderProduct.id}
                    orderProduct={orderProduct}
                  />
                ))}
              </div>

              <div className="flex w-full flex-col gap-3 border-t border-border pt-5 text-sm md:ml-auto md:max-w-sm">
                <div className="flex justify-between text-muted-foreground">
                  <p>Subtotal</p>
                  <p className="tabular-nums">{formatCurrency(subtotal)}</p>
                </div>

                {totalDiscounts > 0 && (
                  <div className="flex justify-between text-muted-foreground">
                    <p>Descontos</p>
                    <p className="tabular-nums text-foreground">
                      − {formatCurrency(totalDiscounts)}
                    </p>
                  </div>
                )}

                <div className="flex justify-between text-muted-foreground">
                  <p>Entrega</p>
                  <p className="text-success">Grátis</p>
                </div>

                <div className="flex justify-between border-t border-border pt-3 font-semibold">
                  <p>Total · Cartão</p>
                  <p className="font-display text-base tabular-nums">
                    {formatCurrency(total)}
                  </p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default OrderItem;
