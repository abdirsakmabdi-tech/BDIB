import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";

export const metadata: Metadata = {
  title: "Mission and Vision | PDIB",
  description:
    "PDIB vision and mission for sustainable development and shared opportunity in Puntland.",
};

const intro =
  "A clear vision for a prosperous Puntland — and a mission to finance the projects that get us there.";

const sectionTitle =
  "-mx-4 w-[calc(100%+2rem)] bg-[#46543d] px-4 py-3 text-[20px] font-semibold tracking-tight text-[#dce4c9] sm:-mx-[4vw] sm:w-[calc(100%+8vw)] sm:px-[4vw] sm:py-3.5 sm:text-[22px] lg:-mx-[5vw] lg:w-[calc(100%+10vw)] lg:px-[5vw]";

export default function MissionVisionPage() {
  return (
    <main>
      <Header />
      <SectorHero
        variant="solid"
        title="Mission and Vision"
        intro={intro}
        eyebrow=""
      />

      <article className="bg-white px-4 pt-16 pb-24 sm:px-[4vw] sm:pt-24 sm:pb-32 lg:px-[5vw]">
        <div className="space-y-10 text-[17px] leading-[1.65] text-pdib-text [&_strong]:font-bold">
          <div>
            <h2 className={sectionTitle}>Vision</h2>
            <p className="mt-6 max-w-3xl">
              A <strong>prosperous Puntland</strong> where investment drives{" "}
              <strong>sustainable development</strong> and shared opportunity.
            </p>
          </div>

          <div>
            <h2 className={sectionTitle}>Mission</h2>
            <p className="mt-6 max-w-3xl">
              To finance and support projects that grow Puntland&apos;s economy
              — from <strong>fisheries and agriculture</strong> to{" "}
              <strong>renewable energy</strong> —{" "}
              <strong>where investment meets development</strong>.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
