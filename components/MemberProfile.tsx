import { ViewTransition } from "react";
import Link from "next/link";
import type { Member } from "@/lib/team";

export default function MemberProfile({ member }: { member: Member }) {
  return (
    <main className="flex min-h-screen flex-col bg-[#f3efe8] text-[#16280d] md:h-screen md:flex-row md:overflow-hidden">
      <div className="relative h-[46vh] shrink-0 md:h-full md:w-[44%]">
        <ViewTransition name={`member-photo-${member.slug}`} share="member-morph" default="none">
          <img
            src={member.src}
            alt={member.name}
            className="h-full w-full object-cover object-top"
          />
        </ViewTransition>
      </div>

      <ViewTransition enter="profile-panel" exit="profile-panel" default="none">
        <div className="flex min-h-0 flex-1 flex-col px-8 py-8 sm:px-12 lg:px-[5.5vw] lg:py-12">
          <div className="flex items-start justify-between gap-6">
            <p className="text-nav tracking-[0.16em] uppercase">{member.role}</p>
            <Link
              href="/#our-team"
              className="shrink-0 text-nav tracking-[0.16em] uppercase"
            >
              Return [ X ]
            </Link>
          </div>

          <h1 className="mt-14 max-w-[12ch] text-[clamp(40px,5.2vw,72px)] leading-[1.05] font-semibold tracking-tight lg:mt-20">
            {member.name}
          </h1>

          <div className="mt-10 space-y-0.5 text-body">
            <p>
              PHONE :{" "}
              <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="underline">
                {member.phone}
              </a>
            </p>
            <p>FAX : {member.fax}</p>
            <p>
              <a href={`mailto:${member.email}`} className="underline">
                {member.email}
              </a>
            </p>
          </div>

          <div className="mt-8 space-y-1 text-caption tracking-[0.06em] uppercase">
            <p>{member.detail}</p>
            <p>Languages : {member.languages}</p>
          </div>

          <div className="mt-auto pt-16">
            <div className="border-t border-[#1a1a1a] pt-5">
              <h2 className="text-nav tracking-[0.16em] uppercase">Degrees</h2>
              <ul className="mt-4 space-y-1 text-body">
                {member.degrees.map((degree) => (
                  <li key={degree}>{degree}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ViewTransition>
    </main>
  );
}
