"use client";

import { Product } from "@prisma/client";
import { ReactNode, createContext } from "react";

interface CartsProducts extends Product {
  quantity: number;
}

interface ICartContext {
  products: CartsProducts[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CartContext.Provider
      value={{
        products: [],
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        cartTotalPrice: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
