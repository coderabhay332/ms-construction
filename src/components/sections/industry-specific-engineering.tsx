import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

/**
 * IndustrySpecificEngineering Section
 * Clones the split-layout section with a large image of an industrial cooling tower 
 * and "Industry-Specific Engineering, Delivered Systematically" text content.
 */
const IndustrySpecificEngineering: React.FC = () => {
  const checklistItems = [
    "Sector-specific understanding",
    "Structured engineering workflows",
    "Multi-code compliance capability",
    "Scalable offshore delivery"
  ];

  return (
    <section className="py-[100px] md:py-[120px] bg-[#FFF9F7]">
      <div className="container mx-auto px-6 max-w-[1320px]">
        <div className="flex flex-col lg:flex-row items-center gap-[60px] lg:gap-[100px]">
          
          {/* Left Side: Image Container */}
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <div className="relative rounded-[15px] overflow-hidden shadow-lg industry-card-shadow aspect-[4/3] lg:aspect-square max-h-[600px]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f2326e5-858a-4100-a180-816ef82ff31c-alphabuildengineering-com/assets/images/ind-1-6.webp"
                alt="Industrial cooling tower and power plant facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <div className="max-w-[580px]">
              <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold text-[#111111] leading-[1.2] mb-6 font-display">
                Industry-Specific Engineering, Delivered Systematically
              </h2>
              
              <p className="text-[16px] md:text-[18px] text-[#555555] leading-[1.6] mb-8 font-sans">
                Each industry presents distinct challenges—whether it&apos;s speed-to-market, constructability, regulatory scrutiny, or lifecycle performance. Our approach combines:
              </p>

              {/* Checklist */}
              <ul className="space-y-4 mb-8">
                {checklistItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F15A2B] flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-[16px] md:text-[18px] font-semibold text-[#111111] font-sans">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-[16px] text-[#555555] leading-[1.6] font-sans">
                This allows us to adapt our services to different industries while maintaining consistent quality and accountability.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustrySpecificEngineering;