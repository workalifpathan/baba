"use client";

import { useEffect } from "react";
import type { YouTubeInfo } from "@/lib/youtube";

export default function VideoModal({
  video,
  onClose,
}: {
  video: YouTubeInfo | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!video) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Video player"
    >
      <button
        onClick={onClose}
        aria-label="Close video"
        className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-orange-deep text-white flex items-center justify-center text-2xl transition-colors"
      >
        &times;
      </button>
      <div
        className={`relative w-full ${
          video.isShort ? "max-w-sm aspect-[9/16]" : "max-w-4xl aspect-video"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          className="absolute inset-0 w-full h-full rounded-md2"
          src={video.embedUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
