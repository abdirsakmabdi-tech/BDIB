export type NavLink = { href: string; label: string };

export type NavItem = {
  href: string;
  label: string;
  kicker: string;
  groups: { title: string; links: NavLink[] }[];
  variant?: "link" | "button";
};

export const navItems: NavItem[] = [
  {
    href: "/",
    label: "Home",
    kicker: "Puntland Development & Investment Bank",
    groups: [],
  },
  {
    href: "/about",
    label: "About us",
    kicker: "Puntland Development & Investment Bank",
    groups: [
      {
        title: "About us",
        links: [
          { href: "/about/history", label: "Our History" },
          { href: "/about/mission-vision", label: "Mission and Vision" },
          { href: "/team", label: "Our team" },
          {
            href: "/about/corporate-governance",
            label: "Corporate Governance",
          },
        ],
      },
    ],
  },
  {
    href: "#what-we-do",
    label: "What we offer",
    kicker: "Financial solutions, interventions, and priority sectors",
    groups: [
      {
        title: "What we offer",
        links: [
          { href: "/financial", label: "Financial" },
          {
            href: "/specialized-interventions",
            label: "Specialized interventions",
          },
          { href: "#focus-areas", label: "Priority Sectors" },
        ],
      },
    ],
  },
  {
    href: "#news",
    label: "News & Insights",
    kicker: "Updates from PDIB",
    groups: [],
  },
  {
    href: "#how-to-apply",
    label: "Apply for funding",
    kicker: "How to apply, business plans, and requirements",
    variant: "button",
    groups: [
      {
        title: "Apply for funding",
        links: [
          { href: "#how-to-apply", label: "How to Apply" },
          { href: "#business-plan-outline", label: "Business Plan Outline" },
          {
            href: "#application-requirements",
            label: "Application requirements",
          },
        ],
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
    title: "About us",
    href: "/about",
    summary:
      "Puntland’s leading development finance institution, supporting sustainable economic growth",
  },
  {
    title: "Our History",
    href: "/about/history",
    summary: "The story of the Puntland Development & Investment Bank",
  },
  {
    title: "Mission and Vision",
    href: "/about/mission-vision",
    summary: "PDIB vision and mission for sustainable development in Puntland",
  },
  {
    title: "Corporate Governance",
    href: "/about/corporate-governance",
    summary:
      "PDIB corporate governance, transparency, and accountability framework",
  },
  {
    title: "What we offer",
    href: "#what-we-do",
    summary:
      "Financial solutions, specialized interventions, and priority sectors",
  },
  {
    title: "Financial",
    href: "/financial",
    summary:
      "PDIB financial interventions — term loans and project financing for Puntland",
  },
  {
    title: "Specialized interventions",
    href: "/specialized-interventions",
    summary:
      "PDIB special programmes — Youth Step-Up Loans and SME Women Prosper Loans",
  },
  {
    title: "Priority Sectors",
    href: "#focus-areas",
    summary:
      "PDIB priority sectors: livestock, fisheries, agriculture, energy, and infrastructure",
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
    title: "Mining & Natural Resources",
    href: "/mining-natural-resources",
    summary:
      "PDIB financing for responsible mining, quarrying, and natural resource ventures in Puntland",
  },
  {
    title: "Women and Youth Led Business",
    href: "/women-youth-led-business",
    summary:
      "PDIB financing for women- and youth-led enterprises that create jobs across Puntland",
  },
  {
    title: "Apply for funding",
    href: "#how-to-apply",
    summary: "How to apply, business plan outline, and application requirements",
  },
  {
    title: "Our team",
    href: "/team",
    summary: "PDIB Board of Directors and management team",
  },
  {
    title: "News & Insights",
    href: "#news",
    summary: "Latest updates from NDB",
  },
];
