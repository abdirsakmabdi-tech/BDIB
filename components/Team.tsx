"use client";

import { ViewTransition } from "react";
import Link from "next/link";
import { useRef } from "react";
import Reveal from "@/components/Reveal";
import {
  boardMembers,
  executiveMembers,
  type Member,
} from "@/lib/team";

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

function MemberCard({ member }: { member: Member }) {
  const href = `/team/${member.slug}`;

  return (
    <article className="flex w-[220px] shrink-0 snap-start flex-col sm:w-[240px]">
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
  );
}

function TeamGroup({
  id,
  title,
  members,
}: {
  id: string;
  title: string;
  members: Member[];
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: -1 | 1) {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(280, el.clientWidth * 0.85) * direction;
    el.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <div id={id} className="scroll-mt-28">
      <Reveal>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[12px] font-bold tracking-[0.16em] text-pdib-green uppercase sm:text-[13px]">
              People
            </p>
            <h2 className="mt-3 font-sans text-[clamp(24px,2.4vw,34px)] leading-[1.2] font-bold tracking-tight text-pdib-title">
              {title}
            </h2>
          </div>

          <div className="flex gap-1.5">
            <button
              type="button"
              aria-label={`Previous ${title}`}
              onClick={() => scrollByCard(-1)}
              className="grid size-10 place-items-center bg-pdib-title text-white transition-colors hover:bg-pdib-green sm:size-11"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                aria-hidden="true"
              >
                <path
                  d="M15 4L7 12l8 8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label={`Next ${title}`}
              onClick={() => scrollByCard(1)}
              className="grid size-10 place-items-center bg-pdib-title text-white transition-colors hover:bg-pdib-green sm:size-11"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                aria-hidden="true"
              >
                <path
                  d="M9 4l8 8-8 8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </Reveal>

      <Reveal delayMs={100}>
        <div
          ref={scrollerRef}
          className="mt-10 flex gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory sm:mt-12 sm:gap-5 [&::-webkit-scrollbar]:hidden"
        >
          {members.map((member) => (
            <MemberCard key={member.slug} member={member} />
          ))}
        </div>
      </Reveal>
    </div>
  );
}

export default function Team() {
  return (
    <section id="our-team" className="bg-white">
      <div className="flex flex-col gap-16 px-6 py-16 sm:gap-20 sm:px-[6.5vw] sm:py-24">
        <TeamGroup
          id="board-of-directors"
          title="Board of Directors"
          members={boardMembers}
        />
        <TeamGroup
          id="management-team"
          title="Management Team"
          members={executiveMembers}
        />
      </div>
    </section>
  );
}
