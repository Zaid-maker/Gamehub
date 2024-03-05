import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
        "/",
        "/api/webhooks(.*)",
        "/api/uploadthing",
        "/api/hello",
        "/:username",
        "/search"
    ]
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
