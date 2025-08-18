import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export default async function BlogIndexPage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
  })
  const isAdmin = cookies().get('admin')?.value === '1'

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Blog</h1>
          <p className="mt-1 text-sm text-gray-400">Thoughts, notes en bouwupdates</p>
        </div>
        {isAdmin && (
          <Link href="/blog/new" className="rounded-full bg-gray-900 px-4 py-2 text-sm hover:bg-gray-950">
            New Post
          </Link>
        )}
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-400">No posts yet.</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`} className="group block rounded-xl bg-gradient-to-b from-gray-900/60 to-gray-900/30 p-5 ring-1 ring-inset ring-gray-800/70 transition hover:from-gray-900 hover:to-gray-900 hover:ring-gray-700">
                <h2 className="text-lg font-medium text-gray-100 group-hover:text-white">{post.title}</h2>
                <div className="mt-2 text-xs text-gray-400">
                  {post.published ? 'Published' : 'Draft'} · {new Date(post.createdAt).toLocaleDateString()}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}


