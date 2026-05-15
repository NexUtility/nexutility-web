export type AppStatus = "live" | "beta" | "soon";

export interface App {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description?: string;
  status: AppStatus;
  platforms: ("iOS" | "Android")[];
  appStoreUrl?: string;
  playStoreUrl?: string;
  /**
   * Internal metadata only — not rendered on marketing surfaces.
   * Used for compliance summaries and per-app privacy supplements.
   */
  uses?: {
    admob?: boolean;
    revenueCat?: boolean;
  };
}

export const apps: App[] = [
  {
    slug: "karly",
    name: "Kârly",
    icon: "₺",
    tagline:
      "See your real profit before the listing goes live — across every marketplace you sell on.",
    description:
      "Pick a marketplace, plug in your cost and sell price, and get net profit, margin, ROI, and breakeven in seconds — every commission and fee already modelled. Designed for sellers expanding from Türkiye into the world.",
    status: "soon",
    platforms: ["Android"],
    uses: { admob: true, revenueCat: true },
  },
];
