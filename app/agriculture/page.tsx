import type { Metadata } from "next";
import SplitPageLayout from "@/components/SplitPageLayout";
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
    <SplitPageLayout
      title="Agriculture Financing"
      intro={intro}
      heroSrc="/agriculture-hero.jpg"
      heroAlt="Agricultural fields in Puntland"
      heroObjectClassName="object-cover object-[center_45%]"
    >
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
    </SplitPageLayout>
  );
}
