"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const HeaderNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#002244] py-3 shadow-md" : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 md:px-0 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/mk-logo.png"
              alt="MK Construction"
              width={100}
              height={40}
              className="h-auto w-auto max-h-[35px] object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-9">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white text-[15px] font-medium uppercase tracking-[0.5px] transition-colors duration-300 hover:text-[#FFB129]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Action */}
        <div className="hidden lg:block">
          <Link
            href="#quote"
            className="bg-[#FFB129] text-white px-[35px] py-[15px] text-[15px] font-bold uppercase tracking-[1px] transition-all duration-300 hover:bg-[#002244] border-2 border-transparent hover:border-[#FFB129]"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2"
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-[#002244] transition-all duration-300 overflow-hidden ${mobileMenuOpen ? "max-height-[500px] border-t border-[#003366]" : "max-height-0"
          }`}
        style={{ maxHeight: mobileMenuOpen ? "500px" : "0px" }}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white text-[15px] font-medium uppercase py-2 border-b border-[#ffffff10]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#quote"
            className="bg-[#FFB129] text-white text-center py-4 font-bold uppercase mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderNavigation;