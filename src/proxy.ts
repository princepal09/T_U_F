import NextAuth from "next-auth";
import type { NextFetchEvent, NextRequest } from "next/server";

import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  protectedRoutes,
  authRoutes,
} from "@/routes";

import authConfig from "./auth.config";

const { auth } = NextAuth({
  ...authConfig,
  session: { strategy: "jwt" },
});

const handleAuth = auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && protectedRoutes.includes(nextUrl.pathname)) {
    return Response.redirect(new URL("/auth/sign-in", nextUrl));
  }

  return null;
});

export default function proxy(req: NextRequest, event: NextFetchEvent) {
  const { pathname } = req.nextUrl;
  if (pathname === apiAuthPrefix || pathname.startsWith(`${apiAuthPrefix}/`)) {
    return;
  }

  return handleAuth(req, event);
}

export const config = {
  // copied from clerk
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
