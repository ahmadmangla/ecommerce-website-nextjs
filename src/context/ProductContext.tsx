"use client";

import { createContext, useMemo, useState, ReactNode, Dispatch, useEffect, useContext, SetStateAction } from "react";
import { Product } from "@/types/types";

interface SelectedFilters {
  categories: string[];
  priceRange: [number, number];
  rating: number;
}

interface ProductContextProps {
  products: Product[];
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
  filteredProducts: Product[];
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  itemsPerPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>;
  selectedFilters: SelectedFilters;
  loading: boolean;
}

export const ProductContext = createContext<ProductContextProps | null>(null);

export default function ProductContextProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    categories: [],
    priceRange: [0, 1000],
    rating: 0,
  });
  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/product");
        const json = await response.json();
        if (json) {
          setProducts(json?.products || []);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (selectedFilters.categories.length > 0 && !selectedFilters.categories.includes(product.category)) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          case "rating-asc":
            return a.rating - b.rating;
          case "rating-desc":
            return b.rating - a.rating;
          case "featured":
          default:
            return b.rating - a.rating;
        }
      });
  }, [selectedFilters, sortBy, products]);

  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        sortBy,
        setSortBy,
        filteredProducts,
        currentPage,
        setCurrentPage,
        itemsPerPage,
        totalPages,
        handlePageChange,
        setSelectedFilters,
        selectedFilters,
        loading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => useContext(ProductContext);
