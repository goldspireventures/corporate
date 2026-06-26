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
  /** GitHub repo name under github.com/goldspireventures */
  githubRepo?: string;
};

export const PORTFOLIO_REGIONS: { id: PortfolioRegion; label: string; description: string }[] = [
  {
    id: "global",
    label: "UK, EU & Global",
    description: "Ventures built for European and international markets from day one.",
  },
  {
    id: "africa",
    label: "Africa",
    description: "Infrastructure and platforms designed for scale across African markets.",
  },
];

/** Canonical display order — global ventures first, then Africa-focused. */
export const PORTFOLIO_COMPANIES: PortfolioCompany[] = [
  {
    slug: "livia",
    name: "Livia",
    tagline: "People Business OS",
    description:
      "The operating system for appointment-led businesses — scheduling, guest experience, staff operations, and growth in one platform.",
    industry: "SaaS",
    region: "global",
    status: "live",
    externalUrl: "https://livia-hq.com",
    githubRepo: "livia",
    vision: "Every people business runs on infrastructure worthy of how important human service actually is.",
    problem:
      "Salon-shaped software fails wellness, hospitality, and modern service models. Owners juggle five tools before their first booking.",
    approach:
      "Livia is vertical-aware, AI-assisted, and guest-first — from first booking to long-term client relationships.",
    focusAreas: ["Scheduling", "Guest surfaces", "Staff operations", "Vertical intelligence"],
    gradient: "from-amber-400/25 via-yellow-900/20 to-navy",
  },
  {
    slug: "veil",
    name: "Veil",
    tagline: "Browser security copilot",
    description:
      "A browser extension and team cloud that helps people secure sensitive text in email, forms, and web apps before they send.",
    industry: "Security",
    region: "global",
    status: "live",
    externalUrl: "https://join-veil.goldspireventures.com",
    githubRepo: "veil",
    vision: "Sensitive communication stays protected by default — without forcing everyone into a new messaging app.",
    problem:
      "People paste credentials, PII, and confidential context into browsers and email every day. Training alone does not scale.",
    approach:
      "Veil detects risky patterns in the flow of work, offers in-context protection, and gives teams org policies with a lightweight cloud layer.",
    focusAreas: ["Browser extension", "Team policy", "In-context detection", "Hosted unlock"],
    gradient: "from-slate-500/20 via-zinc-900/30 to-navy",
  },
  {
    slug: "goldspire-studio",
    name: "Goldspire Studio",
    tagline: "Product design & engineering",
    description:
      "The Ventures product studio — scoped design and engineering for founders who need credible web and mobile releases, with fixed-price paths from proven templates.",
    industry: "Services",
    region: "global",
    status: "live",
    externalUrl: "https://goldspire.dev",
    githubRepo: "launch-stack",
    vision: "Founders get production-grade products in weeks — with clear scope, milestone delivery, and code they own.",
    problem:
      "Generic dev shops sell hours; founders need a repeatable path from idea to shippable product without losing IP or drowning in scope creep.",
    approach:
      "Goldspire Studio runs a blueprint-driven factory: branded clones and templates on a shared platform, with a private client portal and handover built in.",
    focusAreas: ["Fixed-scope delivery", "Web & mobile", "Client-owned repos", "Template catalog"],
    gradient: "from-yellow-500/20 via-amber-900/25 to-navy",
  },
  {
    slug: "mulah",
    name: "Mulah",
    tagline: "Subscription and personal finance platform",
    description:
      "Helping people understand, control, and grow their money through intelligent subscription management and financial clarity.",
    industry: "Fintech",
    region: "global",
    status: "building",
    githubRepo: "mulah",
    vision: "Personal finance that feels effortless — subscriptions, savings, and spending in one coherent system.",
    problem:
      "Recurring payments silently drain household budgets. Most tools react after the damage is done.",
    approach:
      "Mulah surfaces subscription intelligence, automates waste reduction, and connects insights to actionable financial habits.",
    focusAreas: ["Subscription intelligence", "Spend analytics", "Savings automation", "Open banking"],
    gradient: "from-emerald-500/15 via-teal-900/25 to-navy",
  },
  {
    slug: "simi",
    name: "S.I.M.I.",
    tagline: "Intelligent digital assistant ecosystem",
    description:
      "An ambient assistant layer that connects people to services, information, and action across devices and contexts.",
    industry: "AI",
    region: "global",
    status: "building",
    githubRepo: "simi",
    vision: "Assistants that understand intent, respect boundaries, and execute across the apps people already use.",
    problem: "Fragmented AI widgets create noise without orchestration. Users repeat themselves across every surface.",
    approach:
      "S.I.M.I. unifies context, memory policy, and tool use into a single intelligent layer with tenant-grade controls.",
    focusAreas: ["Ambient AI", "Multi-surface orchestration", "Privacy controls", "Agent tooling"],
    gradient: "from-violet-500/20 via-purple-900/30 to-navy",
  },
  {
    slug: "triforge",
    name: "Triforge",
    tagline: "Open-integrable infrastructure suite",
    description:
      "A platform company building three independent products — Groundline (mesh), Vouchline (proof), and Stillpath (continuity) — designed to integrate openly.",
    industry: "Infrastructure",
    region: "global",
    status: "building",
    githubRepo: "triforge",
    vision: "Distributed systems get connectivity, verifiable trust, and continuity paths without vendor lock-in.",
    problem:
      "Enterprise stacks fragment across routing, credentials, and runbooks — each solved in isolation with opaque dependencies.",
    approach:
      "Triforge ships three focused products on a shared integration philosophy: connect every node, prove it once, execute the plan.",
    focusAreas: ["Service mesh", "Verifiable credentials", "Continuity planning", "Open integration"],
    gradient: "from-indigo-500/15 via-slate-900/30 to-navy",
  },
  {
    slug: "valrolly",
    name: "Valrolly",
    tagline: "Events & experiences platform",
    description:
      "Infrastructure for event-led businesses — ticketing, operations, and guest experience. On a path to integrate with Livia's events vertical.",
    industry: "Events",
    region: "global",
    status: "building",
    githubRepo: "valrolly-events",
    vision: "Event operators run one coherent stack from promotion through door — not five disconnected tools.",
    problem:
      "Event software is either generic ticketing or bespoke spreadsheets. Operators lose margin to fragmentation.",
    approach:
      "Valrolly builds event-native workflows with room to fold into Livia where appointment-led and event-led businesses overlap.",
    focusAreas: ["Ticketing", "Guest flow", "Operator dashboards", "Livia events convergence"],
    gradient: "from-rose-500/15 via-fuchsia-900/25 to-navy",
  },
  {
    slug: "trustbase",
    name: "TrustBase",
    tagline: "Digital trust and reputation infrastructure",
    description:
      "Building the verification layer for how people, businesses, and institutions establish credibility — with a primary focus on African digital economies.",
    industry: "Identity & Trust",
    region: "africa",
    status: "building",
    githubRepo: "trustbase",
    vision:
      "A world where trust is portable, verifiable, and composable — starting with markets where digital identity matters most.",
    problem:
      "Reputation fragments across marketplaces, informal economies, and national ID systems. Fraud and opacity stall growth across the continent.",
    approach:
      "TrustBase aggregates signals into durable trust profiles with privacy-preserving verification and API-first distribution for African markets.",
    focusAreas: ["Reputation graphs", "Verification APIs", "Fraud resistance", "Cross-border trust"],
    gradient: "from-amber-500/20 via-orange-900/30 to-navy",
  },
  {
    slug: "move-ezflow",
    name: "MOVE",
    tagline: "Mobility and traffic infrastructure · EZFlow",
    description:
      "Intelligent systems for how people and goods move through African cities — routing, flow optimization, and operational visibility.",
    industry: "Mobility",
    region: "africa",
    status: "building",
    githubRepo: "move-ezflow",
    vision: "Urban mobility across Africa that adapts in real time instead of reacting to congestion after it forms.",
    problem:
      "Legacy traffic systems lack predictive intelligence. Fast-growing cities pay in time, emissions, and economic drag.",
    approach:
      "MOVE and EZFlow combine sensor-aware routing, operator dashboards, and demand shaping for modern mobility networks.",
    focusAreas: ["Flow optimization", "Operator intelligence", "Demand shaping", "Smart routing"],
    gradient: "from-cyan-500/15 via-slate-800/30 to-navy",
  },
  {
    slug: "japa",
    name: "Japa",
    tagline: "Migration and relocation ecosystem",
    description:
      "End-to-end infrastructure for Africans moving across borders — documentation, services, community, and compliance in one journey.",
    industry: "Infrastructure",
    region: "africa",
    status: "building",
    githubRepo: "japa",
    vision: "Relocation across Africa and the diaspora should feel guided and dignified, not like navigating opaque intermediaries.",
    problem:
      "Millions relocate annually without a trusted operating layer. Information asymmetry creates exploitation and failure.",
    approach:
      "Japa connects verified providers, structured pathways, and community knowledge into a coherent relocation stack for African movers.",
    focusAreas: ["Relocation pathways", "Provider network", "Compliance tooling", "Community layer"],
    gradient: "from-sky-500/15 via-blue-900/25 to-navy",
  },
];

export function getCompanyBySlug(slug: string): PortfolioCompany | undefined {
  return PORTFOLIO_COMPANIES.find((c) => c.slug === slug);
}

export function getCompaniesByRegion(region: PortfolioRegion): PortfolioCompany[] {
  return PORTFOLIO_COMPANIES.filter((c) => c.region === region);
}

export function countLiveProducts(): number {
  return PORTFOLIO_COMPANIES.filter((c) => c.status === "live" && c.industry !== "Services").length;
}
