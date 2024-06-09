import React from "react";
import { data } from "../lib/productdata";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <h2 className="mt-4 py-4 text-2xl font-bold text-center"> Trending Products </h2>
      <div className="flex flex-wrap gap-2 justify-center">
        {data.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default ProductList;
