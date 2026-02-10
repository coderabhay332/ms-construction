"use client";

import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import WhyPartnerWithUs from "@/components/sections/why-partner-with-us";
import ServicesGrid from "@/components/sections/services-grid";
import DeliveryProcess from "@/components/sections/delivery-process";
import ProofPoints from "@/components/sections/proof-points";
import Testimonials from "@/components/sections/testimonials";
import HomeFooter from "@/components/sections/home-footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhyPartnerWithUs />
      <ServicesGrid />
      {/* <DeliveryProcess /> */}
      <ProofPoints />
      <Testimonials />
      <HomeFooter />
    </>
  );
}
