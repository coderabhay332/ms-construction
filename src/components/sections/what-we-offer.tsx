import React from 'react';
import Image from 'next/image';

const WhatWeOffer = () => {
  return (
    <section className="py-[100px] bg-white">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] items-center">
          {/* Left Column: Industrial Image */}
          <div className="relative w-full aspect-[1/1] overflow-hidden rounded-[5px]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f2326e5-858a-4100-a180-816ef82ff31c-alphabuildengineering-com/assets/images/4_-OUR-PORTFOLIO-2-1-6.jpg"
              alt="Industrial engineering facility with flares at night"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right Column: Text Block */}
          <div className="flex flex-col">
            <h2 className="text-[#001A33] font-bold text-[36px] uppercase tracking-wide mb-[10px] leading-[1.3]">
              WHAT WE OFFER
            </h2>
            
            <h3 className="text-[#001A33] font-semibold text-[18px] leading-[1.5] mb-[20px]">
              End-to-End Structural Engineering Support
            </h3>

            <div className="space-y-[15px]">
              <p className="text-[#555555] text-[16px] leading-[1.6] m-0">
                Our services are designed to integrate seamlessly with your in-house teams. Whether you need support at concept stage, detailed design, fabrication, or construction, we provide structured engineering outputs aligned with your standards and workflows.
              </p>
              
              <p className="text-[#555555] text-[16px] leading-[1.6] m-0">
                We operate as an outsourcing partner, not a freelancer model offering consistency, accountability, and long-term collaboration capability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;