"use client";

import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import WhyPartnerWithUs from "@/components/sections/why-partner-with-us";
import ServicesGrid from "@/components/sections/services-grid";
import WhyChooseUs from "@/components/sections/why-choose-us";
import CTA from "@/components/sections/cta";
import DeliveryProcess from "@/components/sections/delivery-process";
import ProofPoints from "@/components/sections/proof-points";
import Testimonials from "@/components/sections/testimonials";
import HomeFooter from "@/components/sections/home-footer";

export default function Home() {
  return (
    <>
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <ProofPoints />
      <div id="about">
        <WhyPartnerWithUs />
      </div>
      <div id="services">
        <ServicesGrid />
      </div>
      <div id="packages">
        <WhyChooseUs />
      </div>
      <div id="contact">
        <CTA />
      </div>
      <div id="projects">
        <Testimonials />
      </div>

      {/* <DeliveryProcess /> */}

      <HomeFooter />
    </>
  );
}
