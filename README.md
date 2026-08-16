# Alif Pathan — Portfolio Website

A complete, self-contained Next.js website, ready to deploy to
[Vercel](https://vercel.com) as-is.

**Want to edit content, photos, or videos?** See [`HOW-TO-EDIT.md`](./HOW-TO-EDIT.md) —
written for non-programmers, no coding knowledge required.

## Tech stack

- [Next.js 14](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS
- Zero external dependencies at runtime beyond React/Next — no CMS, no
  database, no API keys required

## Project structure

```
app/                  → pages, layout, global styles
components/           → all the website sections (Hero, Stats, Portfolio, etc.)
data/content.ts        → ALL editable text, image paths, and video links
lib/youtube.ts         → turns a normal YouTube link into a working embed
public/images/         → every image on the site, organized by section
  ├─ profile/           → your profile / formal / about photos
  ├─ projects/           → long-form portfolio thumbnails
  ├─ shorts/             → Shorts thumbnails
  ├─ clients/             → client logos
  └─ testimonials/        → testimonial headshots
HOW-TO-EDIT.md          → plain-language editing guide
```

## Run it locally (optional)

You don't need to do this to deploy — Vercel builds the site for you. But
if you'd like to preview changes on your own computer first:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this folder to a GitHub repository (or upload it directly in the
   Vercel dashboard).
2. In [Vercel](https://vercel.com), click **Add New → Project** and select
   this repository/folder.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. Done. Your site is live at `your-project.vercel.app` (or a custom domain
   you connect in Vercel's settings).

Full step-by-step version (with GitHub instructions) is in
[`HOW-TO-EDIT.md`](./HOW-TO-EDIT.md#8-how-to-deploy-the-updated-website-to-vercel).

## Editing content

Everything you're likely to want to change — hero text, stats, project
titles/descriptions, YouTube and Shorts links, testimonials, client logos,
contact info, and social links — lives in **`data/content.ts`**. See
`HOW-TO-EDIT.md` for a guided walkthrough.

## Replacing images

Drop a same-named file into the right folder under `public/images/` (e.g.
`public/images/profile/profile.jpg`) and it's live on next deploy. See
`HOW-TO-EDIT.md` for the full list of image slots and their exact
filenames.

## Adding YouTube videos

Paste any standard YouTube URL (`youtube.com/watch?v=...`, `youtu.be/...`)
or Shorts URL (`youtube.com/shorts/...`) into the relevant `youtubeUrl` /
`shortsUrl` field in `data/content.ts`. The site parses the link
automatically and opens it in a pop-up player when clicked — no embed code
needed.
