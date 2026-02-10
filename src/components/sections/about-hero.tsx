import React from 'react';
import { ChevronRight } from 'lucide-react';

const AboutHero = () => {
  return (
    <section 
      className="relative min-h-[450px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://alphabuildengineering.com/wp-content/uploads/2023/12/About-Us-Banner.jpg')`,
      }}
    >
      {/* Dark Overlay - matches high_level_design specification */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(rgba(0, 34, 68, 0.7), rgba(0, 34, 68, 0.7))' }}
      />

      {/* Content Container */}
      <div className="container relative z-20 text-center px-4">
        {/* Page Title */}
        <h1 className="text-[40px] md:text-[56px] font-bold text-white uppercase tracking-[-0.02em] leading-[1.2] mb-6">
          About Us
        </h1>

        {/* Breadcrumb Navigation */}
        <nav className="flex items-center justify-center space-x-2 text-sm font-bold uppercase tracking-[1px]">
          <a 
            href="/" 
            className="text-white hover:text-[#FFB129] transition-colors duration-300"
          >
            Home
          </a>
          <ChevronRight className="w-4 h-4 text-[#FFB129]" strokeWidth={3} />
          <span className="text-[#FFB129]">
            About Us
          </span>
        </nav>
      </div>
    </section>
  );
};

export default AboutHero;