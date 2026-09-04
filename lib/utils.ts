export const getAssetPath = (path: string): string => {
  if (!path) return "";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:")
  ) {
    return path;
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // 1. If configured via process.env.NEXT_PUBLIC_BASE_PATH
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (basePath) {
    if (cleanPath.startsWith(basePath)) return cleanPath;
    return `${basePath}${cleanPath}`;
  }

  // 2. Fallback in browser: check window.location.pathname for GitHub Pages subpath
  if (
    typeof window !== "undefined" &&
    window.location.pathname.startsWith("/starydesignersite")
  ) {
    if (cleanPath.startsWith("/starydesignersite")) return cleanPath;
    return `/starydesignersite${cleanPath}`;
  }

  return cleanPath;
};
