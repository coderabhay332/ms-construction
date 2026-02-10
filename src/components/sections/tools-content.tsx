import React from 'react';
import Image from 'next/image';

const ToolsContent = () => {
  return (
    <section className="py-[100px] bg-white">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col lg:flex-row gap-[50px] items-start">
          {/* Left Side: Industrial Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f2326e5-858a-4100-a180-816ef82ff31c-alphabuildengineering-com/assets/images/4_-OUR-PORTFOLIO-2-1-5.jpg"
                alt="Construction cranes and building structure"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side: Content and Grid */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[42px] font-bold text-[#111111] leading-[1.3] mb-10 font-display">
              Advanced Tools & Technology
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* RCC Design & Analysis Card */}
              <div className="bg-[#f8f8f8] p-[25px_30px] border-l-4 border-[#f15a29] h-full">
                <h3 className="text-[20px] font-semibold text-[#111111] leading-[1.4] mb-3 font-display">
                  RCC Design & Analysis
                </h3>
                <p className="text-[16px] font-normal text-[#666666] leading-[1.6] font-sans">
                  ETABS • SAP2000 • SAFE • STAAD.Pro
                </p>
              </div>

              {/* Typical Clients (Top) */}
              <div className="bg-[#f8f8f8] p-[25px_30px] border-l-4 border-[#f15a29] h-full">
                <h3 className="text-[20px] font-semibold text-[#111111] leading-[1.4] mb-3 font-display">
                  Typical Clients:
                </h3>
                <p className="text-[16px] font-normal text-[#666666] leading-[1.6] font-sans">
                  Industrial EPCs, plant owners, steel fabricators
                </p>
              </div>

              {/* Steel Design & Connections Card */}
              <div className="bg-[#f8f8f8] p-[25px_30px] border-l-4 border-[#f15a29] h-full">
                <h3 className="text-[20px] font-semibold text-[#111111] leading-[1.4] mb-3 font-display">
                  Steel Design & Connections
                </h3>
                <p className="text-[16px] font-normal text-[#666666] leading-[1.6] font-sans">
                  Industrial EPCs, plant owners, steel fabricators
                </p>
              </div>

              {/* Typical Clients (Bottom) */}
              <div className="bg-[#f8f8f8] p-[25px_30px] border-l-4 border-[#f15a29] h-full">
                <h3 className="text-[20px] font-semibold text-[#111111] leading-[1.4] mb-3 font-display">
                  Typical Clients:
                </h3>
                <p className="text-[16px] font-normal text-[#666666] leading-[1.6] font-sans">
                  Industrial EPCs, plant owners, steel fabricators
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsContent;