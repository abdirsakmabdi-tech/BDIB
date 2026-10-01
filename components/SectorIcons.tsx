import type { ComponentType, ReactNode } from "react";

type IconTone = "green" | "lime" | "ink" | "solid";

type IconProps = {
  className?: string;
  tone?: IconTone;
};

const toneClass: Record<IconTone, string> = {
  green: "border-2 border-[#036522] bg-white text-[#036522]",
  lime: "border-2 border-[#23ba4a] bg-white text-[#23ba4a]",
  ink: "border-2 border-[#1a1a1a] bg-white text-[#1a1a1a]",
  solid: "border-0 bg-[#036522] text-white",
};

const glyphClass = "h-10 w-10 sm:h-11 sm:w-11";

function IconShell({
  children,
  className = "",
  tone = "solid",
}: {
  children: ReactNode;
  className?: string;
  tone?: IconTone;
}) {
  return (
    <span
      className={`inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full transition-transform duration-300 group-hover:-translate-y-1 sm:h-24 sm:w-24 ${toneClass[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function FisheriesIcon({ className, tone }: IconProps) {
  return (
    <IconShell className={className} tone={tone}>
      <svg viewBox="0 0 48 48" fill="none" className={glyphClass} aria-hidden>
        <path
          d="M8 24c8-10 16-12 24-8 2.5 1.2 4.5 3 6 5.2-1.5 2.2-3.5 4-6 5.2-8 4-16 2-24-8Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M38 21.5 44 18v12l-6-3.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="16" cy="22.5" r="1.6" fill="currentColor" />
      </svg>
    </IconShell>
  );
}

export function AgricultureIcon({ className, tone }: IconProps) {
  return (
    <IconShell className={className} tone={tone}>
      <svg viewBox="0 0 48 48" fill="none" className={glyphClass} aria-hidden>
        <path d="M10 34h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M14 34c0-8 4-14 10-18 6 4 10 10 10 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M24 16v18" stroke="currentColor" strokeWidth="2" />
        <path
          d="M18 22c2-3 4-5 6-6 2 1 4 3 6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="24" cy="28" r="3.5" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    </IconShell>
  );
}

export function EducationIcon({ className, tone }: IconProps) {
  return (
    <IconShell className={className} tone={tone}>
      <svg viewBox="0 0 48 48" fill="none" className={glyphClass} aria-hidden>
        <path
          d="M24 12 8 20l16 8 16-8-16-8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M14 24v8c0 2.5 4.5 5 10 5s10-2.5 10-5v-8"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path d="M40 20v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="18" r="1.5" fill="currentColor" />
      </svg>
    </IconShell>
  );
}

export function LivestockIcon({ className, tone }: IconProps) {
  return (
    <IconShell className={className} tone={tone}>
      <svg viewBox="0 0 48 48" fill="none" className={glyphClass} aria-hidden>
        <ellipse cx="24" cy="26" rx="11" ry="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="15" cy="20" r="4.5" stroke="currentColor" strokeWidth="2" fill="none" />
        <path
          d="M11 17.5 8 14M19 17.5 22 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M17 34v5M21 35v5M27 35v5M31 34v5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </IconShell>
  );
}

export function RenewableIcon({ className, tone }: IconProps) {
  return (
    <IconShell className={className} tone={tone}>
      <svg viewBox="0 0 48 48" fill="none" className={glyphClass} aria-hidden>
        <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
        <path
          d="M24 21 18 9c4 1.2 8 1.2 12 0L24 21Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M26.5 25.5 39 30c-2.2-3.2-3.2-6.5-3-10.5L26.5 25.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M21.5 25.5 12 19c.4 4-.6 7.3-3 10.5l12.5-4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M24 27v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </IconShell>
  );
}

export function InfrastructureIcon({ className, tone }: IconProps) {
  return (
    <IconShell className={className} tone={tone}>
      <svg viewBox="0 0 48 48" fill="none" className={glyphClass} aria-hidden>
        <path
          d="M12 38V20l8-6 8 6v18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M28 24h10v14H28"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M16 26h3M16 32h3M22 26h3M22 32h3M31 28h3M31 34h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 38h30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </IconShell>
  );
}

export function ManufacturingIcon({ className, tone }: IconProps) {
  return (
    <IconShell className={className} tone={tone}>
      <svg viewBox="0 0 48 48" fill="none" className={glyphClass} aria-hidden>
        <path
          d="M10 36V22l7 4V18l9 5V16l12 7v13H10Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M16 28v4M22 28v4M28 28v4M34 28v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M34 14v5M38 16v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </IconShell>
  );
}

export function DigitalIcon({ className, tone }: IconProps) {
  return (
    <IconShell className={className} tone={tone}>
      <svg viewBox="0 0 48 48" fill="none" className={glyphClass} aria-hidden>
        <rect
          x="12"
          y="12"
          width="24"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path d="M18 36h12M24 30v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M17 18h8M17 23h14M17 27h11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </IconShell>
  );
}

export function HealthIcon({ className, tone }: IconProps) {
  return (
    <IconShell className={className} tone={tone}>
      <svg viewBox="0 0 48 48" fill="none" className={glyphClass} aria-hidden>
        <path
          d="M24 36c-1 0-12-7-12-15.5C12 16 15 13 18.5 13c2.2 0 4 1.1 5.5 2.9C25.5 14.1 27.3 13 29.5 13 33 13 36 16 36 20.5 36 29 25 36 24 36Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M24 19v8M20 23h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </IconShell>
  );
}

export function MiningIcon({ className, tone }: IconProps) {
  return (
    <IconShell className={className} tone={tone}>
      <svg viewBox="0 0 48 48" fill="none" className={glyphClass} aria-hidden>
        <path
          d="M14 36 24 14l10 22H14Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M18 28h12M20 32h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 36h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 18l6-4M32 22l6 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </IconShell>
  );
}

export function WomenYouthIcon({ className, tone }: IconProps) {
  return (
    <IconShell className={className} tone={tone}>
      <svg viewBox="0 0 48 48" fill="none" className={glyphClass} aria-hidden>
        <circle cx="18" cy="16" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <path
          d="M12 32c0-4 2.5-7 6-7s6 3 6 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="32" cy="18" r="3.5" stroke="currentColor" strokeWidth="2" fill="none" />
        <path
          d="M26 34c0-3.5 2.2-6 6-6s6 2.5 6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M22 22h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </IconShell>
  );
}

export function TourismIcon({ className, tone }: IconProps) {
  return (
    <IconShell className={className} tone={tone}>
      <svg viewBox="0 0 48 48" fill="none" className={glyphClass} aria-hidden>
        <path
          d="M10 34c4-2 8-3 14-3s10 1 14 3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M14 30c2-8 5-14 10-18 5 4 8 10 10 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M24 12v4M18 22h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="20" r="2" fill="currentColor" />
      </svg>
    </IconShell>
  );
}

export const sectorIcons = {
  fisheries: FisheriesIcon,
  agriculture: AgricultureIcon,
  education: EducationIcon,
  livestock: LivestockIcon,
  renewable: RenewableIcon,
  infrastructure: InfrastructureIcon,
  manufacturing: ManufacturingIcon,
  digital: DigitalIcon,
  health: HealthIcon,
  mining: MiningIcon,
  womenYouth: WomenYouthIcon,
  tourism: TourismIcon,
} as const;

export type SectorIconKey = keyof typeof sectorIcons;

export type SectorIconComponent = ComponentType<IconProps>;

export const iconTones: IconTone[] = ["green", "lime", "ink", "solid"];
