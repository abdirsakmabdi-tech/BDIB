import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

export type FeatureSplitItem = {
  title: string;
  body: string;
  icon: ReactNode;
};

type FeatureSplitProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  linkHref?: string;
  linkLabel?: string;
  items: FeatureSplitItem[];
  /** Cover image shown on the back document card */
  panelSrc?: string;
  panelAlt?: string;
  /** Cover title on the back document */
  coverTitle?: string;
  /** TOC lines on the front document */
  tocItems?: string[];
  className?: string;
  reverse?: boolean;
  /** Hide the green document/image panel and show the list full width. */
  hidePanel?: boolean;
};

const DEFAULT_TOC = [
  "Site Information",
  "Grid Data",
  "Wetlands",
  "Topography",
  "Flood Zones",
  "Soil Types",
  "Zoning",
];

export default function FeatureSplit({
  eyebrow,
  title,
  intro,
  linkHref,
  linkLabel,
  items,
  panelSrc = "/pdib-mark-hero-blend.png",
  panelAlt = "",
  coverTitle = "PDIB Report",
  tocItems = DEFAULT_TOC,
  className = "",
  reverse = false,
  hidePanel = false,
}: FeatureSplitProps) {
  return (
    <section className={`overflow-hidden bg-white ${className}`}>
      <div
        className={`grid lg:items-stretch ${
          hidePanel
            ? "lg:grid-cols-1"
            : `lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`
        }`}
      >
        {/* Green visual panel — tilted document cards (matches reference) */}
        {hidePanel ? null : (
        <div
          aria-hidden="true"
          className="relative min-h-[340px] overflow-hidden bg-[#036522] sm:min-h-[420px] lg:min-h-[560px]"
        >
          {/* Back card — report cover */}
          <div className="absolute top-[8%] left-[2%] z-[1] w-[58%] max-w-[300px] -rotate-[32deg] sm:left-[6%] sm:w-[52%] sm:max-w-[320px] lg:left-[4%] lg:top-[10%] lg:w-[56%]">
            <div className="overflow-hidden rounded-[12px] bg-white p-[7px] shadow-[0_28px_60px_rgba(0,0,0,0.32)]">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[7px] bg-[#f4f6f4]">
                <div className="relative h-[48%] w-full overflow-hidden">
                  <Image
                    src={panelSrc}
                    alt={panelAlt}
                    fill
                    quality={85}
                    sizes="300px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex h-[52%] flex-col justify-between px-4 py-3.5 sm:px-5 sm:py-4">
                  <p
                    className="text-[16px] leading-[1.15] font-semibold tracking-tight text-[#1a1a1a] sm:text-[18px]"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    {coverTitle}
                  </p>
                  <div className="ml-auto grid size-8 place-items-center rounded-full bg-[#036522]/12">
                    <span className="text-[10px] font-bold tracking-wide text-[#036522]">
                      PDIB
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Front card — table of contents */}
          <div className="absolute top-[26%] right-[-2%] z-[2] w-[62%] max-w-[340px] rotate-[22deg] sm:right-[2%] sm:w-[56%] sm:max-w-[360px] lg:right-0 lg:top-[24%] lg:w-[60%]">
            <div className="overflow-hidden rounded-[12px] bg-white p-[7px] shadow-[0_32px_65px_rgba(0,0,0,0.34)]">
              <div className="aspect-[3/4] rounded-[7px] bg-white px-5 py-6 sm:px-6 sm:py-7">
                <p
                  className="text-[15px] leading-none font-semibold tracking-tight text-[#1a1a1a] sm:text-[17px]"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Table of Contents
                </p>
                <ol className="mt-5 space-y-3 sm:mt-6 sm:space-y-3.5">
                  {tocItems.slice(0, 7).map((item, i) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 text-[11px] leading-none text-[#333] sm:text-[12px]"
                    >
                      <span className="w-3.5 shrink-0 tabular-nums text-[#999]">
                        {i + 1}
                      </span>
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Feature list */}
        <div
          className={`flex flex-col justify-center px-8 py-12 text-left sm:px-12 sm:py-14 lg:px-14 lg:py-16 xl:px-16 ${
            hidePanel ? "w-full max-w-3xl" : ""
          }`}
        >
          {eyebrow ? (
            <p className="text-[12px] font-bold tracking-[0.18em] text-[#036522] uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2
            className={`max-w-[20ch] font-sans text-[22px] leading-[1.15] font-bold tracking-tight text-[#1a1a1a] sm:text-[28px] ${
              eyebrow ? "mt-2" : ""
            }`}
          >
            {title}
          </h2>
          {intro ? (
            <p className="mt-3 max-w-md text-[14px] leading-snug text-[#555]">
              {intro}
            </p>
          ) : null}

          {linkHref && linkLabel ? (
            <Link
              href={linkHref}
              className={`self-start text-[14px] font-medium text-[#036522] underline underline-offset-4 transition-opacity hover:opacity-70 ${
                eyebrow || intro ? "mt-6 mb-8" : "mb-8"
              }`}
            >
              {linkLabel}
            </Link>
          ) : (
            <div className="mb-8" />
          )}

          <ul className="list-none divide-y divide-black/10 border-y border-black/10 p-0">
            {items.map((item) => (
              <li
                key={item.title}
                className="group flex gap-4 px-3 py-6 transition-colors duration-200 hover:bg-[#f3faf5] sm:-mx-3 sm:gap-5 sm:px-3 sm:py-7"
              >
                <div className="grid size-12 shrink-0 place-items-center bg-[#eaf6ef] text-[#036522] transition-colors duration-200 group-hover:bg-[#036522] group-hover:text-white sm:size-14">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-sans text-[16px] leading-[1.3] font-bold tracking-tight text-[#1a1a1a] transition-colors duration-200 group-hover:text-[#036522] sm:text-[17px]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-snug text-[#555]">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function FeatureIcon({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6 sm:size-7"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}
