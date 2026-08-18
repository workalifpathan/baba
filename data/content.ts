/**
 * ============================================================
 *  SITE CONTENT — edit everything here.
 * ============================================================
 * This is the ONE file you need to touch to change the text,
 * images, and video links on the website. You do not need to
 * open any other file, and you do not need to know how to code.
 *
 * Rules to keep in mind while editing:
 *   1. Keep the quotation marks "" around every piece of text.
 *   2. Keep the commas at the end of each line.
 *   3. Don't delete the curly braces { } or square brackets [ ].
 *   4. If you're unsure, just change the text BETWEEN the quotes
 *      and leave everything else exactly as it is.
 *
 * See HOW-TO-EDIT.md in the project root for step-by-step,
 * beginner-friendly instructions with pictures of what to do.
 * ============================================================
 */

export const site = {
  name: "Alif Pathan",
  title: "Alif Pathan — Content Strategist, Marketing Genius & Video Editor",
  description:
    "Crafting content and campaigns that grow brands, engage audiences, and make an impact on social media.",
};

export const nav = {
  links: [
    { label: "Work", href: "/#portfolio" },
    { label: "Impact", href: "/impact" },
    { label: "About", href: "/#about" },
    { label: "Clients", href: "/#clients" },
    { label: "Contact", href: "/#contact" },
  ],
  ctaLabel: "Get In Touch",
  ctaHref: "/#contact",
};

export const hero = {
  headline: ["Content Strategist", "Marketing Genius &", "Video Editor"],
  // Which line above should be shown in the orange accent color (0-indexed).
  accentLine: 2,
  lead: "Crafting content and campaigns that grow brands, engage audiences, and make an impact on social media.",
  primaryButton: { label: "Get In Touch", href: "#contact" },
  secondaryButton: { label: "Contact Me", href: "#contact" },
  // This is your main hero photo. Replace the file at
  // /public/images/profile/profile-hero.png to change it.
  photo: "/images/profile/profile-hero.png",
  photoAlt: "Alif Pathan portrait",
};

export const socialLinks = [
  { platform: "instagram", url: "https://www.instagram.com/alifpathan12/" },
  { platform: "facebook", url: "https://www.facebook.com/alifpathan0" },
  { platform: "tiktok", url: "https://www.tiktok.com/@alifpathan123" },
  { platform: "youtube", url: "https://www.youtube.com/@AlifPathan123." },
];

export const stats = {
  items: [
    { number: "30+", label: "Clients Worked With" },
    { number: "100M+", label: "Views Generated" },
    { number: "$5M+", label: "Client Revenue Generated" },
  ],
  tagHeadline: "Connection > Views",
  tagBody:
    "It's not about how many people watch your video. It's about how many people feel connected to it.",
};

/**
 * ------------------------------------------------------------
 * LONG-FORM PROJECTS
 * ------------------------------------------------------------
 * To add a new project, copy one block (from the opening { to
 * the closing },) and paste it into the list, then edit the
 * text and youtubeUrl.
 *
 * youtubeUrl accepts a normal YouTube link, e.g.:
 *   https://www.youtube.com/watch?v=dQw4w9WgXcQ
 *   https://youtu.be/dQw4w9WgXcQ
 *
 * thumbnail is optional — if you leave it blank (""), the
 * website automatically uses the video's own YouTube thumbnail.
 * ------------------------------------------------------------
 */
export const longFormProjects: {
  title: string;
  description: string;
  youtubeUrl: string;
  thumbnail: string;
  size: "normal" | "wide";
}[] = [
  {
    title: "The Man & The Mission Behind Corsair",
    description: "Full interview with Jussi Veikko Saloranta.",
    youtubeUrl: "https://youtu.be/19SJihALE5c",
    thumbnail: "",
    size: "normal",
  },
  {
    title: "Before / After",
    description: "",
    youtubeUrl: "https://youtu.be/U0nuJmDXp60",
    thumbnail: "",
    size: "normal",
  },
  {
    title: "Personal Branding Masterclass",
    description: "",
    youtubeUrl: "https://www.youtube.com/watch?v=hkiz6NA-jOM&t=100s",
    thumbnail: "",
    size: "normal",
  },
  {
    title: "The Heart of Bravery: Bangladesh's Hero",
    description: "",
    youtubeUrl: "https://youtu.be/i8jcP2A0oSg",
    thumbnail: "",
    size: "normal",
  },
  {
    title: "Long-Form Project",
    description: "",
    youtubeUrl: "https://youtu.be/1VlE25HLnHg",
    thumbnail: "",
    size: "normal",
  },
];

