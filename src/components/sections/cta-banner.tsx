import React from 'react';
import { Button } from "@/components/ui/button";

/**
 * CTA Banner component with parallax background, bold headline, and centered button.
 * Designed to match the industrial/corporate engineering aesthetic based on 
 * provided high-level design and globals.css.
 */
const CTABanner = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* 
        Parallax-like background image 
        Using background-attachment: fixed for the parallax effect specified in instructions.
        Background image URL verified from <assets> tag.
      */}
      <div 
        className="absolute inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500"
        style={{ 
          backgroundImage: `url('https://alphabuildengineering.com/wp-content/uploads/2023/12/CTA-Background.jpg')`,
          backgroundAttachment: 'fixed'
        }}
      />

      {/* 
        Dark navy overlay 
        Matches: linear-gradient(rgba(0,34,68,0.7), rgba(0,34,68,0.7)) 
      */}
      <div className="absolute inset-0 z-10 bg-[#002244]/70" />

      {/* Content Container */}
      <div className="container relative z-20 mx-auto px-4 py-[100px] text-center">
        <div className="max-w-[800px] mx-auto flex flex-col items-center">
          
          {/* Accent Label (Top Overline) */}
          <span className="accent-label mb-4 tracking-[2px] text-[#FFB129] font-bold uppercase text-[14px]">
            Work with us
          </span>

          {/* Bold Headline */}
          <h2 className="text-white text-[32px] md:text-[40px] font-bold uppercase mb-8 leading-tight tracking-tight">
            Ready to start your next <span className="text-[#FFB129]">engineering</span> project?
          </h2>

          {/* Centered Contact Us Button */}
          <div className="mt-4">
            <a 
              href="/contact" 
              className="btn-primary inline-flex h-auto cursor-pointer"
              style={{
                backgroundColor: '#FFB129',
                color: '#ffffff',
                padding: '15px 35px',
                fontWeight: '700',
                textTransform: 'uppercase',
                borderRadius: '0px',
                fontSize: '16px',
                transition: 'all 0.3s ease-in-out'
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* 
          Manual hover state for the anchor button since we 
          can't use btn-primary utility easily on a raw tag with inline styles 
        */
        a:hover {
          background-color: #002244 !important;
        }

        /* 
          Ensures the parallax effect works correctly on standard devices, 
          while providing a fallback for mobile where fixed backgrounds 
          can be problematic.
        */
        @media (max-width: 768px) {
          section > div:first-child {
            background-attachment: scroll;
          }
        }
      `}</style>
    </section>
  );
};

export default CTABanner;