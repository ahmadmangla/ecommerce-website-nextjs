"use client";

import { useContext } from "react";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/CartContext";
import Image from "next/image";
import { Product } from "@/types/ProductTypes";
import { useRouter } from "next/navigation";

export default function Cart(props) {
  const router = useRouter();
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart?.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <Sheet onOpenChange={props.setSheetTrigger} open={props.SheetTrigger}>
      <SheetContent className="w-full max-w-md">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>{cart?.length} in your cart</SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-auto">
          <div className="grid gap-4 p-4">
            {cart &&
              cart?.map((item: Product) => (
                <div key={item.id} className="grid grid-cols-[80px_1fr_40px] items-center gap-4">
                  <Image src={`${item.imageUrl}`} alt={item.title} width={80} height={80} className="rounded-md object-cover" />
                  <div className="grid gap-1">
                    <h4 className="font-medium">{item.title}</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 dark:text-gray-400">Qty: {item.quantity}</span>
                      <span className="font-medium">${(item.price * item?.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                    <Trash2Icon className="h-4 w-4" />
                    <span className="sr-only">Remove {item.title} from cart</span>
                  </Button>
                </div>
              ))}
          </div>
        </div>
        <SheetFooter className="border-t sm:flex-col border-gray-200 dark:border-gray-800 p-4">
          <div className="flex items-center justify-between w-full mb-4">
            <span className="text-gray-500 dark:text-gray-400">Total</span>
            <span className="font-medium">${total?.toFixed(2)}</span>
          </div>
          <div className="flex gap-2 ml-0">
            <Button className="ml-0" onClick={() => router.push("/checkout")} size="lg">
              Checkout
            </Button>

            <Button size="lg" variant="outline">
              Continue Shopping
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function Trash2Icon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  );
}