export const viewAllLongFormsHref = "";

/**
 * ------------------------------------------------------------
 * SHORTS
 * ------------------------------------------------------------
 * shortsUrl accepts:
 *   https://www.youtube.com/shorts/XXXXXXXX
 *   https://www.youtube.com/watch?v=XXXXXXXX
 * ------------------------------------------------------------
 */
export const shorts = [
  {
    caption: "Watch on YouTube",
    views: "",
    shortsUrl: "https://youtube.com/shorts/u0QWxJHoeck?feature=share",
    thumbnail: "",
    platform: "youtube" as const,
  },
  {
    caption: "Watch on YouTube",
    views: "",
    shortsUrl: "https://www.youtube.com/shorts/5lU-gQkBbDQ",
    thumbnail: "",
    platform: "youtube" as const,
  },
  {
    caption: "Watch on YouTube",
    views: "",
    shortsUrl: "https://www.youtube.com/shorts/4S52PAsWkNY",
    thumbnail: "",
    platform: "youtube" as const,
  },
  {
    caption: "Watch on YouTube",
    views: "",
    shortsUrl: "https://youtube.com/shorts/tjbcreLEhJg?feature=share",
    thumbnail: "",
    platform: "youtube" as const,
  },
  {
    caption: "Watch on YouTube",
    views: "",
    shortsUrl: "https://youtube.com/shorts/S-eoDcglHZw?feature=share",
    thumbnail: "",
    platform: "youtube" as const,
  },
];

export const viewAllShortsHref = "";

export const clients = [
  { name: "The Grateful Tribe", logo: "/images/clients/client-01.png" },
  { name: "LOOMX", logo: "/images/clients/client-02.png" },
  { name: "Nivex", logo: "/images/clients/client-03.png" },
  { name: "Kings Media Co.", logo: "/images/clients/client-04.png" },
  { name: "Corsair Connect", logo: "/images/clients/client-05.png" },
  { name: "Comparison Soft", logo: "/images/clients/client-06.png" },
  { name: "Pop Social", logo: "/images/clients/client-07.png" },
  { name: "Ethical Den", logo: "/images/clients/client-08.png" },
];

export const testimonials = [
  {
    quote:
      "Working with Alif was a game-changer for our team. He helped build and develop a strong team, improved the way we worked together, and brought a higher level of structure, ownership, and accountability to our work. His leadership, communication, and ability to bring people together made a real impact on our growth as a team.",
    name: "Fardeen Ahmed",
    role: "Chief Executive Officer, Ethical Den",
    photo: "/images/testimonials/testimonial-01.jpg",
  },
  {
    quote:
      "Alif has been with me through successes and challenges, bringing an unmatched work ethic, creative brilliance, and relentless drive. He consistently goes above and beyond, takes ownership, and delivers at a level that is rare to find. One of the most talented, driven, and exceptional people I've ever worked with.",
    name: "Sal Khan",
    role: "CEO & Founder, The Grateful Tribe",
    photo: "/images/testimonials/testimonial-02.jpg",
  },
];

export const drives = {
  caption: "Content doesn't grow brands — connection does",
  heading: "What Drives Me",
  tags: ["Vision", "Mindset", "Storytelling", "Results"],
  paragraphs: [
    "**One of the earliest lessons I understood in life is that the biggest risk is not taking one.** That belief pushed me to do things differently — to question the safe path and choose growth over comfort. I try to live by that mindset every day.",
    'What sets me apart isn\'t just what I do, but how I think. I genuinely believe that anything is possible. For me, the only real question has never been "Is it possible?" — it\'s always been "How can it be done?"',
    "That belief has shaped my entire journey. Every step so far — every project, every challenge, every win — has come from that mindset. And I'm not done. I want to go further, build more, create better, and keep pushing beyond what feels normal or expected.",
    "I believe in taking action before having all the answers, learning from every failure, and surrounding myself with people who challenge me to become better. I'm not interested in simply following what has already been done. I want to build things that matter, create opportunities, and leave a mark that lasts.",
    "There will always be uncertainty, setbacks, and people who tell you something can't be done. I've learned to see those moments as part of the process rather than reasons to stop.",
    "I'm still learning. Still building. Still figuring things out.",
    "But one thing hasn't changed: I refuse to settle for ordinary when I know there's more I can become.",
    "This is what has brought me here.\nAnd this is only the beginning.",
    "**That's my two cents.**",
  ],
};

