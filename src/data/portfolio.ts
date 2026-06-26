export type CompanyStatus = "live" | "building" | "stealth";
export type PortfolioRegion = "global" | "africa";

export type PortfolioCompany = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  industry: string;
  region: PortfolioRegion;
  status: CompanyStatus;
  externalUrl?: string;
  vision: string;
  problem: string;
  approach: string;
  focusAreas: string[];
  gradient: string;
  /** Product preview for portfolio cards (SVG mock or screenshot path). */
  previewImage?: string;
  /** GitHub repo name under github.com/goldspireventures */
  githubRepo?: string;
};

export const PORTFOLIO_REGIONS: { id: PortfolioRegion; label: string; description: string }[] = [
  {
    id: "global",
    label: "UK, EU & Global",
    description: "Ventures aimed at European and international markets from the start.",
  },
  {
    id: "africa",
    label: "Africa",
    description: "Platforms and infrastructure built for scale across African markets.",
  },
];

/** Canonical display order — global ventures first, then Africa-focused. */
export const PORTFOLIO_COMPANIES: PortfolioCompany[] = [
  {
    slug: "livia",
    name: "Livia",
    tagline: "People Business OS",
    description:
      "One platform for appointment-led businesses — scheduling, clients, staff, and the work between bookings.",
    industry: "SaaS",
    region: "global",
    status: "live",
    externalUrl: "https://livia-hq.com",
    githubRepo: "livia",
    vision: "Businesses built around people and appointments should run on software that fits how they work.",
    problem:
      "Most products assume one kind of operation. Owners piece together scheduling, messaging, payments, and staff coordination in tools that were never designed to work together.",
    approach:
      "Livia puts day-to-day operations in one place — configurable by trade and team size, without rebuilding the stack for every new location or line of business.",
    focusAreas: ["Scheduling", "Client experience", "Staff coordination", "Industry configuration"],
    gradient: "from-amber-400/25 via-yellow-900/20 to-navy",
    previewImage: "/images/portfolio/livia-preview.png",
  },
  {
    slug: "veil",
    name: "Veil",
    tagline: "Browser security for everyday work",
    description:
      "A browser extension and team layer that helps people handle sensitive text in email, forms, and web apps before it is sent.",
    industry: "Security",
    region: "global",
    status: "live",
    externalUrl: "https://join-veil.goldspireventures.com",
    githubRepo: "veil",
    vision: "People can work in the tools they already use, with sensitive data protected by default.",
    problem:
      "Credentials, personal data, and confidential details end up in drafts, tickets, and web forms every day. Training and policy alone do not change behaviour at the keyboard.",
    approach:
      "Veil meets people where they type — surfacing risk, redacting in context, and giving teams shared rules without a separate security product to learn.",
    focusAreas: ["Browser extension", "Team policy", "In-context detection", "Hosted unlock"],
    gradient: "from-slate-500/20 via-zinc-900/30 to-navy",
    previewImage: "/images/portfolio/veil-preview.png",
  },
  {
    slug: "goldspire-studio",
    name: "Goldspire Studio",
    tagline: "Product design & engineering",
    description:
      "The Ventures studio division — fixed-scope design and engineering for founders who need a credible product in market, with clear delivery and code they keep.",
    industry: "Services",
    region: "global",
    status: "live",
    externalUrl: "https://goldspire.dev",
    githubRepo: "launch-stack",
    vision: "Founders ship credible products on a defined timeline, with scope agreed upfront and ownership retained at handover.",
    problem:
      "Open-ended agency work drifts. Off-the-shelf templates rarely fit. Founders need a path that is fast, bounded, and theirs when it is done.",
    approach:
      "Goldspire Studio works from proven starting points — scoped builds, milestone delivery, client portal, and handover into repos the client controls.",
    focusAreas: ["Fixed-scope delivery", "Web & mobile", "Client-owned repos", "Template catalog"],
    gradient: "from-yellow-500/20 via-amber-900/25 to-navy",
    previewImage: "/images/portfolio/studio-preview.png",
  },
  {
    slug: "mulah",
    name: "Mulah",
    tagline: "Subscription and personal finance",
    description:
      "Helps households see where recurring money goes and act on it — subscriptions, spending, and savings in one view.",
    industry: "Fintech",
    region: "global",
    status: "building",
    githubRepo: "mulah",
    vision: "Personal finance that is easier to understand and easier to improve week by week.",
    problem:
      "Recurring charges are easy to miss and hard to untangle. Most apps show history after the fact, not what to do next.",
    approach:
      "Mulah focuses on subscription clarity first — what is running, what changed, and where there is room to adjust — then ties that to wider spending habits.",
    focusAreas: ["Subscription tracking", "Spend visibility", "Savings habits", "Open banking"],
    gradient: "from-emerald-500/15 via-teal-900/25 to-navy",
  },
  {
    slug: "simi",
    name: "S.I.M.I.",
    tagline: "Digital assistant layer",
    description:
      "An assistant layer that connects people to services, information, and action across the devices and apps they already use.",
    industry: "AI",
    region: "global",
    status: "building",
    githubRepo: "simi",
    vision: "Useful assistance without asking people to live inside another chat window.",
    problem:
      "Assistants are scattered across apps. Context does not travel, so people repeat the same requests and teams cannot govern what runs where.",
    approach:
      "S.I.M.I. ties together context, permissions, and tools in one layer — so help shows up in the right place with boundaries teams can actually enforce.",
    focusAreas: ["Cross-app context", "Permission model", "Tool integration", "Tenant controls"],
    gradient: "from-violet-500/20 via-purple-900/30 to-navy",
  },
  {
    slug: "triforge",
    name: "Triforge",
    tagline: "Open-integrable infrastructure",
    description:
      "Three products — Groundline (mesh), Vouchline (proof), and Stillpath (continuity) — built to integrate openly rather than lock in.",
    industry: "Infrastructure",
    region: "global",
    status: "building",
    githubRepo: "triforge",
    vision: "Teams get connectivity, verifiable trust, and continuity without betting the stack on one vendor.",
    problem:
      "Routing, credentials, and runbooks are usually bought and operated separately. That fragments responsibility and makes failures harder to trace.",
    approach:
      "Triforge ships focused products on a shared integration model — connect the mesh, prove what matters, run the plan when things break.",
    focusAreas: ["Service mesh", "Verifiable credentials", "Continuity planning", "Open integration"],
    gradient: "from-indigo-500/15 via-slate-900/30 to-navy",
  },
  {
    slug: "valrolly",
    name: "Valrolly",
    tagline: "Events & experiences",
    description:
      "Software for event-led operators — ticketing, on-the-day flow, and the back office that supports both.",
    industry: "Events",
    region: "global",
    status: "building",
    githubRepo: "valrolly-events",
    vision: "Operators run promotion, sales, and door from one coherent system instead of a patchwork of tools.",
    problem:
      "Ticketing products handle checkout. Everything else — staff, comms, on-site changes — often lives in spreadsheets and group chats.",
    approach:
      "Valrolly builds workflows around how events actually run, with room to align over time with other Ventures products where appointment and event models meet.",
    focusAreas: ["Ticketing", "On-site operations", "Operator dashboards", "Attendee experience"],
    gradient: "from-rose-500/15 via-fuchsia-900/25 to-navy",
  },
  {
    slug: "trustbase",
    name: "TrustBase",
    tagline: "Trust and reputation infrastructure",
    description:
      "Verification and reputation signals for people, businesses, and institutions — with a primary focus on African digital economies.",
    industry: "Identity & Trust",
    region: "africa",
    status: "building",
    githubRepo: "trustbase",
    vision: "Trust travels with you — verifiable where it matters, private where it must be.",
    problem:
      "Reputation sits in silos: marketplaces, informal trade, national ID. Buyers and sellers lack a shared, portable way to establish credibility.",
    approach:
      "TrustBase turns signals into durable profiles and APIs — verification that platforms can plug into without rebuilding trust from scratch each time.",
    focusAreas: ["Reputation signals", "Verification APIs", "Fraud resistance", "Cross-border trust"],
    gradient: "from-amber-500/20 via-orange-900/30 to-navy",
  },
  {
    slug: "move-ezflow",
    name: "MOVE",
    tagline: "Mobility and traffic · EZFlow",
    description:
      "Systems for how people and goods move through cities — routing, flow, and visibility for operators.",
    industry: "Mobility",
    region: "africa",
    status: "building",
    githubRepo: "move-ezflow",
    vision: "City movement improves before congestion becomes the default.",
    problem:
      "Many cities still rely on static signals and reactive fixes. Growth outpaces the tools meant to manage it.",
    approach:
      "MOVE and EZFlow combine live routing data, operator views, and demand shaping so networks can adapt instead of only report.",
    focusAreas: ["Flow optimisation", "Operator dashboards", "Demand shaping", "Routing"],
    gradient: "from-cyan-500/15 via-slate-800/30 to-navy",
  },
  {
    slug: "japa",
    name: "Japa",
    tagline: "Relocation infrastructure",
    description:
      "Structured support for people moving across borders — documentation, providers, and compliance in one journey.",
    industry: "Infrastructure",
    region: "africa",
    status: "building",
    githubRepo: "japa",
    vision: "Relocation should be navigable and fair, not a maze of opaque middlemen.",
    problem:
      "Millions move each year with fragmented advice and uneven access to reliable providers. Bad information is expensive.",
    approach:
      "Japa maps pathways, verified providers, and community knowledge into a single stack people can follow step by step.",
    focusAreas: ["Relocation pathways", "Provider network", "Compliance support", "Community knowledge"],
    gradient: "from-sky-500/15 via-blue-900/25 to-navy",
  },
];

