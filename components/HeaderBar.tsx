"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { navItems, type NavLink } from "@/lib/site";
import SearchOverlay from "@/components/SearchOverlay";

const INK = "#3f3832";

function navHref(href: string) {
  if (!href) return "#";
  return href.startsWith("#") ? `/${href}` : href;
}

function hasSubmenu(item: (typeof navItems)[number]) {
  return item.groups.some((group) => group.links.length > 0);
}

function isMenuOnly(item: (typeof navItems)[number]) {
  return !item.href;
}

function submenuLinks(item: (typeof navItems)[number]): NavLink[] {
  return item.groups.flatMap((group) => group.links);
}

function NavLogo({ className }: { className: string }) {
  return (
    <img
      src="/Mylogo.png?v=16"
      alt="Puntland Development & Investment Bank"
      width={300}
      height={94}
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
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
    "group/nav relative shrink-0 px-3 py-2 text-[15px] font-medium tracking-tight whitespace-nowrap text-[#1a1a1a] transition-colors duration-200 hover:text-[#036522]";

  const buttonClass =
    "inline-flex shrink-0 items-center gap-1.5 bg-[#036522] px-5 py-2.5 text-[14px] font-semibold tracking-tight whitespace-nowrap text-white transition-colors duration-200 hover:bg-[#047a29]";

  const mainNavItems = navItems.filter((item) => item.variant !== "button");
  const ctaNavItems = navItems.filter((item) => item.variant === "button");

  const headerBarClass =
    "flex h-[112px] items-center gap-4 border-b border-black/8 px-8 transition-[height,gap] duration-300 ease-out sm:px-14 lg:h-[120px] lg:gap-10 lg:px-24";

  const logoClass =
    "h-14 origin-left transition-transform duration-300 ease-out sm:h-16 lg:h-[4.5rem] group-hover:scale-105";

  const mobileLogoClass =
    "h-14 origin-left transition-transform duration-300 ease-out sm:h-16 group-hover:scale-105";

  const mobileSheetTop = "top-[112px]";
  const mobileHeaderClass =
    "relative z-10 flex h-[112px] items-center justify-between border-b border-black/8 bg-white px-8 sm:px-14";

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
          onMouseEnter={scheduleCloseDesktopMenu}
        >
          {item.label}
          {!isButton ? (
            <span
              aria-hidden="true"
              className="absolute inset-x-3 bottom-0 h-0.5 origin-left scale-x-0 bg-[#036522] transition-transform duration-200 group-hover/nav:scale-x-100"
            />
          ) : null}
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
        {isMenuOnly(item) ? (
          <button
            type="button"
            className={`inline-flex items-center gap-1.5 ${linkClass} ${
              isOpen ? "text-[#036522]" : ""
            }`}
            aria-expanded={isOpen}
            aria-controls={panelId}
            aria-haspopup="true"
          >
            {item.label}
            <Chevron open={isOpen} size={12} />
            <span
              aria-hidden="true"
              className={`absolute inset-x-3 bottom-0 h-0.5 origin-left bg-[#036522] transition-transform duration-200 ${
                isOpen ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100"
              }`}
            />
          </button>
        ) : (
          <Link
            href={navHref(item.href)}
            className={
              isButton
                ? buttonClass
                : `inline-flex items-center gap-1.5 ${linkClass} ${
                    isOpen ? "text-[#036522]" : ""
                  }`
            }
            aria-expanded={isOpen}
            aria-controls={panelId}
            aria-haspopup="true"
          >
            {item.label}
            {!isButton ? <Chevron open={isOpen} size={12} /> : null}
            {!isButton ? (
              <span
                aria-hidden="true"
                className={`absolute inset-x-3 bottom-0 h-0.5 origin-left bg-[#036522] transition-transform duration-200 ${
                  isOpen ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100"
                }`}
              />
            ) : null}
          </Link>
        )}

        {isOpen ? (
          <OfferDropdown
            id={panelId}
            label={item.label}
            links={submenuLinks(item)}
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
              ? "m-4 bg-[#036522] px-6 py-3.5 text-center text-[15px] font-semibold tracking-tight text-white"
              : "border-b border-black/8 px-6 py-4 text-[16px] font-semibold tracking-tight text-[#1a1a1a]"
          }
          onClick={() => setMobileOpen(false)}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <div key={item.label} className="border-b border-black/8">
        <div className="flex items-stretch">
          {isMenuOnly(item) ? (
            <button
              type="button"
              className={`flex-1 px-6 py-4 text-left text-[16px] font-semibold tracking-tight ${
                isButton ? "text-[#036522]" : "text-[#1a1a1a]"
              }`}
              onClick={() => setMobileExpanded(expanded ? null : item.label)}
            >
              {item.label}
            </button>
          ) : (
            <Link
              href={navHref(item.href)}
              className={`flex-1 px-6 py-4 text-[16px] font-semibold tracking-tight ${
                isButton ? "text-[#036522]" : "text-[#1a1a1a]"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          )}
          <button
            type="button"
            className="grid w-14 place-items-center text-[#1a1a1a]"
            aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label} submenu`}
            aria-expanded={expanded}
            onClick={() => setMobileExpanded(expanded ? null : item.label)}
          >
            <Chevron open={expanded} />
          </button>
        </div>
        {expanded ? (
          <div className="bg-[#036522]/[0.06] pb-3">
            {submenuLinks(item).map((link) => (
              <Link
                key={link.label}
                href={navHref(link.href)}
                className="block px-6 py-2.5 pl-8 text-[15px] font-normal text-[#333] transition-colors hover:text-[#036522]"
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
    <header className="fixed inset-x-0 top-0 z-30 bg-white">
      <div className={headerBarClass}>
        <Link
          href="/"
          className="group relative z-10 flex shrink-0 items-center"
          aria-label="Puntland Development & Investment Bank home"
        >
          <NavLogo className={logoClass} />
        </Link>

        <div
          className={`relative z-10 ml-auto flex min-w-0 flex-col items-end justify-center transition-[gap] duration-300 ease-out ${
            scrolled ? "gap-0" : "gap-1.5"
          }`}
        >
          <div
            className={`hidden items-center gap-0 overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-out lg:flex ${
              scrolled
                ? "pointer-events-none mb-0 max-h-0 opacity-0"
                : "mb-0 max-h-8 opacity-100"
            }`}
            aria-hidden={scrolled}
          >
            <button
              type="button"
              tabIndex={scrolled ? -1 : undefined}
              className="px-2.5 text-[12px] font-medium tracking-tight text-[#333] transition-colors hover:text-[#036522]"
              onClick={() => {
                setMobileOpen(false);
                setOpenMenu(null);
                setSearchOpen(true);
              }}
            >
              Search
            </button>
            <span aria-hidden="true" className="mx-0.5 h-2.5 w-px bg-[#333]/30" />
            <Link
              href="/contact"
              tabIndex={scrolled ? -1 : undefined}
              className="px-2.5 text-[12px] font-medium tracking-tight text-[#333] transition-colors hover:text-[#036522]"
            >
              Contact us
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 lg:gap-3">
            <nav
              aria-label="Primary"
              className="hidden items-center gap-0.5 lg:flex"
            >
              {mainNavItems.map((item) => renderDesktopItem(item))}
            </nav>

            <div className="hidden shrink-0 items-center gap-2 lg:flex">
              {ctaNavItems.map((item) => renderDesktopItem(item))}
            </div>

            <button
              type="button"
              className="grid size-10 shrink-0 place-items-center lg:hidden"
              style={{ color: INK }}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <Hamburger dark />
            </button>
          </div>
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

          <div className={mobileHeaderClass}>
            <Link
              href="/"
              className="group flex shrink-0 items-center"
              aria-label="Puntland Development & Investment Bank home"
              onClick={() => setMobileOpen(false)}
            >
              <NavLogo className={mobileLogoClass} />
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
            className={`absolute ${mobileSheetTop} right-0 bottom-0 z-10 flex w-[min(86vw,22rem)] flex-col overflow-y-auto bg-white sm:w-[min(42vw,24rem)]`}
          >
            <button
              type="button"
              className="border-b border-black/8 px-6 py-4 text-left text-[16px] font-semibold tracking-tight text-[#1a1a1a]"
              onClick={() => {
                setMobileOpen(false);
                setSearchOpen(true);
              }}
            >
              Search
            </button>
            <Link
              href="/contact"
              className="border-b border-black/8 px-6 py-4 text-[16px] font-semibold tracking-tight text-[#1a1a1a]"
              onClick={() => setMobileOpen(false)}
            >
              Contact us
            </Link>
            {mainNavItems.map((item) => {
              const withMenu = hasSubmenu(item);
              const expanded = mobileExpanded === item.label;
              if (!withMenu) {
                return (
                  <Link
                    key={item.label}
                    href={navHref(item.href)}
                    className="border-b border-black/8 px-6 py-4 text-[16px] font-semibold tracking-tight text-[#1a1a1a]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <div key={item.label} className="border-b border-black/8">
                  <div className="flex items-stretch">
                    {isMenuOnly(item) ? (
                      <button
                        type="button"
                        className="flex-1 px-6 py-4 text-left text-[16px] font-semibold tracking-tight text-[#1a1a1a]"
                        onClick={() =>
                          setMobileExpanded(expanded ? null : item.label)
                        }
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        href={navHref(item.href)}
                        className="flex-1 px-6 py-4 text-[16px] font-semibold tracking-tight text-[#1a1a1a]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                    <button
                      type="button"
                      className="grid w-14 place-items-center text-[#1a1a1a]"
                      aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label} submenu`}
                      aria-expanded={expanded}
                      onClick={() =>
                        setMobileExpanded(expanded ? null : item.label)
                      }
                    >
                      <Chevron open={expanded} />
                    </button>
                  </div>
                  {expanded ? (
                    <div className="bg-[#036522]/[0.06] pb-3">
                      {submenuLinks(item).map((link) => (
                        <Link
                          key={link.label}
                          href={navHref(link.href)}
                          className="block px-6 py-2.5 pl-8 text-[15px] font-normal text-[#333] transition-colors hover:text-[#036522]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
            {ctaNavItems.map((item) => renderMobileItem(item))}
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
  onMouseEnter,
  onNavigate,
}: {
  id: string;
  label: string;
  links: NavLink[];
  onMouseEnter: () => void;
  onNavigate: () => void;
}) {
  return (
    <div
      id={id}
      role="menu"
      aria-label={`${label} submenu`}
      className="absolute top-full left-0 z-40 mt-0 min-w-[240px] border border-black/8 bg-white py-2 shadow-[0_12px_28px_rgba(15,23,42,0.1)]"
      style={{ animation: "pdibMegaIn 160ms ease-out" }}
      onMouseEnter={onMouseEnter}
    >
      {links.map((link) => (
        <Link
          key={link.label}
          role="menuitem"
          href={navHref(link.href)}
          className="block px-5 py-2.5 text-[15px] font-normal text-[#1a1a1a] transition-colors hover:bg-[#036522]/[0.06] hover:text-[#036522]"
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
