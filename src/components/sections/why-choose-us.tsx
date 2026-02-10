import React from 'react';
import { Check } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    "Experienced engineers & skilled team",
    "Transparent costing",
    "Quality materials",
    "Dedicated supervision",
    "Timely project delivery",
  ];

  return (
    <section className="py-[100px] bg-white">
      <div className="container mx-auto max-w-[1200px] px-6">
        {/* Section Heading */}
        <div className="text-center mb-[50px]">
          <h2 className="text-[36px] font-bold text-[#001a33] leading-[1.3] mb-4">
            Why Choose Us
          </h2>
          <p className="text-[16px] text-[#555555] leading-[1.6] max-w-3xl mx-auto">
            Your trusted partner for reliable construction solutions with a focus on quality, transparency, and timely delivery.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-6 bg-[#FFF7F1] rounded-[5px] transition-all duration-300 hover:-translate-y-[5px]"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EE5E35] flex items-center justify-center mt-1">
                <Check className="text-white w-4 h-4" strokeWidth={3} />
              </div>
              <h3 className="text-[18px] font-semibold text-[#001a33] leading-[1.4] group-hover:text-[#EE5E35] transition-colors">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;