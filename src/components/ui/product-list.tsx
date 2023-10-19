import ProductItem from "@/components/ui/product-item";
import computeProductTotalPrice from "@/helpers/products";
import { Product } from "@prisma/client";

interface ProductListProps {
  title?: string;
  products: Product[];
}

const ProductList = ({ title, products }: ProductListProps) => {
  return (
    <>
      <h1 className="mb-5 px-5 font-bold uppercase">{title}</h1>
      <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              product={computeProductTotalPrice(product)}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
