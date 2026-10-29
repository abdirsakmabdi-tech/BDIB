import Header from "@/components/Header";
// Swap these imports to restore the previous left-aligned carousel hero:
// import Hero from "@/components/Hero";
import Hero from "@/components/HeroSpotlight";
import WhoWeAre from "@/components/WhoWeAre";
import PartnersFeatured from "@/components/PartnersFeatured";
import WhatWeDo from "@/components/WhatWeDo";
import BuildingInfrastructure from "@/components/BuildingInfrastructure";
import TourismVideos from "@/components/TourismVideos";
import FishingVideos from "@/components/FishingVideos";
import AgricultureVideos from "@/components/AgricultureVideos";
import LivestockVideos from "@/components/LivestockVideos";
import AirportsShowcase from "@/components/AirportsShowcase";
import PortsShowcase from "@/components/PortsShowcase";
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
      </div>
      <div className="divide-y divide-black/10 border-t border-black/10">
        <TourismVideos />
        <FishingVideos />
        <AgricultureVideos />
        <LivestockVideos />
        <AirportsShowcase />
        <PortsShowcase />
      </div>
      <div className="divide-y divide-black/10 border-t border-black/5">
        <Team />
        <PartnersFeatured />
      </div>
    </main>
  );
}
