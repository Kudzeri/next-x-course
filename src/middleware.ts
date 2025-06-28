import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // console.log("Middleware is running for /profile-fake/:path*");
  const token = request.cookies.get("token")?.value;

  if (!token && request.nextUrl.pathname.startsWith("/profile-fake")) {
    // console.log("Redirecting to /login");
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/profile-fake/:path*"],
};
