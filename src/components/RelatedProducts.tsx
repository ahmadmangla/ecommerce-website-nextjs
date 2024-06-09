import Link from "next/link";
import React from "react";
import ProductList from "./ProductList";

const RelatedProducts = () => {
  return (
    <div className="grid gap-4 md:gap-8 py-6">
      <h2 className="text-2xl font-bold">Related Products</h2>
      <section className="grid-col-1 col-span-1">
        <ProductList />
      </section>
    </div>
  );
};

export default RelatedProducts;
