"use client";

import { useState } from "react";

type AccordionItem = {
  title: string;
  body: string;
};

type AccordionPanelProps = {
  title: string;
  intro: string;
  items: AccordionItem[];
};

export function AccordionPanel({ title, intro, items }: AccordionPanelProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <h2 className="font-sans text-[clamp(18px,1.8vw,22px)] leading-[1.25] font-bold tracking-tight text-pdib-title">
        {title}
      </h2>
      <p className="mt-3 text-[14px] leading-[1.6] text-pdib-text sm:text-[15px]">
        {intro}
      </p>

      <ul className="mt-6 border-t border-black/10">
        {items.map((item, index) => {
          const open = openIndex === index;
          return (
            <li key={`${title}-${item.title}`} className="border-b border-black/10">
              <button
                type="button"
                aria-expanded={open}
                className="flex w-full items-center gap-3 py-3.5 text-left transition-colors hover:text-[#036522] sm:gap-4 sm:py-4"
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span
                  aria-hidden="true"
                  className="grid size-6 shrink-0 place-items-center border border-[#036522] text-[#036522] sm:size-7"
                >
                  <PlusIcon open={open} />
                </span>
                <span className="text-[14px] font-semibold tracking-tight text-pdib-title sm:text-[15px]">
                  {item.title}
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-4 pl-10 text-[14px] leading-[1.65] text-pdib-text sm:pb-5 sm:pl-12 sm:text-[15px]">
                    {item.body}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M3 8h10" strokeLinecap="round" />
      <path
        d="M8 3v10"
        strokeLinecap="round"
        className={`origin-center transition-transform duration-300 ${
          open ? "scale-y-0" : "scale-y-100"
        }`}
      />
    </svg>
  );
}
