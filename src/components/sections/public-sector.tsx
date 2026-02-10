import React from 'react';
import Image from 'next/image';

const PublicSectorSection = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center gap-[50px]">
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <div className="relative rounded-[8px] overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f2326e5-858a-4100-a180-816ef82ff31c-alphabuildengineering-com/assets/images/ind-5-10.webp"
                alt="Government & Public Sector Bodies aerial view of water treatment facility"
                width={600}
                height={450}
                className="w-full h-auto object-cover rounded-[8px]"
                priority
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <div className="max-w-[540px]">
              <h2 className="font-display font-bold text-[32px] md:text-[36px] leading-[1.2] text-[#000000] mb-6">
                Government & Public Sector Bodies
              </h2>
              
              <p className="text-[16px] leading-[1.6] text-[#444444] mb-6">
                We deliver reliable and code-compliant designs for civic and infrastructure projects including:
              </p>

              <ul className="bullet-list">
                <li className="bullet-item flex items-start gap-3 mb-[15px] text-[15px] text-[#444444]">
                  <span className="bullet-icon mt-1.5 flex-shrink-0 w-[18px] h-[18px] bg-[#e85b33] rounded-full flex items-center justify-center">
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 4L4 7L9 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>Water treatment and storage systems (WTPs, STPs, ESRs)</span>
                </li>
                <li className="bullet-item flex items-start gap-3 mb-[15px] text-[15px] text-[#444444]">
                  <span className="bullet-icon mt-1.5 flex-shrink-0 w-[18px] h-[18px] bg-[#e85b33] rounded-full flex items-center justify-center">
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 4L4 7L9 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>Public buildings and transport infrastructure</span>
                </li>
                <li className="bullet-item flex items-start gap-3 mb-[15px] text-[15px] text-[#444444]">
                  <span className="bullet-icon mt-1.5 flex-shrink-0 w-[18px] h-[18px] bg-[#e85b33] rounded-full flex items-center justify-center">
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 4L4 7L9 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>Retrofitting and audit reports for existing structures</span>
                </li>
              </ul>

              <div className="value-box bg-[#FDE2D9] border-l-[4px] border-[#e85b33] p-6 rounded-r-[5px] mt-8">
                <span className="value-box-label block font-bold text-[#000000] text-[18px] mb-2">
                  Value we add:
                </span>
                <p className="text-[15px] leading-[1.6] text-[#444444]">
                  Accuracy, documentation clarity, and adherence to regulatory standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicSectorSection;