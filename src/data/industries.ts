export type Industry = {
  id: string;
  name: string;
  headline: string;
  detail: string;
  examples: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    id: "fintech",
    name: "Fintech",
    headline: "Financial tools where legacy rails fall short",
    detail:
      "Payments, subscriptions, savings, and credit — built for markets where traditional banking left gaps.",
    examples: ["Mulah", "TrustBase for onboarding verification"],
  },
  {
    id: "ai",
    name: "AI",
    headline: "Useful systems with clear limits",
    detail:
      "Assistants and operational tools that stay inside defined permissions — for teams, not demos.",
    examples: ["S.I.M.I.", "Veil in-context detection"],
  },
  {
    id: "commerce",
    name: "Commerce",
    headline: "Platforms built for repeat business",
    detail:
      "Booking, marketplaces, and service commerce — where the relationship matters as much as the transaction.",
    examples: ["Livia", "TrustBase merchant signals"],
  },
  {
    id: "mobility",
    name: "Mobility",
    headline: "Movement in growing cities",
    detail:
      "Routing, flow, and operator visibility for networks under pressure.",
    examples: ["MOVE", "EZFlow"],
  },
  {
    id: "identity",
    name: "Identity",
    headline: "Trust you can verify and reuse",
    detail:
      "Reputation and credentials that work across platforms and borders.",
    examples: ["TrustBase", "Japa compliance pathways"],
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    headline: "The layer others build on",
    detail:
      "Relocation, data, and operations — the work that makes everything else possible.",
    examples: ["Japa", "TrustBase APIs"],
  },
  {
    id: "saas",
    name: "SaaS",
    headline: "Software that fits the work",
    detail:
      "Operating systems for industries that have outgrown generic tools.",
    examples: ["Livia"],
  },
  {
    id: "security",
    name: "Security",
    headline: "Protection where people already work",
    detail:
      "Browser-native tools and team policy that reduce everyday data risk — without asking people to change how they work.",
    examples: ["Veil"],
  },
];

export const VISION_2035_AREAS = [
  { title: "Digital trust", desc: "Reputation that carries across economies" },
  { title: "Financial infrastructure", desc: "Rails for savings, payments, and commerce" },
  { title: "Commerce platforms", desc: "Service-led businesses at scale" },
  { title: "Applied intelligence", desc: "Assistants with real governance" },
  { title: "Urban mobility", desc: "Networks that adapt, not only report" },
  { title: "Emerging technology", desc: "Early bets where the curve is still forming" },
] as const;
