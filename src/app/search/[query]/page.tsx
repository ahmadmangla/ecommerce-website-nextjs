"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";

export default function Page() {
  const q = useParams();
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">You searched for {q.query}</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-background rounded-lg overflow-hidden shadow-md">
          <img src="/placeholder.svg" alt="Product Image" width={400} height={300} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Acme Widgets</h2>
            <p className="text-muted-foreground mb-4">High-quality widgets for all your needs.</p>
            <div className="flex items-center justify-between">
              <span className="text-primary font-semibold">$19.99</span>
              <Button size="sm">Add to Cart</Button>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-lg overflow-hidden shadow-md">
          <img src="/placeholder.svg" alt="Product Image" width={400} height={300} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Gizmo Gadgets</h2>
            <p className="text-muted-foreground mb-4">Innovative gadgets for your everyday life.</p>
            <div className="flex items-center justify-between">
              <span className="text-primary font-semibold">$29.99</span>
              <Button size="sm">Add to Cart</Button>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-lg overflow-hidden shadow-md">
          <img src="/placeholder.svg" alt="Product Image" width={400} height={300} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Quantum Thingamajigs</h2>
            <p className="text-muted-foreground mb-4">Cutting-edge thingamajigs for the modern home.</p>
            <div className="flex items-center justify-between">
              <span className="text-primary font-semibold">$39.99</span>
              <Button size="sm">Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
