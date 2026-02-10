import React from 'react';
import Image from 'next/image';

/**
 * ContactForm Component
 * Clones the "Lets Work Together" section with a two-column layout:
 * Left: Contact Form (Name, Email, Subject, Message)
 * Right: Vertical Office Image
 */
const ContactForm: React.FC = () => {
  return (
    <section className="bg-white py-[100px] font-sans">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col lg:flex-row gap-[30px] items-start">
          
          {/* Left Column: Form Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="flex items-center justify-center">
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-black"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </span>
                <span className="text-[14px] font-semibold uppercase tracking-wider text-black">
                  CONTACT US
                </span>
              </div>
              
              <h2 className="text-[42px] font-bold text-black mb-6 leading-[1.3] letter-spacing-[-0.01em]">
                Lets Work Together
              </h2>
              
              <p className="text-[16px] text-[#666666] leading-[1.6] mb-8">
                Ready To Take Your Business To The Next Level? Contact Us Today For A Free Consultation. Together, We&apos;ll Create A Digital Marketing Strategy That Delivers Real Results.
              </p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-[15px] font-medium text-black mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-[#f3f4f6] border-none rounded-[12px] px-4 py-3 text-[16px] focus:ring-2 focus:ring-[#f15a2b] outline-none transition-all"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[15px] font-medium text-black mb-2">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#f3f4f6] border-none rounded-[12px] px-4 py-3 text-[16px] focus:ring-2 focus:ring-[#f15a2b] outline-none transition-all"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-[15px] font-medium text-black mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-[#f3f4f6] border-none rounded-[12px] px-4 py-3 text-[16px] focus:ring-2 focus:ring-[#f15a2b] outline-none transition-all"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[15px] font-medium text-black mb-2">
                  Your message (optional)
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full bg-[#f3f4f6] border-none rounded-[12px] px-4 py-3 text-[16px] focus:ring-2 focus:ring-[#f15a2b] outline-none transition-all resize-none"
                  placeholder=""
                />
              </div>

              <button
                type="submit"
                className="bg-[#f15a2b] text-white font-semibold text-[16px] px-10 py-[14px] rounded-full transition-all duration-300 hover:transform hover:-translate-y-1 hover:brightness-95 focus:outline-none"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Column: Imagery */}
          <div className="w-full lg:w-1/2 h-full lg:min-h-[700px]">
            <div className="relative w-full h-full rounded-[20px] overflow-hidden min-h-[400px] lg:min-h-[750px]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1f2326e5-858a-4100-a180-816ef82ff31c-alphabuildengineering-com/assets/images/contact4-image-4.png"
                alt="Modern office collaboration"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactForm;