// Lightweight image optimizer: routes any public image URL through the
// free images.weserv.nl CDN which generates resized, WebP-encoded thumbnails
// on the fly and caches them globally. No server work required.

const PROXY = "https://images.weserv.nl/";

function isOptimizable(url: string) {
  if (!url) return false;
  if (url.startsWith("data:") || url.startsWith("blob:")) return false;
  // weserv requires a public http(s) URL
  return /^https?:\/\//i.test(url);
}

/** Build a single optimized URL at a given pixel width. */
export function optimizedImage(
  url: string,
  width: number,
  opts: { quality?: number; height?: number; fit?: "cover" | "contain" } = {},
) {
  if (!isOptimizable(url)) return url;
  const { quality = 75, height, fit = "cover" } = opts;
  // weserv expects the URL without the protocol
  const stripped = url.replace(/^https?:\/\//i, "");
  const params = new URLSearchParams({
    url: stripped,
    w: String(width),
    q: String(quality),
    output: "webp",
    fit,
  });
  if (height) params.set("h", String(height));
  return `${PROXY}?${params.toString()}`;
}

/** Build a responsive srcset string from a list of widths. */
export function srcSet(url: string, widths: number[], height?: number) {
  if (!isOptimizable(url)) return undefined;
  return widths
    .map((w) => {
      const h = height ? Math.round((height / widths[0]) * w) : undefined;
      return `${optimizedImage(url, w, { height: h })} ${w}w`;
    })
    .join(", ");
}
