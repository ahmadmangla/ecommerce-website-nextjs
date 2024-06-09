import React from "react";
import { Button } from "./ui/button";

const Banner = () => {
  return (
    <section className={` w-full bg-[url('/hero.png')] bg-no-repeat bg-cover py-20 md:py-40 px-10 md:px-40 bg-black bg-blend-overlay bg-opacity-50`}>
      <h1 className=" text-4xl md:text-6xl font-bold text-white mb-2">
        Browse Our <br /> Classic Collection
      </h1>

      <p className="text-white text-lg mb-4">Exclusive clothing for all occassions.</p>

      <p className="price font-bold text-white text-3xl mb-4">£82,61</p>

      <Button className="p-6 bg-primary">View More</Button>
    </section>
  );
};

export default Banner;
