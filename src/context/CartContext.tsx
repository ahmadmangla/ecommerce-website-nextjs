"use client";

import { Dispatch, SetStateAction, createContext, useReducer, useState } from "react";
import { data } from "@/lib/productdata";
import { Product } from "@/lib/productdata";

interface Cart {
  cart: Product[] | null;
  addToCart: Function;
  removeFromCart: Function;
  SheetTrigger: boolean;
  setSheetTrigger: Dispatch<SetStateAction<boolean>>;
  handleSheetTrigger: React.MouseEventHandler;
}

const InitialValue = {
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  SheetTrigger: false,
  setSheetTrigger: () => {},
  handleSheetTrigger: () => {},
};

export const CartContext = createContext<Cart>(InitialValue);

export default function CartContextProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  const [SheetTrigger, setSheetTrigger] = useState(false);

  function handleSheetTrigger() {
    setSheetTrigger(!SheetTrigger);
  }

  function addToCart(productId: number) {
    const alreadyExist = cart.find((id) => id.id === productId);

    if (alreadyExist) {
      alreadyExist.quantity++;
      return;
    }

    const addedProduct = data.find((id) => id.id === productId);
    if (addedProduct) {
      addedProduct.quantity = 1;
      setCart([...cart, addedProduct]);
    }
  }

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return <CartContext.Provider value={{ cart, addToCart, removeFromCart, handleSheetTrigger, SheetTrigger, setSheetTrigger }}>{children}</CartContext.Provider>;
}
