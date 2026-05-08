# nexutility-web

NexUtility marketing site, app catalog, and legal pages (Privacy, Terms,
Support, Contact) — used as the privacy / support URL for our App Store and
Google Play submissions.

Built with **Astro 6** + **Tailwind v4** + **Geist**, deployed to **Cloudflare
Pages**.

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to ./dist
npm run preview  # serve the built site locally
```

## Stack

- Astro 6 (static output)
- Tailwind CSS v4 (via @tailwindcss/vite, no config file — tokens in `src/styles/global.css`)
- Geist Sans + Geist Mono (variable, self-hosted via @fontsource-variable)
- @astrojs/sitemap

## Routes

| Route      | Purpose                                                |
| ---------- | ------------------------------------------------------ |
| `/`        | Hero, principles, featured apps, legal CTA             |
| `/apps`    | Full catalog grouped by status (live / beta / soon)    |
| `/privacy` | Privacy Policy (AdMob, RevenueCat, ATT, GDPR, KVKK)    |
| `/terms`   | Terms of Service (subscriptions, EULA override)        |
| `/support` | Support contacts + FAQ                                 |
| `/contact` | Contact emails + quick links                           |
| `/404`     | Custom not-found page                                  |

## Adding an app

Edit `src/data/apps.ts`. Each entry shows up automatically on `/` (top 3) and
`/apps` (grouped by `status`).

```ts
{
  slug: "my-app",
  name: "My App",
  icon: "✦",
  tagline: "What it does in one sentence.",
  status: "live", // "live" | "beta" | "soon"
  platforms: ["iOS", "Android"],
  appStoreUrl: "https://apps.apple.com/...",
  playStoreUrl: "https://play.google.com/...",
  uses: { admob: true, revenueCat: true },
}
```

## Deploy — Cloudflare Pages

1. In the Cloudflare dashboard, create a new Pages project pointing at this
   repo.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Node version: `22` (env var `NODE_VERSION=22`)
5. Add the production domain (e.g. `nexutility.com`) under the Pages project's
   custom domains, then set the `site` value in `astro.config.mjs` to match.

`public/_headers` and `public/_redirects` are picked up automatically by
Cloudflare Pages.

## Legal placeholders

`/privacy` and `/terms` are template-grade documents. Before submitting any
app for App Store / Play Store review, replace the bracketed values
(`[Legal entity name]`, `[Registered address]`, `[Your jurisdiction]`,
`[Your venue]`) and have the documents reviewed by counsel.
