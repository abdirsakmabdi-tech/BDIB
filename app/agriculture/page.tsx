import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";
import PageContent, { PageBody } from "@/components/PageContent";

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

      <PageContent narrow>
        <PageBody>
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
        </PageBody>
      </PageContent>
    </main>
  );
}
