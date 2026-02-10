"use client";

import Header from "@/components/sections/header";
import HeroBreadcrumb from "@/components/sections/hero-breadcrumb";
import ContactInfoCards from "@/components/sections/contact-info-cards";
import ContactForm from "@/components/sections/contact-form";
import MapSection from "@/components/sections/map";
import HomeFooter from "@/components/sections/home-footer";

export default function ContactUs() {
  return (
    <>
      <Header />
      <HeroBreadcrumb title="Contact Us" />
      <ContactInfoCards />
      <ContactForm />
      <MapSection />
      <HomeFooter />
    </>
  );
}
