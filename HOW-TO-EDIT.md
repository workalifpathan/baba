# How to Edit Your Website

Welcome! This guide assumes you know **nothing** about coding. Follow the
steps below whenever you want to change something.

Almost everything you'll ever want to change lives in **one file**:

```
data/content.ts
```

Open it in any text editor (Notepad, TextEdit, VS Code, or even GitHub's
built-in editor in your browser). Find the line you want to change, edit the
text **between the quotation marks**, save the file, and re-deploy (see
Step 8 below).

---

## 1. How to change text

Open `data/content.ts`. Every piece of text on the site is there, organized
by section — `hero` for the top banner, `stats` for the numbers, `drives`
for the "What Drives Me" story, and so on.

Example — to change your headline, find this block near the top:

```ts
export const hero = {
  ...
  headline: ["Content Strategist", "Marketing Genius &", "Video Editor"],
  lead: "Crafting content and campaigns that grow brands, engage audiences, and make an impact on social media.",
  ...
};
```

Just change the words inside the quotes. Keep the quotes and commas exactly
where they are.

---

## 2. How to replace your profile photo

1. Find your new photo file on your computer.
2. Rename it to `profile.jpg`.
3. Drag it into the folder `public/images/profile/`, replacing the existing
   file.

That's it — the homepage automatically uses whatever image is at
`public/images/profile/profile.jpg`. No code changes needed.

(The "Stats" and "What Drives Me" sections no longer use separate photos —
only the top hero photo is used, to keep those sections clean and full-width.)

---

## 3. How to replace a portfolio thumbnail

Each project thumbnail is a numbered file inside `public/images/projects/`
(for long-form videos) or `public/images/shorts/` (for Shorts), for example
`project-01.jpg` or `short-02.jpg`.

1. Rename your new thumbnail image to match the file you want to replace
   (e.g. `project-01.jpg`).
2. Drag it into the matching folder, overwriting the old one.

Tip: If you add a YouTube link for a project (see Step 4), you can leave
the thumbnail blank and the site will automatically pull the thumbnail
straight from YouTube — you don't need an image file at all.

---

## 4. How to add a YouTube video

1. Open `data/content.ts`.
2. Find the `longFormProjects` list.
3. Find the project you want to add a video to, and paste the YouTube link
   between the quotes for `youtubeUrl`:

```ts
{
  title: "Happiness Money Can Buy",
  description: "Exploring the relationship between happiness and wealth.",
  youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  thumbnail: "/images/projects/project-01.jpg",
  size: "normal" as const,
},
```

4. Save the file. Clicking that thumbnail on the live site will now open
   the video in a pop-up player.

You can paste any normal YouTube link — `youtube.com/watch?v=...` or the
short `youtu.be/...` form both work.

---

## 5. How to add a YouTube Short

Same idea, but inside the `shorts` list, using the `shortsUrl` field:

```ts
{
  caption: "Focus on your own path.",
  views: "2.1M",
  shortsUrl: "https://www.youtube.com/shorts/AbCdEfGhIjK",
  thumbnail: "/images/shorts/short-01.jpg",
},
```

Paste a link in the format `youtube.com/shorts/...` (a normal
`youtube.com/watch?v=...` link also works fine here).

---

## 6. How to add a new project

1. Open `data/content.ts` and find the `longFormProjects` list (or `shorts`
   for a Short).
2. Copy one entire block, from its opening `{` to its closing `},`.
3. Paste the copy anywhere inside the same list (between other blocks).
4. Edit the `title`, `description`, and `youtubeUrl` for your new project.
5. Add a matching thumbnail image to `public/images/projects/` (or
   `public/images/shorts/`), and point `thumbnail` at it — or leave
   `thumbnail: ""` to auto-use the YouTube thumbnail.

---

## 7. How to change a social-media link

Open `data/content.ts` and find `socialLinks` near the top:

```ts
export const socialLinks = [
  { platform: "instagram", url: "https://www.instagram.com/alifpathan12/" },
  { platform: "facebook", url: "https://www.facebook.com/alifpathan0" },
  { platform: "tiktok", url: "https://www.tiktok.com/@alifpathan123" },
  { platform: "youtube", url: "https://www.youtube.com/@AlifPathan123." },
];
```

Replace the text inside the quotes after `url:` with your real profile
link. Available icon types: `instagram`, `facebook`, `tiktok`, `youtube`,
`linkedin`, `email` (for email, keep `mailto:` in front, like
`mailto:you@yourdomain.com`).

Buttons like "Start a Project" and "Contact Me" scroll to the contact form
— look for `hero` and `nav` further up in the same file for their `href`
values if you want to change where they point.

---

## 8. How to connect the contact form to a Google Sheet

The contact form (Full name, Email, WhatsApp number, Reason for reaching
out) submits to a "Google Apps Script Web App" URL that writes each entry
as a new row in a Google Sheet you own. One-time setup:

1. Open the Google Sheet you want responses to land in.
2. Go to **Extensions → Apps Script**.
3. Delete anything in the editor and paste this in:

   ```js
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     var data = e.parameter;
     sheet.appendRow([
       new Date(),
       data.fullName || "",
       data.email || "",
       data.whatsapp || "",
       data.reason || "",
     ]);
     return ContentService.createTextOutput(
       JSON.stringify({ result: "success" })
     ).setMimeType(ContentService.MimeType.JSON);
   }
   ```

4. Click **Deploy → New deployment**. For "Select type," choose **Web app**.
5. Set "Who has access" to **Anyone**, then click **Deploy**.
6. Google will ask you to authorize it — approve with your Google account.
7. Copy the **Web app URL** it gives you (looks like
   `https://script.google.com/macros/s/XXXXX/exec`).
8. Open `data/content.ts`, find `contact.formEndpoint`, and paste the URL
   between the quotes:

   ```ts
   export const contact = {
     ...
     formEndpoint: "https://script.google.com/macros/s/XXXXX/exec",
   };
   ```

That's it — every form submission now appends a row (timestamp, name,
email, WhatsApp number, reason) to your sheet automatically.

---

## 9. How to deploy the updated website to Vercel or Netlify

**First time only:**

1. Go to [vercel.com](https://vercel.com) and sign up (free).
2. Click **Add New → Project**.
3. Upload this whole project folder (or connect it via GitHub — see below).
4. Vercel will detect it's a Next.js project automatically. Just click
   **Deploy**. No settings need to change.
5. After a minute, you'll get a live link like `your-site.vercel.app`.

**Recommended: connect GitHub for one-click updates**

1. Create a free account at [github.com](https://github.com).
2. Create a new repository and upload this project folder to it (GitHub's
   website lets you drag-and-drop files — no command line needed).
3. In Vercel, choose **Add New → Project → Import Git Repository** and pick
   that repository.
4. From now on, every time you edit a file on GitHub and save it, Vercel
   automatically rebuilds and updates your live website within a minute or
   two — no re-uploading needed.

**If you're not using GitHub:** after editing files locally, just go back
to your Vercel project, choose **Redeploy** (or drag the updated folder in
again), and Vercel rebuilds the site with your changes.

---

### A few reminders

- Always keep the quotation marks `"` `"` around text.
- Always keep commas `,` at the end of each line inside the lists.
- If something looks broken after an edit, undo your last change and try
  again — it's almost always a missing quote or comma.
- Image file names are case-sensitive on some systems — keep them lowercase
  exactly as shown (e.g. `project-01.jpg`, not `Project-01.JPG`).
