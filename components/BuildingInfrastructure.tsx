import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

const offers = [
  {
    id: "loans-financing",
    title: "Loans and Financing",
    body: "Offering various loan products tailored for businesses, agriculture, and infrastructure projects.",
    icon: "loans" as const,
  },
  {
    id: "financial-advisory",
    title: "Financial Advisory",
    body: "Providing guidance and support to entrepreneurs and businesses to enhance their financial management and operational efficiency.",
    icon: "advisory" as const,
  },
  {
    id: "capacity-building",
    title: "Capacity Building",
    body: "Investing in training and development programs for local financial institutions and businesses to strengthen the overall economic landscape.",
    icon: "capacity" as const,
  },
  {
    id: "risk-management",
    title: "Risk Management",
    body: "Implementing robust risk assessment and management practices to safeguard the bank's financial health and sustainability.",
    icon: "risk" as const,
  },
];

function OfferIcon({ type }: { type: (typeof offers)[number]["icon"] }) {
  const common = "size-7 text-[#5a8f6a] sm:size-8";
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: common,
    "aria-hidden": true as const,
  };

  if (type === "loans") {
    return (
      <svg {...props}>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10h18" />
        <circle cx="8" cy="14" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (type === "advisory") {
    return (
      <svg {...props}>
        <path d="M4 19V5a2 2 0 0 1 2-2h8l6 6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
        <path d="M14 3v5h5" />
        <path d="M8 13h8M8 17h5" />
      </svg>
    );
  }
  if (type === "capacity") {
    return (
      <svg {...props}>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5.5 19c1.5-3 4-4.5 6.5-4.5S17 16 18.5 19" />
        <path d="M17 4.5v3M18.5 6h-3" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <path d="M12 3 4 7v5c0 4.5 3.2 8.2 8 9 4.8-.8 8-4.5 8-9V7l-8-4Z" />
      <path d="M9.5 12.5 11 14l3.5-3.5" />
    </svg>
  );
}

function FeatureDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] overflow-hidden"
    >
      <div className="absolute -bottom-16 -left-16 size-[220px] rounded-full border-[18px] border-[#23ba4a]/25 sm:size-[280px] sm:border-[22px] lg:-bottom-20 lg:-left-20 lg:size-[340px]" />
      <div className="absolute -bottom-8 left-10 size-[140px] rounded-full border-[14px] border-[#23ba4a]/35 sm:left-16 sm:size-[180px] lg:left-20 lg:size-[220px]" />
      <div className="absolute bottom-6 left-24 size-16 rounded-full bg-[#23ba4a]/20 sm:bottom-10 sm:left-32 sm:size-20" />
    </div>
  );
}

export default function BuildingInfrastructure() {
  return (
    <section
      id="services-offered"
      className="bg-[#f4f5f0] px-8 py-14 sm:px-14 sm:py-16 lg:px-24 lg:py-20"
    >
      <Reveal>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.55fr)] lg:gap-6 xl:gap-7">
          {/* Left feature panel */}
          <aside className="relative flex min-h-[320px] flex-col overflow-hidden rounded-[1.5rem] bg-[#036522] px-8 py-9 sm:min-h-[380px] sm:px-10 sm:py-11 lg:min-h-full lg:px-11 lg:py-12">
            <FeatureDecor />
            <div className="relative z-10">
              <h2 className="max-w-[12ch] font-sans text-[clamp(28px,3.2vw,42px)] leading-[1.1] font-bold tracking-tight text-[#9fd4b4]">
                What We Offer
              </h2>
              <p className="mt-4 max-w-sm text-[15px] leading-[1.6] text-white/85 sm:text-[16px]">
                Financing, advisory, and governance support that helps
                enterprises and institutions grow across Puntland.
              </p>
              <Link
                href="/financial"
                className="mt-7 inline-flex items-center rounded-full border border-white/80 px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-white hover:text-[#036522]"
              >
                Learn More
              </Link>
            </div>
          </aside>

          {/* Right 2×2 cards */}
          <ul className="grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 sm:gap-5">
            {offers.map((item) => (
              <li key={item.id} id={item.id} className="scroll-mt-28">
                <article className="flex h-full flex-col rounded-[1.25rem] bg-white px-6 py-7 shadow-[0_8px_28px_rgba(15,23,15,0.06)] sm:px-7 sm:py-8">
                  <OfferIcon type={item.icon} />
                  <h3 className="mt-5 font-sans text-[clamp(16px,1.4vw,18px)] leading-snug font-bold tracking-tight text-pdib-title">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-pdib-text sm:text-[15px]">
                    {item.body}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
