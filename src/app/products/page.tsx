"use client";

import Banner from "@/components/Banner";
import ProductList from "@/components/ProductList";
import Filters from "@/components/Filters";
import ProductSorting from "@/components/ProductSorting";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="container py-12">
        <div className="relative mb-8 h-32 overflow-hidden rounded-lg">
          <Image src="/hero.png" alt="Checkout" width={1200} height={300} className="h-full w-full object-cover " />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-gray-900/50 flex items-center justify-center">
            <h1 className="text-3xl font-bold text-white">Browser Our Products</h1>
          </div>
        </div>
      </div>
      <section className="flex mx-auto my-auto container gap-5">
        <div className="filters w-full max-w-56 px-4">
          <h2 className="font-bold py-3 text-xl">Filters</h2>
          <Filters />
        </div>
        <div className="container">
          <ProductSorting />
          <ProductList />
        </div>
      </section>
      );
    </>
  );
};

export default page;

// export default function Component() {
//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-bold mb-6">Product Catalog</h1>
//       <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
//         <div className="bg-background rounded-lg shadow-md p-6">
//           <h2 className="text-lg font-bold mb-4">Filters</h2>
//         </div>
//         <div>
//
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((product) => (
//               <div key={product.id} className="bg-background rounded-lg shadow-md overflow-hidden">
//                 <img src="/placeholder.svg" alt={product.title} width={300} height={300} className="w-full h-48 object-cover" />
//                 <div className="p-4">
//                   <h3 className="text-lg font-bold mb-2">{product.title}</h3>
//                   <div className="flex items-center mb-2">
//                     <div className="flex items-center gap-1 text-yellow-500">
//                       {[...Array(Math.floor(product.rating))].map((_, i) => (
//                         <StarIcon key={i} className="w-4 h-4" />
//                       ))}
//                       {product.rating % 1 !== 0 && <StarHalfIcon className="w-4 h-4 text-yellow-500" />}
//                     </div>
//                     <span className="ml-2 text-sm text-muted-foreground">({product.rating.toFixed(1)})</span>
//                   </div>
//                   <div className="text-lg font-bold">${product.price.toFixed(2)}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-center mt-8">
//             <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
