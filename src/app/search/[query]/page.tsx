"use client";

import { useParams } from "next/navigation";
import { useContext } from "react";
import { ProductContext } from "@/context/ProductContext";
import ProductCard from "@/components/ProductCard";

export default function Page() {
  const { query } = useParams();
  const context = useContext(ProductContext);

  if (!query) {
    return;
  }

  if (context) {
    const { products } = context;
    const filteredProducts = products.filter((product) => {
      if (product.title.toLowerCase().includes(query.toString()) || product.description.toLowerCase().includes(query.toString())) {
        return true;
      }
    });

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">You searched for &quot;{query}&quot;</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? filteredProducts.map((item) => <ProductCard key={item._id} {...item} />) : <div>No Products Found marching your request</div>}
        </div>
      </div>
    );
  }
}
