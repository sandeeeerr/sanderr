import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Protect blog creation/edit routes
const PROTECTED_PATHS = [
  '/blog/new',
  // edit pages under /blog/[slug]/edit
]

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  
  // Check for protected routes
  const isProtectedRoute = pathname.startsWith('/blog/') && pathname.endsWith('/edit') 
    || PROTECTED_PATHS.includes(pathname)

  if (isProtectedRoute) {
    if (req.cookies.get('admin')?.value !== '1') {
      const url = req.nextUrl.clone()
      url.pathname = '/login'
      url.searchParams.set('redirect', pathname)
      return NextResponse.redirect(url)
    }
  }

  // Add security headers to all responses
  const response = NextResponse.next()
  
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  )

  return response
}

export const config = {
  matcher: ['/blog/new', '/blog/:slug*/edit'],
}


