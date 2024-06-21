import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { Metadata } from "next";

import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import CartContextProvider, { CartContext } from "@/context/CartContext";
import Cart from "@/components/Cart";
import { useContext } from "react";
import ProductContextProvider from "@/context/ProductContext";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "block",
});

// either Static metadata
export const metadata: Metadata = {
  title: "E-commerce Website",
};

export default function RootLayout({ children }: any) {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <html lang="en">
          <head />
          <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
            <Header />
            {children}
          </body>
        </html>
      </CartContextProvider>
    </ProductContextProvider>
  );
}
