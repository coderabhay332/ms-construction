import React from 'react';
import Image from 'next/image';

const CoreValues = () => {
  const values = [
    {
      title: "Integrity",
      description: "We uphold the highest standards of integrity in all of our actions, ensuring transparency and honesty in every project.",
      icon: "https://alphabuildengineering.com/wp-content/uploads/2023/12/integrity-icon.svg",
    },
    {
      title: "Excellence",
      description: "We are committed to delivering excellence in everything we do, from engineering design to construction execution.",
      icon: "https://alphabuildengineering.com/wp-content/uploads/2023/12/excellence-icon.svg",
    },
    {
      title: "Innovation",
      description: "We embrace innovation and leverage the latest technologies to provide cutting-edge solutions for our clients.",
      icon: "https://alphabuildengineering.com/wp-content/uploads/2023/12/innovation-icon.svg",
    },
  ];

  return (
    <section className="section-padding bg-white" id="core-values">
      <div className="container mx-auto px-4 md:px-0 max-w-[1140px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="accent-label block mb-2 text-[#FFB129] font-bold uppercase tracking-[2px] text-sm">
            Building Future
          </span>
          <h2 className="text-[#002244] text-3xl md:text-4xl font-bold uppercase leading-tight">
            Our Core Values
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-[#ffffff] border border-[#EEEEEE] p-10 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0px_10px_30px_rgba(0,0,0,0.05)] overflow-hidden"
            >
              {/* Highlight Border Top on Hover */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#FFB129] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Icon Container */}
              <div className="mb-8 w-[70px] h-[70px] flex items-center justify-center bg-[#F8F9FA] group-hover:bg-[#FFB129] transition-colors duration-300">
                <div className="relative w-10 h-10">
                  <Image
                    src={value.icon}
                    alt={`${value.title} icon`}
                    fill
                    className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-[#002244] text-xl font-semibold mb-4 capitalize group-hover:text-[#FFB129] transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-[#666666] text-base leading-relaxed mb-0">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .section-padding {
          padding: 100px 0;
        }
        .container {
          max-width: 1140px;
          margin-left: auto;
          margin-right: auto;
        }
        .accent-label {
          font-family: var(--font-sans);
        }
      `}</style>
    </section>
  );
};

export default CoreValues;