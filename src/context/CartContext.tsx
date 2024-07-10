"use client";

import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { Product } from "@/types/ProductTypes";
import { ProductContext, useProducts } from "./ProductContext";

interface Cart {
  cart: Product[] | null;
  addToCart: (productId: string) => void;
  removeFromCart: (id: string) => void;
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

  const context = useProducts();
  if (!context) {
    return null;
  }

  const { products } = context;

  function handleSheetTrigger() {
    setSheetTrigger(!SheetTrigger);
  }

  function addToCart(productId: string) {
    const existingProduct = cart.find((product) => product._id === productId);
    console.log(existingProduct, "existingProduct");
    if (existingProduct) {
      existingProduct.quantity++;
      setCart([...cart]);
      localStorage.setItem("cart", JSON.stringify([...cart]));
    } else {
      const newProduct = products.find((product) => product._id === productId);
      console.log(newProduct, "newProduct");

      if (newProduct) {
        newProduct.quantity = 1;
        setCart([...cart, newProduct]);
        localStorage.setItem("cart", JSON.stringify([...cart, newProduct]));
      }
    }
  }

  function removeFromCart(id: string) {
    const updatedCart = cart.filter((item) => item._id !== id);
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
