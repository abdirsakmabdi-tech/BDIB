import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";

export const metadata: Metadata = {
  title: "Mining & Natural Resources | PDIB",
  description:
    "PDIB supports the responsible development of Puntland’s mining and natural-resource sector — financing exploration, extraction, processing, and value-added activities.",
};

const intro =
  "Puntland has significant potential in mining and natural resources, including minerals, gemstones, salt, gypsum, limestone, construction materials, and other extractive resources.";

export default function MiningNaturalResourcesPage() {
  return (
    <main>
      <Header />
      <SectorHero
        src="/slides/mining-natural-resources.jpg"
        alt="Heavy machinery working in an open mining quarry"
        title="Mining & Natural Resources"
        intro={intro}
        objectClassName="object-cover object-[center_45%]"
      />

      <article className="bg-white px-6 pt-12 pb-24 sm:px-[6.5vw] sm:pt-16 sm:pb-32">
        <div className="max-w-2xl space-y-5 text-[16px] leading-[1.7] text-pdib-text sm:text-[17px]">
          <p>{intro}</p>
          <p>
            PDIB can support the responsible development of this sector by
            providing financing for <strong>exploration</strong>,{" "}
            <strong>extraction</strong>, <strong>processing</strong>, and{" "}
            <strong>value-added activities</strong>.
          </p>
          <p className="font-semibold text-pdib-title">Strategic Objective</p>
          <p>
            To promote the responsible and sustainable development of
            Puntland&apos;s mineral and natural-resource sector, while supporting{" "}
            <strong>local value addition</strong>,{" "}
            <strong>employment creation</strong>,{" "}
            <strong>economic diversification</strong>, and increased{" "}
            <strong>investment and export opportunities</strong>.
          </p>
        </div>
      </article>
    </main>
  );
}
