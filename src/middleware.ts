import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.url);
  const pathname = url.pathname;

  // 1. Allow static assets and favicon to pass
  if (
    pathname.startsWith("/_astro") || 
    pathname.startsWith("/api") ||
    pathname.includes("favicon") ||
    pathname.includes(".svg") ||
    pathname.includes(".png") ||
    pathname.includes(".jpg") ||
    pathname.includes(".webp")
  ) {
    return next();
  }

  // 2. Allow the maintenance page itself to avoid infinite loop
  if (pathname === "/mantenimiento" || pathname === "/mantenimiento/") {
    return next();
  }

  // 3. Allow Storyblok preview to bypass maintenance
  // Check if '_storyblok' is in the query params or the referer
  const isStoryblok = url.searchParams.has("_storyblok") || context.request.headers.get("referer")?.includes("_storyblok");
  
  if (isStoryblok) {
    return next();
  }

  // 4. Redirect everything else to the maintenance page
  // We use a 307 Temporary Redirect
  return context.redirect("/mantenimiento", 307);
});
