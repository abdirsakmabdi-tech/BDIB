export type NavLink = { href: string; label: string };

export type NavItem = {
  href: string;
  label: string;
  kicker: string;
  groups: { title: string; links: NavLink[] }[];
};

export const navItems: NavItem[] = [
  {
    href: "#who-we-are",
    label: "Who we are",
    kicker: "Puntland Development & Investment Bank",
    groups: [
      {
        title: "About PDIB",
        links: [
          { href: "/about", label: "About us" },
          { href: "/about#vision", label: "Vision & Mission" },
          { href: "#who-we-are", label: "Core values" },
          { href: "#who-we-are", label: "Strategic Pillars" },
        ],
      },
      {
        title: "Leadership",
        links: [
          { href: "#our-team", label: "Board of Directors" },
          { href: "#our-team", label: "Executive Members" },
        ],
      },
    ],
  },
  {
    href: "#what-we-do",
    label: "What we do",
    kicker: "Financing Puntland’s productive sectors",
    groups: [
      {
        title: "Focus areas",
        links: [
          { href: "/fisheries", label: "Fisheries (the Blue Economy)" },
          { href: "/agriculture", label: "Agriculture Financing" },
          { href: "/livestock", label: "Livestock Financing" },
          { href: "/renewable-energy", label: "Renewable Energy" },
          { href: "#education-financing", label: "Education Financing" },
        ],
      },
      {
        title: "More sectors",
        links: [
          { href: "/social-infrastructure", label: "Social infrastructure" },
          { href: "#export-and-manufacturing", label: "Export and manufacturing" },
          { href: "#digital-economy", label: "Digital Economy" },
          { href: "#health-financing", label: "Health Financing" },
        ],
      },
    ],
  },
  {
    href: "#our-team",
    label: "Our team",
    kicker: "Board and executive leadership",
    groups: [
      {
        title: "Leadership",
        links: [
          { href: "#our-team", label: "Our Board Members" },
          { href: "#our-team", label: "Our Executive Members" },
        ],
      },
    ],
  },
  {
    href: "#work-with-us",
    label: "Work with us",
    kicker: "Partnerships, careers, and funding",
    groups: [
      {
        title: "Apply for funding",
        links: [
          { href: "#how-to-apply", label: "How to Apply" },
          { href: "#business-plan-outline", label: "Business Plan Outline" },
          { href: "#application-requirements", label: "Application requirements" },
        ],
      },
    ],
  },
  {
    href: "#news",
    label: "News & Insights",
    kicker: "Updates from PDIB",
    groups: [
      {
        title: "Media",
        links: [{ href: "#news", label: "News & Insights" }],
      },
    ],
  },
];

export const navLinks = navItems.map(({ href, label }) => ({ href, label }));

export type SearchResult = {
  title: string;
  href: string;
  summary: string;
};

export const searchableContent: SearchResult[] = [
  {
    title: "The 11th NDB Annual Meeting",
    href: "#home",
    summary: "May 14-15, 2026 · Moscow, Russia",
  },
  {
    title: "Who we are",
    href: "#who-we-are",
    summary: "About the Puntland Development & Investment Bank",
  },
  {
    title: "About us",
    href: "/about",
    summary:
      "Puntland’s leading development finance institution, supporting sustainable economic growth",
  },
  {
    title: "What we do",
    href: "#what-we-do",
    summary: "Focus areas: livestock, fisheries, agriculture, energy, and infrastructure",
  },
  {
    title: "Fisheries & the Blue Economy",
    href: "/fisheries",
    summary: "PDIB financing for Puntland’s fisheries, cold chain, and coastal livelihoods",
  },
  {
    title: "Agriculture Financing",
    href: "/agriculture",
    summary: "PDIB financing for Puntland’s agriculture sector and rural livelihoods",
  },
  {
    title: "Livestock Sector",
    href: "/livestock",
    summary:
      "Livestock is the backbone of Puntland’s economy — specialized finance for livestock farmers",
  },
  {
    title: "Renewable Energy",
    href: "/renewable-energy",
    summary:
      "PDIB promotes renewable energy adoption and climate financing in Puntland",
  },
  {
    title: "Social Infrastructure",
    href: "/social-infrastructure",
    summary:
      "PDIB finances schools, health facilities, water, and community infrastructure",
  },
  {
    title: "Work with us",
    href: "#work-with-us",
    summary: "Careers and procurement",
  },
  {
    title: "Our team",
    href: "#our-team",
    summary: "PDIB Board of Directors and executive leadership",
  },
  {
    title: "Our Board Members",
    href: "#our-team",
    summary: "PDIB Board of Directors",
  },
  {
    title: "Our Executive Members",
    href: "#our-team",
    summary: "PDIB executive leadership team",
  },
  {
    title: "News & Insights",
    href: "#news",
    summary: "Latest updates from NDB",
  },
];
