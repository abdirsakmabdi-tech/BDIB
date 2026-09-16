import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import PartnersFeatured from "@/components/PartnersFeatured";
import WhatWeDo from "@/components/WhatWeDo";
import BuildingInfrastructure from "@/components/BuildingInfrastructure";
import TourismImpact from "@/components/TourismImpact";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <BuildingInfrastructure />
      <TourismImpact />
      <Team />
      <PartnersFeatured />
    </main>
  );
}
