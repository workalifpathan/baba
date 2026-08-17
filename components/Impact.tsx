"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import PhotoStack from "./PhotoStack";
import VideoModal from "./VideoModal";
import TikTokEmbed from "./TikTokEmbed";
import { impact } from "@/data/content";
import { parseYouTubeUrl, type YouTubeInfo } from "@/lib/youtube";

function renderText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-bold text-dark">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

export default function Impact() {
  const [active, setActive] = useState<YouTubeInfo | null>(null);

  const openVideo = (url: string) => {
    const info = parseYouTubeUrl(url);
    if (info) setActive(info);
  };

  return (
    <section id="impact">
      <Reveal className="wrap text-center pt-20 pb-14">
        <p className="font-display font-bold tracking-[0.18em] text-orange-deep text-xs">
          {impact.label}
        </p>
        <h2 className="font-display font-extrabold text-[clamp(2.2rem,5vw,3.4rem)] mt-3 mb-3">
          {impact.heading}
        </h2>
        <p className="text-dark-soft text-[1.05rem]">{impact.subtext}</p>
      </Reveal>

      {impact.chapters.map((chapter, ci) => (
        <div key={chapter.number} className={ci % 2 === 1 ? "bg-cream" : ""}>
          <div className="wrap py-16">
            <Reveal className="grid md:grid-cols-[auto_1fr] gap-7 items-start mb-10">
              <div className="w-[52px] h-[52px] rounded-full border-2 border-orange-pale flex items-center justify-center font-display font-extrabold text-orange-deep">
                {chapter.number}
              </div>
              <div>
                <div className="font-display font-black text-[clamp(3rem,8vw,5.5rem)] leading-none">
                  {chapter.stat}
                </div>
                <div className="font-display font-bold tracking-[0.1em] text-orange-deep text-sm mt-1">
                  {chapter.statLabel}
                </div>
                <h3 className="font-display font-extrabold text-[clamp(1.5rem,3vw,2.1rem)] mt-5 mb-4">
                  {chapter.heading}
                </h3>
                <div className="max-w-2xl space-y-4">
                  {chapter.paragraphs.map((p, i) => (
                    <p key={i} className="text-[1.02rem] leading-[1.75] text-dark-soft">
                      {renderText(p)}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Chapter 01 — charity: events + photo stack */}
            {"videos" in chapter && chapter.videos && (
              <>
                <p className="font-display font-bold tracking-[0.14em] text-sm mt-11 mb-5">
                  {chapter.videosLabel}
                </p>
                <Reveal className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-1">
                  {chapter.videos.map((v) => {
                    const info = parseYouTubeUrl(v.youtubeUrl);
                    const thumb = info?.thumbnailUrl;
                    return (
                      <button
                        key={v.title}
                        type="button"
                        onClick={() => openVideo(v.youtubeUrl)}
                        aria-label={`Play ${v.title}`}
                        className="group relative rounded-md2 overflow-hidden bg-dark aspect-video text-left"
                      >
                        {thumb && (
                          <Image
                            src={thumb}
                            alt={v.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        )}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="play-btn" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white">
                          <p className="font-display font-semibold text-sm leading-tight">
                            {v.title}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </Reveal>
              </>
            )}

            {"photos" in chapter && chapter.photos && (
              <Reveal className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 max-w-4xl">
                {chapter.photos.map((src) => (
                  <div
                    key={src}
                    className="relative aspect-[4/3] rounded-md2 overflow-hidden shadow-[0_10px_26px_rgba(25,20,16,0.12)]"
                  >
                    <Image
                      src={src}
                      alt="Charity event"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </Reveal>
            )}

            {/* Chapter 03 — stat pair (views / followers) */}
            {"stats" in chapter && chapter.stats && (
              <Reveal className="grid sm:grid-cols-2 gap-5 mt-2 mb-10">
                {chapter.stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-white border border-orange-pale rounded-lg2 px-6 py-8 text-center"
                  >
                    <div className="font-display font-black text-[clamp(1.8rem,4vw,2.6rem)] text-orange-deep">
                      {s.number}
                    </div>
                    <div className="font-display font-bold text-xs tracking-[0.1em] mt-2">
                      {s.label}
                    </div>
                  </div>
                ))}
              </Reveal>
            )}

            {/* Chapter 02 — single revenue screenshot, no stack */}
            {"proofImage" in chapter && chapter.proofImage && (
              <>
                <p className="font-display font-bold tracking-[0.14em] text-sm mb-5">
                  {chapter.proofLabel}
                </p>
                <Reveal className="max-w-xl">
                  <figure>
                    <div className="relative w-full rounded-md2 shadow-[0_12px_28px_rgba(25,20,16,0.12)] overflow-hidden">
                      <Image
                        src={chapter.proofImage.src}
                        alt={chapter.proofImage.caption}
                        width={1400}
                        height={900}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full h-auto"
                      />
                    </div>
                    <figcaption className="text-center text-sm text-dark-soft font-semibold mt-2.5">
                      {chapter.proofImage.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              </>
            )}

            {/* Chapter 03 — views screenshots, stacked-card animation */}
            {"proofImages" in chapter && chapter.proofImages && (
              <>
                <p className="font-display font-bold tracking-[0.14em] text-sm mb-5">
                  {chapter.proofLabel}
                </p>
                <Reveal className="max-w-[300px]">
                  <PhotoStack images={chapter.proofImages} alt="Analytics screenshot" aspectRatio="1 / 2" />
                </Reveal>
              </>
            )}

            {/* Chapter 03 — TikTok content grid */}
            {"tiktokVideos" in chapter && chapter.tiktokVideos && (
              <>
                <p className="font-display font-bold tracking-[0.14em] text-sm mt-11 mb-5">
                  {chapter.contentLabel}
                </p>
                <Reveal className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {chapter.tiktokVideos.map((v) => (
                    <TikTokEmbed
                      key={v.id}
                      videoId={v.id}
                      url={`https://www.tiktok.com/@theremydavenport/video/${v.id}`}
                      views={v.views}
                    />
                  ))}
                </Reveal>
              </>
            )}
          </div>
        </div>
      ))}

      <Reveal className="wrap text-center py-16">
        <p className="font-hand font-bold text-xl text-dark-soft max-w-xl mx-auto">
          &ldquo;{impact.closingQuote}&rdquo;
        </p>
      </Reveal>

      <VideoModal video={active} onClose={() => setActive(null)} />
    </section>
  );
}
