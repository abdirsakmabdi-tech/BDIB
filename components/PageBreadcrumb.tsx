import Link from "next/link";

type PageBreadcrumbProps = {
  current: string;
  className?: string;
  /** Light text for dark hero overlays */
  tone?: "light" | "dark";
};

export default function PageBreadcrumb({
  current,
  className = "",
  tone = "light",
}: PageBreadcrumbProps) {
  const homeClass =
    tone === "light"
      ? "text-white/85 transition-colors hover:text-white"
      : "text-[#036522] transition-opacity hover:opacity-70";
  const sepClass = tone === "light" ? "text-white/55" : "text-[#036522]/55";
  const currentClass = tone === "light" ? "text-white" : "text-pdib-title";

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex flex-wrap items-center gap-2.5 text-[14px] font-medium tracking-tight sm:text-[15px] ${className}`}
    >
      <Link href="/" className={homeClass}>
        Home
      </Link>
      <span aria-hidden="true" className={sepClass}>
        /
      </span>
      <span className={currentClass}>{current}</span>
    </nav>
  );
}
