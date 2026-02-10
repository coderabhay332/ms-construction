import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    "Expertise and Experience",
    "Quality Craftsmanship",
    "Innovation and Efficiency",
    "Safety is Our Priority",
    "Tailored Solutions",
    "Transparent Communication",
  ];

  const stats = [
    { value: "15+", label: "YEARS OF EXPERIENCE" },
    { value: "500+", label: "PROJECTS COMPLETED" },
    { value: "100%", label: "CLIENT SATISFACTION" },
    { value: "250+", label: "SKILLED PROFESSIONALS" },
  ];

  return (
    <section className="bg-white">
      {/* Top Section: Why Choose Us Content */}
      <div className="container mx-auto px-4 py-[100px]">
        <div className="flex flex-col lg:flex-row gap-[50px] items-center">
          {/* Left Column: Image with Experience Badge */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[500px] w-full group">
              <Image
                src="https://zerototenx.com/wp-content/uploads/2025/12/xzypfi-1024x1024.jpg"
                alt="Construction Engineer Site Visit"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#FFB129] p-8 hidden md:block z-10">
                <div className="text-white">
                  <span className="text-5xl font-bold block leading-none">15+</span>
                  <span className="text-sm font-bold tracking-widest uppercase mt-2 block">
                    Years of <br /> Engineering Excellence
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text and Features */}
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <span className="accent-label text-[#FFB129] font-bold text-sm tracking-[2px] uppercase block mb-3">
                WHY CHOOSE US
              </span>
              <h2 className="text-[#002244] text-[40px] font-bold uppercase leading-[1.2] mb-6">
                Redefining the standards of engineering excellence
              </h2>
              <p className="text-[#666666] text-base leading-[1.6] mb-8">
                With a track record spanning over 15 years, MS Construction delivers unparalleled
                solutions in the construction and engineering industry. Our commitment to innovation
                and safety ensures that every project we undertake meets the highest international standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFB129] flex items-center justify-center">
                    <Check className="text-white w-4 h-4" strokeWidth={3} />
                  </div>
                  <span className="text-[#002244] font-semibold text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="/contact"
                className="btn-primary inline-flex bg-[#FFB129] hover:bg-[#002244] transition-all duration-300 text-white px-[35px] py-[15px] font-bold uppercase text-sm tracking-widest"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Counter/Statistics */}
      <div className="bg-[#002244] py-[80px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-[#FFB129] text-5xl md:text-6xl font-bold mb-3 transition-transform duration-300 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="text-white text-xs md:text-sm font-bold tracking-[2px] uppercase opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;