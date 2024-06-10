"use client";

import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { CartContext } from "@/context/CartContext";
import Image from "next/image";
import { Product } from "@/types/ProductTypes";

export default function Checkout() {
  const { cart, removeFromCart } = useContext(CartContext);
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });
  const [sameAsShipping, setSameAsShipping] = useState(false);
  const total = cart?.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const handleShippingChange: React.FocusEventHandler<HTMLInputElement> = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
    if (sameAsShipping) {
      setBillingInfo({
        ...billingInfo,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleBillingChange: React.FocusEventHandler<HTMLInputElement> = (e) => {
    setBillingInfo({
      ...billingInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleSameAsShipping = () => {
    setSameAsShipping(!sameAsShipping);
    if (sameAsShipping) {
      setBillingInfo({
        ...shippingInfo,
      });
    } else {
      setBillingInfo({
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
      });
    }
  };
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="relative mb-8 h-32 overflow-hidden rounded-lg">
        <img src="/hero.png" alt="Checkout" width={1200} height={300} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-gray-900/50 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white">Checkout</h1>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="mt-6 space-y-2">
          <div className="grid gap-4">
            <h3 className="text-2xl font-bold">Shipping Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="shipping-name">Name</Label>
                <Input id="shipping-name" name="name" value={shippingInfo.name} onChange={handleShippingChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shipping-address">Address</Label>
                <Input id="shipping-address" name="address" value={shippingInfo.address} onChange={handleShippingChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shipping-city">City</Label>
                <Input id="shipping-city" name="city" value={shippingInfo.city} onChange={handleShippingChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shipping-state">State</Label>
                <Input id="shipping-state" name="state" value={shippingInfo.state} onChange={handleShippingChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shipping-zip">Zip</Label>
                <Input id="shipping-zip" name="zip" value={shippingInfo.zip} onChange={handleShippingChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shipping-phone">Phone</Label>
                <Input id="shipping-phone" name="phone" value={shippingInfo.phone} onChange={handleShippingChange} />
              </div>
            </div>

            <div className="grid gap-4">
              <h3 className="text-2xl font-bold">Billing Information</h3>
              <div className="flex items-center gap-2">
                <Checkbox id="same-as-shipping" checked={sameAsShipping} onCheckedChange={handleSameAsShipping} />
                <Label htmlFor="same-as-shipping">Same as shipping address</Label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="billing-name">Name</Label>
                <Input id="billing-name" name="name" value={billingInfo.name} onChange={handleBillingChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="billing-address">Address</Label>
                <Input id="billing-address" name="address" value={billingInfo.address} onChange={handleBillingChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="billing-city">City</Label>
                <Input id="billing-city" name="city" value={billingInfo.city} onChange={handleBillingChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="billing-state">State</Label>
                <Input id="billing-state" name="state" value={billingInfo.state} onChange={handleBillingChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="billing-zip">Zip</Label>
                <Input id="billing-zip" name="zip" value={billingInfo.zip} onChange={handleBillingChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="billing-phone">Phone</Label>
                <Input id="billing-phone" name="phone" value={billingInfo.phone} onChange={handleBillingChange} />
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <Button size="lg" className="w-full">
                Proceed to Payment
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                {cart &&
                  cart?.map((item: Product) => (
                    <div key={item.id} className="grid grid-cols-[80px_1fr_40px] items-center gap-4">
                      <Image src={item.imageUrl} alt={item.title} width={80} height={80} className="rounded-md object-cover" />
                      <div className="grid gap-1">
                        <h4 className="font-medium">{item.title}</h4>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500 dark:text-gray-400">Qty: {item.quantity}</span>
                          <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                        <Trash2Icon className="h-4 w-4" />
                        <span className="sr-only">Remove {item.title} from cart</span>
                      </Button>
                    </div>
                  ))}
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Subtotal</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Shipping</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Tax</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Total</span>
                  <span className="font-bold">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
