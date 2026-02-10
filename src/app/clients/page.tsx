"use client";

import Header from "@/components/sections/header";
import HeroBreadcrumb from "@/components/sections/hero-breadcrumb";
import ArchitecturalFirms from "@/components/sections/architectural-firms";
import EngineeringConsultancies from "@/components/sections/engineering-consultancies";
import ConstructionEPC from "@/components/sections/construction-epc";
import DevelopersRealEstate from "@/components/sections/developers-real-estate";
import IndustrialManufacturers from "@/components/sections/industrial-manufacturers";
import SteelFabricatorsSection from "@/components/sections/steel-fabricators";
import PublicSectorSection from "@/components/sections/public-sector";
import PrivateClients from "@/components/sections/private-clients";
import HomeFooter from "@/components/sections/home-footer";

export default function Clients() {
  return (
    <>
      <Header />
      <HeroBreadcrumb title="Clients" />
      <ArchitecturalFirms />
      <EngineeringConsultancies />
      <ConstructionEPC />
      <DevelopersRealEstate />
      <IndustrialManufacturers />
      <SteelFabricatorsSection />
      <PublicSectorSection />
      <PrivateClients />
      <HomeFooter />
    </>
  );
}
