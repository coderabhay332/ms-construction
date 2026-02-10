import React from 'react';
import Image from 'next/image';

/**
 * IndustrialManufacturers Component
 * 
 * Clones the "Industrial Project Owners & Manufacturers" section.
 * Features a two-column layout:
 * - Left: Image of pallets in a warehouse
 * - Right: Heading, description, bullet points, and a "Value we add" callout box.
 */
const IndustrialManufacturers = () => {
  // Data for the bullet points
  const projects = [
    "Manufacturing plants, warehouses, and logistics hubs",
    "Process structures, chimneys, and tank foundations",
    "Solar and renewable energy installations",
  ];

  return (
    <section className="bg-white py-[100px]">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center gap-[50px]">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-[8px]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f2326e5-858a-4100-a180-816ef82ff31c-alphabuildengineering-com/assets/images/ind-4-8.webp"
                alt="Warehouse with stacked pallets"
                width={600}
                height={450}
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[32px] font-bold text-[#000000] leading-[1.3] mb-6 font-sans">
              Industrial Project Owners & Manufacturers
            </h2>
            
            <p className="text-[16px] leading-[1.6] text-[#444444] mb-6 font-sans">
              We provide end-to-end design and detailing for industrial facilities — from heavy machine foundations to pre-engineered buildings, pipe racks, and storage silos. Projects include:
            </p>

            {/* Bullet List */}
            <ul className="list-none p-0 m-0 mb-6">
              {projects.map((item, index) => (
                <li key={index} className="flex items-start gap-3 mb-[15px] text-[15px] text-[#444444] font-sans">
                  <span className="flex-shrink-0 w-[18px] h-[18px] bg-[#E85B33] rounded-full flex items-center justify-center mt-1">
                    <svg 
                      width="10" 
                      height="8" 
                      viewBox="0 0 10 8" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M1 4.5L3.5 7L9 1.5" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Value We Add Box */}
            <div className="bg-[#FDE2D9] border-l-[4px] border-[#E85B33] p-6 rounded-r-[5px]">
              <span className="block font-bold text-[#000000] text-[18px] mb-2 font-sans">
                Value we add:
              </span>
              <p className="text-[15px] leading-[1.6] text-[#444444] font-sans">
                Safety, durability, and operational efficiency in high-demand environments.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustrialManufacturers;