import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

/**
 * ArchitecturalFirms Section
 * 
 * A two-column layout featuring a large architectural image on the left 
 * and descriptive text, a bulleted list with orange checkmarks, 
 * and a "Value we add" highlight box on the right.
 */
const ArchitecturalFirms = () => {
  return (
    <section className="section-padding bg-background w-full">
      <div className="container mx-auto px-[20px] max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] items-center">
          
          {/* Image Column */}
          <div 
            className="relative w-full aspect-[4/3] lg:aspect-square overflow-hidden rounded-[8px]"
            data-aos="fade-right"
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f2326e5-858a-4100-a180-816ef82ff31c-alphabuildengineering-com/assets/images/arc-4.webp"
              alt="Modern glass skyscrapers reaching into the blue sky"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Content Column */}
          <div data-aos="fade-left">
            <h2 className="text-[32px] font-bold text-black mb-6 leading-[1.3] font-display">
              Architectural & Design Firms
            </h2>

            <p className="text-[16px] leading-[1.6] text-brand-text mb-4">
              We collaborate with architects to transform design concepts into <span className="font-bold">buildable, compliant, and cost-efficient structural systems.</span>
            </p>
            
            <p className="text-[16px] leading-[1.6] text-brand-text mb-6">
              Our engineers coordinate early in the design phase to ensure:
            </p>

            <ul className="bullet-list space-y-[15px] mb-8">
              <li className="bullet-item flex items-start gap-3 text-[15px] text-brand-text">
                <span className="bullet-icon bg-brand-orange text-white flex-shrink-0 w-[20px] height-[20px] rounded-full flex items-center justify-center mt-1">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Seamless architectural integration</span>
              </li>
              <li className="bullet-item flex items-start gap-3 text-[15px] text-brand-text">
                <span className="bullet-icon bg-brand-orange text-white flex-shrink-0 w-[20px] height-[20px] rounded-full flex items-center justify-center mt-1">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Slimmer sections, optimized spans, and clear service routes</span>
              </li>
              <li className="bullet-item flex items-start gap-3 text-[15px] text-brand-text">
                <span className="bullet-icon bg-brand-orange text-white flex-shrink-0 w-[20px] height-[20px] rounded-full flex items-center justify-center mt-1">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>High-quality 3D models and visuals for client presentations</span>
              </li>
            </ul>

            {/* Value Add Box */}
            <div className="value-box bg-[#FDE2D9] border-l-[4px] border-brand-orange p-6 rounded-r-[5px] mt-8">
              <span className="value-box-label text-[18px] font-bold text-black block mb-2 font-display">
                Value we add:
              </span>
              <p className="text-[16px] leading-[1.6] text-brand-text">
                Concept-to-detail support, BIM coordination, and façade integration.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ArchitecturalFirms;