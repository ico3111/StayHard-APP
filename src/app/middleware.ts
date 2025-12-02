import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  // Se não tiver token, redireciona para login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Quais rotas serão protegidas
export const config = {
  matcher: ["/user/:path*", "/workouts/:path*", "/exercises/:path*"],
};
