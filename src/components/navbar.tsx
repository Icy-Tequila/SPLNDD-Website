"use client";

import { useState } from "react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ShoppingCart, UserRound, Menu, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="sm:w-[85%] w-[90%] h-[3.5rem] bg-[#F6E0D2]/75 backdrop-blur rounded-4xl shadow-xl flex justify-between items-center p-2 mb-[-3rem]">
      {/* ---- Mobile Hamburger ---- */}
      <div className="lg:hidden flex items-center ml-2">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="w-6 h-6 cursor-pointer" />
          ) : (
            <Menu className="w-6 cursor-pointer h-6" />
          )}
        </button>
      </div>

      {/* ---- Logo (center on mobile) ---- */}
      <Link href="/">
        <Image
          src="/Images/splndd-logo-2.png"
          alt="SPLND'D Logo"
          width={120}
          height={40}
          className="h-[70%] cursor-pointer sm:ml-4 mx-auto sm:mx-0"
          priority
        />
      </Link>

      {/* ---- Navigation (hidden on mobile, flex on desktop) ---- */}
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
          className=" flex items-center text-sm pr-6 hover:text-[#c3881c] cursor-pointer"
        >
          NEW ARRIVALS
        </Link>
        <button className="text-sm hover:text-[#c3881c] cursor-pointer">
          SPECIAL OFFERS
        </button>
      </div>

      {/* ---- Cart + Account ---- */}
      <div className="flex gap-3 pr-4">
        <ShoppingCart className="stroke-[1.5] w-5 hover:text-[#c3881c] cursor-pointer" />
        <UserRound className="stroke-[1.5] w-5 hover:text-[#c3881c] cursor-pointer" />
      </div>

      {/* ---- Mobile Dropdown ---- */}
      <div
        className={`absolute top-[3.5rem] left-1/2 -translate-x-1/2 w-[80%] bg-white rounded-b-2xl shadow-md p-4 lg:hidden z-20
    ${isOpen ? "animate-slide-down" : "animate-slide-up pointer-events-none"}
  `}
      >
        <Accordion type="single" collapsible className="w-full">
          {/* WOMEN'S */}
          <AccordionItem value="women">
            <AccordionTrigger className="py-2 font-normal hover:no-underline hover:text-[#c3881c] cursor-pointer text-left">
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
          <AccordionItem value="men">
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

        {/* Separator */}
        <hr className="border-t border-gray-200" />

        {/* Other links */}
        <div className="flex flex-col gap-2">
          <Link
            href="/new-arrivals"
            className="text-sm pt-2 text-start hover:text-[#c3881c] cursor-pointer"
          >
            NEW ARRIVALS
          </Link>
          <button className="text-sm text-start hover:text-[#c3881c] cursor-pointer">
            SPECIAL OFFERS
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
