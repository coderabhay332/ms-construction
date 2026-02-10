import React from 'react';
import Image from 'next/image';

/**
 * ConstructionEPC Component
 * 
 * Clones the "Construction & EPC Companies" section with pixel-perfect accuracy.
 * Features a geometric perspective image of structural framing on the left
 * and service details with orange checkmarks on the right.
 */
const ConstructionEPC: React.FC = () => {
  // Assets from provided list
  const constructionImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f2326e5-858a-4100-a180-816ef82ff31c-alphabuildengineering-com/assets/images/sf-6.webp";

  return (
    <section className="bg-white py-[100px]">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center gap-[50px]">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <div className="relative rounded-[8px] overflow-hidden">
              <Image 
                src={constructionImage}
                alt="Construction structural framing"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-[8px]"
                priority
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <h2 className="text-[32px] font-bold text-[#000000] mb-6 font-sans leading-[1.3]">
              Construction & EPC Companies
            </h2>
            
            <p className="text-[16px] leading-[1.6] text-[#444444] mb-6 font-sans">
              We support EPCs, design–build contractors, and turnkey firms with{' '}
              <span className="font-bold">constructible designs</span> and{' '}
              <span className="font-bold">shop drawings that minimize rework.</span>
              <br />
              Our deliverables include:
            </p>

            <ul className="list-none p-0 m-0 space-y-[15px] mb-8 bullet-list">
              <li className="flex items-start gap-3 bullet-item">
                <span className="flex-shrink-0 w-[18px] h-[18px] bg-[#e85b33] rounded-full flex items-center justify-center mt-1">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L4 7L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-[15px] text-[#444444]">
                  Steel connection design and fabrication packages
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-[18px] h-[18px] bg-[#e85b33] rounded-full flex items-center justify-center mt-1">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L4 7L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-[15px] text-[#444444]">
                  RCC rebar detailing and BBS aligned to site phasing
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-[18px] h-[18px] bg-[#e85b33] rounded-full flex items-center justify-center mt-1">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L4 7L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-[15px] text-[#444444]">
                  Foundation and anchor bolt coordination with vendor data
                </span>
              </li>
            </ul>

            {/* Value We Add Box */}
            <div className="value-box bg-[#fde2d9] border-l-[4px] border-[#e85b33] p-6 rounded-r-[5px] mt-8">
              <span className="value-box-label block font-bold text-[#000000] mb-2 text-[18px]">
                Value we add:
              </span>
              <p className="text-[16px] leading-[1.6] text-[#444444] font-sans">
                Faster fabrication, fewer RFIs, and material savings through design optimization.
              </p>
            </div>
          </div>

        </div>
      </div>


    </section>
  );
};

export default ConstructionEPC;