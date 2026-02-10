"use client";

import Header from "@/components/sections/header";
import IndustriesHero from "@/components/sections/industries-hero";
import IndustrySpecificEngineering from "@/components/sections/industry-specific-engineering";
import IndustriesGrid from "@/components/sections/industries-grid";
import AlignmentMattersSection from "@/components/sections/industry-alignment";
import CTADiscovery from "@/components/sections/cta-discovery";
import HomeFooter from "@/components/sections/home-footer";

export default function Industries() {
  return (
    <>
      <Header />
      <IndustriesHero />
      <IndustrySpecificEngineering />
      <IndustriesGrid />
      <AlignmentMattersSection />
      <CTADiscovery />
      <HomeFooter />
    </>
  );
}
