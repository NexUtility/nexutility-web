export type AppStatus = "live" | "beta" | "soon";

export interface App {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description?: string;
  status: AppStatus;
  platforms: ("iOS" | "Android")[];
  /**
   * Canonical product page. Usually the per-app promo subdomain
   * (e.g. https://karly.nexutility.dev). Cards are clickable when set.
   */
  productUrl?: string;
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
    productUrl: "https://karly.nexutility.dev",
    uses: { admob: true, revenueCat: true },
  },
  {
    slug: "heirloom",
    name: "Heirloom",
    icon: "🖼",
    tagline:
      "Bring your family photographs back to life — faded, scratched, and torn pictures, restored.",
    description:
      "A photo restorer for old family pictures. Pick a photo, wait about a minute, and get a restored version back. Photos never leave the request; they're not stored on our servers or used to train any model.",
    status: "beta",
    platforms: ["Android"],
    productUrl: "https://heirloom.nexutility.dev",
    uses: { revenueCat: true },
  },
];
