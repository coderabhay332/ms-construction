"use client";

import Header from "@/components/sections/header";
import HeroBreadcrumb from "@/components/sections/hero-breadcrumb";
import ToolsContent from "@/components/sections/tools-content";
import HomeFooter from "@/components/sections/home-footer";

export default function Tools() {
  return (
    <>
      <Header />
      <HeroBreadcrumb title="Tools" />
      <ToolsContent />
      <HomeFooter />
    </>
  );
}
