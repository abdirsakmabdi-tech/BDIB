"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site";

const SCROLL_THRESHOLD = 56;
const BAR = "#ffffff";
const INK = "#3f3832";
const PRIMARY = "#23ba4a";

function navHref(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
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
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    function update() {
      ticking = false;
      const next = window.scrollY > SCROLL_THRESHOLD;
      setScrolled((prev) => (prev === next ? prev : next));
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setMobileOpen(false);
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

  const showBar = !isHome || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-[background-color,box-shadow] duration-300 ${
        showBar
          ? "border-b border-slate-200/90"
          : "pointer-events-none bg-transparent"
      }`}
      style={showBar ? { backgroundColor: BAR } : undefined}
    >
      {!showBar ? (
        <div className="pointer-events-none flex items-center justify-between px-6 pt-6 sm:px-[6.5vw] sm:pt-8">
          <a
            href="#home"
            className="pointer-events-auto flex shrink-0 items-center rounded-md bg-white px-3.5 py-2.5"
            aria-label="Puntland Development & Investment Bank home"
          >
            <NavLogo className="h-10 sm:h-12" />
          </a>
          <button
            type="button"
            className="pointer-events-auto grid size-10 shrink-0 place-items-center lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <Hamburger dark={false} />
          </button>
        </div>
      ) : (
        <div className="flex h-[68px] items-center justify-between gap-8 px-6 sm:h-[76px] sm:px-[6.5vw] lg:h-[92px]">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="Puntland Development & Investment Bank home"
          >
            <NavLogo className="h-10 sm:h-12 lg:h-[76px]" />
          </Link>

          <div className="flex shrink-0 items-center gap-4">
            <nav
              aria-label="Primary"
              className="hidden items-center gap-7 lg:flex xl:gap-9"
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={navHref(item.href)}
                  className="shrink-0 text-[15px] font-medium whitespace-nowrap transition-opacity hover:opacity-60"
                  style={{ color: INK }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="shrink-0 text-[15px] font-medium whitespace-nowrap transition-opacity hover:opacity-60"
                style={{ color: INK }}
              >
                Contact
              </Link>
            </nav>
            <button
              type="button"
              className="grid size-10 place-items-center lg:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <Hamburger dark />
            </button>
          </div>
        </div>
      )}

      {mobileOpen ? (
        <div className="pointer-events-auto fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/45"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />

          <div
            className="relative z-10 flex h-[68px] items-center justify-between px-4 sm:h-[76px] sm:px-6"
            style={{ backgroundColor: BAR }}
          >
            <Link
              href="/"
              className="flex shrink-0 items-center"
              aria-label="Puntland Development & Investment Bank home"
              onClick={() => setMobileOpen(false)}
            >
              <NavLogo className="h-10 sm:h-12" />
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
            className="absolute top-[68px] right-0 bottom-0 z-10 flex w-[min(86vw,22rem)] flex-col overflow-y-auto sm:top-[76px] sm:w-[min(42vw,24rem)]"
            style={{ backgroundColor: PRIMARY }}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={navHref(item.href)}
                className="border-b border-white/25 px-6 py-4 text-[17px] font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="border-b border-white/25 px-6 py-4 text-[17px] font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
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
