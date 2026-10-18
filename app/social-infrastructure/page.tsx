import type { Metadata } from "next";
import Header from "@/components/Header";
import SocialInfrastructureCarousel from "@/components/SocialInfrastructureCarousel";
import SectorOverlayHero from "@/components/SectorOverlayHero";

export const metadata: Metadata = {
  title: "Social Infrastructure | PDIB",
  description:
    "PDIB finances schools, health facilities, water, and community infrastructure that strengthen Puntland’s public services.",
};

export default function SocialInfrastructurePage() {
  return (
    <main className="min-h-svh bg-white">
      <Header />
      <SectorOverlayHero
        title="Social Infrastructure"
        src="/slides/social-infrastructure-hero.jpg"
        alt="An aerial view of a paved highway cutting through arid scrubland with a vehicle on the road"
        objectClassName="object-cover object-center"
        tint="#1a1a18"
        slides={[
          {
            heading: "Building the Foundations of Inclusive Growth",
            body: (
              <p>
                Strong communities depend on the places people use every day —
                schools, clinics, water systems, roads, and public facilities.
              </p>
            ),
          },
          {
            heading: "What PDIB finances",
            body: (
              <p>
                PDIB finances essential social infrastructure that expands public
                services, creates local jobs, and improves quality of life in
                urban and rural communities across Puntland.
              </p>
            ),
          },
        ]}
      />
      <SocialInfrastructureCarousel />
    </main>
  );
}
