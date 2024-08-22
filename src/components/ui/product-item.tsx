import { ProductWithTotalPrice } from "@/helpers/products";
import Image from "next/image";
import Link from "next/link";
import DiscountBadge from "./discount-badge";
import { Button } from "./button";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="space-y-3 rounded-lg bg-card">
      <Link href={`/product/${product.slug}`}>
        <div className="flex flex-col gap-3">
          <div className="relative flex aspect-square items-center justify-center whitespace-nowrap rounded-lg">
            <Image
              src={product.imageUrls[0]}
              width={0}
              height={0}
              sizes="100vw"
              alt={product.slug}
              className="h-auto max-h-[80%] w-auto max-w-[80%] object-contain"
            />

            {product.discountPercentage > 0 && (
              <DiscountBadge className="absolute left-3 top-3">
                {product.discountPercentage}
              </DiscountBadge>
            )}
          </div>

          <div className="flex flex-col gap-1 px-3">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
              {product.name}
            </p>
            <div className="flex items-center gap-1">
              {product.discountPercentage > 0 ? (
                <>
                  <p className="text-sm font-bold">
                    R$ {product.totalPrice.toFixed(2)}
                  </p>
                  <p className="text-xs line-through opacity-75">
                    R$ {Number(product.basePrice).toFixed(2)}
                  </p>
                </>
              ) : (
                <p className="font-bold">
                  R$ {Number(product.basePrice).toFixed(2)}
                </p>
              )}
            </div>
          </div>
        </div>
      </Link>
      <div className="px-3 pb-3">
        <Button variant="outline" className="w-full hover:bg-primary">
          Comprar
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
