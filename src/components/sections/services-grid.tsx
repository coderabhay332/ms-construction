import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const services = [
  {
    title: "Residential Construction",
    subLabels: "RCC | Steel | Composite Structures",
    description: "We build high-quality homes with modern amenities, durable materials, and thoughtful layouts. From foundation to finishing, we ensure every detail meets our quality standards.",
    link: "View Structural Design & Analysis",
    url: "#"
  },
  {
    title: "Commercial Construction",
    subLabels: "Revit | Tekla | Coordination Support",
    description: "We construct commercial buildings that are functional, durable, and aesthetically appealing. Our projects include retail spaces, offices, and mixed-use developments designed to support business success.",
    link: "View BIM & Structural Modeling",
    url: "#"
  },
  {
    title: "Turnkey Projects",
    subLabels: "Steel | Rebar | Precast",
    description: "We offer complete turnkey solutions, managing projects from initial concept through design, procurement, construction, and final handover. Our integrated approach ensures seamless coordination, timely delivery, and consistent quality across all project phases.",
    link: "View Turnkey Projects",
    url: "#"
  },
  {
    title: "Renovation & Remodeling",
    subLabels: "Independent QA | Value Engineering| Proof Checking",
    description: "Transform existing spaces with our renovation and remodeling services. We handle everything from planning and design to construction and finishing, ensuring minimal disruption and maximum impact. Our team specializes in modern upgrades, space optimization, and quality renovations that enhance functionality and aesthetics.",
    link: "View Renovation & Remodeling",
    url: "#"
  },
  {
    title: "Interior & Finishing Works",
    subLabels: "RFIs | Coordination | Site Support",
    description: "We provide comprehensive interior design and finishing services that bring spaces to life. From conceptual design and material selection to installation and final touches, our team delivers high-quality finishes that match your vision. Our expertise includes drywall, painting, flooring, tiling, ceiling work, and complete interior fit-outs for residential and commercial projects.",
    link: "View Interior & Finishing Works",
    url: "#"
  },
  {
    title: "Project Engineering & Construction Support",
    subLabels: "Assessment | Load Checks | Retrofit Support",
    description: "Ongoing engineering support during construction, including RFIs, design clarifications, and coordination with site and fabrication teams.",
    link: "View Project Engineering & Construction Support",
    url: "#"
  },

];

const ServicesGrid = () => {
  return (
    <section className="bg-[#FFF7F1] py-[100px]">
      <div className="container mx-auto max-w-[1200px] px-6">
        {/* Section Heading */}
        <div className="text-center mb-[50px]">
          <h2 className="text-[36px] font-bold text-[#001a33] leading-[1.3] mb-0">
                Services Preview
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group flex flex-col h-full bg-[#FFF7F1] rounded-[5px] overflow-hidden transition-all duration-300 hover:-translate-y-[5px]"
            >
              {/* Image Placeholder */}
              <div className="service-card-image relative w-full aspect-[16/10] bg-[#CED4DA] flex items-center justify-center overflow-hidden">
                <Image
                  src="https://alphabuildengineering.com/wp-content/uploads/2026/02/Infrastructure-Utilities-768x512.webp"
                  alt={service.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="service-card-content flex-grow flex flex-col p-[30px] bg-[#FFF7F1] border-t-0">
                <h3 className="text-[20px] font-semibold text-[#001a33] leading-[1.4] mb-3 group-hover:text-[#EE5E35] transition-colors">
                  {service.title}
                </h3>

                <p className="text-[14px] font-bold text-[#001a33] opacity-80 mb-4 uppercase tracking-tight">
                  {service.subLabels}
                </p>

                <p className="text-[16px] text-[#555555] leading-[1.6] mb-6 flex-grow">
                  {service.description}
                </p>

                <div className="mt-auto">
                  <a
                    href={service.url}
                    className="inline-flex items-center text-[16px] font-semibold text-[#EE5E35] hover:opacity-80 transition-opacity gap-2"
                  >
                    {service.link}
                    <ExternalLink size={16} className="inline-block" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;