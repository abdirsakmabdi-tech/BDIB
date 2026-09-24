import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import SectorHero from "@/components/SectorHero";
import { boardMembers, executiveMembers, type Member } from "@/lib/team";

export const metadata: Metadata = {
  title: "Our Team | PDIB",
  description:
    "Meet the Puntland Development & Investment Bank management team and Board of Directors.",
};

const intro =
  "PDIB is led by experienced professionals committed to financing sustainable growth and shared opportunity across Puntland.";

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

      <article className="bg-[#f4f5f0] px-4 pt-12 pb-8 sm:px-[4vw] sm:pt-16 sm:pb-10 lg:px-[5vw]">
        <div className="max-w-2xl">
          <h2 className="font-sans text-[clamp(28px,3vw,40px)] leading-[1.15] font-semibold tracking-tight text-pdib-title">
            The Faces Behind Our Mission
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
        className="scroll-mt-28 bg-[#f4f5f0] px-4 pb-14 sm:px-[4vw] sm:pb-16 lg:px-[5vw]"
      >
        <h2 className="font-sans text-[clamp(18px,1.8vw,22px)] leading-[1.25] font-semibold tracking-tight text-pdib-title">
          The Board
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-[1.65] text-pdib-text">
          A fully constituted, broad-based and independent Board of Directors
          that sets strategic direction and oversees Management.
        </p>
        <ul className="mt-8 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {boardMembers.map((member) => (
            <li key={member.slug}>
              <MemberCard member={member} />
            </li>
          ))}
        </ul>
      </section>

      <section
        id="management-team"
        className="scroll-mt-28 bg-[#f4f5f0] px-4 pb-20 sm:px-[4vw] sm:pb-24 lg:px-[5vw]"
      >
        <h2 className="font-sans text-[clamp(18px,1.8vw,22px)] leading-[1.25] font-semibold tracking-tight text-pdib-title">
          Executive leadership
        </h2>
        <ul className="mt-8 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {executiveMembers.map((member) => (
            <li key={member.slug}>
              <MemberCard member={member} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

function MemberCard({ member }: { member: Member }) {
  return (
    <Link
      href={`/team/${member.slug}`}
      className="group flex flex-col"
      aria-label={`${member.name}, ${member.role}`}
    >
      <div className="flex aspect-[3/4] w-full items-center justify-center rounded-t-2xl bg-[#5a6b52] transition-opacity group-hover:opacity-90">
        <svg
          viewBox="0 0 24 24"
          className="size-16 text-white/85 sm:size-20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.35"
          aria-hidden="true"
        >
          <circle cx="12" cy="8" r="3.4" />
          <path
            d="M5.2 19.2c1.7-3.2 4-4.8 6.8-4.8s5.1 1.6 6.8 4.8"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </Link>
  );
}
