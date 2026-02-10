import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const services = [
  {
    title: "Structural Design & Analysis",
    subLabels: "RCC | Steel | Composite Structures",
    description: "Design and analysis of buildings and structures using international design codes. Our deliverables include calculations, drawings, and IFC packages suitable for approvals and construction.",
    link: "View Structural Design & Analysis",
    url: "#"
  },
  {
    title: "BIM & Structural Modeling",
    subLabels: "Revit | Tekla | Coordination Support",
    description: "Creation of coordinated structural BIM models to support design development, clash detection, and downstream detailing and construction workflows.",
    link: "View BIM & Structural Modeling",
    url: "#"
  },
  {
    title: "Shop Drawings & Detailing",
    subLabels: "Steel | Rebar | Precast",
    description: "Fabrication-ready shop drawings, bar bending schedules, and material take-offs prepared to meet fabricator and site requirements.",
    link: "View Shop Drawings & Detailing",
    url: "#"
  },
  {
    title: "Design Review & Proof Checking",
    subLabels: "Independent QA | Value Engineering| Proof Checking",
    description: "Third-party checking of designs, calculations, and drawings to verify code compliance, constructability, and optimization opportunities.",
    link: "View Design Review & Proof Checking",
    url: "#"
  },
  {
    title: "Project Engineering & Construction Support",
    subLabels: "RFIs | Coordination | Site Support",
    description: "Ongoing engineering support during construction, including RFIs, design clarifications, and coordination with site and fabrication teams.",
    link: "View Project Engineering & Construction Support",
    url: "#"
  },
  {
    title: "Structural Inspections & Audits",
    subLabels: "Assessment | Load Checks | Retrofit Support",
    description: "Technical assessments of existing structures, load capacity checks, and engineering recommendations for strengthening or reuse.",
    link: "View Structural Inspections & Audits",
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
            Structural Engineering Design
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