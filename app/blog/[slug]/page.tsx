import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { cookies } from 'next/headers'
import DeletePostButton from '@/components/DeletePostButton'
import { revalidatePath } from 'next/cache'

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
        <div className="mb-4 flex items-center gap-2">
          <Link href={`/blog/${post.slug}/edit`} className="rounded-full border border-gray-800 px-3 py-1 text-xs hover:bg-gray-900">Edit</Link>
          <form action={async () => {
            'use server'
            await prisma.post.update({ where: { id: post.id }, data: { published: !post.published } })
            revalidatePath(`/blog/${post.slug}`)
            revalidatePath('/blog')
          }}>
            <button className="rounded-full border border-gray-800 px-3 py-1 text-xs hover:bg-gray-900">
              {post.published ? 'Unpublish' : 'Publish'}
            </button>
          </form>
          <DeletePostButton id={post.id} />
        </div>
      )}
      <article className="prose prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </main>
  )
}


