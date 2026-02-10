import React from 'react';
import Image from 'next/image';

/**
 * Developers & Real Estate Owners Section
 * Layout: Text Left, Image Right
 * Background: Warm Peach (#FFF5F2)
 */
export default function DevelopersRealEstate() {
  const bulletPoints = [
    "Complete structural design and detailing packages",
    "Feasibility studies and value engineering",
    "Peer review and retrofit assessments for existing buildings"
  ];

  return (
    <section className="section-padding alternating-bg overflow-hidden">
      <div className="container px-5 md:px-0">
        <div className="flex flex-col lg:flex-row items-center gap-[50px]">
          
          {/* Text Content Column */}
          <div 
            className="w-full lg:w-1/2 order-2 lg:order-1"
            data-aos="fade-right"
          >
            <h2 className="text-[32px] font-bold text-black leading-[1.3] mb-6 font-sans">
              Developers & Real Estate Owners
            </h2>
            
            <p className="text-[16px] leading-[1.6] text-[#444444] mb-6 font-sans">
              We help developers achieve <span className="font-bold">cost-effective, compliant, and structurally optimized projects</span> for residential, commercial, and mixed-use developments. Our services cover:
            </p>

            <ul className="bullet-list mb-8">
              {bulletPoints.map((text, index) => (
                <li key={index} className="bullet-item flex items-start gap-3 mb-4 text-[15px]">
                  <span className="bullet-icon mt-1 bg-[#e85b33] w-[18px] h-[18px] rounded-full shrink-0 flex items-center justify-center relative after:content-[''] after:w-[8px] after:height-[4px] after:border-l-2 after:border-b-2 after:border-white after:rotate-[-45deg] after:translate-y-[-1px]"></span>
                  <span className="text-[#444444]">{text}</span>
                </li>
              ))}
            </ul>

            <div className="value-box border-l-4 border-[#e85b33] bg-[#fde2d9] p-6 rounded-r-[5px] mt-8">
              <span className="value-box-label block font-bold text-black mb-2 text-[18px] font-sans">
                Value we add:
              </span>
              <p className="text-[16px] leading-[1.6] text-[#444444] font-sans">
                Reduced construction cost through smart design and early-stage optimization.
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div 
            className="w-full lg:w-1/2 order-1 lg:order-2"
            data-aos="fade-left"
          >
            <div className="relative rounded-[5px] overflow-hidden leading-[0]">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f2326e5-858a-4100-a180-816ef82ff31c-alphabuildengineering-com/assets/images/cc-1024x1024-7.webp"
                alt="High-angle shot of a construction site with cranes and birds"
                width={575}
                height={575}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}