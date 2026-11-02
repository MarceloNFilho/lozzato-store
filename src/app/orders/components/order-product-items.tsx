import { computeProductTotalPrice } from "@/helpers/products";
import { formatCurrency } from "@/lib/utils";
import { Prisma } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface OrderProductItemProps {
  orderProduct: Prisma.OrderProductGetPayload<{
    include: {
      product: true;
    };
  }>;
}

const OrderProductItem = ({ orderProduct }: OrderProductItemProps) => {
  const productWithTotalPrice = computeProductTotalPrice(orderProduct.product);

  return (
    <div className="flex items-center gap-4 py-4">
      <Link
        href={`/product/${orderProduct.product.slug}`}
        className="product-stage chamfer-sm relative h-20 w-20 shrink-0"
      >
        <Image
          src={orderProduct.product.imageUrls[0]}
          fill
          sizes="80px"
          className="object-contain p-[12%]"
          alt={orderProduct.product.name}
        />
      </Link>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <p className="line-clamp-1 text-sm">{orderProduct.product.name}</p>
        <p className="text-xs text-muted-foreground">
          Vendido e entregue por Lozzato Store · Qtd. {orderProduct.quantity}
        </p>
      </div>

      <div className="flex flex-col items-end">
        {productWithTotalPrice.discountPercentage > 0 && (
          <p className="text-[11px] tabular-nums text-muted-foreground line-through">
            {formatCurrency(Number(productWithTotalPrice.basePrice))}
          </p>
        )}
        <p className="font-display text-sm font-semibold tabular-nums">
          {formatCurrency(productWithTotalPrice.totalPrice)}
        </p>
      </div>
    </div>
  );
};

export default OrderProductItem;
