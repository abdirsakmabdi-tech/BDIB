"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Loans and Financing",
    body: "Offering various loan products tailored for businesses, agriculture, and infrastructure projects.",
  },
  {
    title: "Financial Advisory",
    body: "Providing guidance and support to entrepreneurs and businesses to enhance their financial management and operational efficiency.",
  },
  {
    title: "Capacity Building",
    body: "Investing in training and development programs for local financial institutions and businesses to strengthen the overall economic landscape.",
  },
];

const governance = [
  {
    title: "Corporate Governance",
    body: "Ensuring transparency and accountability in operations through a well-structured governance framework.",
  },
  {
    title: "Risk Management",
    body: "Implementing robust risk assessment and management practices to safeguard the bank's financial health and sustainability.",
  },
  {
    title: "Capacity Building",
    body: "Investing in training and development programs for local financial institutions and businesses to strengthen the overall economic landscape.",
  },
];

export default function BuildingInfrastructure() {
  return (
    <section
      id="services-offered"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute inset-0">
        <Image
          src="/services-hero.jpg"
          alt=""
          fill
          quality={95}
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-[#036522]/82" />
      </div>

      <div className="relative z-10 grid w-full grid-cols-1 items-start gap-10 px-8 sm:px-14 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-24 xl:gap-20">
        <Reveal>
          <div>
            <h2 className="font-sans text-[clamp(18px,1.8vw,22px)] leading-[1.25] font-bold tracking-tight text-white">
              What We Offer
            </h2>
            <span
              aria-hidden="true"
              className="mt-3 block h-0.5 w-10 rounded-full bg-[#23ba4a]"
            />
          </div>
        </Reveal>

        <div className="space-y-10">
          <OfferAccordion title="Services Offered" items={services} />
          <OfferAccordion
            id="corporate-governance"
            title="Governance and Management"
            items={governance}
          />
        </div>
      </div>
    </section>
  );
}

function OfferAccordion({
  id,
  title,
  items,
}: {
  id?: string;
  title: string;
  items: { title: string; body: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Reveal delayMs={100}>
      <div id={id} className={id ? "scroll-mt-28" : undefined}>
        <p className="text-[15px] font-medium tracking-tight text-[#8dc63f] sm:text-[16px]">
          — {title}
        </p>

        <ul className="mt-4 border-t border-white/20">
          {items.map((item, index) => {
            const open = openIndex === index;
            return (
              <li
                key={`${title}-${item.title}`}
                className="border-b border-white/20"
              >
                <button
                  type="button"
                  aria-expanded={open}
                  className="flex w-full items-center gap-3 py-3.5 text-left transition-colors hover:text-[#8dc63f] sm:gap-4 sm:py-4"
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <span
                    aria-hidden="true"
                    className="grid size-6 shrink-0 place-items-center border border-[#8dc63f] text-[#8dc63f] sm:size-7"
                  >
                    <PlusIcon open={open} />
                  </span>
                  <span className="text-[14px] font-semibold tracking-tight text-white sm:text-[15px]">
                    {item.title}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-4 pl-10 text-[14px] leading-[1.65] text-white/85 sm:pb-5 sm:pl-12 sm:text-[15px]">
                      {item.body}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Reveal>
  );
}

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="12"
      height="12"
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
