"use client";

import { useEffect, useState } from "react";

/**
 * Wraps a page's content with a smooth, intentional fade + rise-in when
 * the page mounts (i.e. when the user navigates to it). Keeps the
 * navigation feeling polished without any extra animation libraries.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger on next frame so the initial (hidden) state actually paints
    // first, letting the CSS transition run.
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className="transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
      }}
    >
      {children}
    </div>
  );
}
