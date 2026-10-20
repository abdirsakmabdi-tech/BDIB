import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorOverlayHero from "@/components/SectorOverlayHero";

export const metadata: Metadata = {
  title: "Social Infrastructure | PDIB",
  description:
    "PDIB finances schools, health facilities, water, and community infrastructure that strengthen Puntland’s public services.",
};

const focusAreas = [
  {
    name: "Roads Infrastructure",
    src: "/slides/infra-roads.jpg",
    alt: "An aerial view of a paved road cutting through arid scrubland",
    objectClassName: "object-cover object-center",
    body: "PDIB finances road networks that connect towns, markets, and rural communities — expanding access to services and enabling trade across Puntland.",
  },
  {
    name: "Bridges and Culverts",
    src: "/slides/infra-bridges.jpg",
    alt: "A concrete bridge spanning a dry riverbed toward a city skyline",
    objectClassName: "object-cover object-[center_45%]",
    body: "Bridges and culverts keep people and goods moving through all seasons. PDIB supports crossings that link communities and strengthen regional mobility.",
  },
  {
    name: "Ports",
    heading: "Bosaso Port",
    src: "/slides/infra-port-bosaso.jpg",
    alt: "Aerial view of Bosaso Port harbor and vessels",
    objectClassName: "object-cover object-center",
    body: "Bosaso Port anchors trade on the Gulf of Aden. PDIB finances harbor and logistics assets that expand export capacity and coastal livelihoods.",
  },
  {
    name: "Ports",
    heading: "Garacad Port",
    src: "/slides/infra-port-garacad.jpg",
    alt: "Aerial view of Garacad Port pier, cargo ship, and coastal infrastructure",
    objectClassName: "object-cover object-center",
    body: "Garacad Port strengthens Puntland’s maritime trade corridor. PDIB supports port infrastructure that grows commerce and coastal enterprise.",
  },
  {
    name: "Airports",
    src: "/slides/infra-airports.jpg",
    alt: "Aerial view representing airport infrastructure in Puntland",
    objectClassName: "object-cover object-center",
    body: "Airports connect Puntland to regional and international routes. PDIB supports aviation infrastructure that improves access, commerce, and passenger travel.",
  },
] as const;

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
            title: "Social Infrastructure",
            heading: "Building the Foundations of Inclusive Growth",
            body: (
              <>
                <p>
                  Strong communities depend on the places people use every day —
                  schools, clinics, water systems, roads, and public facilities.
                </p>
                <p className="font-semibold text-white">
                  PDIB finances essential social infrastructure that expands
                  public services, creates local jobs, and improves quality of
                  life across Puntland.
                </p>
              </>
            ),
            src: "/slides/social-infrastructure-hero.jpg",
            alt: "An aerial view of a paved highway cutting through arid scrubland with a vehicle on the road",
            objectClassName: "object-cover object-center",
          },
          ...focusAreas.map((area) => ({
            title: area.name,
            heading: "heading" in area ? area.heading : undefined,
            body: <p>{area.body}</p>,
            src: area.src,
            alt: area.alt,
            objectClassName: area.objectClassName,
          })),
        ]}
      />
    </main>
  );
}
