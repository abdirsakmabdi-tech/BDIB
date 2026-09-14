import type { ReactNode } from "react";

type IconProps = { className?: string };

const glyphClass = "h-9 w-9 text-pdib-green sm:h-10 sm:w-10";

function IconShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-[3px] border-pdib-green bg-white shadow-sm transition-transform duration-500 group-hover:-translate-y-1 sm:h-20 sm:w-20 ${className}`}
    >
      {children}
    </span>
  );
}

export function FisheriesIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <svg viewBox="0 0 48 48" fill="none" className={glyphClass} aria-hidden>
        <path
          d="M8 24c8-10 16-12 24-8 2.5 1.2 4.5 3 6 5.2-1.5 2.2-3.5 4-6 5.2-8 4-16 2-24-8Z"
          fill="currentColor"
        />
        <path d="M38 21.5 44 18v12l-6-3.5" fill="currentColor" />
        <circle cx="16" cy="22.5" r="1.6" fill="white" />
      </svg>
    </IconShell>
  );
}

export function AgricultureIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <svg viewBox="0 0 48 48" fill="none" className={glyphClass} aria-hidden>
        <path
          d="M10 34h28v3H10v-3Z"
          fill="currentColor"
        />
        <path
          d="M14 34c0-8 4-14 10-18 6 4 10 10 10 18"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M24 16v18" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M18 22c2-3 4-5 6-6 2 1 4 3 6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M8 30c2-4 4-6 6-7M40 30c-2-4-4-6-6-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </IconShell>
  );
}

export function EducationIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <svg viewBox="0 0 48 48" fill="none" className={glyphClass} aria-hidden>
        <path
          d="M24 10 6 18l18 8 18-8-18-8Z"
          fill="currentColor"
        />
        <path
          d="M12 22v8c0 2.5 5.4 5.5 12 5.5s12-3 12-5.5v-8"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
        />
        <path d="M40 18v12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </IconShell>
  );
}

export function LivestockIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <svg viewBox="0 0 48 48" fill="none" className={glyphClass} aria-hidden>
        <ellipse cx="24" cy="26" rx="12" ry="9" fill="currentColor" />
        <circle cx="14" cy="20" r="5" fill="currentColor" />
        <path d="M10 17.5 7 14M18 17.5 21 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="12.5" cy="19.5" r="1" fill="white" />
        <path d="M16 34v5M20 35v5M28 35v5M32 34v5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </IconShell>
  );
}

export function RenewableIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <svg viewBox="0 0 48 48" fill="none" className={glyphClass} aria-hidden>
        <circle cx="24" cy="24" r="3.5" fill="currentColor" />
        <path
          d="M24 20.5 18 8c4 1.5 8 1.5 12 0L24 20.5Z"
          fill="currentColor"
        />
        <path
          d="M26.8 25.5 40 30c-2.5-3.5-3.5-7-3.2-11.2L26.8 25.5Z"
          fill="currentColor"
        />
        <path
          d="M21.2 25.5 11.2 18.8C11.5 23 10.5 26.5 8 30l13.2-4.5Z"
          fill="currentColor"
        />
        <path d="M24 28v12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </IconShell>
  );
}

export function InfrastructureIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <svg viewBox="0 0 48 48" fill="none" className={glyphClass} aria-hidden>
        <path
          d="M10 38V18l8-6 8 6v20H10Z"
          fill="currentColor"
        />
        <path d="M26 22h12v16H26V22Z" fill="currentColor" />
        <path d="M14 24h4v4h-4v-4Zm0 8h4v4h-4v-4Zm8-8h4v4h-4v-4Zm0 8h4v4h-4v-4Zm12-4h4v4h-4v-4Zm0 8h4v4h-4v-4Z" fill="white" />
      </svg>
    </IconShell>
  );
}

export function ManufacturingIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <svg viewBox="0 0 48 48" fill="none" className={glyphClass} aria-hidden>
        <path
          d="M8 38V22l8 5V16l10 6V14l14 8v16H8Z"
          fill="currentColor"
        />
        <path d="M14 30h3v4h-3v-4Zm7 0h3v4h-3v-4Zm7 0h3v4h-3v-4Zm7 0h3v4h-3v-4Z" fill="white" />
        <path d="M34 14v6M38 16v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </IconShell>
  );
}

export function DigitalIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <svg viewBox="0 0 48 48" fill="none" className={glyphClass} aria-hidden>
        <rect x="10" y="12" width="28" height="20" rx="2" fill="currentColor" />
        <path d="M18 36h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 32v4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M15 18h10M15 23h18M15 27h14" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </IconShell>
  );
}

export function HealthIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <svg viewBox="0 0 48 48" fill="none" className={glyphClass} aria-hidden>
        <path
          d="M24 38c-1.2 0-14-8.2-14-18 0-5 3.6-8.5 8-8.5 2.6 0 4.7 1.3 6 3.3 1.3-2 3.4-3.3 6-3.3 4.4 0 8 3.5 8 8.5 0 9.8-12.8 18-14 18Z"
          fill="currentColor"
        />
        <path d="M24 18v10M19 23h10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
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
} as const;

export type SectorIconKey = keyof typeof sectorIcons;
