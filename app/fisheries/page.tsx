import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";
import PageContent, { PageBody } from "@/components/PageContent";

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
        src="/slides/fisheries-catch.jpg"
        alt="Fishermen carrying a large shark along a Puntland beach with boats offshore"
        title="Fisheries & the Blue Economy"
        intro={intro}
        objectClassName="object-cover object-[center_50%]"
      />

      <PageContent narrow>
        <PageBody>
          <p>{intro}</p>
          <p className="font-semibold text-pdib-title">
            Puntland has a 1,600km coastline with immense untapped potential.
          </p>
          <p>
            PDIB develops the coastal fisheries sector through{" "}
            <strong>access to finance</strong> and promotion of{" "}
            <strong>sustainable practices</strong> across the blue economy.
          </p>
        </PageBody>
      </PageContent>
    </main>
  );
}
