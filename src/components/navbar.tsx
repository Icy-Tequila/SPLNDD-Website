"use client";

import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ShoppingCart, UserRound, Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const Navbar = () => {
  return (
    <nav className="relative sm:w-[85%] w-[90%] h-[3.5rem] bg-[#F6E0D2]/75 backdrop-blur rounded-4xl shadow-xl flex justify-between items-center p-2 mb-[-3rem]">
      {/* ---- Mobile Hamburger (left) ---- */}
      <div className="lg:hidden flex items-center ">
        <Sheet>
          <SheetTrigger asChild>
            <button>
              <Menu className="w-6 h-6 cursor-pointer ml-3" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[80%] bg-white p-4">
            <SheetTitle>
              <VisuallyHidden></VisuallyHidden>
            </SheetTitle>
            <Accordion type="single" collapsible className="w-full">
              {/* WOMEN'S */}
              <AccordionItem value="women" className="border-0">
                <AccordionTrigger className="py-2 mt-2 font-normal hover:no-underline hover:text-[#c3881c] cursor-pointer text-left">
                  WOMEN&apos;S
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 pl-4">
                  {[
                    "All",
                    "T-SHIRTS",
                    "SKIRTS",
                    "HOODIES",
                    "JACKETS",
                    "JEANS",
                    "TROUSERS",
                    "SHOES",
                  ].map((item) => (
                    <button
                      key={item}
                      className="text-sm text-left hover:text-[#c3881c] cursor-pointer"
                    >
                      {item}
                    </button>
                  ))}
                </AccordionContent>
              </AccordionItem>

              {/* MEN'S */}
              <AccordionItem value="men" className="border-0">
                <AccordionTrigger className="py-2 font-normal hover:no-underline hover:text-[#c3881c] cursor-pointer text-left">
                  MEN&apos;S
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 pl-4">
                  {[
                    "All",
                    "T-SHIRTS",
                    "SHORTS",
                    "HOODIES",
                    "JACKETS",
                    "JEANS",
                    "SLACKS",
                    "SHOES",
                  ].map((item) => (
                    <button
                      key={item}
                      className="text-sm text-left hover:text-[#c3881c] cursor-pointer"
                    >
                      {item}
                    </button>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Other links */}
            <div className="flex flex-col gap-2 mt-[-15px]">
              <Link
                href="/new-arrivals"
                className="text-sm py-2 text-start hover:text-[#c3881c] cursor-pointer"
              >
                NEW ARRIVALS
              </Link>
              <button className="text-sm text-start hover:text-[#c3881c] cursor-pointer">
                SPECIAL OFFERS
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* ---- Logo (center on mobile, inline on desktop) ---- */}
      <Link
        href="/"
        className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
      >
        {/* Desktop Logo */}
        <Image
          src="/images/splndd-logo-2.png"
          alt="SPLND'D Logo"
          width={120}
          height={40}
          className="hidden lg:block h-[70%] cursor-pointer"
          priority
        />

        {/* Mobile Logo */}
        <Image
          src="/images/splndd-logo.png"
          alt="SPLND'D Logo Mobile"
          width={80}
          height={30}
          className="block lg:hidden h-[70%] cursor-pointer"
          priority
        />
      </Link>

      {/* ---- Desktop Navigation ---- */}
      <div className="hidden lg:flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-normal gap-2 mr-[-8px] bg-transparent hover:bg-transparent focus:bg-transparent cursor-pointer hover:text-[#c3881c] data-[state=open]:text-[#c3881c] data-[state=open]:bg-transparent!">
                WOMEN&apos;S
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                {[
                  "All",
                  "T-SHIRTS",
                  "SKIRTS",
                  "HOODIES",
                  "JACKETS",
                  "JEANS",
                  "TROUSERS",
                  "SHOES",
                ].map((item) => (
                  <NavigationMenuLink key={item} className="pl-3 w-[125px]">
                    {item}
                  </NavigationMenuLink>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="pr-5 font-normal gap-2 bg-transparent hover:bg-transparent focus:bg-transparent cursor-pointer hover:text-[#c3881c] data-[state=open]:text-[#c3881c] data-[state=open]:bg-transparent!">
                MEN&apos;S
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                {[
                  "All",
                  "T-SHIRTS",
                  "SHORTS",
                  "HOODIES",
                  "JACKETS",
                  "JEANS",
                  "SLACKS",
                  "SHOES",
                ].map((item) => (
                  <NavigationMenuLink key={item} className="pl-3 w-[125px]">
                    {item}
                  </NavigationMenuLink>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Link
          href="/new-arrivals"
          className="flex items-center text-sm pr-6 hover:text-[#c3881c] cursor-pointer"
        >
          NEW ARRIVALS
        </Link>
        <button className="text-sm hover:text-[#c3881c] cursor-pointer">
          SPECIAL OFFERS
        </button>
      </div>

      {/* ---- Cart + Account (right side) ---- */}
      <div className="flex gap-3 pr-2">
        <ShoppingCart className="stroke-[1.5] w-5 hover:text-[#c3881c] cursor-pointer" />
        <UserRound className="stroke-[1.5] w-5 hover:text-[#c3881c] cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
