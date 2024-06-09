import Image from "next/image";
import { Input } from "./ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

const Header = () => {
  return (
    <header className="container-fluid py-3 px-6 flex justify-between items-center">
      <Image src="/Logo.svg" alt={"Logo"} width={100} height={100} />
      <div className="hidden px-4 lg:max-w-4xl lg:w-full md:flex justify-center items-center gap-4 text-sm">
        <span>Categories: </span>
        <Input type="text" placeholder="Search for Products" />
      </div>
      <div className="menu flex justify-between items-center gap-6">
        <div className="icons flex justify-between items-center gap-3">
          <Image className="hover:cursor-pointer" src="/message.svg" alt={"Logo"} width={25} height={100} />
          <Image className="hover:cursor-pointer" src="/heart.svg" alt={"Logo"} width={25} height={100} />
          <Image className="hover:cursor-pointer" src="/shopping-cart.svg" alt={"Logo"} width={25} height={100} />
        </div>

        <div className="profile">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
