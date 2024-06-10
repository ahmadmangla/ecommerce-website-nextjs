import React from "react";
import { data } from "../lib/productdata";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {data.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </div>
  );
};

export default ProductList;
