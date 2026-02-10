import React from 'react';
import Image from 'next/image';

const SteelFabricatorsSection = () => {
  return (
    <section className="bg-[#FFF5F2] py-[100px]">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center gap-[50px]">
          {/* Text Content Column */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[32px] font-bold text-[#000000] leading-[1.3] mb-6 font-sans">
              Steel Fabricators & Rebar Detailing Firms
            </h2>
            
            <p className="text-[16px] leading-[1.6] text-[#444444] mb-6 font-sans">
              We work closely with steel and rebar specialists who require high-precision shop drawings and connection details. Our dedicated drafting teams ensure:
            </p>

            <ul className="list-none p-0 m-0 mb-8 space-y-[15px]">
              <li className="flex items-start gap-3 text-[15px] text-[#444444] font-sans">
                <span className="flex-shrink-0 w-[18px] h-[18px] bg-[#E85B33] rounded-full flex items-center justify-center mt-1">
                  <span className="block w-[8px] h-[4px] border-l-2 border-b-2 border-white -rotate-45 -translate-y-[1px]"></span>
                </span>
                <span>Fabrication-ready drawings compliant with AISC, BS, or IS standards</span>
              </li>
              <li className="flex items-start gap-3 text-[15px] text-[#444444] font-sans">
                <span className="flex-shrink-0 w-[18px] h-[18px] bg-[#E85B33] rounded-full flex items-center justify-center mt-1">
                  <span className="block w-[8px] h-[4px] border-l-2 border-b-2 border-white -rotate-45 -translate-y-[1px]"></span>
                </span>
                <span>Bolt/weld detailing, plate lists, and erection sequencing</span>
              </li>
              <li className="flex items-start gap-3 text-[15px] text-[#444444] font-sans">
                <span className="flex-shrink-0 w-[18px] h-[18px] bg-[#E85B33] rounded-full flex items-center justify-center mt-1">
                  <span className="block w-[8px] h-[4px] border-l-2 border-b-2 border-white -rotate-45 -translate-y-[1px]"></span>
                </span>
                <span>Coordination with suppliers for accuracy in material lists</span>
              </li>
            </ul>

            <div className="bg-[#FDE2D9] border-l-4 border-[#E85B33] p-6 rounded-r-md">
              <span className="block text-[18px] font-bold text-[#000000] mb-2 font-sans">
                Value we add:
              </span>
              <p className="text-[15px] leading-[1.6] text-[#444444] font-sans">
                100% constructible models and faster approvals from engineers and clients.
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-[5px] aspect-square lg:aspect-auto h-auto lg:h-[480px] w-full">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f2326e5-858a-4100-a180-816ef82ff31c-alphabuildengineering-com/assets/images/gd-9.webp"
                alt="Welder at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 575px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SteelFabricatorsSection;