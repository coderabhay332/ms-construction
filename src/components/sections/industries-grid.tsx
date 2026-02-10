import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface IndustryCardProps {
  title: string;
  description: string;
  image: string;
  linkText: string;
  href: string;
}

const IndustryCard = ({ title, description, image, linkText, href }: IndustryCardProps) => {
  return (
    <div className="flex flex-col bg-[#FBD9D0] rounded-[15px] overflow-hidden transition-all duration-300 hover:shadow-lg group h-full">
      <div className="relative w-full aspect-[4/3] bg-[#C4CDD5]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <div className="p-[30px] flex flex-col flex-grow">
        <h3 className="text-[24px] font-bold text-[#111111] leading-[1.3] mb-[15px]">
          {title}
        </h3>
        <p className="text-[16px] text-[#555555] leading-[1.6] mb-[20px] flex-grow">
          {description}
        </p>
        <a 
          href={href} 
          className="inline-flex items-center text-[#F15A2B] font-semibold text-[16px] group/link"
        >
          {linkText}
          <ArrowUpRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
        </a>
      </div>
    </div>
  );
};

export default function IndustriesGrid() {
  const industries = [
    {
      title: "Residential Buildings",
      description: "Structural design and engineering support for apartments, villas, housing developments, and high-rise residential projects—focused on efficiency, safety, and cost-effective solutions.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f2326e5-858a-4100-a180-816ef82ff31c-alphabuildengineering-com/assets/images/placeholder-5.png",
      linkText: "View Residential Buildings",
      href: "#"
    },
    {
      title: "Commercial & Mixed-Use Developments",
      description: "Engineering support for offices, retail spaces, hospitality, and mixed-use projects—addressing complex load paths, coordination, and multi-discipline integration.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f2326e5-858a-4100-a180-816ef82ff31c-alphabuildengineering-com/assets/images/placeholder-5.png",
      linkText: "View Commercial & Mixed-Use Developments",
      href: "#"
    },
    {
      title: "Industrial & Manufacturing Facilities",
      description: "Structural solutions for factories, plants, warehouses, and heavy industrial facilities—designed for operational loads, equipment integration, and constructability.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f2326e5-858a-4100-a180-816ef82ff31c-alphabuildengineering-com/assets/images/placeholder-5.png",
      linkText: "View Industrial & Manufacturing Facilities",
      href: "#"
    },
    {
      title: "Infrastructure & Utilities",
      description: "Engineering support for infrastructure-related structures and utilities—emphasizing durability, compliance, and long-term performance.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f2326e5-858a-4100-a180-816ef82ff31c-alphabuildengineering-com/assets/images/placeholder-5.png",
      linkText: "View Infrastructure & Utilities",
      href: "#"
    },
    {
      title: "PEB & Precast Structures",
      description: "Design, modeling, and detailing services for pre-engineered buildings and precast systems—focused on speed, standardization, and fabrication readiness.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f2326e5-858a-4100-a180-816ef82ff31c-alphabuildengineering-com/assets/images/placeholder-5.png",
      linkText: "View PEB & Precast Structures",
      href: "#"
    }
  ];

  return (
    <section className="py-[100px] bg-[#FFF9F7]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-[60px]">
          <h2 className="text-[48px] font-bold text-[#111111] leading-[1.2] mb-5">
            Industries We Support
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] max-w-[1320px] mx-auto">
          {/* First Row - 3 cards */}
          {industries.slice(0, 3).map((industry, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <IndustryCard {...industry} />
            </div>
          ))}

          {/* Second Row - 2 cards centered */}
          <div className="hidden lg:block"></div> {/* Spacer for grid alignment */}
          {industries.slice(3, 5).map((industry, index) => (
            <div key={index + 3} data-aos="fade-up" data-aos-delay={(index + 3) * 100}>
              <IndustryCard {...industry} />
            </div>
          ))}
          
          {/* Mobile/Tablet layout adjustment for last 2 items */}
          <div className="md:hidden lg:hidden">
            {industries.slice(3, 5).map((industry, index) => (
              <div key={index + 10} className="mb-[30px]" data-aos="fade-up">
                <IndustryCard {...industry} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}