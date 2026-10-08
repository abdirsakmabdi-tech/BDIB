import type { Metadata } from "next";
import SplitPageLayout from "@/components/SplitPageLayout";
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
    <SplitPageLayout
      title="Priority Sectors"
      intro={intro}
      eyebrow=""
      heroSrc="/priority-sectors-hero-v2.jpg"
      heroAlt="Collage of priority sectors including mining, agriculture, livestock, infrastructure, solar, wind, ports, fisheries, and tourism"
      heroObjectClassName="object-cover object-center"
    >
      <AreasOfIntervention className="bg-white px-8 py-14 sm:px-12 sm:py-16 lg:px-14 xl:px-16" />
    </SplitPageLayout>
  );
}
