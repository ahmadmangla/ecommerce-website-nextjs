import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Product } from "@/lib/productdata";
import Link from "next/link";

const ProductCard = ({ id, title, description, rating, price, imageUrl }: Product) => {
  return (
    <>
      <Card className=" md:w-[250px] border-none shadow-none">
        <CardHeader className="mb-0 p-2">
          <Link href={`/products/${id}`}>
            <Image className="rounded mb-4" src={imageUrl} alt="Girl in Red Dress" width={"400"} height={100} />
          </Link>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="mt-0 p-2 flex gap-1">
          <Image src="/star-filled.svg" alt="Girl in Red Dress" width={20} height={30} />
          <Image src="/star-filled.svg" alt="Girl in Red Dress" width={20} height={30} />
          <Image src="/star-filled.svg" alt="Girl in Red Dress" width={20} height={30} />
          <Image src="/star-filled.svg" alt="Girl in Red Dress" width={20} height={30} />
          <Image src="/star-filled.svg" alt="Girl in Red Dress" width={20} height={30} />
          <p>(120)</p>
        </CardContent>
        <CardFooter className="p-2">
          <p className="price font-bold text-xl mb-4">£{price}</p>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProductCard;
