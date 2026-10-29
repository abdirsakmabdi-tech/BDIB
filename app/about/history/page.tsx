import type { Metadata } from "next";
import SplitPageLayout from "@/components/SplitPageLayout";
import PageContent, { PageBody } from "@/components/PageContent";
import FeatureSplit, { FeatureIcon } from "@/components/FeatureSplit";

export const metadata: Metadata = {
  title: "Our History | PDIB",
  description:
    "The story of the Puntland Development & Investment Bank — advancing Puntland’s development agenda through long-term capital.",
};

const intro =
  "How PDIB grew into a trusted partner for enterprises, communities, and institutions across Puntland.";

const serviceItems = [
  {
    title: "Loans and Financing",
    body: "Offering various loan products tailored for businesses, agriculture, and infrastructure projects.",
    icon: (
      <FeatureIcon>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10h18" />
        <circle cx="8" cy="14" r="1" fill="currentColor" stroke="none" />
      </FeatureIcon>
    ),
  },
  {
    title: "Financial Advisory",
    body: "Providing guidance and support to entrepreneurs and businesses to enhance their financial management and operational efficiency.",
    icon: (
      <FeatureIcon>
        <path d="M4 19V5a2 2 0 0 1 2-2h8l6 6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
        <path d="M14 3v5h5" />
        <path d="M8 13h8M8 17h5" />
      </FeatureIcon>
    ),
  },
  {
    title: "Capacity Building",
    body: "Investing in training and development programs for local financial institutions and businesses to strengthen the overall economic landscape.",
    icon: (
      <FeatureIcon>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5.5 19c1.5-3 4-4.5 6.5-4.5S17 16 18.5 19" />
        <path d="M17 4.5v3M18.5 6h-3" />
      </FeatureIcon>
    ),
  },
];

const governanceItems = [
  {
    title: "Corporate Governance",
    body: "Ensuring transparency and accountability in operations through a well-structured governance framework.",
    icon: (
      <FeatureIcon>
        <path d="M12 3 4 7v5c0 4.5 3.2 8.2 8 9 4.8-.8 8-4.5 8-9V7l-8-4Z" />
        <path d="M9.5 12.5 11 14l3.5-3.5" />
      </FeatureIcon>
    ),
  },
  {
    title: "Risk Management",
    body: "Implementing robust risk assessment and management practices to safeguard the bank's financial health and sustainability.",
    icon: (
      <FeatureIcon>
        <path d="M12 3 4 7v5c0 4.5 3.2 8.2 8 9 4.8-.8 8-4.5 8-9V7l-8-4Z" />
        <path d="M12 8v5" />
        <circle cx="12" cy="16" r="0.8" fill="currentColor" stroke="none" />
      </FeatureIcon>
    ),
  },
  {
    title: "Capacity Building",
    body: "Investing in training and development programs for local financial institutions and businesses to strengthen the overall economic landscape.",
    icon: (
      <FeatureIcon>
        <path d="M12 3v18" />
        <path d="M5 8h14M7 13h10M9 18h6" />
        <circle cx="12" cy="5" r="2" />
      </FeatureIcon>
    ),
  },
];

export default function HistoryPage() {
  return (
    <SplitPageLayout
      title="Our History"
      intro={intro}
      eyebrow="About us"
      heroSrc="/slides/history-hero-v3.jpg"
      heroAlt="Invest in Puntland — PDIB banner with Puntland map and priority sectors"
      heroBanner
      heroWidth={1024}
      heroHeight={415}
    >
      <div className="divide-y divide-black/10 border-t border-black/10">
        <PageContent className="!pt-8 !pb-8 sm:!pt-10 sm:!pb-10">
          <PageBody>
            <p>
              PDIB was established to advance Puntland&apos;s development agenda
              by mobilizing long-term capital for productive sectors. From the
              outset, the Bank was created to bridge financing gaps that
              conventional lenders could not fill — supporting projects that
              create jobs, raise productivity, and strengthen the regional
              economy.
            </p>
            <p>
              Over time, the Bank has grown into a trusted partner for
              enterprises, communities, and institutions investing in inclusive,
              sustainable growth across Puntland. Its portfolio and partnerships
              have expanded alongside the region&apos;s priorities — from
              fisheries and agriculture to energy, infrastructure, and
              enterprise development.
            </p>
            <p>
              Today, PDIB continues that mandate as Puntland&apos;s leading
              development finance institution — where investment meets
              development.
            </p>
          </PageBody>
        </PageContent>

        <FeatureSplit
          eyebrow="Services"
          title="Services Offered"
          intro="PDIB supports businesses, institutions, and communities with financing and advisory solutions that strengthen Puntland’s productive economy."
          items={serviceItems}
          hidePanel
        />

        <FeatureSplit
          eyebrow="Governance"
          title="Governance and Management"
          intro="Strong oversight, risk discipline, and continuous capability building keep PDIB accountable as it delivers on its development mandate."
          items={governanceItems}
          hidePanel
        />
      </div>
    </SplitPageLayout>
  );
}
