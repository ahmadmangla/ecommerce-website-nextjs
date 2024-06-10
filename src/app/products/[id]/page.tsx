"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { data } from "@/lib/productdata";
import { useParams } from "next/navigation";
import Image from "next/image";
import ProductDetail from "@/components/ProductDetail";
import ProductReviews from "@/components/ProductReviews";
import RelatedProducts from "@/components/RelatedProducts";

export default function Page() {
  const { id } = useParams();

  const product = data.find((item) => id === item.id.toString());
  return (
    <div className=" max-w-6xl px-4 mx-auto py-6 gap-4">
      <div className="md:grid grid-cols-2 gap-6 mx-auto mb-12">
        <div className="">
          <Carousel opts={{ align: "start", loop: true }} className="w-full aspect-[4/3] rounded-lg overflow-hidden">
            <CarouselContent>
              <CarouselItem>
                <Image src={`${product?.imageUrl}`} alt="Product Image 1" width={800} height={600} className="object-cover w-full h-full" />
              </CarouselItem>
              <CarouselItem>
                <Image src={`${product?.imageUrl}`} alt="Product Image 2" width={800} height={600} className="object-cover w-full h-full" />
              </CarouselItem>
              <CarouselItem>
                <Image src={`${product?.imageUrl}`} alt="Product Image 3" width={800} height={600} className="object-cover w-full h-full" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/50 hover:bg-white rounded-full p-2 cursor-pointer">
              <ChevronLeftIcon className="w-5 h-5" />
            </CarouselPrevious>
            <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/50 hover:bg-white rounded-full p-2 cursor-pointer">
              <ChevronRightIcon className="w-5 h-5" />
            </CarouselNext>
          </Carousel>
        </div>
        <div className="grid gap-2">{product && <ProductDetail {...product} />}</div>
      </div>

      <div className="col-span-2">
        <Separator />
        <RelatedProducts />
      </div>
      <div className="col-span-2">
        <Separator />
        <ProductReviews />
      </div>
    </div>
  );
}

function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
