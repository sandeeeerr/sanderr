import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { slugify } from '@/lib/utils'
import { env } from '@/env'
import { cookies } from 'next/headers'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const slug = searchParams.get('slug')
  if (slug) {
    const post = await prisma.post.findUnique({ where: { slug } })
    if (!post) return NextResponse.json({ message: 'Not found' }, { status: 404 })
    return NextResponse.json(post)
  }
  const posts = await prisma.post.findMany({ orderBy: { createdAt: 'desc' } })
  return NextResponse.json(posts)
}

export async function POST(req: Request) {
  const auth = req.headers.get('authorization') || ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : auth
  const isCookieAdmin = cookies().get('admin')?.value === '1'
  if (!env.ADMIN_PASSWORD || (token !== env.ADMIN_PASSWORD && !isCookieAdmin)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const { title, slug, content, published } = await req.json()

  let baseSlug = slug ? slugify(slug) : slugify(title)
  if (!baseSlug) {
    return NextResponse.json({ message: 'Titel of slug is verplicht' }, { status: 400 })
  }

  let uniqueSlug = baseSlug
  let counter = 1
  // Ensure uniqueness by appending a counter if needed
  // e.g. "hallo", "hallo-1", "hallo-2", ...
  // Try a reasonable number of attempts to avoid infinite loops
  // Prisma unique constraint on slug will protect at creation as well
  // but we pre-check to return a nice slug
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const existing = await prisma.post.findUnique({ where: { slug: uniqueSlug } })
    if (!existing) break
    uniqueSlug = `${baseSlug}-${counter}`
    counter += 1
  }

  const post = await prisma.post.create({ data: { title, slug: uniqueSlug, content, published: !!published } })
  return NextResponse.json(post, { status: 201 })
}

export async function PUT(req: Request) {
  const auth = req.headers.get('authorization') || ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : auth
  const isCookieAdmin = cookies().get('admin')?.value === '1'
  if (!env.ADMIN_PASSWORD || (token !== env.ADMIN_PASSWORD && !isCookieAdmin)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const { id, title, content, published } = await req.json()
  if (!id) return NextResponse.json({ message: 'id is required' }, { status: 400 })

  const data: any = {}
  if (typeof title !== 'undefined') data.title = title
  if (typeof content !== 'undefined') data.content = content
  if (typeof published !== 'undefined') data.published = !!published

  const updated = await prisma.post.update({
    where: { id: Number(id) },
    data,
  })
  return NextResponse.json(updated)
}

export async function DELETE(req: Request) {
  const auth = req.headers.get('authorization') || ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : auth
  const isCookieAdmin = cookies().get('admin')?.value === '1'
  if (!env.ADMIN_PASSWORD || (token !== env.ADMIN_PASSWORD && !isCookieAdmin)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await req.json()
  if (!id) return NextResponse.json({ message: 'id is required' }, { status: 400 })
  await prisma.post.delete({ where: { id: Number(id) } })
  return NextResponse.json({ ok: true })
}
