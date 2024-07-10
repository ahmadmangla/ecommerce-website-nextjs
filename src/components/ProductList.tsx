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

  const { filteredProducts, currentPage, itemsPerPage, loading } = context;

  if (loading) {
    return <div>Loading...</div>; // Display loading spinner while fetching data. Note: Replace this with your preferred loading spinner.  Example: <LoadingSpinner />
  }

  return (
    <div className={`flex flex-wrap gap-2 ${pathname === "/products" ? "" : "justify-center"} `}>
      {filteredProducts &&
        filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((product) => {
          return <ProductCard key={product._id} {...product} />;
        })}
    </div>
  );
};

export default ProductList;
