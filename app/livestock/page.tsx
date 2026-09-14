import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";

export const metadata: Metadata = {
  title: "Livestock Sector | PDIB",
  description:
    "Livestock is the backbone of Puntland’s economy. PDIB offers specialized financial products for livestock farmers.",
};

const intro =
  "Specialized finance for pastoralists and livestock value chains that anchor Puntland’s economy.";

export default function LivestockPage() {
  return (
    <main>
      <Header />
      <SectorHero
        src="/livestock-hero.jpg"
        alt="Livestock grazing in Puntland"
        title="Livestock Financing"
        intro={intro}
      />

      <article className="bg-white px-6 pt-12 pb-24 sm:px-[6.5vw] sm:pt-16 sm:pb-32">
        <div className="max-w-2xl space-y-5 text-[16px] leading-[1.7] text-pdib-text sm:text-[17px]">
          <p>{intro}</p>
          <p className="font-semibold text-pdib-title">
            Livestock is the backbone of Puntland&apos;s economy, engaging 60–65%
            of the population.
          </p>
          <p>
            PDIB strengthens this economic backbone by offering{" "}
            <strong>specialized financial products</strong> to livestock farmers
            and related value chains.
          </p>
        </div>
      </article>
    </main>
  );
}
