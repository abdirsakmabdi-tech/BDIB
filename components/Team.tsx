import { ViewTransition } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { boardMembers, executiveMembers, type Member } from "@/lib/team";

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10.25" />
      <path
        d="M8.2 10.2V16M8.2 7.9v.1M11.2 16v-3.5c0-1.3.7-2.1 1.9-2.1 1.1 0 1.7.8 1.7 2.1V16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MemberCard({ member, index }: { member: Member; index: number }) {
  const href = `/team/${member.slug}`;
  const delay = (index % 4) * 70;

  return (
    <Reveal delayMs={delay}>
      <article className="flex w-full max-w-[200px] flex-col sm:max-w-[220px]">
        <Link
          href={href}
          className="relative block aspect-square overflow-hidden bg-[#ececec]"
          aria-label={`Open profile for ${member.name}`}
        >
          <ViewTransition
            name={`member-photo-${member.slug}`}
            share="member-morph"
            default="none"
          >
            <img
              src={member.src}
              alt={member.name}
              className="h-full w-full object-cover object-top"
            />
          </ViewTransition>
        </Link>

        <div className="flex flex-col bg-[#f4f4f4] px-3.5 pt-3.5 pb-3.5">
          <Link href={href} className="block">
            <h3 className="font-sans text-[15px] leading-snug font-medium tracking-tight text-pdib-title sm:text-[16px]">
              {member.name}
            </h3>
            <p className="mt-1 text-[12px] leading-snug text-pdib-text sm:text-[13px]">
              {member.role}
            </p>
          </Link>

          <a
            href={href}
            aria-label={`Open profile for ${member.name}`}
            className="mt-3 inline-flex text-pdib-title transition-colors hover:text-pdib-green"
          >
            <LinkedInIcon />
          </a>
        </div>
      </article>
    </Reveal>
  );
}

function MemberGrid({ title, members }: { title: string; members: Member[] }) {
  return (
    <div>
      <Reveal>
        <h2 className="mb-8 font-sans text-[clamp(24px,2.4vw,34px)] leading-[1.2] font-bold tracking-tight text-pdib-title sm:mb-10">
          {title}
        </h2>
      </Reveal>
      <div className="flex flex-wrap gap-4 sm:gap-5">
        {members.map((member, index) => (
          <MemberCard key={member.slug} member={member} index={index} />
        ))}
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section id="our-team" className="bg-white">
      <div className="space-y-16 px-6 py-16 sm:space-y-20 sm:px-[6.5vw] sm:py-24">
        <MemberGrid title="Our Board Members" members={boardMembers} />
        <MemberGrid title="Our Executive Members" members={executiveMembers} />
      </div>
    </section>
  );
}
