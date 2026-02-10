import React from 'react';
import Image from 'next/image';
import { Facebook, Linkedin, Instagram, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const HomeFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FFF8F6] pt-[100px] pb-[40px] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-[80px]">

          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col gap-6">
            <div className="mb-2">
              <a href="/">
                <Image
                  src="/mk-logo.png"
                  alt="MK Construction Logo"
                  width={140}
                  height={90}
                  className="object-contain"
                />
              </a>
            </div>
            <p className="text-[#555555] text-[16px] leading-[1.6]">
              At MS Construction, we know structural engineering is more than calculations—it&apos;s about minimizing risk, controlling costs, and ensuring peace of mind.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#000000] hover:bg-[#ED5A2D] hover:text-white transition-all duration-300 shadow-sm border border-[#eeeeee]">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#000000] hover:bg-[#ED5A2D] hover:text-white transition-all duration-300 shadow-sm border border-[#eeeeee]">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#000000] hover:bg-[#ED5A2D] hover:text-white transition-all duration-300 shadow-sm border border-[#eeeeee]">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-[#000000] text-[20px] font-bold mb-8">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about-us' },
                { label: 'Services', href: '/our-services' },
                { label: 'Industries', href: '/industries' },
                { label: 'Clients', href: '/clients' },
                { label: 'Tools', href: '/tools' },
                { label: 'Contact Us', href: '/contact-us' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#555555] text-[16px] hover:text-[#ED5A2D] transition-colors duration-300 block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-[#000000] text-[20px] font-bold mb-8">Services</h3>
            <ul className="flex flex-col gap-4">
              {[
                'Structural Engineering Design',
                'Structural Drafting & Detailing',
                'Specialized Services'
              ].map((service) => (
                <li key={service}>
                  <a href="/our-services" className="text-[#555555] text-[16px] hover:text-[#ED5A2D] transition-colors duration-300 block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info & Envelope Icon */}
          <div className="relative">
            <h3 className="text-[#000000] text-[20px] font-bold mb-8">Contact Information</h3>

            <div className="mb-6">
              <Image
                src="/mk-logo.png"
                alt="Envelope Icon"
                width={160}
                height={120}
                className="opacity-90"
              />
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <span className="text-[#ED5A2D] mt-1 shrink-0"><Mail size={18} /></span>
                <span className="text-[#000000] font-semibold text-[16px]">info@msconstruction.com</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#ED5A2D] mt-1 shrink-0"><MapPin size={18} /></span>
                <span className="text-[#000000] font-semibold text-[16px]">
                  202, Solitaire Business Hub III,<br />
                  Baner, Pune-411045
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#ED5A2D] mt-1 shrink-0"><Phone size={18} /></span>
                <span className="text-[#000000] font-semibold text-[16px]">+91 8115603603</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#e5e5e5] pt-8 flex flex-col md:flex-row justify-center items-center relative">
          <p className="text-[#555555] text-[15px] font-medium text-center">
            &#9426;Copyright 2025 MS Construction . All rights reserved
          </p>

          <div
            onClick={scrollToTop}
            className="absolute right-0 bottom-[-10px] md:bottom-2 cursor-pointer group"
          >
            <div className="relative w-[50px] h-[50px] flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle cx="25" cy="25" r="23" stroke="#e5e5e5" strokeWidth="2" fill="transparent" />
                <circle cx="25" cy="25" r="23" stroke="#000000" strokeWidth="2" fill="transparent" strokeDasharray="144" strokeDashoffset="100" className="transition-all duration-300" />
              </svg>
              <ArrowUp size={20} className="text-[#000000] group-hover:text-[#ED5A2D] transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
