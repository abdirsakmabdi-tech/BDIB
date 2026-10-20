import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorOverlayHero from "@/components/SectorOverlayHero";

export const metadata: Metadata = {
  title: "Export & Manufacturing | PDIB",
  description:
    "PDIB financing for processing, manufacturing, and trade that adds value and expands Puntland’s export capacity.",
};

export default function ExportAndManufacturingPage() {
  return (
    <main className="min-h-svh bg-white">
      <Header />
      <SectorOverlayHero
        title="Export & Manufacturing"
        src="/slides/export-manufacturing-hero.jpg"
        alt="Cargo ship AK Hamburg docked at a coastal pier with cranes and tugboat"
        objectClassName="object-cover object-center"
        tint="#0a2a3a"
        slides={[
          {
            body: (
              <>
                <p>
                  Helping producers scale trade and manufacturing for regional
                  and international markets.
                </p>
                <p className="font-semibold text-white">
                  PDIB finances processing, manufacturing, and trade that adds
                  value locally and expands Puntland&apos;s export capacity.
                </p>
              </>
            ),
            src: "/slides/export-manufacturing-hero.jpg",
            alt: "Cargo ship AK Hamburg docked at a coastal pier with cranes and tugboat",
            objectClassName: "object-cover object-center",
            imageLabel: "Garacad Port",
          },
          {
            heading: "Strategic objective",
            body: (
              <p>
                To strengthen Puntland&apos;s productive base by financing
                enterprises that turn raw materials into finished goods —
                creating jobs, raising export earnings, and building more
                competitive trade corridors.
              </p>
            ),
            src: "/slides/export-manufacturing-port.jpg",
            alt: "Cargo ships and cranes at a busy export port",
            objectClassName: "object-cover object-[center_40%]",
          },
        ]}
      />
    </main>
  );
}
