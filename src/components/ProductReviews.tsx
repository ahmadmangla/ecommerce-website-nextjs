import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";

const ProductReviews = () => {
  return (
    <div className="grid gap-4 md:gap-8 py-6">
      <h2 className="text-2xl font-bold">Reviews</h2>
      <div className="grid gap-6">
        <div className="flex gap-4">
          <Avatar className="w-10 h-10 border">
            <Image src="/Profile.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="grid gap-4">
            <div className="flex gap-4 items-start">
              <div className="grid gap-0.5 text-sm">
                <h3 className="font-semibold">Sarah Johnson</h3>
                <time className="text-sm text-gray-500 dark:text-gray-400">2 days ago</time>
              </div>
              <div className="flex items-center gap-0.5 ml-auto">
                <StarIcon className="w-5 h-5 fill-amber-400" />
                <StarIcon className="w-5 h-5 fill-amber-400" />
                <StarIcon className="w-5 h-5 fill-amber-400" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
            </div>
            <div className="text-sm leading-loose text-gray-500 dark:text-gray-400">
              <p>
                I&apos;ve been experimenting with my Acme Prism T-Shirt for a few weeks now, and it&apos;s been a versatile addition to my wardrobe. The fabric is soft and breathable, and the
                prism-inspired design adds a unique touch to my outfits.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Avatar className="w-10 h-10 border">
            <Image src="/Profile.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="grid gap-4">
            <div className="flex gap-4 items-start">
              <div className="grid gap-0.5 text-sm">
                <h3 className="font-semibold">Alex Smith</h3>
                <time className="text-sm text-gray-500 dark:text-gray-400">3 weeks ago</time>
              </div>
              <div className="flex items-center gap-0.5 ml-auto">
                <StarIcon className="w-5 h-5 fill-amber-400" />
                <StarIcon className="w-5 h-5 fill-amber-400" />
                <StarIcon className="w-5 h-5 fill-amber-400" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
            </div>
            <div className="text-sm leading-loose text-gray-500 dark:text-gray-400">
              <p>
                The Acme Prism T-Shirt is a great addition to my wardrobe. The fabric is high-quality and the design is unique and eye-catching. I&apos;ve received a lot of compliments on it. Overall,
                I&apos;m very satisfied with my purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
