export function imageUrl(src) {
  if (!src) return "";

  if (/^[a-z][a-z0-9+.-]*:/i.test(src) || src.startsWith("//")) {
    return src;
  }

  const normalizedSrc = src.startsWith("/") ? src : `/${src}`;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "");

  return baseUrl ? `${baseUrl}${normalizedSrc}` : normalizedSrc;
}
