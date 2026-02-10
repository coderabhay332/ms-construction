import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

const AboutIntro = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container px-4 mx-auto max-w-[1140px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[70px] items-center">

          {/* Left Column: Image with Experience Badge */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 w-full h-[450px] md:h-[550px]">
              <Image
                src="https://alphabuildengineering.com/wp-content/uploads/2025/11/arc-768x768.webp"
                alt="MS Construction Site"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-0 md:right-8 z-20 bg-[#FFB129] p-8 md:p-10 text-white shadow-card transform hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl md:text-6xl font-bold leading-none mb-2">25</span>
                <span className="text-sm md:text-base font-bold uppercase tracking-widest leading-tight">
                  Years of<br />Experience
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-4">
              <span className="accent-label">Explore MS Construction</span>
              <h2 className="text-[32px] md:text-[40px] font-bold text-[#002244] uppercase leading-[1.2] mt-2 mb-6">
                Leading The Way In <br className="hidden md:block" /> Engineering Excellence
              </h2>
            </div>

            <div className="space-y-5 text-[#666666] text-base leading-[1.6]">
              <p>
                Founded on the principles of integrity, innovation, and uncompromising quality, MS Construction has grown from a local engineering firm into a premier industry leader. For over two decades, we have been delivering complex infrastructure projects that shape our communities and drive progress.
              </p>

              <p>
                Our mission is to provide superior engineering and construction services by creating successful partnerships with our clients throughout the construction process. Our pledge is to establish lasting relationships by exceeding expectations and gaining trust through exceptional performance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <Check className="w-5 h-5 text-[#FFB129]" strokeWidth={3} />
                  </div>
                  <span className="font-semibold text-[#002244]">Innovative Design Solutions</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <Check className="w-5 h-5 text-[#FFB129]" strokeWidth={3} />
                  </div>
                  <span className="font-semibold text-[#002244]">Regulatory Compliance</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <Check className="w-5 h-5 text-[#FFB129]" strokeWidth={3} />
                  </div>
                  <span className="font-semibold text-[#002244]">Sustainable Engineering</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <Check className="w-5 h-5 text-[#FFB129]" strokeWidth={3} />
                  </div>
                  <span className="font-semibold text-[#002244]">Safety-First Approach</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="/contact"
                  className="btn-primary"
                >
                  Work With Us
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutIntro;