import React from 'react';
import Image from 'next/image';

const WhyPartnerWithUs = () => {
  const cards = [
    {
      title: "Process-Driven Quality",
      description: "Every project follows a documented workflow with defined checks, peer reviews, and approvals ensuring consistent quality and traceable decisions.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f2326e5-858a-4100-a180-816ef82ff31c-alphabuildengineering-com/assets/images/ag-5.webp",
      alt: "Workflow documentation and peer review process"
    },
    {
      title: "Global Codes & Standards Expertise",
      description: "Proven experience with ACI, Eurocode, IS, BS, CSA, and AS standards for smooth coordination and approvals across regions.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f2326e5-858a-4100-a180-816ef82ff31c-alphabuildengineering-com/assets/images/ab-6.webp",
      alt: "Engineering plans and global structural standards"
    },
    {
      title: "Scalable Offshore Teams",
      description: "Quickly scale engineering capacity without hiring overheads. Suitable for both short-term project support and long-term partnerships.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f2326e5-858a-4100-a180-816ef82ff31c-alphabuildengineering-com/assets/images/a-2-7.webp",
      alt: "Scalable offshore engineering team collaboration"
    }
  ];

  return (
    <section className="py-[100px] bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Text */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-[36px] font-bold text-black mb-6 leading-[1.3] tracking-[-0.01em]">
            Why Global Firms Partner With Us
          </h2>
          <p className="text-[16px] text-[#555555] leading-[1.6] mb-4">
            We Work As An Extension Of Your In-House Engineering Team Helping You Manage Workload Peaks, Reduce Operational Costs, And Deliver Projects Faster Without Compromising Quality, Compliance, Or Control.
          </p>
          <span className="text-[14px] text-[#555555] font-normal uppercase tracking-wider block mt-2">
            What Defines Us
          </span>
        </div>

        {/* Value Prop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 items-start">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col group">
              <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden rounded-[10px]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-[22px] font-semibold text-black mb-4 leading-[1.4]">
                {card.title}
              </h3>
              <p className="text-[16px] text-[#555555] leading-[1.6]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerWithUs;