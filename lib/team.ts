export type Member = {
  slug: string;
  name: string;
  role: string;
  src: string;
  phone: string;
  fax: string;
  email: string;
  detail: string;
  languages: string;
  degrees: string[];
};

export const boardMembers: Member[] = [
  {
    slug: "abdikarim-mohamed",
    name: "Abdikarim Mohamed",
    role: "Chairperson",
    src: "/team/team-board-1.jpg",
    phone: "+252 90 123 4001",
    fax: "+252 90 123 4099",
    email: "a.mohamed@pdib.so",
    detail: "Chairs the Board of Directors and oversees PDIB’s strategic direction.",
    languages: "Somali, English, Arabic",
    degrees: ["MBA, Strategic Management", "BA, Economics"],
  },
  {
    slug: "fadumo-hassan",
    name: "Fadumo Hassan",
    role: "Vice Chairperson",
    src: "/team/team-board-2.jpg",
    phone: "+252 90 123 4002",
    fax: "+252 90 123 4099",
    email: "f.hassan@pdib.so",
    detail: "Supports Board governance and chairs the finance and audit committee.",
    languages: "Somali, English",
    degrees: ["MSc, Finance", "BCom, Accounting"],
  },
  {
    slug: "ahmed-yusuf",
    name: "Ahmed Yusuf",
    role: "Board Member",
    src: "/team/team-board-3.jpg",
    phone: "+252 90 123 4003",
    fax: "+252 90 123 4099",
    email: "a.yusuf@pdib.so",
    detail: "Advises on private-sector growth, investment, and risk oversight.",
    languages: "Somali, English",
    degrees: ["MA, Development Economics", "BA, Business Administration"],
  },
];

export const executiveMembers: Member[] = [
  {
    slug: "mohamed-said",
    name: "Mohamed Said",
    role: "Managing Director",
    src: "/team/team-exec-1.jpg",
    phone: "+252 90 123 4101",
    fax: "+252 90 123 4099",
    email: "m.said@pdib.so",
    detail: "Leads day-to-day management and delivery of PDIB’s development mandate.",
    languages: "Somali, English",
    degrees: ["MBA, Banking & Finance", "BSc, Economics"],
  },
  {
    slug: "amina-abdi",
    name: "Amina Abdi",
    role: "Chief Finance Officer",
    src: "/team/team-exec-2.jpg",
    phone: "+252 90 123 4102",
    fax: "+252 90 123 4099",
    email: "a.abdi@pdib.so",
    detail: "Oversees treasury, financial reporting, and capital planning.",
    languages: "Somali, English, Arabic",
    degrees: ["CPA", "MSc, Accounting", "BA, Finance"],
  },
  {
    slug: "hassan-warsame",
    name: "Hassan Warsame",
    role: "Head of Operations",
    src: "/team/team-exec-3.jpg",
    phone: "+252 90 123 4103",
    fax: "+252 90 123 4099",
    email: "h.warsame@pdib.so",
    detail: "Manages credit operations, portfolio quality, and branch delivery.",
    languages: "Somali, English",
    degrees: ["MSc, Operations Management", "BA, Public Administration"],
  },
];

export const allMembers = [...boardMembers, ...executiveMembers];

export function getMember(slug: string) {
  return allMembers.find((member) => member.slug === slug);
}
