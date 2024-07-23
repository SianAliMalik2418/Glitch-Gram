import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "./app/api/auth/[...nextauth]/options";
import { getToken } from "next-auth/jwt";

export { default } from "next-auth/middleware";

export const middleware = async (request: NextRequest) => {
  const pathName = request.nextUrl.pathname;

  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
  });

  if ((pathName === "/login" || pathName === "/signup") && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathName.startsWith("/profile") && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
};

export const config = {
  matcher: ["/", "/login", "/signup", "/profile/:path*"],
};
