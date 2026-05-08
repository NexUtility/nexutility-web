export type AppStatus = "live" | "beta" | "soon";

export interface App {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description?: string;
  status: AppStatus;
  platforms: ("iOS" | "Android" | "Flutter")[];
  appStoreUrl?: string;
  playStoreUrl?: string;
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
      "Cross-border marketplace seller profit calculator. Trendyol, Hepsiburada, Amazon, Etsy and more — one app.",
    description:
      "Pick a marketplace, enter cost and sell price, see net profit, margin, ROI and breakeven instantly. Designed for Turkish sellers expanding globally.",
    status: "soon",
    platforms: ["Flutter", "Android"],
    uses: { admob: true, revenueCat: true },
  },
];
