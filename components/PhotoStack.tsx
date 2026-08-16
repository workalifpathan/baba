"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Stacked, floating photo-card animation.
 *
 * Shows up to 3 images at once (front + up to 2 behind, offset and
 * rotated). On an interval, the front card retires to the back of the
 * stack and the next photo becomes the new front card, with a smooth
 * spring-like settle. Works with any number of images >= 1.
 */
export default function PhotoStack({
  images,
  alt,
  aspectRatio = "4 / 5",
  intervalMs = 3200,
}: {
  images: string[];
  alt: string;
  aspectRatio?: string;
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, intervalMs);
    return () => clearInterval(id);
  }, [count, intervalMs]);

  // Offsets/rotations for stack positions 0 (front), 1, 2 (further back).
  const positions = [
    { x: 0, y: 0, rotate: 0, scale: 1, z: 30, opacity: 1 },
    { x: 14, y: 10, rotate: -6, scale: 0.96, z: 20, opacity: 0.9 },
    { x: -12, y: 18, rotate: 5, scale: 0.92, z: 10, opacity: 0.75 },
  ];

  return (
    <div className="relative mx-auto max-w-sm md:max-w-none w-full" style={{ aspectRatio }}>
      {images.map((src, i) => {
        // Distance of this image from the current front image, in stack order.
        const offset = (i - index + count) % count;
        if (offset > 2) return null; // only render front + 2 behind
        const pos = positions[offset];
        return (
          <div
            key={src}
            className="absolute inset-0 rounded-lg2 overflow-hidden shadow-[0_20px_45px_rgba(25,20,16,0.18)] transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotate}deg) scale(${pos.scale})`,
              zIndex: pos.z,
              opacity: pos.opacity,
            }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover"
              priority={i === 0}
            />
          </div>
        );
      })}
    </div>
  );
}
