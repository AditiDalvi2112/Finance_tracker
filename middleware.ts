import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes:['/']
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",  // Avoids matching static files and Next.js internals
    "/",                            // Root path
    "/(api|trpc)(.*)",              // API routes
  ],
};