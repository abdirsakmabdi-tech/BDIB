import type { ReactNode } from "react";

type PageContentProps = {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
};

/** Shared DBS-like content band under SectorHero */
export default function PageContent({
  children,
  className = "",
  narrow = false,
}: PageContentProps) {
  return (
    <article
      className={`bg-white px-8 pt-14 pb-20 sm:px-14 sm:pt-16 sm:pb-28 lg:px-24 ${className}`}
    >
      <div className={narrow ? "max-w-2xl" : "max-w-3xl"}>{children}</div>
    </article>
  );
}

export function PageSectionTitle({ children }: { children: ReactNode }) {
  return (
    <header className="mb-8 sm:mb-10">
      <h2 className="font-sans text-[clamp(18px,1.8vw,22px)] leading-[1.25] font-bold tracking-tight text-pdib-title">
        {children}
      </h2>
      <span
        aria-hidden="true"
        className="mt-2.5 block h-0.5 w-8 rounded-full bg-[#23ba4a]"
      />
    </header>
  );
}

export function PageBody({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-5 text-[16px] leading-[1.7] text-pdib-text sm:space-y-6 sm:text-[17px] [&_strong]:font-bold">
      {children}
    </div>
  );
}
