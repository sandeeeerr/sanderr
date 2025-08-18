import { NextResponse } from 'next/server'
import { env } from '@/env'

export async function POST(req: Request) {
  const { password } = await req.json()
  if (!env.ADMIN_PASSWORD || password !== env.ADMIN_PASSWORD) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }
  const res = NextResponse.json({ ok: true })
  res.cookies.set('admin', '1', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8, // 8h
  })
  return res
}


