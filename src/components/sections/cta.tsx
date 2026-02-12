import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="bg-[#FFF7F1] py-[100px]">
            <div className="container mx-auto max-w-[1200px] px-6">
                <div className="text-center">
                    {/* Main Heading */}
                    <h2 className="text-[36px] font-bold text-[#001a33] leading-[1.3] mb-6">
                        Planning to build or renovate?
                    </h2>

                    <p className="text-[18px] text-[#555555] leading-[1.6] mb-10 max-w-2xl mx-auto">
                        Get in touch with our expert team to discuss your project requirements and receive a detailed consultation.
                    </p>

                    {/* CTA Button */}
                    <div className="mb-12">
                        <Link
                            href="https://zerototenx.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#EE5E35] hover:bg-[#001a33] text-white px-[40px] py-[18px] rounded-[5px] font-semibold text-[16px] transition-all duration-300 hover:-translate-y-[2px] shadow-md hover:shadow-lg"
                        >
                            <span className="text-xl">👉</span>
                            Contact Us Today
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Contact Information */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-[#DDD]">
                        <div className="flex items-center gap-3">
                            <div className="text-2xl">📞</div>
                            <div className="text-left">
                                <div className="text-[14px] text-[#555555] uppercase tracking-wide">Call Us</div>
                                <div className="font-bold text-[16px] text-[#001a33]">+91 9609806922</div>
                            </div>
                        </div>

                        <div className="hidden sm:block w-px h-12 bg-[#DDD]"></div>

                        <div className="flex items-center gap-3">
                            <div className="text-2xl">✉️</div>
                            <div className="text-left">
                                <div className="text-[14px] text-[#555555] uppercase tracking-wide">Email Us</div>
                                <div className="font-bold text-[16px] text-[#001a33]">info@msconstruction.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
