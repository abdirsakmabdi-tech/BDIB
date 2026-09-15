"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { navItems, type NavLink } from "@/lib/site";

const INK = "#3f3832";
const PRIMARY = "#23ba4a";

function navHref(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

function hasSubmenu(item: (typeof navItems)[number]) {
  return item.groups.some((group) => group.links.length > 0);
}

function submenuLinks(item: (typeof navItems)[number]): NavLink[] {
  return item.groups.flatMap((group) => group.links);
}

function NavLogo({ className }: { className: string }) {
  return (
    <img
      src="/Mylogo.png"
      alt="Puntland Development & Investment Bank"
      width={798}
      height={296}
      className={`w-auto object-contain object-left ${className}`}
    />
  );
}

export default function HeaderBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownId = useId();

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setOpenMenu(null);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  function openDesktopMenu(label: string) {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenMenu(label);
  }

  function scheduleCloseDesktopMenu() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  }

  const linkClass =
    "shrink-0 rounded-lg px-3 py-1.5 text-[14px] font-medium tracking-[0.01em] whitespace-nowrap transition-colors duration-200 hover:bg-black/5";

  const buttonClass =
    "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-pdib-primary px-4 py-2.5 text-[13px] font-bold tracking-[0.06em] whitespace-nowrap text-white uppercase shadow-sm transition-colors duration-200 hover:bg-pdib-primary-hover";

  const mainNavItems = navItems.filter((item) => item.variant !== "button");
  const ctaNavItems = navItems.filter((item) => item.variant === "button");

  function renderDesktopItem(
    item: (typeof navItems)[number],
    options?: { align?: "center" | "right" },
  ) {
    const withMenu = hasSubmenu(item);
    const isOpen = openMenu === item.label;
    const isButton = item.variant === "button";
    const panelId = `${dropdownId}-${item.label.replace(/\s+/g, "-")}`;
    const align = options?.align ?? (isButton ? "right" : "center");

    if (!withMenu) {
      return (
        <Link
          key={item.label}
          href={navHref(item.href)}
          className={isButton ? buttonClass : linkClass}
          style={isButton ? undefined : { color: INK }}
          onMouseEnter={scheduleCloseDesktopMenu}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <div
        key={item.label}
        className="relative"
        onMouseEnter={() => openDesktopMenu(item.label)}
        onMouseLeave={scheduleCloseDesktopMenu}
        onFocusCapture={() => openDesktopMenu(item.label)}
      >
        <Link
          href={navHref(item.href)}
          className={
            isButton
              ? buttonClass
              : `inline-flex items-center gap-1 ${linkClass} ${
                  isOpen ? "bg-black/5" : ""
                }`
          }
          style={isButton ? undefined : { color: INK }}
          aria-expanded={isOpen}
          aria-controls={panelId}
          aria-haspopup="true"
        >
          {item.label}
          <Chevron open={isOpen} size={13} />
        </Link>

        {isOpen ? (
          <OfferDropdown
            id={panelId}
            label={item.label}
            links={submenuLinks(item)}
            align={align}
            onMouseEnter={() => openDesktopMenu(item.label)}
            onNavigate={() => setOpenMenu(null)}
          />
        ) : null}
      </div>
    );
  }

  function renderMobileItem(item: (typeof navItems)[number]) {
    const withMenu = hasSubmenu(item);
    const expanded = mobileExpanded === item.label;
    const isButton = item.variant === "button";

    if (!withMenu) {
      return (
        <Link
          key={item.label}
          href={navHref(item.href)}
          className={
            isButton
              ? "m-4 rounded-full bg-white px-6 py-3 text-center text-[15px] font-bold tracking-[0.06em] text-pdib-primary uppercase"
              : "border-b border-white/25 px-6 py-4 text-[16px] font-medium tracking-[0.02em] text-white"
          }
          onClick={() => setMobileOpen(false)}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <div key={item.label} className="border-b border-white/25">
        <div className="flex items-stretch">
          <Link
            href={navHref(item.href)}
            className={`flex-1 px-6 py-4 text-[16px] font-medium tracking-[0.02em] ${
              isButton ? "font-bold text-white uppercase" : "text-white"
            }`}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </Link>
          <button
            type="button"
            className="grid w-14 place-items-center text-white"
            aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label} submenu`}
            aria-expanded={expanded}
            onClick={() => setMobileExpanded(expanded ? null : item.label)}
          >
            <Chevron open={expanded} />
          </button>
        </div>
        {expanded ? (
          <div className="bg-black/10 pb-4">
            {submenuLinks(item).map((link) => (
              <Link
                key={link.label}
                href={navHref(link.href)}
                className="block border-b border-white/10 px-6 py-3 pl-8 text-[15px] leading-snug text-white/95 last:border-b-0"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-black/5 bg-white">
      <div className="relative flex h-[76px] items-center gap-4 px-4 sm:px-[4vw] lg:px-[5vw]">
        <Link
          href="/"
          className="relative z-10 flex shrink-0 items-center"
          aria-label="Puntland Development & Investment Bank home"
        >
          <NavLogo className="h-7 sm:h-8 lg:h-9" />
        </Link>

        <nav
          aria-label="Primary"
          className="absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 lg:flex xl:gap-1.5"
        >
          {mainNavItems.map((item) => renderDesktopItem(item))}
          <Link
            href="/contact"
            className={linkClass}
            style={{ color: INK }}
            onMouseEnter={scheduleCloseDesktopMenu}
          >
            Contact
          </Link>
        </nav>

        <div className="relative z-10 ml-auto flex shrink-0 items-center gap-3">
          <div className="hidden items-center gap-2 lg:flex">
            {ctaNavItems.map((item) =>
              renderDesktopItem(item, { align: "right" }),
            )}
          </div>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full bg-white/90 shadow-sm lg:hidden"
            style={{ color: INK }}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <Hamburger dark />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="pointer-events-auto fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/45"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />

          <div className="relative z-10 flex h-[76px] items-center justify-between bg-white/95 px-4 sm:px-6">
            <Link
              href="/"
              className="flex shrink-0 items-center"
              aria-label="Puntland Development & Investment Bank home"
              onClick={() => setMobileOpen(false)}
            >
              <NavLogo className="h-8 sm:h-9" />
            </Link>
            <button
              type="button"
              className="grid size-11 place-items-center"
              style={{ color: INK }}
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="absolute top-[76px] right-0 bottom-0 z-10 flex w-[min(86vw,22rem)] flex-col overflow-y-auto sm:w-[min(42vw,24rem)]"
            style={{ backgroundColor: PRIMARY }}
          >
            {mainNavItems.map(renderMobileItem)}
            <Link
              href="/contact"
              className="border-b border-white/25 px-6 py-4 text-[16px] font-medium tracking-[0.02em] text-white"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            {ctaNavItems.map(renderMobileItem)}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function OfferDropdown({
  id,
  label,
  links,
  align = "center",
  onMouseEnter,
  onNavigate,
}: {
  id: string;
  label: string;
  links: NavLink[];
  align?: "center" | "right";
  onMouseEnter: () => void;
  onNavigate: () => void;
}) {
  return (
    <div
      id={id}
      role="menu"
      aria-label={`${label} submenu`}
      className={`absolute top-full z-40 mt-2 min-w-[220px] bg-white py-2 shadow-[0_8px_24px_rgba(15,23,42,0.12)] ${
        align === "right" ? "right-0" : "left-1/2 -translate-x-1/2"
      }`}
      style={{ animation: "pdibMegaIn 160ms ease-out" }}
      onMouseEnter={onMouseEnter}
    >
      {links.map((link) => (
        <Link
          key={link.label}
          role="menuitem"
          href={navHref(link.href)}
          className="block px-5 py-2.5 text-[14px] font-medium text-pdib-title transition-colors hover:bg-[#f5f5f5] hover:text-pdib-green"
          onClick={onNavigate}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

function Chevron({ open, size = 18 }: { open: boolean; size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Hamburger({ dark }: { dark: boolean }) {
  const color = dark ? INK : "#ffffff";
  return (
    <span className="flex flex-col gap-[5px]">
      <span className="block h-0.5 w-[22px]" style={{ backgroundColor: color }} />
      <span className="block h-0.5 w-[22px]" style={{ backgroundColor: color }} />
      <span className="block h-0.5 w-[22px]" style={{ backgroundColor: color }} />
    </span>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
    </svg>
  );
}
