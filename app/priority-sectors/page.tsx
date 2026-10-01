import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";
import AreasOfIntervention from "@/components/AreasOfIntervention";

export const metadata: Metadata = {
  title: "Priority Sectors | PDIB",
  description:
    "PDIB areas of intervention — priority sectors financing productive growth across Puntland.",
};

const intro =
  "PDIB finances the productive sectors that power Puntland’s growth — from fisheries and agriculture to energy, infrastructure, and tourism.";

export default function PrioritySectorsPage() {
  return (
    <main>
      <Header />
      <SectorHero
        src="/priority-sectors-hero-v2.jpg"
        alt="Collage of priority sectors including mining, agriculture, livestock, infrastructure, solar, wind, ports, fisheries, and tourism"
        title="Priority Sectors"
        intro={intro}
        eyebrow=""
        objectClassName="object-cover object-center"
      />
      <AreasOfIntervention />
    </main>
  );
}
