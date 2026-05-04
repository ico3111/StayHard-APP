import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Middleware:
// Evita que o usário entre em uma página que usa a API
// e não funciona sem autenticação
export function middleware(request: NextRequest) {
  const token = request.cookies.get("stay-hard-auth")?.value;

  const isProtectedRoute =
    request.nextUrl.pathname.startsWith("/workouts") ||
    request.nextUrl.pathname.startsWith("/exercises") ||
    request.nextUrl.pathname.startsWith("/home");

  if (isProtectedRoute && !token) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (request.nextUrl.pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/workouts/:path*", "/exercises/:path*", "/home/:path*", "/login"],
};
