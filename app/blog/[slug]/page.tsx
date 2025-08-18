import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { cookies } from 'next/headers'

interface Params {
  params: { slug: string }
}

export default async function BlogDetailPage({ params }: Params) {
  const post = await prisma.post.findUnique({ where: { slug: params.slug } })
  if (!post) return notFound()
  const isAdmin = cookies().get('admin')?.value === '1'

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-2 text-3xl font-semibold">{post.title}</h1>
      <div className="mb-6 text-sm text-gray-400">
        {post.published ? 'Published' : 'Draft'} · {new Date(post.createdAt).toLocaleDateString()}
      </div>
      {isAdmin && (
        <div className="mb-4">
          <Link href={`/blog/${post.slug}/edit`} className="rounded-full border border-gray-800 px-3 py-1 text-xs hover:bg-gray-900">Edit</Link>
        </div>
      )}
      <article className="prose prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </main>
  )
}


