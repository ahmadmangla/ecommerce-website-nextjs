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
          <Label className="flex items-center gap-2">
            <Checkbox
              checked={selectedFilters.categories.includes("beauty")}
              onCheckedChange={() => {
                setSelectedFilters({
                  ...selectedFilters,
                  categories: selectedFilters.categories.includes("beauty") ? selectedFilters.categories.filter((c) => c !== "beauty") : [...selectedFilters.categories, "beauty"],
                });
              }}
            />
            beauty
          </Label>
          <Label className="flex items-center gap-2">
            <Checkbox
              checked={selectedFilters.categories.includes("fragrances")}
              onCheckedChange={() => {
                setSelectedFilters({
                  ...selectedFilters,
                  categories: selectedFilters.categories.includes("fragrances") ? selectedFilters.categories.filter((c) => c !== "fragrances") : [...selectedFilters.categories, "fragrances"],
                });
              }}
            />
            fragrances
          </Label>
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
