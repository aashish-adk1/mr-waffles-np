"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

import logo from "./assets/mr-waffle-logo.png";

const menuItems = [
  { id: "home", label: "Home", href: "#" },
  { id: "about", label: "About Us", href: "#about" },
  { id: "products", label: "Our Products", href: "#products" },
  { id: "whats-new", label: "What's New", href: "#whats-new" },
  { id: "gallery", label: "Gallery", href: "#gallery" },
  { id: "franchise", label: "Franchise", href: "#franchise" },
];

export const Navbar = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full px-2"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-4 transition-all duration-300 sm:px-6 lg:px-12",
            isScrolled &&
              "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-4 py-3 sm:gap-6 lg:gap-0 lg:py-4">
            {/* Logo and Mobile Menu Button */}
            <div className="flex w-full items-center justify-between rounded-full border border-gray-200 bg-white/10 px-4 py-2 backdrop-blur-sm lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2 rounded-full p-2 hover:bg-gray-100/30"
              >
                <Image 
                  src={logo} 
                  alt="Logo" 
                  width={40}
                  height={32}
                  className="h-8 w-auto sm:h-10 sm:w-auto" 
                />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 flex size-10 items-center justify-center rounded-full hover:bg-gray-100/30 lg:hidden"
              >
                <Menu
                  className={`m-auto size-6 transition-all duration-200 ${
                    menuState
                      ? "rotate-180 scale-0 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  }`}
                />
                <X
                  className={`absolute m-auto size-6 transition-all duration-200 ${
                    menuState
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-180 scale-0 opacity-0"
                  }`}
                />
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-6 text-sm xl:gap-8">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Contact Button */}
            <div className="hidden lg:block">
              <Button
                asChild
                size="sm"
                className="bg-black text-white hover:bg-gray-800 focus-visible:ring-gray-500"
              >
                <Link
                  href="/contact"
                  className="px-4 py-2 transition-colors duration-200"
                >
                  <span className="font-medium">Contact Us</span>
                </Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="bg-background in-data-[state=active]:block mb-6 hidden w-full rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 lg:hidden dark:shadow-none">
              <div className="space-y-6">
                {/* Mobile Navigation Links */}
                <ul className="space-y-4 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuState(false)}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Mobile Contact Button */}
                <div className="pt-4 border-t">
                  <Button
                    asChild
                    size="sm"
                    className="w-full"
                    onClick={() => setMenuState(false)}
                  >
                    <Link href="/contact">
                      <span>Contact Us</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};