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
import InfrastructureVideos from "@/components/InfrastructureVideos";
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
      <TourismVideos />
      <FishingVideos />
      <AgricultureVideos />
      <LivestockVideos />
      <InfrastructureVideos />
      <div className="divide-y divide-black/10 border-t border-black/5">
        <Team />
        <PartnersFeatured />
      </div>
    </main>
  );
}
