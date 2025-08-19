"use client"

import { useState, FormEvent, useMemo, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { slugify } from '@/lib/utils'
import QuillEditor from '@/components/QuillEditor'

export default function NewPostPage() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [isSlugDirty, setIsSlugDirty] = useState(false)
  const [content, setContent] = useState('')
  const [published, setPublished] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [adminPassword, setAdminPassword] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const quillModules = useMemo(() => ({
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link'],
        ['clean'],
      ],
    },
  }), [])

  const handleTitleChange = (v: string) => {
    setTitle(v)
    if (!isSlugDirty) setSlug(slugify(v))
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', authorization: `Bearer ${adminPassword}` },
        body: JSON.stringify({ title, slug: slug || slugify(title), content, published }),
      })
      if (!res.ok) throw new Error('Failed to create post')
      const created = await res.json()
      router.push(`/blog/${created.slug}`)
    } catch (err) {
      console.error(err)
      alert('Creating post failed')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-semibold">New Post</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm text-gray-300">Admin password</label>
          <input
            type="password"
            className="w-full rounded-md border border-gray-800 bg-gray-900 px-3 py-2 outline-none"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            placeholder="Required to create posts"
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-gray-300">Title</label>
          <input
            className="w-full rounded-md border border-gray-800 bg-gray-900 px-3 py-2 outline-none"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Post title"
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-gray-300">Slug</label>
          <input
            className="w-full rounded-md border border-gray-800 bg-gray-900 px-3 py-2 outline-none"
            value={slug}
            onChange={(e) => { setIsSlugDirty(true); setSlug(slugify(e.target.value)) }}
            placeholder="auto-generated-from-title"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-gray-300">Content</label>
          <div className="rounded-md border border-gray-800 bg-gray-900">
            <QuillEditor theme="snow" value={content} onChange={setContent} modules={quillModules} />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm text-gray-300">Image URL (extern)</label>
          <div className="flex gap-2">
            <input
              className="w-full rounded-md border border-gray-800 bg-gray-900 px-3 py-2 outline-none"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://..."
            />
            <button type="button" onClick={() => setContent((c) => `${c}\n<img src=\"${imageUrl}\" alt=\"\" />`)} className="rounded-md border border-gray-800 px-3 py-2 text-sm hover:bg-gray-900">Insert</button>
          </div>
          {imageUrl && (
            <div className="mt-2">
              <img src={imageUrl} alt="preview" className="max-h-40 rounded-md border border-gray-800" />
            </div>
          )}
        </div>
        <div className="flex items-center gap-3">
          <input id="published" type="checkbox" checked={published} onChange={(e) => setPublished(e.target.checked)} />
          <label htmlFor="published" className="text-sm text-gray-300">Published</label>
        </div>
        <div className="flex gap-3">
          <button disabled={submitting} className="rounded-full bg-gray-900 px-4 py-2 text-sm hover:bg-gray-950 disabled:opacity-60">
            {submitting ? 'Creating…' : 'Create Post'}
          </button>
          <button type="button" onClick={() => router.back()} className="rounded-full border border-gray-800 px-4 py-2 text-sm hover:bg-gray-900">
            Cancel
          </button>
        </div>
      </form>
    </main>
  )
}


