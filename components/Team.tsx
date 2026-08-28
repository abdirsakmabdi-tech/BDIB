import { ViewTransition } from "react";
import Link from "next/link";
import { boardMembers, executiveMembers, type Member } from "@/lib/team";

function PlusIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" className="size-full">
      <path d="M40 20v40M60 40H20" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function MemberCard({ member }: { member: Member }) {
  const href = `/team/${member.slug}`;

  return (
    <article className="relative flex h-full flex-col">
      <Link
        href={href}
        className="group relative block aspect-[4/5] overflow-hidden bg-[#f4f2ee]"
        aria-label={`Open profile for ${member.name}`}
      >
        <ViewTransition name={`member-photo-${member.slug}`} share="member-morph" default="none">
          <img
            src={member.src}
            alt={member.name}
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </ViewTransition>
      </Link>

      <div className="relative mt-[30px] flex min-h-[168px] flex-1 flex-col pr-[72px]">
        <Link
          href={href}
          className="flex items-baseline justify-between gap-[30px]"
        >
          <span className="text-[17px] font-bold text-pdib-title">{member.name}</span>
          <span className="shrink-0 text-[15px] text-pdib-text">{member.role}</span>
        </Link>

        <ul className="mt-5 space-y-2 text-[15px] leading-[1.65] text-pdib-text">
          <li>
            Phone:{" "}
            <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="underline">
              {member.phone}
            </a>
          </li>
          <li>Fax: {member.fax}</li>
          <li>
            <a href={`mailto:${member.email}`} className="underline">
              {member.email}
            </a>
          </li>
          <li>{member.detail}</li>
          <li>Language(s): {member.languages}</li>
        </ul>

        <Link
          href={href}
          aria-label={`Open profile for ${member.name}`}
          className="absolute right-0 bottom-0 grid size-[52px] place-items-center rounded-full bg-pdib-primary text-white transition-[transform,color,background-color] duration-300 ease-out hover:rotate-90 hover:bg-pdib-primary hover:text-black"
        >
          <PlusIcon />
        </Link>
      </div>
    </article>
  );
}

function MemberGrid({ title, members }: { title: string; members: Member[] }) {
  return (
    <div>
      <h3 className="mb-12 font-sans text-[clamp(34px,3.4vw,52px)] leading-[1.15] font-bold tracking-tight text-pdib-title">
        {title}
      </h3>
      <div className="grid grid-cols-1 items-stretch gap-x-[30px] gap-y-[75px] sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <MemberCard key={member.slug} member={member} />
        ))}
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section id="our-team" className="bg-white">
      <div className="space-y-[75px] px-6 py-16 sm:px-[6.5vw] sm:py-24 lg:py-28">
        <MemberGrid title="Our Board Members" members={boardMembers} />
        <MemberGrid title="Our Executive Members" members={executiveMembers} />
      </div>
    </section>
  );
}
