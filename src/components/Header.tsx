"use client";

import Image from "next/image";
import { Input } from "./ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Link from "next/link";
import Cart from "./Cart";
import { useContext, useState } from "react";
import { Button } from "./ui/button";
import { CartContext } from "@/context/CartContext";
import { Badge } from "./ui/badge";

const Header = () => {
  const isUserLoggedIn = false;
  const { handleSheetTrigger, cart } = useContext(CartContext);

  return (
    <header className="container-fluid py-4 px-6 flex justify-between items-center">
      <Link href="/">
        <Image src="/Logo.svg" alt={"Logo"} width={100} height={100} />
      </Link>
      <div className="hidden px-4 lg:max-w-4xl lg:w-full md:flex justify-center items-center gap-4 text-sm">
        <span>Categories: </span>
        <Input type="text" placeholder="Search for Products" />
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
