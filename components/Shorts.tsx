"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import VideoModal from "./VideoModal";
import { shorts, viewAllShortsHref } from "@/data/content";
import { parseYouTubeUrl, type YouTubeInfo } from "@/lib/youtube";
import { InstagramIcon, TikTokIcon, YouTubeIcon } from "./Icons";

const platformIcon = {
  youtube: YouTubeIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
};

export default function Shorts() {
  const [active, setActive] = useState<YouTubeInfo | null>(null);

  return (
    <section className="py-16 bg-cream">
      <div className="wrap">
        <Reveal className="text-center mb-9">
          <p className="font-display italic font-bold text-orange-deep text-[clamp(1.6rem,3vw,2.2rem)]">
            Client Works
            <span className="block font-body not-italic font-bold tracking-[0.14em] text-dark text-xs mt-0.5">
              SHORTS
            </span>
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {shorts.map((s, i) => {
            const info = parseYouTubeUrl(s.shortsUrl);
            const thumb = s.thumbnail || info?.thumbnailUrl;
            const Icon = platformIcon[s.platform] ?? YouTubeIcon;

            const card = (
              <div className="group relative rounded-md2 overflow-hidden bg-dark cursor-pointer aspect-[9/16]">
                {thumb ? (
                  <Image
                    src={thumb}
                    alt={s.caption}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-grad-orange flex items-center justify-center">
                    <Icon className="w-10 h-10 text-white/85" />
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="play-btn" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-left bg-gradient-to-t from-black/70 to-transparent">
                  <p className="font-display font-bold text-sm leading-tight">{s.caption}</p>
                  {s.views && (
                    <p className="text-xs mt-1 flex items-center gap-1 opacity-90">
                      &#9654; {s.views}
                    </p>
                  )}
                </div>
              </div>
            );

            if (!s.shortsUrl) return <div key={i}>{card}</div>;

            // YouTube Shorts can play in the on-page modal.
            if (info) {
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive({ ...info, isShort: true })}
                  aria-label={`Play short: ${s.caption}`}
                >
                  {card}
                </button>
              );
            }

            // TikTok / Instagram can't be embedded — open the original in a new tab.
            return (
              <a
                key={i}
                href={s.shortsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open on ${s.platform}: ${s.caption}`}
              >
                {card}
              </a>
            );
          })}
        </Reveal>

        {viewAllShortsHref && (
          <div className="text-center mt-9">
            <a
              href={viewAllShortsHref}
              className="inline-block font-display font-semibold text-sm border-2 border-dark px-6 py-3 rounded-md hover:-translate-y-0.5 hover:shadow-lg transition-transform"
            >
              View All Shorts &rarr;
            </a>
          </div>
        )}
      </div>

      <VideoModal video={active} onClose={() => setActive(null)} />
    </section>
  );
}
