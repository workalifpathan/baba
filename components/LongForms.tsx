"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import VideoModal from "./VideoModal";
import { longFormProjects, viewAllLongFormsHref } from "@/data/content";
import { parseYouTubeUrl, type YouTubeInfo } from "@/lib/youtube";

export default function LongForms() {
  const [active, setActive] = useState<YouTubeInfo | null>(null);

  const openVideo = (url: string) => {
    const info = parseYouTubeUrl(url);
    if (info) setActive(info);
  };

  return (
    <section className="py-16" id="portfolio">
      <div className="wrap">
        <Reveal className="text-center mb-9">
          <p className="font-display italic font-bold text-orange-deep text-[clamp(1.6rem,3vw,2.2rem)]">
            Client Works
            <span className="block font-body not-italic font-bold tracking-[0.14em] text-dark text-xs mt-0.5">
              LONG-FORMS
            </span>
          </p>
        </Reveal>

        <Reveal
          className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [-webkit-overflow-scrolling:touch] [scrollbar-width:thin]"
        >
          {longFormProjects.map((p) => (
            <div key={p.title} className="shrink-0 w-[78vw] sm:w-[340px] snap-start">
              <Thumb project={p} onPlay={openVideo} aspect="aspect-video" />
            </div>
          ))}
        </Reveal>

        {viewAllLongFormsHref && (
          <div className="text-center mt-9">
            <a
              href={viewAllLongFormsHref}
              className="inline-block font-display font-semibold text-sm border-2 border-dark px-6 py-3 rounded-md hover:-translate-y-0.5 hover:shadow-lg transition-transform"
            >
              View All Long-Form Works &rarr;
            </a>
          </div>
        )}
      </div>

      <VideoModal video={active} onClose={() => setActive(null)} />
    </section>
  );
}

function Thumb({
  project,
  onPlay,
  aspect = "aspect-video",
}: {
  project: (typeof longFormProjects)[number];
  onPlay: (url: string) => void;
  aspect?: string;
}) {
  const hasVideo = Boolean(project.youtubeUrl);
  const youtubeInfo = parseYouTubeUrl(project.youtubeUrl);
  const thumb = project.thumbnail || youtubeInfo?.thumbnailUrl;

  const content = (
    <div className={`group relative w-full rounded-md2 overflow-hidden bg-dark cursor-pointer ${aspect}`}>
      {thumb && (
        <Image
          src={thumb}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="play-btn" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white text-left">
        <p className="font-display font-semibold text-sm leading-tight">{project.title}</p>
      </div>
    </div>
  );

  if (hasVideo) {
    return (
      <button
        type="button"
        onClick={() => onPlay(project.youtubeUrl)}
        className="block w-full text-left"
        aria-label={`Play ${project.title}`}
      >
        {content}
      </button>
    );
  }

  return content;
}
