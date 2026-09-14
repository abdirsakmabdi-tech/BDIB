import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";

export const metadata: Metadata = {
  title: "Agriculture Financing | PDIB",
  description:
    "PDIB financing for Puntland’s agriculture sector — crops, irrigation, and rural livelihoods.",
};

const intro =
  "Capital for crops, irrigation, and agribusinesses that strengthen food security and rural income.";

export default function AgriculturePage() {
  return (
    <main>
      <Header />
      <SectorHero
        src="/agriculture-hero.jpg"
        alt="Agricultural fields in Puntland"
        title="Agriculture Financing"
        intro={intro}
        objectClassName="object-cover object-[center_45%]"
      />

      <article className="bg-white px-6 pt-12 pb-24 sm:px-[6.5vw] sm:pt-16 sm:pb-32">
        <div className="max-w-2xl space-y-5 text-[16px] leading-[1.7] text-pdib-text sm:text-[17px]">
          <p>{intro}</p>
          <p className="font-semibold text-pdib-title">
            Agriculture is a cornerstone of Puntland&apos;s economy and rural
            livelihoods.
          </p>
          <p>
            PDIB provides <strong>access to finance</strong> so farmers,
            cooperatives, and agribusinesses can invest in productive land,
            irrigation, inputs, and markets through{" "}
            <strong>medium- and long-term financing</strong> and promotion of{" "}
            <strong>sustainable farming practices</strong>.
          </p>
        </div>
      </article>
    </main>
  );
}
