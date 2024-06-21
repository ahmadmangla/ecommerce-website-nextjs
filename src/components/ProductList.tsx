"use client";

import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "@/context/ProductContext";
import { usePathname } from "next/navigation";

const ProductList = () => {
  const pathname = usePathname();
  const context = useContext(ProductContext);

  if (!context) {
    return <div>Loading...</div>; // Handle the absence of context appropriately
  }

  const { filteredProducts, currentPage, itemsPerPage } = context;

  return (
    <div className={`flex flex-wrap gap-2 ${pathname === "/products" ? "" : "justify-center"} `}>
      {filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </div>
  );
};

export default ProductList;
