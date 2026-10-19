import type { Metadata } from "next";
import Header from "@/components/Header";
import AreasOfIntervention from "@/components/AreasOfIntervention";
import SectorOverlayHero from "@/components/SectorOverlayHero";

export const metadata: Metadata = {
  title: "Priority Sectors | PDIB",
  description:
    "PDIB areas of intervention — priority sectors financing productive growth across Puntland.",
};

export default function PrioritySectorsPage() {
  return (
    <main className="min-h-svh bg-white">
      <Header />
      <SectorOverlayHero
        title="Priority Sectors"
        eyebrow=""
        src="/priority-sectors-hero-v2.jpg"
        alt="Collage of priority sectors including mining, agriculture, livestock, infrastructure, solar, wind, ports, fisheries, and tourism"
        objectClassName="object-cover object-center"
        tint="#0f2a18"
        slides={[
          {
            body: (
              <p>
                PDIB finances the productive sectors that power Puntland’s growth
                — from fisheries and agriculture to energy, infrastructure, and
                tourism.
              </p>
            ),
          },
          {
            heading: "Where we intervene",
            body: (
              <p>
                Explore each sector below to see how targeted financing supports
                jobs, productivity, and inclusive economic development across
                Puntland.
              </p>
            ),
          },
        ]}
      />
      <AreasOfIntervention className="bg-white px-8 py-14 sm:px-14 sm:py-16 lg:px-24 lg:py-20" />
    </main>
  );
}
