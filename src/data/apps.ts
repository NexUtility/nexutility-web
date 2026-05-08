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
    slug: "first-app",
    name: "Our first app",
    icon: "✦",
    tagline: "We're cooking the first NexUtility release. Catalog will fill in here as we ship.",
    status: "soon",
    platforms: ["Flutter", "iOS", "Android"],
    uses: { admob: true, revenueCat: true },
  },
];
