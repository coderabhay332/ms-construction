import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

/**
 * AlignmentMattersSection
 * A component that replicates the "Why Industry Alignment Matters" section.
 * Features a 50/50 split layout with a vibrant industrial image on the left 
 * and a benefits list with orange checkmarks on the right.
 */
const AlignmentMattersSection = () => {
  const benefits = [
    "Faster project onboarding",
    "Better coordination with industry stakeholders",
    "Reduced rework through informed assumptions",
    "Deliverables aligned with sector expectations"
  ];

  return (
    <section className="py-[100px] lg:py-[120px] bg-[#FFF9F7]">
      <div className="container px-6 max-w-[1320px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-[60px] lg:gap-[100px]">
          
          {/* Left Side: Industrial Image */}
          <div 
            className="w-full lg:w-1/2 relative overflow-hidden rounded-[15px] industry-card-shadow"
            data-aos="fade-right"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f2326e5-858a-4100-a180-816ef82ff31c-alphabuildengineering-com/assets/images/ind-7-4.webp"
                alt="Vibrant night-time industrial facility"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div 
            className="w-full lg:w-1/2"
            data-aos="fade-left"
          >
            <div className="max-w-[580px]">
              <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#111111] leading-[1.2] mb-5">
                Why Industry Alignment Matters
              </h2>
              
              <p className="text-[16px] leading-[1.6] text-[#555555] mb-4">
                Industry familiarity allows us to anticipate challenges and streamline delivery. 
                Benefits include:
              </p>

              {/* Benefits Checklist */}
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1 flex items-center justify-center w-[22px] h-[22px] bg-[#F15A2B] rounded-full">
                      <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />
                    </span>
                    <span className="text-[16px] font-medium text-[#111111] leading-tight">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-[16px] leading-[1.6] text-[#555555]">
                This leads to smoother execution and more predictable outcomes.
              </p>
            </div>
          </div>
          
        </div>
      </div>


    </section>
  );
};

export default AlignmentMattersSection;