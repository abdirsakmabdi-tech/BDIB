import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";
import PageContent, { PageBody } from "@/components/PageContent";

export const metadata: Metadata = {
  title: "Social Infrastructure | PDIB",
  description:
    "PDIB finances schools, health facilities, water, and community infrastructure that strengthen Puntland’s public services.",
};

const intro =
  "Investment in schools, health facilities, water, and community infrastructure for inclusive growth.";

export default function SocialInfrastructurePage() {
  return (
    <main>
      <Header />
      <SectorHero
        src="/social-infrastructure-hero.jpg"
        alt="Social infrastructure under construction"
        title="Social Infrastructure"
        intro={intro}
        objectClassName="object-cover object-[center_35%]"
      />

      <PageContent narrow>
        <PageBody>
          <p>{intro}</p>
          <p className="font-semibold text-pdib-title">
            Strong communities depend on the places people use every day —
            schools, clinics, water systems, and public facilities.
          </p>
          <p>
            PDIB finances <strong>essential social infrastructure</strong> that
            expands public services, creates local jobs, and improves quality of
            life in urban and rural communities.
          </p>
        </PageBody>
      </PageContent>
    </main>
  );
}
