"use client";

import { Product } from "@prisma/client";
import { ReactNode, createContext, useState } from "react";

interface CartProduct extends Product {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  AddProductToCart: (product: CartProduct) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  AddProductToCart: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [product, setProduct] = useState<CartProduct[]>([]);

  const AddProductToCart = (product: CartProduct) => {
    setProduct((state) => [...state, product]);
  };

  return (
    <CartContext.Provider
      value={{
        products: [],
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        cartTotalPrice: 0,
        AddProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
