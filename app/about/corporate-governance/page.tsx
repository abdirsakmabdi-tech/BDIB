import type { Metadata } from "next";
import SplitPageLayout from "@/components/SplitPageLayout";
import PageContent, { PageBody } from "@/components/PageContent";
import FeatureSplit, { FeatureIcon } from "@/components/FeatureSplit";

export const metadata: Metadata = {
  title: "Corporate Governance | PDIB",
  description:
    "PDIB corporate governance — transparency, accountability, and effective oversight of the Bank.",
};

const intro =
  "Strong governance, transparency, and accountability guide how PDIB steers strategy and manages risk.";

const governanceItems = [
  {
    title: "Transparent oversight",
    body: "A fully constituted, broad-based and independent Board of Directors provides overall governance and sets strategic direction.",
    icon: (
      <FeatureIcon>
        <path d="M12 3 4.5 7.5 12 12l7.5-4.5L12 3Z" />
        <path d="M4.5 12 12 16.5 19.5 12" />
        <path d="M4.5 16.5 12 21l7.5-4.5" />
      </FeatureIcon>
    ),
  },
  {
    title: "Accountability & ethics",
    body: "Clear policies, ethical standards, and public trust guide decision-making across the institution.",
    icon: (
      <FeatureIcon>
        <path d="M12 3 4 7v5c0 4.5 3.2 8.2 8 9 4.8-.8 8-4.5 8-9V7l-8-4Z" />
        <path d="M9.5 12.5 11 14l3.5-3.5" />
      </FeatureIcon>
    ),
  },
  {
    title: "Risk discipline",
    body: "Robust risk oversight safeguards the Bank’s financial health while investment continues to serve development across Puntland.",
    icon: (
      <FeatureIcon>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l2.5 2.5" />
      </FeatureIcon>
    ),
  },
];

export default function CorporateGovernancePage() {
  return (
    <SplitPageLayout
      title="Corporate Governance"
      intro={intro}
      eyebrow="About us"
      heroVariant="solid"
    >
      <PageContent>
        <PageBody>
          <p>
            PDIB maintains a robust governance framework designed to ensure{" "}
            <strong>transparency</strong>, <strong>accountability</strong>, and
            sound decision-making across the institution.
          </p>
          <p>
            A fully constituted, broad-based and independent{" "}
            <strong>Board of Directors</strong> provides overall governance and
            oversight, sets strategic direction, and supervises Management in
            delivering the Bank&apos;s development mandate.
          </p>
        </PageBody>
      </PageContent>

      <FeatureSplit
        eyebrow="Governance"
        title="Governance and Management"
        intro="How PDIB steers strategy, manages risk, and stays accountable to the communities it serves."
        linkHref="/team"
        linkLabel="Meet our leadership"
        items={governanceItems}
        panelSrc="/slides/history-hero-v2.jpg"
        coverTitle="Corporate Governance"
        tocItems={[
          "Board of Directors",
          "Oversight",
          "Accountability",
          "Risk Discipline",
          "Ethics",
          "Audit",
          "Leadership",
        ]}
      />
    </SplitPageLayout>
  );
}
