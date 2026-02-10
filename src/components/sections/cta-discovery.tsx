import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * CTADiscovery Component
 * 
 * This component clones the call-to-action section with the headline
 * "Need Structural Engineering Support for Your Industry?" and a prominent
 * orange "Book a discovery call" button.
 * 
 * Primary styling sources:
 * - High-level design: #F15A2B (Primary Orange), #111111 (Secondary Black)
 * - Typography: Urbanist (San Serif), H2 48px, Body 16px
 * - Spacing: 100px-120px vertical padding (design system)
 */
export default function CTADiscovery() {
  return (
    <section className="bg-background py-[100px] md:py-[120px] px-6">
      <div className="container mx-auto max-w-[1320px] text-center">
        {/* Section Heading */}
        <h2 className="text-[32px] md:text-[48px] font-bold text-secondary leading-[1.2] mb-5 tracking-tight">
          Need Structural Engineering <br className="hidden md:block" />
          Support for Your Industry?
        </h2>

        {/* Section Description */}
        <p className="text-[16px] md:text-[18px] text-[#555555] max-w-[760px] mx-auto mb-10 leading-relaxed">
          Explore your industry-specific page or share your project details to discuss tailored engineering support.
        </p>

        {/* Call to Action Button */}
        <div className="flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSegkbFagm8u6Z0hRgKIuYcWeyPd7oFCWpGGLRo9f5Z-b0r6-A/viewform"
            className="group relative inline-flex items-center justify-center bg-primary text-white font-semibold text-[16px] px-8 py-4 rounded-[50px] transition-all duration-300 hover:bg-[#d94e24] hover:-translate-y-1 industry-card-shadow"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book a discovery call
              <div className="relative overflow-hidden w-4 h-4">
                <ArrowRight 
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-6 absolute" 
                  strokeWidth={3}
                />
                <ArrowRight 
                  className="w-4 h-4 -translate-x-6 transition-transform duration-300 group-hover:translate-x-0 absolute" 
                  strokeWidth={3}
                />
              </div>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}