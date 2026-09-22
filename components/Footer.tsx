import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden bg-[#036522] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/pdib-mark-hero-blend.png"
          alt=""
          fill
          quality={90}
          sizes="100vw"
          className="object-contain object-[92%_center] opacity-25 mix-blend-soft-light sm:object-[88%_center] lg:object-[85%_55%]"
        />
      </div>

      <div className="relative z-10 flex flex-col gap-12 px-6 py-20 sm:px-[6.5vw] sm:py-24 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-28">
        <Link
          href="/"
          className="shrink-0 font-sans text-[clamp(36px,5vw,56px)] leading-none font-semibold tracking-tight text-white"
          aria-label="Puntland Development & Investment Bank home"
        >
          PDIB
        </Link>

        <div className="flex flex-col gap-10 sm:flex-row sm:flex-wrap sm:gap-x-14 sm:gap-y-10 lg:gap-x-16 xl:gap-x-20">
          <div>
            <p className="text-[15px] font-semibold tracking-tight text-white">
              Hours
            </p>
            <p className="mt-3 text-[14px] leading-[1.55] text-white/90">
              Sunday to Thursday
              <br />
              8:00 AM – 4:00 PM
            </p>
          </div>

          <div>
            <p className="text-[15px] font-semibold tracking-tight text-white">
              Contact
            </p>
            <p className="mt-3 text-[14px] leading-[1.55] text-white/90">
              <a
                href="mailto:info@pdib.so"
                className="transition-opacity hover:opacity-80"
              >
                info@pdib.so
              </a>
              <br />
              <a
                href="https://pdib.so"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                pdib.so
              </a>
            </p>
          </div>

          <div>
            <p className="text-[15px] font-semibold tracking-tight text-white">
              Address
            </p>
            <p className="mt-3 text-[14px] leading-[1.55] text-white/90">
              Garowe
              <br />
              Puntland
              <br />
              Somalia
            </p>
          </div>

          <div className="flex items-start sm:pt-0.5">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PDIB on LinkedIn"
              className="inline-flex size-9 items-center justify-center rounded-md border border-white/80 text-white transition-colors hover:bg-white hover:text-[#036522]"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/15 px-6 py-4 sm:px-[6.5vw]">
        <p className="text-center text-[12px] text-white/65 sm:text-left">
          Copyright © {year} — Puntland Development &amp; Investment Bank
        </p>
      </div>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S.02 4.88.02 3.5 1.14 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.5h4.56V23H.22V8.5zM8.34 8.5h4.37v1.98h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7V23h-4.56v-6.6c0-1.57-.03-3.59-2.19-3.59-2.19 0-2.53 1.71-2.53 3.48V23H8.34V8.5z" />
    </svg>
  );
}
