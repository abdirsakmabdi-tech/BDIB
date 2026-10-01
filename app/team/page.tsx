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

      <article className="bg-[#f4f5f0] px-8 pt-14 pb-8 sm:px-14 sm:pt-16 sm:pb-10 lg:px-24">
        <div className="max-w-2xl">
          <h2 className="font-sans text-[clamp(18px,1.8vw,22px)] leading-[1.25] font-bold tracking-tight text-pdib-title">
            The Faces Behind Our Mission
          </h2>
          <span
            aria-hidden="true"
            className="mt-4 block h-1 w-12 rounded-full bg-[#23ba4a]"
          />
          <p className="mt-5 text-[15px] leading-[1.65] text-pdib-text sm:text-[16px]">
            {intro} Our management team delivers day-to-day strategy and
            operations, while the Board provides governance, oversight, and
            long-term direction.
          </p>
        </div>
      </article>

      <section
        id="board-of-directors"
        className="scroll-mt-28 bg-[#f4f5f0] px-8 pb-14 sm:px-14 sm:pb-16 lg:px-24"
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
        className="scroll-mt-28 bg-[#f4f5f0] px-8 pb-20 sm:px-14 sm:pb-24 lg:px-24"
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
      className="group relative flex flex-col"
      aria-label={`${member.name}, ${member.role}`}
    >
      <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl bg-[#5a6b52]">
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
        <div className="absolute inset-0 flex items-center justify-center bg-[#d8e5d0] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <span className="text-[14px] font-semibold tracking-[0.08em] text-[#036522] uppercase">
            Coming soon
          </span>
        </div>
      </div>
    </Link>
  );
}
