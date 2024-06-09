import Banner from "@/components/Banner";
import ProductList from "@/components/ProductList";
import React from "react";

const page = () => {
  return (
    <>
      <div className="container py-12">
        <div className="relative mb-8 h-32 overflow-hidden rounded-lg">
          <img src="/hero.png" alt="Checkout" width={1200} height={300} className="h-full w-full object-cover " />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-gray-900/50 flex items-center justify-center">
            <h1 className="text-3xl font-bold text-white">Browser Our Products</h1>
          </div>
        </div>
      </div>
      <section>
        <ProductList />
      </section>
      );
    </>
  );
};

export default page;
