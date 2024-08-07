"use client";

import Banner from "@/components/Banner";
import ProductList from "@/components/ProductList";
import Filters from "@/components/Filters";
import ProductSorting from "@/components/ProductSorting";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="container py-12">
        <div className="relative mb-8 h-32 overflow-hidden rounded-lg">
          <Image src="/hero.png" alt="Checkout" width={1200} height={300} className="h-full w-full object-cover " />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-gray-900/50 flex items-center justify-center">
            <h1 className="text-3xl font-bold text-white">Browser Our Products</h1>
          </div>
        </div>
      </div>
      <section className="flex mx-auto my-auto container gap-5">
        <div className="filters w-full max-w-56 px-4">
          <h2 className="font-bold py-3 text-xl">Filters</h2>
          <Filters />
        </div>
        <div className="container">
          <ProductSorting />
          <ProductList />
        </div>
      </section>
      );
    </>
  );
};

export default page;
