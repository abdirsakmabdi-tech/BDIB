import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";

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

      <article className="bg-white px-6 pt-12 pb-24 sm:px-[6.5vw] sm:pt-16 sm:pb-32">
        <div className="max-w-2xl space-y-5 text-[16px] leading-[1.7] text-pdib-text sm:text-[17px]">
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
        </div>
      </article>
    </main>
  );
}
