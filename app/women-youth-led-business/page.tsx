import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";

export const metadata: Metadata = {
  title: "Women and Youth Led Business | PDIB",
  description:
    "PDIB financing for women- and youth-led businesses in Puntland — capital to start, grow, and create jobs.",
};

const intro =
  "Financing women- and youth-led enterprises so founders can invest, grow, and create jobs across Puntland.";

export default function WomenYouthLedBusinessPage() {
  return (
    <main>
      <Header />
      <SectorHero
        src="/slides/women-youth-led-business.jpg"
        alt="A woman entrepreneur working at a small grocery stall"
        title="Women and Youth Led Business"
        intro={intro}
        objectClassName="object-cover object-[center_35%]"
      />

      <article className="bg-white px-6 pt-12 pb-24 sm:px-[6.5vw] sm:pt-16 sm:pb-32">
        <div className="max-w-2xl space-y-5 text-[16px] leading-[1.7] text-pdib-text sm:text-[17px]">
          <p>{intro}</p>
          <p className="font-semibold text-pdib-title">
            Women and young entrepreneurs are central to Puntland&apos;s economic
            future.
          </p>
          <p>
            PDIB provides <strong>access to finance</strong> for women- and
            youth-led businesses — from small traders and service providers to
            growing SMEs — so founders can purchase inventory, expand premises,
            hire staff, and strengthen their place in local markets.
          </p>
          <p>
            Our support helps remove barriers that often limit women and young
            people from capital, building a more inclusive economy where more
            households and communities benefit from enterprise growth.
          </p>
        </div>
      </article>
    </main>
  );
}
