const basePath =
  process.env.NODE_ENV === "production"
    ? (process.env.NEXT_PUBLIC_BASE_PATH ?? "/SKAPE_final").replace(/\/$/, "")
    : "";

export function withBasePath(path: string) {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
