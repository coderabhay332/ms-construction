import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    rating: 5,
    quote:
      "MS Construction delivered beyond expectations. Their structural expertise and proactive communication helped us complete our project safely, on time, and within budget.",
    name: "Ramesh Patel",
    title: "Managing Director",
  },
  {
    id: 2,
    rating: 5,
    quote:
      "Working with MS Construction is always seamless. Their attention to detail and practical approach to design make the construction process so much smoother.",
    name: "Anita Menon",
    title: "Principal Architect",
  },
  {
    id: 3,
    rating: 5,
    quote:
      "They made a complex structural project feel effortless. From the first meeting to final handover, MS Construction's team was transparent, reliable, and highly professional.",
    name: "Sanjay Rao",
    title: "Homeowner",
  },
  {
    id: 4,
    rating: 5,
    quote:
      "Their designs are not only strong on paper but also practical on-site. MS Construction's engineers understand both structural precision and real-world constraints.",
    name: "Vikas Sharma",
    title: "Project Head",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Simple carousel logic for responsiveness
  // In a real project with more items, a library like Embla or Swiper would be used.
  // Here we implement a basic controlled slider.

  return (
    <section className="bg-accent-gradient py-[100px] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-primary">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-quote"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
              </svg>
            </span>
            <span className="text-[14px] font-semibold text-secondary uppercase tracking-widest">
              Testimonials
            </span>
          </div>
          <h2 className="text-[36px] font-bold text-black leading-[1.2] tracking-tight">
            Hear From Our Happy Partners
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="flex transition-transform duration-500 ease-in-out gap-6 overflow-x-auto no-scrollbar md:grid md:grid-cols-3 md:overflow-visible">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div
                key={testimonial.id}
                className="min-w-[300px] md:min-w-0 bg-white p-8 rounded-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-border flex flex-col justify-between"
              >
                <div>
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-[#F0F7FF] rounded-full flex items-center justify-center mb-4">
                      <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f2326e5-858a-4100-a180-816ef82ff31c-alphabuildengineering-com/assets/icons/close-quote-1-11.png"
                        alt="quote"
                        width={24}
                        height={24}
                        className="opacity-40"
                      />
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill="#ED5A2D"
                          className="text-primary"
                        />
                      ))}
                      <span className="text-[14px] text-text-body ml-2">
                        ({testimonial.rating}) Rating
                      </span>
                    </div>
                  </div>
                  <p className="text-text-body text-[16px] leading-[1.6] mb-8 italic">
                    “{testimonial.quote}”
                  </p>
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-black mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-[14px] text-text-body font-medium">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Pagination Dots (Visual Only for basic setup) */}
          <div className="flex justify-center items-center gap-2 mt-12">
            {[0, 1, 2, 3].map((dot) => (
              <button
                key={dot}
                onClick={() => setActiveIndex(dot)}
                className={`w-[10px] h-[10px] rounded-full transition-all duration-300 ${activeIndex === dot
                    ? "bg-primary w-[24px]"
                    : "bg-border hover:bg-primary/50"
                  }`}
                aria-label={`Go to slide ${dot + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}