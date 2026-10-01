import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";
import PageContent, { PageBody } from "@/components/PageContent";

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

      <PageContent narrow>
        <PageBody>
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
        </PageBody>
      </PageContent>
    </main>
  );
}
