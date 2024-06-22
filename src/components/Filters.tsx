import React, { useContext, useState } from "react";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { ProductContext } from "@/context/ProductContext";

const Filters = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("Filters must be used within a ProductProvider");
  }

  const { selectedFilters, setSelectedFilters } = context;

  return (
    <div className="grid gap-4">
      <div>
        <h3 className="text-base font-semibold mb-2">Categories</h3>
        <div className="grid gap-2">
          {/* <Label className="flex items-center gap-2"> */}
          {/* <Checkbox
              checked={selectedFilters.categories.includes("Accessories")}
              onCheckedChange={() => {
                setSelectedFilters({
                  ...selectedFilters,
                  categories: selectedFilters.categories.includes("Accessories") ? selectedFilters.categories.filter((c) => c !== "Accessories") : [...selectedFilters.categories, "Accessories"],
                });
              }}
            />
            Accessories
          </Label>
          <Label className="flex items-center gap-2">
            <Checkbox
              checked={selectedFilters.categories.includes("Bags")}
              onCheckedChange={() => {
                setSelectedFilters({
                  ...selectedFilters,
                  categories: selectedFilters.categories.includes("Bags") ? selectedFilters.categories.filter((c) => c !== "Bags") : [...selectedFilters.categories, "Bags"],
                });
              }}
            />
            Bags
          </Label> */}
          <Label className="flex items-center gap-2">
            <Checkbox
              checked={selectedFilters.categories.includes("clothing")}
              onCheckedChange={() => {
                setSelectedFilters({
                  ...selectedFilters,
                  categories: selectedFilters.categories.includes("clothing") ? selectedFilters.categories.filter((c) => c !== "clothing") : [...selectedFilters.categories, "clothing"],
                });
              }}
            />
            clothing
          </Label>
          {/* <Label className="flex items-center gap-2">
            <Checkbox
              checked={selectedFilters.categories.includes("Electronics")}
              onCheckedChange={() => {
                setSelectedFilters({
                  ...selectedFilters,
                  categories: selectedFilters.categories.includes("Electronics") ? selectedFilters.categories.filter((c) => c !== "Electronics") : [...selectedFilters.categories, "Electronics"],
                });
              }}
            />
            Electronics
          </Label> */}
        </div>
      </div>
      <div>
        <h3 className="text-base font-semibold mb-2">Price Range</h3>
        <div />
      </div>
      <div>
        <h3 className="text-base font-semibold mb-2">Rating</h3>
        <div className="grid gap-2">
          <Label className="flex items-center gap-2">
            <Checkbox
              checked={selectedFilters.rating >= 1}
              onCheckedChange={() => {
                setSelectedFilters({
                  ...selectedFilters,
                  rating: selectedFilters.rating >= 1 ? 0 : 1,
                });
              }}
            />
            1 star and above
          </Label>
          <Label className="flex items-center gap-2">
            <Checkbox
              checked={selectedFilters.rating >= 2}
              onCheckedChange={() => {
                setSelectedFilters({
                  ...selectedFilters,
                  rating: selectedFilters.rating >= 2 ? 0 : 2,
                });
              }}
            />
            2 stars and above
          </Label>
          <Label className="flex items-center gap-2">
            <Checkbox
              checked={selectedFilters.rating >= 3}
              onCheckedChange={() => {
                setSelectedFilters({
                  ...selectedFilters,
                  rating: selectedFilters.rating >= 3 ? 0 : 3,
                });
              }}
            />
            3 stars and above
          </Label>
          <Label className="flex items-center gap-2">
            <Checkbox
              checked={selectedFilters.rating >= 4}
              onCheckedChange={() => {
                setSelectedFilters({
                  ...selectedFilters,
                  rating: selectedFilters.rating >= 4 ? 0 : 4,
                });
              }}
            />
            4 stars and above
          </Label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
