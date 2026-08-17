"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    tiktokEmbedLoad?: () => void;
  }
}

let scriptPromise: Promise<void> | null = null;

function loadTikTokScript(): Promise<void> {
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.tiktok.com/embed.js"]'
    );
    if (existing) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
  return scriptPromise;
}

export default function TikTokEmbed({
  videoId,
  url,
  views,
}: {
  videoId: string;
  url: string;
  views?: string;
}) {
  useEffect(() => {
    loadTikTokScript().then(() => {
      // If the script was already loaded for a previous embed, tell it to
      // re-scan the page for new blockquotes.
      window.tiktokEmbedLoad?.();
    });
  }, []);

  // e.g. "https://www.tiktok.com/@theremydavenport/video/123" -> "theremydavenport"
  const usernameMatch = url.match(/@([^/]+)/);
  const username = usernameMatch ? usernameMatch[1] : "";

  return (
    <div className="rounded-md2 overflow-hidden bg-cream border border-orange-pale">
      <div className="min-h-[600px] flex items-center justify-center bg-transparent">
        <blockquote
          className="tiktok-embed"
          cite={url}
          data-video-id={videoId}
          data-embed-from="oembed"
          style={{ maxWidth: "100%", minWidth: "100%", background: "transparent" }}
        >
          <section>
            <a target="_blank" rel="noopener noreferrer" title={`@${username}`} href={`${url}?refer=embed`}>
              @{username}
            </a>
          </section>
        </blockquote>
      </div>
      {views && (
        <div className="px-4 py-3 text-center border-t border-orange-pale">
          <span className="font-display font-bold text-orange-deep">{views}</span>
          <span className="text-dark-soft text-sm"> views</span>
        </div>
      )}
    </div>
  );
}
