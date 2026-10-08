"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { sectorIcons, type SectorIconKey } from "@/components/SectorIcons";

type CircleKind = "solid" | "split-light-top" | "split-dark-top";

type SectorCircle = {
  key: SectorIconKey;
  label: string;
  href: string;
  kind: CircleKind;
  /** Icon color: light glyph on dark fill, or dark glyph on light fill */
  ink: "light" | "dark";
  duration: string;
  delay: string;
  dragX: string;
  dragY: string;
};

/** Six featured priority sectors — matches the 2×3 circle motif */
const SECTORS: SectorCircle[] = [
  {
    key: "fisheries",
    label: "Fisheries",
    href: "/fisheries",
    kind: "split-light-top",
    ink: "dark",
    duration: "6.4s",
    delay: "0s",
    dragX: "10px",
    dragY: "-12px",
  },
  {
    key: "agriculture",
    label: "Agriculture",
    href: "/agriculture",
    kind: "solid",
    ink: "light",
    duration: "7.1s",
    delay: "0.35s",
    dragX: "-11px",
    dragY: "9px",
  },
  {
    key: "livestock",
    label: "Livestock",
    href: "/livestock",
    kind: "solid",
    ink: "light",
    duration: "6.6s",
    delay: "0.7s",
    dragX: "9px",
    dragY: "-10px",
  },
  {
    key: "renewable",
    label: "Energy",
    href: "/renewable-energy",
    kind: "solid",
    ink: "dark",
    duration: "7.4s",
    delay: "0.2s",
    dragX: "-9px",
    dragY: "11px",
  },
  {
    key: "tourism",
    label: "Tourism",
    href: "/tourism",
    kind: "solid",
    ink: "light",
    duration: "6.9s",
    delay: "0.55s",
    dragX: "11px",
    dragY: "-8px",
  },
  {
    key: "digital",
    label: "Digital",
    href: "/digital-economy",
    kind: "split-dark-top",
    ink: "dark",
    duration: "7.2s",
    delay: "0.9s",
    dragX: "-8px",
    dragY: "10px",
  },
];

const LIGHT = "#9fd4b4";
const DARK = "#3d8f5c";

function CircleFace({ kind }: { kind: CircleKind }) {
  if (kind === "solid") {
    return (
      <div
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: DARK }}
      />
    );
  }

  if (kind === "split-light-top") {
    return (
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div className="h-1/2 w-full" style={{ backgroundColor: LIGHT }} />
        <div className="h-1/2 w-full" style={{ backgroundColor: DARK }} />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden rounded-full">
      <div className="h-1/2 w-full" style={{ backgroundColor: DARK }} />
      <div className="h-1/2 w-full" style={{ backgroundColor: LIGHT }} />
    </div>
  );
}

function SectorCircleCard({ sector }: { sector: SectorCircle }) {
  const Icon = sectorIcons[sector.key];
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [springing, setSpringing] = useState(false);
  const origin = useRef({ x: 0, y: 0 });
  const pointerId = useRef<number | null>(null);
  const moved = useRef(false);

  const onPointerDown = useCallback(
    (e: ReactPointerEvent<HTMLAnchorElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      pointerId.current = e.pointerId;
      origin.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
      moved.current = false;
      setDragging(true);
      setSpringing(false);
    },
    [offset.x, offset.y],
  );

  const onPointerMove = useCallback(
    (e: ReactPointerEvent<HTMLAnchorElement>) => {
      if (!dragging || pointerId.current !== e.pointerId) return;
      const rawX = e.clientX - origin.current.x;
      const rawY = e.clientY - origin.current.y;
      if (Math.abs(rawX) > 3 || Math.abs(rawY) > 3) moved.current = true;
      const max = 56;
      setOffset({
        x: Math.max(-max, Math.min(max, rawX)),
        y: Math.max(-max, Math.min(max, rawY)),
      });
    },
    [dragging],
  );

  const release = useCallback(() => {
    if (!dragging) return;
    pointerId.current = null;
    setDragging(false);
    setSpringing(true);
    setOffset({ x: 0, y: 0 });
  }, [dragging]);

  useEffect(() => {
    if (!springing) return;
    const id = window.setTimeout(() => setSpringing(false), 580);
    return () => window.clearTimeout(id);
  }, [springing]);

  const onClick = useCallback((e: React.MouseEvent) => {
    // If the user dragged, don't navigate
    if (moved.current) e.preventDefault();
  }, []);

  const style = {
    "--bounce-duration": sector.duration,
    "--bounce-x": sector.dragX,
    "--bounce-y": sector.dragY,
    animationDelay: dragging || springing ? undefined : sector.delay,
    transform: dragging || springing
      ? `translate3d(${offset.x}px, ${offset.y}px, 0)`
      : undefined,
    transition: springing
      ? "transform 580ms cubic-bezier(0.22, 1.55, 0.36, 1)"
      : dragging
        ? "none"
        : undefined,
    zIndex: dragging ? 30 : 1,
  } as CSSProperties;

  return (
    <Link
      href={sector.href}
      aria-label={sector.label}
      className={`sector-circle group relative aspect-square w-full select-none outline-none ${
        dragging || springing ? "" : "split-circle-drag"
      }`}
      style={style}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={release}
      onPointerCancel={release}
      onClick={onClick}
      draggable={false}
    >
      <span
        className={`absolute inset-0 overflow-hidden rounded-full shadow-[0_8px_22px_rgba(3,101,34,0.16)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:shadow-[0_14px_28px_rgba(3,101,34,0.22)] group-focus-visible:ring-2 group-focus-visible:ring-[#036522]/50 group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-[#dff0e6] ${
          dragging ? "scale-[1.06] shadow-[0_16px_32px_rgba(3,101,34,0.28)]" : ""
        }`}
      >
        <CircleFace kind={sector.kind} />

        {/* Soft inner highlight */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-[10%] rounded-full bg-gradient-to-b from-white/25 to-transparent opacity-70"
        />

        {/* Icon — reads clearly on solid + split fills */}
        <span
          className={`sector-circle-icon pointer-events-none absolute inset-0 flex items-center justify-center ${
            dragging || springing ? "" : "sector-icon-counter"
          }`}
          style={
            {
              "--bounce-duration": sector.duration,
              animationDelay: sector.delay,
            } as CSSProperties
          }
        >
          <span
            className={`flex size-[54%] items-center justify-center rounded-full ${
              sector.kind === "solid"
                ? "bg-white/12 text-white"
                : "bg-white/80 text-[#036522] shadow-[0_2px_10px_rgba(3,101,34,0.12)]"
            } [&>span]:!size-full [&>span]:!border-0 [&>span]:!bg-transparent [&>span]:!text-inherit [&>span]:!shadow-none [&_svg]:!h-[62%] [&_svg]:!w-[62%]`}
          >
            <Icon />
          </span>
        </span>
      </span>

      <span className="sr-only">{sector.label}</span>
    </Link>
  );
}

/** Priority-sector circles under the left copy — float, drag, and spring */
export default function LeftCircleField() {
  return (
    <div className="relative z-0 mt-12 w-full shrink-0 overflow-visible sm:mt-14 lg:mt-16">
      <div className="grid w-full grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5">
        {SECTORS.map((sector) => (
          <SectorCircleCard key={sector.key} sector={sector} />
        ))}
      </div>
    </div>
  );
}
