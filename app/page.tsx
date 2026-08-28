import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeDo from "@/components/WhatWeDo";
import BuildingInfrastructure from "@/components/BuildingInfrastructure";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <BuildingInfrastructure />
      <Team />
    </main>
  );
}
