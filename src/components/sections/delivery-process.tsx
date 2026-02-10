import React from 'react';
import { ArrowRight } from 'lucide-react';
import CardStack from '@/components/ui/card-stack';

const DeliveryProcess = () => {
  return (
    <section className="py-[100px] bg-gradient-to-br from-[#f8f9fa] via-[#fff7f1] to-[#f0f7ff] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-[80px] items-center">
          {/* Left Content */}
          <div className="lg:w-[40%] w-full">
            <h2 className="text-[36px] font-bold text-[#000000] leading-[1.3] mb-6">
              How We Deliver Projects
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#555555] mb-8 max-w-[450px]">
              Our Delivery Model Is Designed For Outsourcing Success. New Clients Are Onboarded Through A Clear, Guided Process With Defined Inputs, Timelines, And Communication Protocols.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#ED5A2D] text-white font-semibold text-[16px] rounded-[10px] transition-all duration-300 hover:translate-y-[-2px] shadow-lg group"
            >
              View Our Process
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right - Interactive Card Stack */}
          <div className="lg:w-[60%] w-full flex justify-center lg:justify-end">
            <CardStack />
          </div>
        </div>
      </div>

      {/* Background Decorative Overlay */}
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-5">
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f2326e5-858a-4100-a180-816ef82ff31c-alphabuildengineering-com/assets/icons/misc-3-9.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default DeliveryProcess;
