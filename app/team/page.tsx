import type { Metadata } from "next";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";

export const metadata: Metadata = {
  title: "Our Team | PDIB",
  description:
    "Meet the Puntland Development & Investment Bank management team and Board of Directors.",
};

const intro =
  "PDIB is led by experienced professionals committed to financing sustainable growth and shared opportunity across Puntland.";

function PersonPlaceholderCard() {
  return (
    <article className="flex flex-col items-start">
      <svg
        viewBox="0 0 24 24"
        className="size-16 text-pdib-text/35 sm:size-20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="3.25" />
        <path
          d="M5.5 19.25c1.6-3.1 3.8-4.65 6.5-4.65s4.9 1.55 6.5 4.65"
          strokeLinecap="round"
        />
      </svg>
      <p className="mt-3 text-[12px] font-medium tracking-[0.06em] text-pdib-text/45 uppercase">
        Coming soon
      </p>
    </article>
  );
}

export default function TeamPage() {
  return (
    <main>
      <Header />
      <SectorHero
        variant="solid"
        title="Our team"
        intro={intro}
        eyebrow=""
        compactTitle
      />

      <article className="bg-white px-6 pt-12 pb-8 sm:px-[6.5vw] sm:pt-16 sm:pb-10">
        <div className="max-w-2xl">
          <h2 className="font-sans text-[clamp(20px,2vw,26px)] leading-[1.2] font-medium tracking-tight text-pdib-title">
            Leadership for Puntland&apos;s development
          </h2>
          <p className="mt-4 text-[15px] leading-[1.65] text-pdib-text sm:text-[16px]">
            {intro} Our management team delivers day-to-day strategy and
            operations, while the Board provides governance, oversight, and
            long-term direction.
          </p>
        </div>
      </article>

      <section
        id="board-of-directors"
        className="scroll-mt-28 bg-white px-6 pb-14 sm:px-[6.5vw] sm:pb-16"
      >
        <div className="max-w-2xl">
          <h2 className="font-sans text-[clamp(18px,1.8vw,22px)] leading-[1.25] font-medium tracking-tight text-pdib-title">
            The Board
          </h2>
          <div className="mt-4 space-y-4 text-[15px] leading-[1.65] text-pdib-text sm:text-[16px]">
            <p>
              PDIB has in place a fully constituted, broad-based and independent
              Board of Directors that exercises overall governance and oversight
              of the Bank, determines its strategic direction, and provides
              effective oversight of the Bank&apos;s Management.
            </p>
            <p>
              The Board is composed of <strong>seven directors</strong>,
              comprising one executive director and six non-executive directors,
              including five independent non-executive directors, one of whom
              serves as the Chairman of the Board.
            </p>
            <p>
              The Board&apos;s roles, responsibilities and operations are clearly
              defined and guided by the <strong>Board Charter</strong> and the
              respective Terms of Reference of its Board Committees.
            </p>
          </div>
        </div>

        <div className="mt-8 grid max-w-md grid-cols-2 gap-4 sm:gap-5">
          <PersonPlaceholderCard />
          <PersonPlaceholderCard />
        </div>
      </section>

      <section
        id="management-team"
        className="scroll-mt-28 bg-white px-6 pb-20 sm:px-[6.5vw] sm:pb-24"
      >
        <h2 className="font-sans text-[clamp(18px,1.8vw,22px)] leading-[1.25] font-medium tracking-tight text-pdib-title">
          Management Team
        </h2>

        <div className="mt-8 grid max-w-md grid-cols-2 gap-4 sm:gap-5">
          <PersonPlaceholderCard />
          <PersonPlaceholderCard />
        </div>
      </section>
    </main>
  );
}
