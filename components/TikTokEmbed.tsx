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

export default function TikTokEmbed({ videoId, url }: { videoId: string; url: string }) {
  useEffect(() => {
    loadTikTokScript().then(() => {
      // If the script was already loaded for a previous embed, tell it to
      // re-scan the page for new blockquotes.
      window.tiktokEmbedLoad?.();
    });
  }, []);

  return (
    <div className="rounded-md2 overflow-hidden bg-dark min-h-[600px] flex items-center justify-center">
      <blockquote
        className="tiktok-embed"
        cite={url}
        data-video-id={videoId}
        style={{ maxWidth: "100%", minWidth: "100%" }}
      >
        <section></section>
      </blockquote>
    </div>
  );
}