export const impact = {
  label: "IMPACT",
  heading: "A glimpse of the impact I've created",
  subtext: "Real projects. Real people. Real results.",
  closingQuote:
    "I've played a key role alongside the teams responsible for every one of these results — proud of what we built together.",

  chapters: [
    {
      number: "01",
      stat: "500+",
      statLabel: "CHILDREN REACHED",
      heading: "Giving back, from idea to execution.",
      paragraphs: [
        "As Chief Content Lead, I helped lead the execution of charity initiatives that reached **500+ underprivileged children** across Bangladesh, providing school uniforms, educational supplies, gifts, and essential resources.",
        "I was involved throughout the process — leading teams, coordinating people on the ground, visiting schools, planning events, overseeing execution, and making sure everything came together smoothly.",
        "On the creative side, I directed the visual strategy, planned campaigns, shots and angles, contributed to uniform production, led shoots, and oversaw the content from production through final delivery.",
        "I wasn't just documenting the initiatives. **I was part of building and executing them.**",
      ],
      videosLabel: "THE EVENTS",
      videos: [
        { title: "71 Gifts To 71 Kids", youtubeUrl: "https://youtu.be/i8jcP2A0oSg" },
        { title: "Bringing Joy To Kids In The Slum", youtubeUrl: "https://youtu.be/U0nuJmDXp60" },
        { title: "You Won't Believe How These Kids Reacted", youtubeUrl: "https://youtu.be/KRsrQN4cE2U" },
      ],
      photos: [
        "/images/impact/charity-01.jpg",
        "/images/impact/charity-02.png",
        "/images/impact/charity-04.jpg",
        "/images/impact/charity-06.png",
      ],
    },
    {
      number: "02",
      stat: "$5M+",
      statLabel: "REVENUE GENERATED",
      heading: "Content that became business.",
      paragraphs: [
        "As Chief Content Lead at The Grateful Tribe, I also worked across its marketing ventures, including PopMax, contributing to the strategy, creative direction, campaigns, and execution.",
        "I worked closely with the team to develop ideas, shape campaigns, direct shoots, build creative concepts, and figure out what would actually make people stop scrolling and take action.",
        "I was involved in turning creative ideas into marketing assets that supported the wider business — from the initial concept and strategy through to execution.",
        "The work became part of a broader marketing engine that generated **$5M+ in cumulative company revenue.**",
        "Not just content. Not just attention. **Business results.**",
      ],
      proofLabel: "THE PROOF",
      // Only one screenshot for this result — shown plainly, no card stack.
      proofImage: {
        src: "/images/impact/revenue-02.jpg",
        caption: "Referral team dashboard — 4,754,921 PUSD across 3,386 team members",
      },
    },
    {
      number: "03",
      stat: "60M+",
      statLabel: "VIEWS GENERATED",
      heading: "Two months. Millions of people.",
      paragraphs: [
        "While working with Kings Media, I worked directly with CEO Remy Davenport on his content and personal brand.",
        "In roughly two months, the content we worked on generated **60M+ views**, while his audience grew from **20K to 120K followers.**",
        "I contributed to the creative execution — working on hooks, pacing, structure, angles, storytelling, and the details that help content capture attention and keep people watching.",
        "**60M+ views. 100K+ new followers. Two months.**",
      ],
      stats: [
        { number: "60M+", label: "VIEWS" },
        { number: "20K → 120K", label: "FOLLOWERS" },
      ],
      proofLabel: "THE PROOF",
      // A single fanned composite image (not the auto-rotating stack) —
      // replace this file to update the screenshots.
      proofImageFanned: "/images/impact/kings-fanned.png",
      contentLabel: "THE CONTENT",
      // Add the real view count for each clip here (e.g. "2.1M") and it will
      // show under the embed. Leave blank ("") to hide it for that video.
      tiktokVideos: [
        { id: "7653631647652302093", views: "" },
        { id: "7663577616070331662", views: "" },
        { id: "7657257507701689614", views: "" },
      ],
    },
  ],
};


export const contact = {
  heading: "Content doesn't grow brands—",
  headingAccent: "connection",
  headingEnd: " does.",
  subtext: "Tell me a bit about your project and I'll get back to you.",
  // Google Apps Script "Web app" URL — see HOW-TO-EDIT.md for setup steps.
  // Leave blank ("") and the form will just show a friendly error until you add it.
  formEndpoint:
    "https://script.google.com/macros/s/AKfycbw5OtHU4xsIohjk3Ls-wHXJ1OYCA8gFxfHMiHlKLB6Vw73UXN-FYTSjWc0qdxOI/exec",
};

export const footer = {
  text: "Alif Pathan — Content Strategist & Video Editor.",
  linkLabel: "Get In Touch",
  linkHref: "/#contact",
  tagline: "Built with passion. Focused on impact.",
};
