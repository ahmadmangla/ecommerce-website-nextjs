import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Product } from "@/types/types";
import Link from "next/link";

const ProductCard = ({ _id, title, description, rating, price, imageUrl }: Product) => {
  const handleRating = (rating: number) => {
    const stars = Array.from({ length: 5 }, (_, index) => index + 1);
    {
      return stars.map((item) => <StarIcon key={item} className={`w-5 h-5 ${item <= rating ? "fill-amber-400" : "fill-muted stroke-muted-foreground"}`} />);
    }
  };

  return (
    <>
      <Card className=" md:w-[250px] border-none shadow-none">
        <CardHeader className="mb-0 p-2">
          <Link href={`/products/${_id}`}>
            <Image className="rounded mb-4" src={imageUrl} alt="Girl in Red Dress" width={"400"} height={100} />
          </Link>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="mt-0 p-2 flex gap-1">
          {handleRating(rating)}
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

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
