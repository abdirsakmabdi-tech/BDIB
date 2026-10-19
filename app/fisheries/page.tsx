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
                <p className="font-semibold text-white">
                  Puntland has a 1,600km coastline with immense untapped
                  potential.
                </p>
                <p>
                  PDIB develops the coastal fisheries sector through{" "}
                  <strong>access to finance</strong> and promotion of{" "}
                  <strong>sustainable practices</strong> across the blue
                  economy.
                </p>
              </>
            ),
            src: "/slides/fisheries-hero.jpg",
            alt: "A fisherman in a small blue boat on calm seas surrounded by seagulls",
            objectClassName: "object-cover object-[42%_58%]",
          },
          {
            body: (
              <p>
                Small-scale fishing fleets are the backbone of Puntland&apos;s
                coastal economy — providing jobs, food security, and trade along
                the Horn of Africa shoreline.
              </p>
            ),
            src: "/slides/fisheries-boats.jpg",
            alt: "Fishermen gathered in wooden boats on calm turquoise water",
            objectClassName: "object-cover object-center",
          },
          {
            body: (
              <p>
                Clear coastal waters and productive fishing grounds offer strong
                potential for sustainable catch, cold-chain investment, and
                blue-economy growth.
              </p>
            ),
            src: "/slides/fisheries-shallow.jpg",
            alt: "Aerial view of a fishing boat in shallow turquoise water near a green shoreline",
            objectClassName: "object-cover object-center",
          },
          {
            body: (
              <p>
                PDIB finances boats, gear, processing, and market access so
                coastal communities can turn daily catch into lasting
                livelihoods.
              </p>
            ),
            src: "/slides/fisheries-landing.jpg",
            alt: "A fisherman standing in turquoise water holding a fresh catch beside his boat",
            objectClassName: "object-cover object-[center_40%]",
          },
        ]}
      />
    </main>
  );
}
