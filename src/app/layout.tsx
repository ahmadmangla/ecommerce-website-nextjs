import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { Metadata } from "next";

import { cn } from "@/lib/utils";
import Header from "@/components/Header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// either Static metadata
export const metadata: Metadata = {
  title: "E-commerce Website",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
