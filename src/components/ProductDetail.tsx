import React, { useContext } from "react";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { Product } from "@/types/ProductTypes";
import { CartContext } from "@/context/CartContext";

const ProductDetail = (props: Product) => {
  const { handleSheetTrigger } = useContext(CartContext);

  const { cart, addToCart } = useContext(CartContext);
  function handleClick(id: number) {
    addToCart(id);
    handleSheetTrigger(id);
  }

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold">{props?.title}</h1>
        <p className="text-gray-500 dark:text-gray-400">{props?.description}</p>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <StarIcon className="w-5 h-5 fill-amber-400" />
          <StarIcon className="w-5 h-5 fill-amber-400" />
          <StarIcon className="w-5 h-5 fill-amber-400" />
          <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
          <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
          <span className="text-sm text-gray-500 dark:text-gray-400">(23 reviews)</span>
        </div>
        <div className="text-3xl font-bold">${props?.price}</div>
      </div>
      <div className="grid gap-4">
        <div>
          <Label htmlFor="color" className="text-base">
            Color
          </Label>
          <RadioGroup id="color" defaultValue="black" className="flex items-center gap-2">
            <Label htmlFor="color-black" className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800">
              <RadioGroupItem id="color-black" value="black" />
              Black
            </Label>
            <Label htmlFor="color-white" className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800">
              <RadioGroupItem id="color-white" value="white" />
              White
            </Label>
            <Label htmlFor="color-blue" className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800">
              <RadioGroupItem id="color-blue" value="blue" />
              Blue
            </Label>
          </RadioGroup>
        </div>
        <div>
          <Label htmlFor="size" className="text-base">
            Size
          </Label>
          <RadioGroup id="size" defaultValue="m" className="flex items-center gap-2">
            <Label htmlFor="size-xs" className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800">
              <RadioGroupItem id="size-xs" value="xs" />
              XS
            </Label>
            <Label htmlFor="size-s" className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800">
              <RadioGroupItem id="size-s" value="s" />S
            </Label>
            <Label htmlFor="size-m" className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800">
              <RadioGroupItem id="size-m" value="m" />M
            </Label>
            <Label htmlFor="size-l" className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800">
              <RadioGroupItem id="size-l" value="l" />L
            </Label>
            <Label htmlFor="size-xl" className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800">
              <RadioGroupItem id="size-xl" value="xl" />
              XL
            </Label>
          </RadioGroup>
        </div>
        <div>
          <Label htmlFor="quantity" className="text-base">
            Quantity
          </Label>
          <Select defaultValue="1">
            <SelectTrigger className="w-24">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button onClick={() => handleClick(props.id)} size="lg" className="bg-primary">
        Add to cart
      </Button>
    </>
  );
};

export default ProductDetail;

function StarIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
