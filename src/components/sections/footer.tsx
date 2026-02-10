import React from 'react';
import Image from 'next/image';
import { Facebook, Linkedin, Instagram, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-[100px] pb-[40px] font-sans">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-10 pb-[60px] border-b border-[#E2E8F0]">

          {/* Column 1: Logo & Mission */}
          <div className="flex flex-col">
            <div className="mb-[25px]">
              <a href="/">
                <img
                  src="/mk-logo.png"
                  alt="MS Construction Logo"
                  className="h-[70px] w-auto object-contain"
                />
              </a>
            </div>
            <p className="text-[#555555] text-[16px] leading-[1.6] mb-[25px] max-w-[280px]">
              At MS Construction, we know structural engineering is more than calculations—it's about minimizing risk, controlling costs, and ensuring peace of mind.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-[36px] h-[36px] rounded-full flex items-center justify-center border border-[#E2E8F0] text-[#001A33] hover:bg-[#EE5E35] hover:text-white hover:border-[#EE5E35] transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-[36px] h-[36px] rounded-full flex items-center justify-center border border-[#E2E8F0] text-[#001A33] hover:bg-[#EE5E35] hover:text-white hover:border-[#EE5E35] transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-[36px] h-[36px] rounded-full flex items-center justify-center border border-[#E2E8F0] text-[#001A33] hover:bg-[#EE5E35] hover:text-white hover:border-[#EE5E35] transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-[#001A33] text-[20px] font-semibold mb-[30px]">Quick Links</h3>
            <ul className="space-y-[12px]">
              {['Home', 'About Us', 'Services', 'Industries', 'Clients', 'Tools', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#555555] text-[16px] hover:text-[#EE5E35] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col">
            <h3 className="text-[#001A33] text-[20px] font-semibold mb-[30px]">Services</h3>
            <ul className="space-y-[12px]">
              {['Structural Engineering Design', 'Structural Drafting & Detailing', 'Specialized Services'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-[#555555] text-[16px] hover:text-[#EE5E35] transition-colors leading-[1.4]">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="flex flex-col">
            <h3 className="text-[#001A33] text-[20px] font-semibold mb-[15px]">Contact Information</h3>
            <div className="mb-[25px]">
              {/* Large Envelope Icon as shown in screenshot */}
              <div className="text-[#001A33] w-full">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[120px] h-[90px]">
                  <rect width="20" height="16" x="2" y="4" rx="2" strokeWidth="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div className="space-y-[15px]">
              <div className="flex items-start gap-3">
                <a href="mailto:info@msconstruction.com" className="text-[#555555] text-[16px] hover:text-[#EE5E35] transition-colors">
                  info@msconstruction.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#EE5E35] mt-1 shrink-0" />
                <p className="text-[#555555] text-[16px] m-0 leading-[1.4]">
                  420, xxxxx xxxx xxxx, xxxxx, xxxxx-xxxxxx
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-[#EE5E35] mt-1 shrink-0" />
                <a href="tel:+91xxxxxxx" className="text-[#555555] text-[16px] hover:text-[#EE5E35] transition-colors">
                  +91 xxxxxxxxxx
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-[30px] text-center">
          <p className="text-[#555555] text-[16px] m-0">
            ⓒCopyright 2025 Zerototenx . All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;