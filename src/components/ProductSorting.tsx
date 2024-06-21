"use client";

import React, { useContext } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ListOrderedIcon } from "lucide-react";
import { ProductContext } from "@/context/ProductContext";

const ProductSorting = () => {
  const { sortBy, setSortBy } = useContext(ProductContext);
  return (
    <div className="flex items-center justify-between mb-4">
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <ListOrderedIcon className="w-4 h-4" />
              Sort by: {undefined}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
              <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="price-asc">Price: Low to High</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="price-desc">Price: High to Low</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="rating-asc">Rating: Low to High</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="rating-desc">Rating: High to Low</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default ProductSorting;
