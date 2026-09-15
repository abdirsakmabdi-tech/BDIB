"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { navItems, type NavLink } from "@/lib/site";
import SearchOverlay from "@/components/SearchOverlay";

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
  const [searchOpen, setSearchOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownId = useId();

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setOpenMenu(null);
        setSearchOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, searchOpen]);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileExpanded(null);
    setSearchOpen(false);
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
    "shrink-0 rounded-lg px-3 py-1.5 text-[15px] font-medium tracking-[0.01em] whitespace-nowrap transition-colors duration-200 hover:bg-black/5";

  const buttonClass =
    "inline-flex shrink-0 items-center gap-1.5 bg-pdib-primary px-4 py-2.5 text-[14px] font-bold tracking-[0.06em] whitespace-nowrap text-white uppercase shadow-sm transition-colors duration-200 hover:bg-pdib-primary-hover";

  const mainNavItems = navItems.filter((item) => item.variant !== "button");
  const ctaNavItems = navItems.filter((item) => item.variant === "button");

  function renderDesktopItem(item: (typeof navItems)[number]) {
    const withMenu = hasSubmenu(item);
    const isOpen = openMenu === item.label;
    const isButton = item.variant === "button";
    const panelId = `${dropdownId}-${item.label.replace(/\s+/g, "-")}`;

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
            oneColumn={isButton}
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
              ? "m-4 bg-white px-6 py-3 text-center text-[16px] font-bold tracking-[0.06em] text-pdib-primary uppercase"
              : "border-b border-white/25 px-6 py-4 text-[17px] font-medium tracking-[0.02em] text-white"
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
            className={`flex-1 px-6 py-4 text-[17px] font-medium tracking-[0.02em] ${
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
                className="block border-b border-white/10 px-6 py-3 pl-8 text-[15px] font-normal leading-snug text-white/95 last:border-b-0"
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
      <div className="flex h-[96px] items-center gap-4 px-4 pb-2 sm:px-[4vw] lg:gap-6 lg:px-[5vw]">
        <Link
          href="/"
          className="relative z-10 flex shrink-0 items-center"
          aria-label="Puntland Development & Investment Bank home"
        >
          <NavLogo className="h-9 sm:h-10 lg:h-11" />
        </Link>

        <div className="relative z-10 ml-auto flex min-w-0 items-center gap-2 sm:gap-3 lg:gap-4">
          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex xl:gap-1.5"
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

          <button
            type="button"
            className="grid size-10 shrink-0 place-items-center transition-colors hover:bg-black/5"
            style={{ color: INK }}
            aria-label="Open search"
            onClick={() => {
              setMobileOpen(false);
              setOpenMenu(null);
              setSearchOpen(true);
            }}
          >
            <SearchIcon />
          </button>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            {ctaNavItems.map((item) => renderDesktopItem(item))}
          </div>

          <button
            type="button"
            className="grid size-10 shrink-0 place-items-center rounded-full bg-white/90 shadow-sm lg:hidden"
            style={{ color: INK }}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <Hamburger dark />
          </button>
        </div>
      </div>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

      {mobileOpen ? (
        <div className="pointer-events-auto fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/45"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />

          <div className="relative z-10 flex h-[96px] items-center justify-between bg-white/95 px-4 sm:px-6">
            <Link
              href="/"
              className="flex shrink-0 items-center"
              aria-label="Puntland Development & Investment Bank home"
              onClick={() => setMobileOpen(false)}
            >
              <NavLogo className="h-9 sm:h-10" />
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
            className="absolute top-[96px] right-0 bottom-0 z-10 flex w-[min(86vw,22rem)] flex-col overflow-y-auto sm:w-[min(42vw,24rem)]"
            style={{ backgroundColor: PRIMARY }}
          >
            {mainNavItems.map(renderMobileItem)}
            <Link
              href="/contact"
              className="border-b border-white/25 px-6 py-4 text-[17px] font-medium tracking-[0.02em] text-white"
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
  oneColumn = false,
  onMouseEnter,
  onNavigate,
}: {
  id: string;
  label: string;
  links: NavLink[];
  oneColumn?: boolean;
  onMouseEnter: () => void;
  onNavigate: () => void;
}) {
  const twoColumn = !oneColumn && links.length > 2;

  return (
    <div
      id={id}
      role="menu"
      aria-label={`${label} submenu`}
      className={`absolute top-full left-0 z-40 mt-1 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.12)] ${
        twoColumn
          ? "grid min-w-[420px] grid-cols-2 gap-x-10 gap-y-1 px-6 py-4"
          : "min-w-[220px] py-2"
      }`}
      style={{ animation: "pdibMegaIn 160ms ease-out" }}
      onMouseEnter={onMouseEnter}
    >
      {links.map((link) => (
        <Link
          key={link.label}
          role="menuitem"
          href={navHref(link.href)}
          className={`block text-[15px] font-normal text-pdib-title transition-colors hover:bg-black/5 ${
            twoColumn ? "px-2 py-2.5" : "px-5 py-2.5"
          }`}
          style={{
            fontWeight: 400,
            fontVariationSettings: '"wght" 400',
          }}
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

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16.5 16.5L21 21" strokeLinecap="round" />
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
