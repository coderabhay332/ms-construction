"use client";

import Header from "@/components/sections/header";
import AboutHero from "@/components/sections/about-hero";
import AboutIntro from "@/components/sections/about-intro";
import CoreValues from "@/components/sections/core-values";
import WhyChooseUs from "@/components/sections/why-choose-us";
import TeamSection from "@/components/sections/team-section";
import CTABanner from "@/components/sections/cta-banner";
import HomeFooter from "@/components/sections/home-footer";

export default function AboutUs() {
  return (
    <>
      <Header />
      <AboutHero />
      <AboutIntro />
      <CoreValues />
      <WhyChooseUs />
      <TeamSection />
      <CTABanner />
      <HomeFooter />
    </>
  );
}
