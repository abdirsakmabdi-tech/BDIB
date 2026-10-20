import type { Metadata } from "next";
import Header from "@/components/Header";
import AreasOfIntervention, {
  interventionAreas,
} from "@/components/AreasOfIntervention";
import SectorOverlayHero from "@/components/SectorOverlayHero";

export const metadata: Metadata = {
  title: "Priority Sectors | PDIB",
  description:
    "PDIB areas of intervention — priority sectors financing productive growth across Puntland.",
};

const objectBySector: Record<string, string> = {
  "/slides/hero-fishing.jpg": "object-cover object-[center_50%]",
  "/slides/hero-agriculture.jpg": "object-cover object-[center_45%]",
  "/slides/hero-education.jpg": "object-cover object-[center_55%]",
  "/slides/hero-livestock.jpg": "object-cover object-[center_55%]",
  "/slides/renewable-energy-windfarm.jpg": "object-cover object-[center_45%]",
  "/slides/hero-infrastructure.jpg": "object-cover object-[center_45%]",
  "/slides/export-manufacturing-port.jpg": "object-cover object-center",
  "/slides/digital-economy.jpg": "object-cover object-[center_40%]",
  "/slides/hero-health.jpg": "object-cover object-[center_35%]",
  "/slides/mining-natural-resources.jpg": "object-cover object-[center_45%]",
  "/slides/women-youth-led-business.jpg": "object-cover object-top",
  "/slides/hero-tourism.jpg": "object-cover object-center",
};

export default function PrioritySectorsPage() {
  const tourismFirst = [
    ...interventionAreas.filter((area) => area.href === "/tourism"),
    ...interventionAreas.filter((area) => area.href !== "/tourism"),
  ];
  const first = tourismFirst[0];

  return (
    <main className="min-h-svh bg-white">
      <Header />
      <SectorOverlayHero
        title="Priority Sectors"
        eyebrow="Our focus"
        src={first.src}
        alt={first.alt}
        objectClassName="object-cover object-center"
        tint="#0f2a18"
        slides={tourismFirst.map((area) => ({
          title: area.label,
          body: <p>{area.description}</p>,
          src: area.src,
          alt: area.alt,
          objectClassName:
            objectBySector[area.src] ?? "object-cover object-center",
        }))}
      />
      <AreasOfIntervention className="bg-white px-8 py-14 sm:px-14 sm:py-16 lg:px-24 lg:py-20" />
    </main>
  );
}
