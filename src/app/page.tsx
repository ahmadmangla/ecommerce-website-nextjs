import Banner from "@/components/Banner";
import ProductList from "@/components/ProductList";
import React from "react";
import ProductContextProvider from "@/context/ProductContext";

const page = () => {
  return (
    <section>
      <Banner />
      <section className="max-w-7xl mx-auto">
        <h2 className="mt-4 py-4 text-2xl font-bold text-center"> Trending Products </h2>
        <ProductContextProvider>
          <ProductList />
        </ProductContextProvider>
      </section>
    </section>
  );
};

export default page;
