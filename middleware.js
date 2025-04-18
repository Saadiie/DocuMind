import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  console.log('token :', process.env.NEXTAUTH_SECRET);

  const { pathname } = req.nextUrl;

  // If the user is logged in, redirect from sign-in to the dashboard
  if (token && pathname === '/signin') {
    const dashboardUrl = new URL('/dashboard', req.url);
    return NextResponse.redirect(dashboardUrl);
  }

  // If the user is not logged in, redirect from protected routes to sign-in
  if (!token && pathname.startsWith('/dashboard')) {
    const signInUrl = new URL('/signin', req.url);
    return NextResponse.redirect(signInUrl);
  }

  // Continue request if no redirection is needed
  return NextResponse.next();
}

// Match paths for which this middleware should run
export const config = {
  matcher: ['/signin', '/dashboard/:path*'],
};
