import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorOverlayHero from "@/components/SectorOverlayHero";

export const metadata: Metadata = {
  title: "Fisheries & the Blue Economy | PDIB",
  description:
    "PDIB financing for Puntland’s fisheries and blue economy — boats, cold chain, processing, and coastal livelihoods.",
};

export default function FisheriesPage() {
  return (
    <main className="min-h-svh bg-white">
      <Header />
      <SectorOverlayHero
        title="Fisheries & the Blue Economy"
        src="/slides/fisheries-hero.jpg"
        alt="A fisherman in a small blue boat on calm seas surrounded by seagulls"
        objectClassName="object-cover object-[42%_58%]"
        tint="#043047"
        slides={[
          {
            body: (
              <>
                <p>
                  Financing for boats, cold chain, processing, and coastal
                  livelihoods along Puntland’s coastline.
                </p>
                <p className="font-semibold text-white">
                  Puntland has a 1,600km coastline with immense untapped
                  potential.
                </p>
              </>
            ),
          },
          {
            heading: "How PDIB supports the Blue Economy",
            body: (
              <p>
                PDIB develops the coastal fisheries sector through{" "}
                <strong>access to finance</strong> and promotion of{" "}
                <strong>sustainable practices</strong> across the blue economy.
              </p>
            ),
          },
        ]}
      />
    </main>
  );
}
