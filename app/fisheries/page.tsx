import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";

export const metadata: Metadata = {
  title: "Fisheries & the Blue Economy | PDIB",
  description:
    "PDIB financing for Puntland’s fisheries and blue economy — boats, cold chain, processing, and coastal livelihoods.",
};

const intro =
  "Financing for boats, cold chain, processing, and coastal livelihoods along Puntland’s coastline.";

export default function FisheriesPage() {
  return (
    <main>
      <Header />
      <SectorHero
        src="/fisheries-hero.jpg"
        alt="A fisherman holding a freshly caught fish at sunset over coastal waters"
        title="Fisheries & the Blue Economy"
        intro={intro}
        objectClassName="object-cover object-[center_45%]"
      />

      <article className="bg-white px-6 pt-12 pb-24 sm:px-[6.5vw] sm:pt-16 sm:pb-32">
        <div className="max-w-2xl space-y-5 text-[16px] leading-[1.7] text-pdib-text sm:text-[17px]">
          <p>{intro}</p>
          <p className="font-semibold text-pdib-title">
            Puntland has a 1,600km coastline with immense untapped potential.
          </p>
          <p>
            PDIB develops the coastal fisheries sector through{" "}
            <strong>access to finance</strong> and promotion of{" "}
            <strong>sustainable practices</strong> across the blue economy.
          </p>
        </div>
      </article>
    </main>
  );
}
