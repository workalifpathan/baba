/**
 * Turns a normal YouTube URL (including Shorts links) into the pieces
 * the website needs: the video ID, an embeddable URL, and a thumbnail.
 *
 * Supported input formats:
 *   https://www.youtube.com/watch?v=VIDEOID
 *   https://youtu.be/VIDEOID
 *   https://www.youtube.com/shorts/VIDEOID
 *   https://www.youtube.com/embed/VIDEOID
 *   Or just a bare VIDEOID
 */
export type YouTubeInfo = {
  id: string;
  isShort: boolean;
  embedUrl: string;
  watchUrl: string;
  thumbnailUrl: string;
};

export function parseYouTubeUrl(url: string | undefined | null): YouTubeInfo | null {
  if (!url) return null;
  const trimmed = url.trim();
  if (!trimmed) return null;

  let id: string | null = null;
  let isShort = false;

  try {
    // Bare video ID (11 chars, no slashes/dots) — allow as a convenience.
    if (/^[a-zA-Z0-9_-]{10,12}$/.test(trimmed) && !trimmed.includes(".")) {
      id = trimmed;
    } else {
      const u = new URL(trimmed);
      const host = u.hostname.replace(/^www\./, "");

      if (host === "youtu.be") {
        id = u.pathname.slice(1).split("/")[0] || null;
      } else if (host.endsWith("youtube.com")) {
        if (u.pathname.startsWith("/shorts/")) {
          id = u.pathname.split("/shorts/")[1]?.split("/")[0] || null;
          isShort = true;
        } else if (u.pathname.startsWith("/embed/")) {
          id = u.pathname.split("/embed/")[1]?.split("/")[0] || null;
        } else if (u.pathname === "/watch") {
          id = u.searchParams.get("v");
        } else if (u.pathname.startsWith("/live/")) {
          id = u.pathname.split("/live/")[1]?.split("/")[0] || null;
        }
      }
    }
  } catch {
    return null;
  }

  if (!id) return null;

  return {
    id,
    isShort,
    embedUrl: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`,
    watchUrl: `https://www.youtube.com/watch?v=${id}`,
    // Shorts are vertical (9:16), but the standard thumbnail filenames
    // (hqdefault, maxresdefault, etc.) return the horizontal/letterboxed
    // frame. YouTube stores the true vertical crop under this filename.
    thumbnailUrl: isShort
      ? `https://i.ytimg.com/vi/${id}/oar2.jpg`
      : `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
  };
}
