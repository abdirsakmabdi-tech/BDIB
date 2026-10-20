import Header from "@/components/Header";
// Swap these imports to restore the previous left-aligned carousel hero:
// import Hero from "@/components/Hero";
import Hero from "@/components/HeroSpotlight";
import WhoWeAre from "@/components/WhoWeAre";
import PartnersFeatured from "@/components/PartnersFeatured";
import WhatWeDo from "@/components/WhatWeDo";
import BuildingInfrastructure from "@/components/BuildingInfrastructure";
import DestinationMotion from "@/components/DestinationMotion";
import LivestockInvestment from "@/components/LivestockInvestment";
import PresentPartnership from "@/components/PresentPartnership";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <div className="divide-y divide-black/10 border-t border-black/10">
        <WhoWeAre />
        <WhatWeDo />
        <BuildingInfrastructure />
        <DestinationMotion />
        <LivestockInvestment />
        <PresentPartnership />
        <Team />
        <PartnersFeatured />
      </div>
    </main>
  );
}
