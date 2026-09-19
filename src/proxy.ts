import { type NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth/server";

const authMiddleware = auth.middleware({ loginUrl: "/auth/sign-in" });

const authPages = ["/auth/sign-in", "/auth/sign-up"];

export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (authPages.includes(pathname)) {
    const { data: session } = await auth.getSession();
    if (session?.user) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return authMiddleware(request);
}

export const config = {
  matcher: ["/account/:path*", "/auth/sign-in", "/auth/sign-up"],
};
