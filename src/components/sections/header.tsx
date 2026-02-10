"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, MoveRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/our-services" },
    { label: "Industries", href: "/industries" },
    { label: "Clients", href: "/clients" },
    { label: "Tools", href: "/tools" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ease-in-out py-[15px]",
        isScrolled
          ? "bg-white shadow-[0_4px_25px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between">

          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="/mk-logo.png"
                alt="MK Construction Logo"
                width={100}
                height={40}
                className="h-auto w-[80px] lg:w-[100px] object-contain"
                priority
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center justify-center flex-grow">
            <ul className="flex items-center gap-[30px] xl:gap-[40px]">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[16px] font-semibold text-[#000000] hover:text-[#ed5a2d] transition-colors duration-300 relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-[#ed5a2d] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-[25px]">
            <button
              className="text-[#000000] hover:text-[#ed5a2d] transition-colors duration-300 p-2"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSegkbFagm8u6Z0hRgKIuYcWeyPd7oFCWpGGLRo9f5Z-b0r6-A/viewform?usp=send_form"
              className="group flex items-center gap-2 bg-[#ed5a2d] text-white px-[30px] py-[14px] rounded-[10px] text-[16px] font-semibold transition-transform duration-300 hover:translate-y-[-2px] hover:shadow-[0_10px_20px_rgba(237,90,45,0.2)]"
            >
              Start a project
              <div className="relative overflow-hidden w-5 h-5">
                <MoveRight
                  size={20}
                  className="absolute transition-all duration-300 transform group-hover:translate-x-[25px]"
                />
                <MoveRight
                  size={20}
                  className="absolute transform -translate-x-[25px] transition-all duration-300 group-hover:translate-x-0"
                />
              </div>
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button
              className="p-2 text-[#000000]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 bg-white z-[2000] lg:hidden transition-transform duration-500 ease-in-out transform",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-10">
            <Image
              src="/mk-logo.png"
              alt="MK Construction Logo"
              width={100}
              height={40}
              className="h-auto w-[80px] object-contain"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-[#000000]"
            >
              <X size={28} />
            </button>
          </div>

          <nav>
            <ul className="flex flex-col gap-6">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[20px] font-bold text-[#000000] hover:text-[#ed5a2d]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10 border-t pt-8">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSegkbFagm8u6Z0hRgKIuYcWeyPd7oFCWpGGLRo9f5Z-b0r6-A/viewform?usp=send_form"
              className="inline-flex items-center justify-center w-full gap-2 bg-[#ed5a2d] text-white px-8 py-4 rounded-[10px] text-[18px] font-bold"
            >
              Start a project
              <MoveRight size={22} />
            </Link>

            <div className="mt-10">
              <h3 className="text-[18px] font-bold mb-4">Contact Information</h3>
              <p className="text-[#555555] mb-2 font-medium">info@msconstruction.com</p>
              <p className="text-[#555555] font-medium">+91 8115603603</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
