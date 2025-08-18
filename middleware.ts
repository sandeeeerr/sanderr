import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Protect blog creation/edit routes
const PROTECTED_PATHS = [
  '/blog/new',
  // edit pages under /blog/[slug]/edit
]

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname.startsWith('/blog/') && pathname.endsWith('/edit')) {
    if (req.cookies.get('admin')?.value !== '1') {
      const url = req.nextUrl.clone()
      url.pathname = '/login'
      url.searchParams.set('redirect', pathname)
      return NextResponse.redirect(url)
    }
  }

  if (PROTECTED_PATHS.includes(pathname)) {
    if (req.cookies.get('admin')?.value !== '1') {
      const url = req.nextUrl.clone()
      url.pathname = '/login'
      url.searchParams.set('redirect', pathname)
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/blog/new', '/blog/:slug*/edit'],
}


