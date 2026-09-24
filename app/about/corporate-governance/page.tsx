import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";

export const metadata: Metadata = {
  title: "Corporate Governance | PDIB",
  description:
    "PDIB corporate governance — transparency, accountability, and effective oversight of the Bank.",
};

const intro =
  "Strong governance, transparency, and accountability guide how PDIB steers strategy and manages risk.";

const sectionTitle =
  "-mx-4 w-[calc(100%+2rem)] bg-[#46543d] px-4 py-3 text-[20px] font-semibold tracking-tight text-[#dce4c9] sm:-mx-[4vw] sm:w-[calc(100%+8vw)] sm:px-[4vw] sm:py-3.5 sm:text-[22px] lg:-mx-[5vw] lg:w-[calc(100%+10vw)] lg:px-[5vw]";

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

      <article className="bg-white px-4 pt-16 pb-24 sm:px-[4vw] sm:pt-24 sm:pb-32 lg:px-[5vw]">
        <h2 className={sectionTitle}>Corporate Governance</h2>
        <div className="mt-6 max-w-3xl space-y-6 text-[17px] leading-[1.65] text-pdib-text [&_strong]:font-bold">
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
        </div>
      </article>
    </main>
  );
}
