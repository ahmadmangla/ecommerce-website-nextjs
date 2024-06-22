"use client";

import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { data } from "@/lib/productdata";
import { Product } from "@/types/ProductTypes";

interface Cart {
  cart: Product[] | null;
  addToCart: (productId: number) => void;
  removeFromCart: (id: number) => void;
  SheetTrigger: boolean;
  setSheetTrigger: Dispatch<SetStateAction<boolean>>;
  handleSheetTrigger: () => void;
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

  useEffect(() => {
    const cartFromStorage = localStorage.getItem("cart");

    if (cartFromStorage) {
      setCart(JSON.parse(cartFromStorage));
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  function handleSheetTrigger() {
    setSheetTrigger(!SheetTrigger);
  }

  function addToCart(productId: number) {
    const existingProduct = cart.find((product) => product.id === productId);
    if (existingProduct) {
      existingProduct.quantity++;
      setCart([...cart]);
      localStorage.setItem("cart", JSON.stringify([...cart]));
    } else {
      const newProduct = data.find((product) => product.id === productId);
      if (newProduct) {
        newProduct.quantity = 1;
        setCart([...cart, newProduct]);
        localStorage.setItem("cart", JSON.stringify([...cart, newProduct]));
      }
    }
  }

  function removeFromCart(id: number) {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        handleSheetTrigger,
        SheetTrigger,
        setSheetTrigger,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
