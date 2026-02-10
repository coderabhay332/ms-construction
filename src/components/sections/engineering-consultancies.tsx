import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

const EngineeringConsultancies = () => {
  return (
    <section className="bg-brand-warm py-[100px] font-sans">
      <div className="container mx-auto px-5 lg:px-10 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[50px]">
          {/* Left Content Side */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-[32px] font-bold text-brand-heading leading-[1.3] mb-6">
              Structural & Civil Engineering Consultancies
            </h2>

            <div className="text-[16px] text-brand-text leading-[1.6] mb-6">
              <p className="mb-4">
                For consultancies managing large workloads or specialized analyses, MS Construction acts as an extension of your <span className="font-bold">in-house team</span>. We support:
              </p>
            </div>

            <ul className="space-y-[15px] mb-8">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1.5 w-[18px] height-[18px] bg-brand-orange rounded-full flex items-center justify-center p-0.5">
                  <Check className="text-white w-2.5 h-2.5 stroke-[4px]" />
                </div>
                <span className="text-[15px] text-brand-text">Design development & peer review</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1.5 w-[18px] height-[18px] bg-brand-orange rounded-full flex items-center justify-center p-0.5">
                  <Check className="text-white w-2.5 h-2.5 stroke-[4px]" />
                </div>
                <span className="text-[15px] text-brand-text">Global code conversions (e.g., IS to AISC or Eurocode)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1.5 w-[18px] height-[18px] bg-brand-orange rounded-full flex items-center justify-center p-0.5">
                  <Check className="text-white w-2.5 h-2.5 stroke-[4px]" />
                </div>
                <span className="text-[15px] text-brand-text">Detailed analysis, modeling, and connection/rebar detailing</span>
              </li>
            </ul>

            <div className="bg-brand-content border-l-4 border-brand-orange p-[24px] rounded-r-[5px]">
              <span className="block text-brand-heading font-bold text-[16px] mb-2">Value we add:</span>
              <p className="text-[15px] text-brand-text leading-[1.6]">
                Scalability, reduced turnaround time, and consistent output quality across projects.
              </p>
            </div>
          </div>

          {/* Right Image Side */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-[8px]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f2326e5-858a-4100-a180-816ef82ff31c-alphabuildengineering-com/assets/images/New-Project-10-5.webp"
                alt="Three engineers in hard hats smiling at a construction site"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringConsultancies;