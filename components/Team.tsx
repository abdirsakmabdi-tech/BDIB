import Link from "next/link";
import { boardMembers, executiveMembers, type Member } from "@/lib/team";

export default function Team() {
  return (
    <section
      id="our-team"
      className="scroll-mt-28 bg-white px-8 py-14 sm:px-14 sm:py-16 lg:px-24 lg:py-20"
    >
      <div className="max-w-3xl">
        <h2 className="font-sans text-[clamp(22px,2.8vw,36px)] leading-[1.2] font-bold tracking-tight text-pdib-title">
          Our team
        </h2>
      </div>

      <TeamGroup
        title="The Board"
        description="A fully constituted, broad-based and independent Board of Directors that sets strategic direction and oversees Management."
        members={boardMembers}
        className="mt-12 sm:mt-14"
      />

      <TeamGroup
        title="Executive management"
        description="Day-to-day leadership delivering PDIB’s financing mandate and long-term direction."
        members={executiveMembers}
        className="mt-14 sm:mt-16"
      />

      <div className="mt-10 sm:mt-12">
        <Link
          href="/team"
          className="inline-flex text-[14px] font-medium text-[#036522] underline-offset-4 transition-opacity hover:underline"
        >
          View full team
        </Link>
      </div>
    </section>
  );
}

function TeamGroup({
  title,
  description,
  members,
  className = "",
}: {
  title: string;
  description: string;
  members: Member[];
  className?: string;
}) {
  return (
    <div className={className || "mt-12 sm:mt-14"}>
      <h3 className="font-sans text-[clamp(18px,1.8vw,22px)] leading-[1.25] font-semibold tracking-tight text-pdib-title">
        {title}
      </h3>
      <p className="mt-2 max-w-2xl text-[14px] leading-[1.6] text-pdib-text sm:text-[15px]">
        {description}
      </p>

      <ul className="mt-8 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
        {members.map((member) => (
          <li key={member.slug} className="min-w-0">
            <MemberCard member={member} />
          </li>
        ))}
      </ul>
    </div>
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
        <PersonIcon />
        <div className="absolute inset-0 flex items-center justify-center bg-[#d8e5d0] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <span className="text-[14px] font-semibold tracking-[0.08em] text-[#036522] uppercase">
            Coming soon
          </span>
        </div>
      </div>
    </Link>
  );
}

function PersonIcon() {
  return (
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
  );
}
