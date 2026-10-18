import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorOverlayHero from "@/components/SectorOverlayHero";

export const metadata: Metadata = {
  title: "Mining & Natural Resources | PDIB",
  description:
    "PDIB supports the responsible development of Puntland’s mining and natural-resource sector — financing exploration, extraction, processing, and value-added activities.",
};

export default function MiningNaturalResourcesPage() {
  return (
    <main className="min-h-svh bg-white">
      <Header />
      <SectorOverlayHero
        title="Mining & Natural Resources"
        src="/slides/mining-natural-resources.jpg"
        alt="Heavy machinery working in an open mining quarry"
        objectClassName="object-cover object-[center_45%]"
        tint="#2a2116"
        slides={[
          {
            body: (
              <p>
                Puntland has significant potential in mining and natural
                resources, including minerals, gemstones, salt, gypsum,
                limestone, construction materials, and other extractive
                resources.
              </p>
            ),
          },
          {
            heading: "How PDIB supports the sector",
            body: (
              <p>
                PDIB can support responsible development by providing financing
                for <strong>exploration</strong>, <strong>extraction</strong>,{" "}
                <strong>processing</strong>, and{" "}
                <strong>value-added activities</strong>.
              </p>
            ),
          },
          {
            heading: "Strategic Objective",
            body: (
              <p>
                To promote responsible and sustainable development of
                Puntland&apos;s mineral and natural-resource sector, while
                supporting <strong>local value addition</strong>,{" "}
                <strong>employment creation</strong>,{" "}
                <strong>economic diversification</strong>, and increased{" "}
                <strong>investment and export opportunities</strong>.
              </p>
            ),
          },
        ]}
      />
    </main>
  );
}
