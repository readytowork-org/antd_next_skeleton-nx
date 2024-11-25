import { NextResponse } from 'next/server';

export function middleware() {
  console.log('this is only for testing - middleware');
  return NextResponse.next();
}
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
  ]
};
