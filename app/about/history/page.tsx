import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";

export const metadata: Metadata = {
  title: "Our History | PDIB",
  description:
    "The story of the Puntland Development & Investment Bank — advancing Puntland’s development agenda through long-term capital.",
};

const intro =
  "How PDIB grew into a trusted partner for enterprises, communities, and institutions across Puntland.";

const sectionTitle =
  "-mx-4 w-[calc(100%+2rem)] bg-[#46543d] px-4 py-3 text-[20px] font-semibold tracking-tight text-[#dce4c9] sm:-mx-[4vw] sm:w-[calc(100%+8vw)] sm:px-[4vw] sm:py-3.5 sm:text-[22px] lg:-mx-[5vw] lg:w-[calc(100%+10vw)] lg:px-[5vw]";

export default function HistoryPage() {
  return (
    <main>
      <Header />
      <SectorHero
        variant="solid"
        title="Our History"
        intro={intro}
        eyebrow=""
      />

      <article className="bg-white px-4 pt-16 pb-24 sm:px-[4vw] sm:pt-24 sm:pb-32 lg:px-[5vw]">
        <h2 className={sectionTitle}>Our History</h2>
        <div className="mt-6 max-w-3xl space-y-6 text-[17px] leading-[1.65] text-pdib-text [&_strong]:font-bold">
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
        </div>
      </article>
    </main>
  );
}
