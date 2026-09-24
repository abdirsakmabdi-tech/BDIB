"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  allMembers,
  boardMembers,
  executiveMembers,
  type Member,
} from "@/lib/team";

const filters = [
  { id: "all", label: "All" },
  { id: "board", label: "Board" },
  { id: "leadership", label: "Executive leadership" },
] as const;

type FilterId = (typeof filters)[number]["id"];

const PAGE_SIZE = 3;

export default function Team() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [page, setPage] = useState(0);

  const members = useMemo(() => {
    if (filter === "board") return boardMembers;
    if (filter === "leadership") return executiveMembers;
    return allMembers;
  }, [filter]);

  const totalPages = Math.max(1, Math.ceil(members.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages - 1);
  const visible = members.slice(
    safePage * PAGE_SIZE,
    safePage * PAGE_SIZE + PAGE_SIZE,
  );

  function setFilterAndReset(next: FilterId) {
    setFilter(next);
    setPage(0);
  }

  function goPrev() {
    setPage((p) => (p - 1 + totalPages) % totalPages);
  }

  function goNext() {
    setPage((p) => (p + 1) % totalPages);
  }

  return (
    <section
      id="our-team"
      className="scroll-mt-28 bg-[#f4f5f0] px-4 py-14 sm:px-[4vw] sm:py-16 lg:px-[5vw] lg:py-20"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="max-w-xl font-sans text-[clamp(28px,3.2vw,42px)] leading-[1.15] font-semibold tracking-tight text-pdib-title">
          The Faces Behind Our Mission
        </h2>

        <div className="flex shrink-0 items-center gap-3 self-end sm:self-auto">
          <button
            type="button"
            aria-label="Previous team members"
            onClick={goPrev}
            className="grid size-10 place-items-center rounded-full border border-pdib-title/25 text-pdib-title transition-colors hover:bg-pdib-title hover:text-white"
          >
            <ChevronLeft />
          </button>
          <span className="min-w-[3.5rem] text-center text-[14px] font-medium tracking-tight text-pdib-title">
            {safePage + 1}/{totalPages}
          </span>
          <button
            type="button"
            aria-label="Next team members"
            onClick={goNext}
            className="grid size-10 place-items-center rounded-full border border-pdib-title/25 text-pdib-title transition-colors hover:bg-pdib-title hover:text-white"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-8 lg:mt-12 lg:flex-row lg:gap-10">
        <div
          role="tablist"
          aria-label="Team filters"
          className="flex shrink-0 flex-row flex-wrap gap-2 lg:w-40 lg:flex-col lg:gap-2.5"
        >
          {filters.map((item) => {
            const active = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilterAndReset(item.id)}
                className={`rounded-full px-4 py-2 text-left text-[13px] font-medium tracking-tight transition-colors lg:w-full ${
                  active
                    ? "bg-pdib-title text-white"
                    : "border border-pdib-title/20 bg-white text-pdib-title hover:border-pdib-title/40"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="min-w-0 flex-1">
          <ul className="grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {visible.map((member) => (
              <li key={member.slug}>
                <MemberCard member={member} />
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href="/team"
              className="inline-flex text-[14px] font-medium text-[#036522] underline-offset-4 transition-opacity hover:underline"
            >
              View full team
            </Link>
          </div>
        </div>
      </div>
    </section>
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
        <PersonIcon />
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

function ChevronLeft() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M15 5L8 12l7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
