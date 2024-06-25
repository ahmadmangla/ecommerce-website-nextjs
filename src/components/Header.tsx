"use client";

import Image from "next/image";
import { Input } from "./ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Link from "next/link";
import Cart from "./Cart";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { CartContext } from "@/context/CartContext";
import { Badge } from "./ui/badge";
import { useRouter } from "next/navigation";

const Header = () => {
  const isUserLoggedIn = false;
  const { handleSheetTrigger, cart } = useContext(CartContext);
  const ref = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const [search, setSearch] = useState("");

  useEffect(() => {
    const inputEl = ref.current;
    if (inputEl) {
      const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
          router.push(`/search/${search.toLowerCase()}`);
          setSearch("");
        }
      };
      inputEl.addEventListener("keypress", handleKeyPress as unknown as EventListener);

      return () => {
        inputEl.removeEventListener("keypress", handleKeyPress as unknown as EventListener);
      };
    }
  }, [search, router]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <header className="container-fluid py-4 px-6 flex justify-between items-center">
      <Link href="/">
        <Image src="/Logo.svg" alt={"Logo"} width={100} height={100} />
      </Link>
      <div className="hidden px-4 lg:max-w-4xl lg:w-full md:flex justify-center items-center gap-4 text-sm">
        <span>Categories: </span>
        <Input type="text" ref={ref} value={search} onChange={handleSearch} placeholder="Search for Products" />
      </div>
      <div className="menu flex justify-between items-center gap-6">
        <div className="icons flex justify-between items-center gap-3">
          <Image className="hover:cursor-pointer" src="/message.svg" alt={"Logo"} width={25} height={100} />
          <Image className="hover:cursor-pointer" src="/heart.svg" alt={"Logo"} width={25} height={100} />

          <a className="relative " href="#" onClick={() => handleSheetTrigger()}>
            <Badge className="absolute -top-3 -right-2 bg-primary text-white rounded-full px-2 py-0.5 text-xs font-medium">{cart?.length}</Badge>
            <Image className="hover:cursor-pointer" src="/shopping-cart.svg" alt={"Logo"} width={25} height={100} />
          </a>
        </div>

        <div className="profile flex">
          {isUserLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Image src="/profile.png" alt={"Logo"} width={35} height={100} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Image src="/user.png" alt={"Logo"} width={25} height={100} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/login">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/sign-up">Register</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
      <Cart />
    </header>
  );
};

export default Header;
