'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

/**
 * HeroSection Component
 * 
 * Features:
 * - Left: Hero image with headline overlay and stats
 * - Right: "Book Free Consultation" form card
 * 
 * Theme: Light with Safety Orange accents
 */
const HeroSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Bengaluru'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to Google Form with pre-filled data
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSegkbFagm8u6Z0hRgKIuYcWeyPd7oFCWpGGLRo9f5Z-b0r6-A/viewform?usp=send_form', '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8f9fa] to-white pt-[120px] pb-[80px] lg:pt-[140px] lg:pb-[100px]">
      <div className="container relative mx-auto px-4 lg:px-8 max-w-[1400px]">

        {/* Full-width Hero Image Container */}
        <div className="relative w-full">
          <div className="relative rounded-[16px] overflow-hidden shadow-2xl min-h-[500px] lg:min-h-[550px]">
            {/* Hero Image - Full Width */}
            <Image
              src="/hero.webp"
              alt="Happy family with their dream home"
              width={1800}
              height={1000}
              className="w-full h-full object-cover"
              priority
            />

            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

            {/* Text Overlay - Left Side */}
            <div className="absolute inset-[-3%] flex flex-col justify-center px-8 md:px-12 lg:px-16">
              <div className="max-w-[500px]">
                <h1 className="text-[40px] md:text-[40px] lg:text-[40px] font-bold leading-[1.1] mb-4">
                  <span className="text-[#ED5A2D]">Building Quality Homes</span>
                </h1>

             

                {/* Stats Badges */}

              </div>
              <div className="max-w-[500px]">
                   <h1 className="text-[25px] md:text-[25px] lg:text-[25px] font-bold leading-[1.2] mb-4">
                  <span className="text-white">We deliver residential and commercial construction projects with quality workmanship, transparent pricing, and on-time delivery.</span>
                </h1>
              </div>
            </div>

            {/* Form Card - Positioned on Right Side (Overlay) */}
            <div className="absolute top-1/2 -translate-y-1/2 right-10 lg:right-4 hidden lg:block w-[380px]">
              <div className="bg-white rounded-[16px] shadow-2xl p-6 md:p-8 border border-gray-100">
                <h2 className="text-[20px] md:text-[24px] font-bold text-black mb-6">
                  Talk to Our Expert
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-[8px] text-[16px] focus:outline-none focus:border-[#ed5a2d] focus:ring-1 focus:ring-[#ed5a2d] transition-colors"
                      required
                    />
                  </div>

                  {/* Phone Input with Country Code */}
                  <div className="flex gap-2">
                    <div className="flex items-center gap-2 px-3 py-3 border border-gray-300 rounded-[8px] bg-gray-50 min-w-[100px]">
                      <span className="text-[20px]">🇮🇳</span>
                      <span className="text-[16px] text-gray-700 font-medium">+91</span>
                    </div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-[8px] text-[16px] focus:outline-none focus:border-[#ed5a2d] focus:ring-1 focus:ring-[#ed5a2d] transition-colors"
                      required
                      pattern="[0-9]{10}"
                      maxLength={10}
                    />
                  </div>

                  {/* City Dropdown */}
                  <div>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-[8px] text-[16px] focus:outline-none focus:border-[#ed5a2d] focus:ring-1 focus:ring-[#ed5a2d] transition-colors bg-white appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1rem center'
                      }}
                    >
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Pune">Pune</option>
                      <option value="Kolkata">Kolkata</option>
                      <option value="Ahmedabad">Ahmedabad</option>
                      <option value="Jaipur">Jaipur</option>
                      <option value="Lucknow">Lucknow</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#ed5a2d] text-white font-semibold text-[16px] px-6 py-4 rounded-[8px] hover:bg-[#d44a20] transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                  >
                    Book Free Consultation
                  </button>

                  {/* Privacy Text */}
                  <p className="text-[12px] text-gray-500 text-center leading-relaxed">
                    By submitting, you agree to our privacy policy and consent to us contacting you.
                  </p>
                </form>
              </div>
            </div>

          </div>

          {/* Mobile Form - Below Image */}
          <div className="lg:hidden mt-8">
            <div className="bg-white rounded-[16px] shadow-2xl p-6 md:p-8 border border-gray-100">
              <h2 className="text-[20px] md:text-[24px] font-bold text-black mb-6">
                Talk to Our Expert
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-[8px] text-[16px] focus:outline-none focus:border-[#ed5a2d] focus:ring-1 focus:ring-[#ed5a2d] transition-colors"
                    required
                  />
                </div>

                {/* Phone Input with Country Code */}
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 px-3 py-3 border border-gray-300 rounded-[8px] bg-gray-50 min-w-[100px]">
                    <span className="text-[20px]">🇮🇳</span>
                    <span className="text-[16px] text-gray-700 font-medium">+91</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-[8px] text-[16px] focus:outline-none focus:border-[#ed5a2d] focus:ring-1 focus:ring-[#ed5a2d] transition-colors"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                  />
                </div>

                {/* City Dropdown */}
                <div>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-[8px] text-[16px] focus:outline-none focus:border-[#ed5a2d] focus:ring-1 focus:ring-[#ed5a2d] transition-colors bg-white appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center'
                    }}
                  >
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Pune">Pune</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Lucknow">Lucknow</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#ed5a2d] text-white font-semibold text-[16px] px-6 py-4 rounded-[8px] hover:bg-[#d44a20] transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                >
                  Book Free Consultation
                </button>

                {/* Privacy Text */}
                <p className="text-[12px] text-gray-500 text-center leading-relaxed">
                  By submitting, you agree to our privacy policy and consent to us contacting you.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;