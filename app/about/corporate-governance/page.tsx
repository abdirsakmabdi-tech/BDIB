import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";
import PageContent, {
  PageBody,
  PageSectionTitle,
} from "@/components/PageContent";

export const metadata: Metadata = {
  title: "Corporate Governance | PDIB",
  description:
    "PDIB corporate governance — transparency, accountability, and effective oversight of the Bank.",
};

const intro =
  "Strong governance, transparency, and accountability guide how PDIB steers strategy and manages risk.";

export default function CorporateGovernancePage() {
  return (
    <main>
      <Header />
      <SectorHero
        variant="solid"
        title="Corporate Governance"
        intro={intro}
        eyebrow=""
      />

      <PageContent>
        <PageSectionTitle>Corporate Governance</PageSectionTitle>
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
          <p>
            Through clear policies, risk oversight, and ethical standards, PDIB
            safeguards the Bank&apos;s financial health and strengthens public
            trust — so investment continues to serve development across
            Puntland.
          </p>
        </PageBody>
      </PageContent>
    </main>
  );
}