export function getCompanyBySlug(slug: string): PortfolioCompany | undefined {
  return PORTFOLIO_COMPANIES.find((c) => c.slug === slug);
}

export function getCompaniesByRegion(region: PortfolioRegion): PortfolioCompany[] {
  return PORTFOLIO_COMPANIES.filter((c) => c.region === region);
}

const STATUS_SORT: Record<CompanyStatus, number> = { live: 0, building: 1, stealth: 2 };

function canonicalIndex(slug: string): number {
  const i = PORTFOLIO_COMPANIES.findIndex((c) => c.slug === slug);
  return i === -1 ? 999 : i;
}

/** Live first, then building, then stealth — preserves canonical order within each band. */
export function sortPortfolioCompanies(companies: readonly PortfolioCompany[]): PortfolioCompany[] {
  return [...companies].sort((a, b) => {
    const byStatus = STATUS_SORT[a.status] - STATUS_SORT[b.status];
    if (byStatus !== 0) return byStatus;
    return canonicalIndex(a.slug) - canonicalIndex(b.slug);
  });
}

export function getLivePortfolioCompanies(): PortfolioCompany[] {
  return sortPortfolioCompanies(PORTFOLIO_COMPANIES.filter((c) => c.status === "live"));
}

export function getBuildingPortfolioCompanies(): PortfolioCompany[] {
  return sortPortfolioCompanies(PORTFOLIO_COMPANIES.filter((c) => c.status === "building"));
}

export function getCompaniesByRegionSorted(region: PortfolioRegion): PortfolioCompany[] {
  return sortPortfolioCompanies(getCompaniesByRegion(region));
}

export function countLiveProducts(): number {
  return PORTFOLIO_COMPANIES.filter((c) => c.status === "live" && c.industry !== "Services").length;
}

export function countBuildingVentures(): number {
  return PORTFOLIO_COMPANIES.filter((c) => c.status === "building").length;
}

export function getLiveProductCompanies(): PortfolioCompany[] {
  return PORTFOLIO_COMPANIES.filter((c) => c.status === "live" && c.industry !== "Services");
}
