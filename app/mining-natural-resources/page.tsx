import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";

export const metadata: Metadata = {
  title: "Mining & Natural Resources | PDIB",
  description:
    "PDIB finances responsible mining, quarrying, and natural resource ventures that create jobs and strengthen Puntland’s productive economy.",
};

const intro =
  "Financing for responsible mining, quarrying, and natural resource ventures that create jobs and strengthen Puntland’s productive economy.";

export default function MiningNaturalResourcesPage() {
  return (
    <main>
      <Header />
      <SectorHero
        src="/slides/mining-natural-resources.jpg"
        alt="Heavy machinery working in an open mining quarry"
        title="Mining & Natural Resources"
        intro={intro}
      />

      <article className="bg-white px-6 pt-12 pb-24 sm:px-[6.5vw] sm:pt-16 sm:pb-32">
        <div className="max-w-2xl space-y-5 text-[16px] leading-[1.7] text-pdib-text sm:text-[17px]">
          <p>{intro}</p>
          <p className="font-semibold text-pdib-title">
            Puntland&apos;s mineral and natural resource potential can drive
            industrial growth when developed responsibly.
          </p>
          <p>
            PDIB supports enterprises and projects across extraction, processing,
            and related value chains — helping unlock investment while promoting
            sustainable practices, local employment, and long-term economic
            contribution.
          </p>
        </div>
      </article>
    </main>
  );
}
